const display=document.querySelector('#valor')

const suma=document.querySelector('#suma');
const resta=document.querySelector('#resta');
const multiplicacion=document.querySelector('#multiplicar');
const division=document.querySelector('#division');
const igual=document.querySelector('#igual');
const borrar=document.querySelector('#borrar');

let valor1=document.querySelector('#valor1');
let btns = document.querySelectorAll('.btns');

let operador=0

btns.forEach(el => {
    console.log(el);
    el.addEventListener("click", presion)
});

function presion(e){
    console.log(e.target);
    display.innerText += e.target.value
}

 suma.addEventListener('click',()=>{
     valor1=display.textContent
     display.innerText=''
     operador='+'
 })
 resta.addEventListener('click',()=>{
     valor1=display.textContent
     display.innerText=''
     operador='-'
 })
 multiplicacion.addEventListener('click',()=>{
     valor1=display.textContent
     display.innerText=''
     operador='*'
 })
 division.addEventListener('click',()=>{
     valor1=display.textContent
     display.innerText=''
     operador='/'
 })
 borrar.addEventListener('click',()=>{
     display.innerText=' '
     console.log('borrar')
 })

 igual.addEventListener('click',()=>{
     if(operador==='+'){
        display.innerText=(parseInt(valor1)+ parseInt(display.innerText))
     }else if(operador==='-'){
         display.innerText=(parseInt(valor1)- parseInt(display.innerText))
     }else if(operador==='*'){
         display.innerText=(parseInt(valor1)* parseInt(display.innerText))
     }else if(operador==='/'){
        if(parseInt(display.innerText)===0){
            alert('No se pueden hacer divisiones por 0')
            display.innerText=' '
        }else{
            display.innerText(parseInt(valor1)/ parseInt(display.innerText))
        }
     }
 })