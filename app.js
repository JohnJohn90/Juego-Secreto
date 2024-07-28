let veces = 1;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento() {
    numeroUsuario = document.getElementById('valorUsuario').value;
    
    if (numeroUsuario==numeroSecreto) {
        asignarElementoTexto('p',`Acertaste el numero secreto en ${veces} ${veces==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarElementoTexto('p','El numero es menor');
        } else {
            asignarElementoTexto('p','El numero secreto es mayor')
        }
        veces++;
        limpiarCaja();
        
    }
    return;
}

function condicionesIniciales() {
    asignarElementoTexto('h1','Juego del numero secreto');
    asignarElementoTexto('p',`Indique numero del 1 al ${numeroMaximo}`);
    limpiarCaja();
    veces = 1;
    numeroSecreto = generarNumeroSecreto();
}

function iniciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarElementoTexto('p','ya se sortearon todos los numeros posibles');
    } else {
            if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
  
condicionesIniciales();





/*
function mensajeConsola() {
    console.log('Hola mundo');
}
// mensajeConsola();

function mostrarHolaNombre(nombre) {
    console.log(`hola ${nombre}`);
}
mostrarHolaNombre('john');

function calcularNumeroDoble(numero) {
    return numero*2
}
let resultadoNumeroDoble = calcularNumeroDoble(10);
console.log(resultadoNumeroDoble);

function calcularPromedio(n1, n2, n3) {
    return (n1+n2+n3)/3
}
let resultadoPromedio = calcularPromedio(15,7,8);
console.log(resultadoPromedio);

function calcularNumeroMayor(a,b) {
    return a>b ? a : b
}
let numeroMayor = calcularNumeroMayor(2,9);
console.log(numeroMayor);

function calcularNumeroMultiplicado(num) {
    return num*num;
}
let resultadoNumeroMultiplicado = calcularNumeroMultiplicado(5);
console.log(resultadoNumeroMultiplicado);*/