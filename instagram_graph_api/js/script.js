// const loginForm = document.querySelector(".login_form");
// const login = loginForm.querySelectorAll(".social_login a");
// const close = loginForm.querySelector(".close");

// function openForm(){
//     loginForm.classList.remove("is_closed");
// }

// function closeForm(){
//     loginForm.classList.add("is_closed");
// }

// login.forEach(loginItem => loginItem.addEventListener("click", openForm));

// close.addEventListener("click", closeForm);

    // Usando JavaScript para cargar el contenido de login.html en el div
    const loginContainer = document.getElementById("login-container");

    // Hacer una solicitud para obtener el contenido de login.html
    fetch("login/login.html")
        .then(response => response.text())
        .then(html => {
            loginContainer.innerHTML = html;
        })
        .catch(error => {
            console.error("Error al cargar el formulario de inicio de sesión:", error);
        });

$(function(){

  var app_id = '310256011684326';
  var scopes = 'email, public_profile';

  var btn_login = '<a href="#" id="login-facebook" class="btn btn-primary facebook"> <span>Login with Facebook</span> <i class="fa fa-facebook"></i> </a>'

  var div_session = "<div id='facebook-session'>"+
					  "<strong></strong>"+
					  "<img>"+
					  "<a href='#' id='logout' class='btn btn-danger'>Cerrar sesión</a>"+
					  "</div>";

  window.fbAsyncInit = function() {

    FB.init({
      appId            : app_id,
      status           : true,
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v18.0'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response, function(){
        
      });
  });
};

var statusChangeCallback = function(response, callback) {  
  console.log(response);                   
  if (response.status === 'connected') {   
    getFacebookData();  
  } else {                                 
   callback(false);
  }
}

var checkLoginState = function(callback) {              
  FB.getLoginStatus(function(response) { 
    statusChangeCallback(response, function(data){
      callback(data);
    });
  });
}

var getFacebookData = function(){
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    $('#login').after(div_session);
	  		$('#login').remove();
	  		$('#facebook-session strong').text("Bienvenido: "+response.name);
	  		$('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
  });
}

var facebookLogin = function(){
  checkLoginState(function(response){
    if(!response){
      FB.login(function(response) {
        if(response.status === 'connected')
        getFacebookData();
      }, {scope: scopes})
    }
  });
}

var facebookLogout = function() {
  checkLoginState(function(data) {
    if (data.status === 'connected') {
    FB.logout(function(response) {
      $('#facebook-session').before(btn_login);
      $('#facebook-session').remove();
    })
  }
  })
}

$(document).on('click', '#login-facebook', function(e){
  e.preventDefault();

  facebookLogin();
})

$(document).on('click', '#logout', function(e) {
  e.preventDefault();

  if (confirm("¿Está seguro?"))
    facebookLogout();
  else 
    return false;
})

})