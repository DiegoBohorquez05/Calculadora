const uno=document.querySelector('#uno');
const dos=document.querySelector('#dos');
const tres=document.querySelector('#tres');
const cuatro=document.querySelector('#cuatro');
const cinco=document.querySelector('#cinco');
const seis=document.querySelector('#seis');
const siete=document.querySelector('#siete');
const ocho=document.querySelector('#ocho');
const nueve=document.querySelector('#nueve');
const cero=document.querySelector('#cero');

const suma=document.querySelector('#suma');
const resta=document.querySelector('#resta');
const multiplicacion=document.querySelector('#multiplicacion');
const division=document.querySelector('#division');
const igual=document.querySelector('#igual');
const borrar=document.querySelector('#borrar');

let valor1=document.querySelector('#valor');

for(let i=0; i<=9;i++){
    document.getElementById('num'+i).addEventListener('click',presion)
}

function presion(e){
    display.innerText=display.innerText+e.target.value
}

suma.addEventListener('click',()=>{
    operador.innerHTML='+'
    variable=display.textContent
    display.innerText=''
})

resta.addEventListener('click',()=>{
    operador.innerHTML='-'
    variable=display.textContent
    display.innerText=''
})

multi.addEventListener('click',()=>{
    operador.innerHTML='*'
    variable=display.textContent
    display.innerText=''
})

divi.addEventListener('click',()=>{
    operador.innerHTML='/'
    variable=display.textContent
    display.innerText=''
})

borrar.addEventListener('click',()=>{
    operador.innerText='.'
    display.innerText=' '
})

igual.addEventListener('click',()=>{
    if(operador.innerText==='+'){
        display.innerText=(parseInt(variable)+ parseInt(display.textContent))
    }else if(operador.innerText==='-'){
        display.innerText=(parseInt(variable)- parseInt(display.textContent))
    }else if(operador.innerText==='*'){
        display.innerText=(parseInt(variable)* parseInt(display.textContent))
    }else if(operador.innerText==='/'){
        display.innerText=(parseInt(variable)/ parseInt(display.textContent))
    }
})