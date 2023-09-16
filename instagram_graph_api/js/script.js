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

        window.fbAsyncInit = function() {
          FB.init({
            appId      : '2532904296869709',
            xfbml      : true,
            version    : 'v17.0'
          });
          FB.AppEvents.logPageView();
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));