window.fbAsyncInit = function() {
  FB.init({
    appId            : 127485571203940,
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.11'
  });
  FB.AppEvents.logPageView();
  FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log('Logged in.');
  }
  else {
    FB.login();
  }
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
