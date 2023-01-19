const display=document.querySelector('#valor')



const suma=document.querySelector('#suma');
const resta=document.querySelector('#resta');
const multiplicacion=document.querySelector('#multiplicar');
const division=document.querySelector('#division');
const igual=document.querySelector('#igual');
const borrar=document.querySelector('#borrar');

let valor1=document.querySelector('#valor1');
let btns = document.querySelectorAll('.btns')

btns.forEach(el => {
    console.log(el);
    el.addEventListener("click", presion)
});
// let sexo
// for(let i=0; i<=btns.length;i++){
//     btns[i].addEventListener("click", presion)
//     console.log(btns[i]);
// }

function presion(e){
    console.log(e.target);
    display.innerText += e.target.value
}

// suma.addEventListener('click',()=>{
//     display.innerHTML='+'
//     valor1=display.textContent
//     display.innerText=''
// })

// resta.addEventListener('click',()=>{
//     display.innerHTML='-'
//     valor1=display.textContent
//     display.innerText=''
// })

// multiplicacion.addEventListener('click',()=>{
//     display.innerHTML='*'
//     valor1=display.textContent
//     display.innerText=''
// })

// division.addEventListener('click',()=>{
//     display.innerHTML='/'
//     valor1=display.textContent
//     display.innerText=''
// })

// borrar.addEventListener('click',()=>{
//     valor1.innerText='.'
//     display.innerText=' '
// })

// igual.addEventListener('click',()=>{
//     if(display.innerText==='+'){
//         display.innerText=(parseInt(valor1)+ parseInt(display.textContent))
//     }else if(display.innerText==='-'){
//         display.innerText=(parseInt(valor1)- parseInt(display.textContent))
//     }else if(display.innerText==='*'){
//         display.innerText=(parseInt(valor1)* parseInt(display.textContent))
//     }else if(display.innerText==='/'){
//         display.innerText=(parseInt(valor1)/ parseInt(display.textContent))
//     }
// })