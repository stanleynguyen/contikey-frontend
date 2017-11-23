window.fbAsyncInit = () => {
  FB.init({
    appId: '1151319251668955',
    cookie: true, // enable cookies to allow the server to access the session
    xfbml: true, // parse social plugins on this page
    version: 'v2.1', // use version 2.1
  });
};

export const load = () => {
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'http://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};
