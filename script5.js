let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


let singUpButton = document.getElementById("singUpButton");
let singInButton = document.getElementById("singInButton");
let singInfrom = document.getElementById("singIn");
let singUpfrom = document.getElementById("singUp");

singUpButton.addEventListener("click",function(){
    singInfrom.style.display="none";
    singUpfrom.style.display="block";
});

singInButton.addEventListener("click",function(){
    singInfrom.style.display="block";
    singUpfrom.style.display="none";
});