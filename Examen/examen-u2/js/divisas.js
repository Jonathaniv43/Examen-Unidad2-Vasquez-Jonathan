let contenedor = document.querySelector('.converter-container')
let sBoton = document.querySelector('#convert-btn')
let resultado = document.querySelector('#result-container')
console.log(contenedor);
console.log(sBoton);

sBoton.addEventListener('click', submitDatos )
function submitDatos(){
    resultado.innerHTML = ''
    if (from.value ==='usd' ){

        if (to.value === 'usd'){
            resultado.innerHTML += `El valor ya se encuentra en esa moneda <ul>${amount.value} </ul>`
        }else
        if(to.value === 'eur'){
            resultado.innerHTML += `${amount.value*0.92} €`

        }else{
            resultado.innerHTML += `${amount.value*0.79} £`
        }
    }else
    if(from.value ==='eur'){
        if (to.value === 'eur'){
            resultado.innerHTML += `El valor ya se encuentra en esa moneda <ul>${amount.value} </ul>`
        }else
        if(to.value === 'usd'){
            resultado.innerHTML += `${amount.value*1.08} $`

        }else{
            resultado.innerHTML += `${amount.value*0.86} £`
        }
    }else{
        if (to.value === 'gbp'){
            resultado.innerHTML += `El valor ya se encuentra en esa moneda <ul>${amount.value} </ul>`
        }else
        if(to.value === 'usd'){
            resultado.innerHTML += `${amount.value*1.26} $`

        }else{
            resultado.innerHTML += `${amount.value*1.17} €`
        }
    }

    }
    



