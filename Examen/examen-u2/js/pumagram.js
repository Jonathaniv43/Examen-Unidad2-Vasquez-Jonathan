let contenedor = document.querySelector('.post-container')
let meGusta = document.querySelector('.like-btn')
let contador = document.querySelector('.like-count')
let imagen = document.querySelector('.post-image')
let comentariosEscritos = document.querySelector('.comments-container')
let comentario = document.querySelector('.comment-input')

let btnComentarios= document.querySelector('.add-comment-btn')

meGusta.addEventListener('click', activo)
imagen.addEventListener('dblclick', activo)
btnComentarios.addEventListener('click',nComentario)

localStorage.getItem('comentarios')
function activo(){
    console.log('activo');
    meGusta.classList.toggle('activo')
    
    if (meGusta.classList.contains('activo') ) {
        
        console.log('activo');
        meGusta.textContent= 'No me Gusta'
        // this.textContent = 'No me Gusta'
        
        contador.textContent= `${parseInt(contador.textContent)+1}`
        
    }else{
        meGusta.textContent = 'Me gusta'
        // this.textContent = 'Me gusta'
        contador.textContent = `${parseInt(contador.textContent)-1}`
    }
}


function nComentario(){
    
    console.log('click en el boton');
    if (comentario.textContent == ' '){
        console.log('Esta vacio');
        return;
    }else{
        comentariosEscritos.innerHTML += `<ul>${comentario.value}</ul>`
        localStorage.setItem('comentarios', comentariosEscritos.innerHTML)
    }
    comentario.value =' '
}






