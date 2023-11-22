let show = document.getElementById(show);
let hide = document.getElementById(hide);
let password = document.getElementById(password);
function () {
  if(password.type == "password"){
    password.type = "text";
    show = "bx bx-show";
  }else{
    password.type = "password";
    hide = "bx bx-hide";
  
 }};
