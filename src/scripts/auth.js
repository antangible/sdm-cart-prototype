var user = netlifyIdentity.currentUser();
var siteDiv = document.querySelector('#auth');
var NetlifyLoginCtrl = document.querySelector('#identity-menu');

netlifyIdentity.on('login', function(user) {
  showSite();
});

netlifyIdentity.on('logout', function(user) {
  hideSite();
});

function showSite() {
  siteDiv.style.display = "block";
  NetlifyLoginCtrl.classList.add("logged-in")
  // NetlifyLoginCtrl.style.display = "none";
}

function hideSite() {
  siteDiv.style.display = "none";
  NetlifyLoginCtrl.classList.remove("logged-in")
  // NetlifyLoginCtrl.style.display = "block";
}