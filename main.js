var lanzador="#enlace-menu";
var desplegable="#menu";
var despliegaClase="menu-desplegado";

function nav(){
    var lanz= document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu,false);
}

function despliegaMenu(e){
    e.preventDefault();
    var despl= document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

document.querySelector("html").classList.add('js');
nav();

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector('nav');

    if (window.matchMedia('(max-width: 700px)').matches) {
      // Verifica si estamos en la media query específica
      if (scrollPosition > 100) { // Cambia 100 por la posición deseada
        navbar.classList.add('cambio-color');
      } else {
        navbar.classList.remove('cambio-color');
      }
    }
  });