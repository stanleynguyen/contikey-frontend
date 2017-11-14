import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'checking status' };
  }

  /* this whole section should probably be placed in index ?? */
  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1151319251668955',
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.1', // use version 2.1
      });

      // check if user is already logged in
      FB.getLoginStatus(response => statusChangeCallback(response));

      // subscribe to change in login status
      FB.Event.subscribe('auth.statusChange', response =>
        statusChangeCallback(response),
      );
    };

    // load facebook SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'http://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    let statusChangeCallback = response => {
      if (response.status === 'connected') {
        this.setState({ status: 'logged in' });
        console.log('id: ' + response.authResponse.userID); // get fb id
        FB.api('/me', response => console.log('name: ' + response.name)); // get name
        FB.api('/me/friends', response =>
          console.log('friends: ' + response.data),
        ); // get list of friends who use this app
      } else {
        this.setState({ status: 'not logged in' });
      }
    };
  }

  render() {
    return (
      <div>
        <div>Login Page</div>
        <div>Status: {this.state.status}</div>
        <div
          className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        />
      </div>
    );
  }
}

export default LoginPage;
