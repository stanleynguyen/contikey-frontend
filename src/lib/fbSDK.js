window.fbAsyncInit = () => {
  FB.init({
    appId: '1151319251668955',
    cookie: true, // enable cookies to allow the server to access the session
    xfbml: true, // parse social plugins on this page
    version: 'v2.1', // use version 2.1
  });
};
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'http://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

export const reload = () => {
  if (window.FB) {
    window.FB.XFBML.parse();
  }
};

export const getAccessToken = () =>
  new Promise((resolve, reject) => {
    if (!window.FB) {
      return setTimeout(
        () =>
          getAccessToken()
            .then(resolve)
            .catch(reject),
        1000,
      );
    }
    FB.getLoginStatus(res => {
      if (res.status === 'connected') {
        const accessToken = res.authResponse.accessToken;
        resolve(accessToken);
      } else if (res.status === 'not_authorized') {
        reject({ message: 'Please Authorize DBoard' });
      } else {
        reject({ message: 'Please Login Using Facebook' });
      }
    });
  });

export const startSubs = callback => {
  if (!window.FB) {
    return setTimeout(() => startSubs(callback), 1000);
  }
  FB.Event.subscribe('auth.statusChange', callback);
};
