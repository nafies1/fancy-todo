function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;

    $.ajax({
        method : 'POST',
        url : 'http://localhost:3000/user/google-sign',
        data : {
            id_token
        }
      })
      .done(token => {
        // console.log(token);
        // localStorage.setItem('token', token)
        // access_token = token
        // toggleLogin(0)
        // togglePage(1)
      })
      .fail( err => {
        console.log(err);
      })
  }

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}


