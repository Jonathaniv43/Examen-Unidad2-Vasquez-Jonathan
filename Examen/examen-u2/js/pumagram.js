let contenedor = document.querySelector('.post-container')
let meGusta = document.querySelector('.like-btn')

meGusta.addEventListener('click', activo)

function activo(){
    console.log('activo');
    meGusta.classList.toggle('activo'); 

}

if (activo === 'true'){
    console.log('boton activo');
}

