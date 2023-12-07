let menuHamburguesaIcono = document.querySelectorAll('.menuHamburguesaIcono');
let menuHamburguesa = document.querySelector('.menuHamburguesa');
let contenedorMenu = document.querySelector('.contenedorMenu');
let linea = document.querySelectorAll('.linea');

function mostrarMenu(){
    let alturaMenu = contenedorMenu.clientHeight;

    if (alturaMenu === 0){
        contenedorMenu.style.height = '350px';
        menuHamburguesa.style.display = 'flex';
        linea.forEach(function(linea) {
            linea.style.backgroundColor = '#b49406';
        });
    }
    else {
        contenedorMenu.style.height = '0px';
        menuHamburguesa.style.display = 'none';
        linea.forEach(function(linea) {
            linea.style.backgroundColor = '#796302';
        });
    }
}

menuHamburguesaIcono.forEach(function(icono) {
    icono.addEventListener('click', mostrarMenu);
});
