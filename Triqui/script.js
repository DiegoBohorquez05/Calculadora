const cuadro1=document.querySelector('#uno')
const cuadro2=document.querySelector('#dos')
const cuadro3=document.querySelector('#tres')
const cuadro4=document.querySelector('#cuatro')
const cuadro5=document.querySelector('#cinco')
const cuadro6=document.querySelector('#seis')
const cuadro7=document.querySelector('#siete')
const cuadro8=document.querySelector('#ocho')
const cuadro9=document.querySelector('#nueve')

const reset=document.querySelector('#reset')

reset.addEventListener('click',()=>{
    cuadro1.innerHTML=' '
    cuadro2.innerHTML=' '
    cuadro3.innerHTML=' '
    cuadro4.innerHTML=' '
    cuadro5.innerHTML=' '
    cuadro6.innerHTML=' '
    cuadro7.innerHTML=' '
    cuadro8.innerHTML=' '
    cuadro9.innerHTML=' '
})


cuadro2.addEventListener('click',()=>{
    cuadro2.innerHTML='x'
})
