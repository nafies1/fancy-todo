  
require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    const accessToken = req.headers.token;
    if (accessToken){
        try {
            const authenticated = jwt.verify(accessToken, process.env.SECRET);
            User.findByPk(authenticated.id)
                .then( user =>{
                    if(user) {
                        req.currentUserId = user._id
                        next()
                    } else {
                        next({
                            msg: '...'
                        })
                    } 
                })
                .catch(err=>{
                    next({
                            msg: 'User not found',
                            status: 401
                        })
                })
        } catch (err) {
            next(err)
        }
        
    } else {
        res.status(401).json({
            msg: "Anda belum login. Silahkan login dulu sono"
        })
    }
}