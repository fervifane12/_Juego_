//DOM= Document Object Model

//let titulo = document.querySelector('h1');
//document, es una libreria que permite dar funciones al sitio web conectando js con el código HTML.
//querySelector, trae la variable, en este caso h1 corresponde a un objeto

//titulo.innerHTML = "Juego del numero secreto";
//Al llamar al método innerHTML, podemos modificar el texto, también se puede poner una función que brinde algún valor

//let subtitulo = document.querySelector('p');
//subtitulo.innerHTML = "Copia un número del 1 al 10";
let numerosSorteados = [];;
let numeroMaximo = 3
let contador=1;
//Para definir una función llamamos a function
//function intentoDeUsuario(){
//    alert("Se hizo click")
//}


// Se puede crear una función que modifique el texto, sin necesidad de copiar constantemente el mismo código
// Esto se hace con el fin de no repetir código

function elementoDeTexto(elemento, texto) {
    let tipoElemento = document.querySelector(elemento);
    tipoElemento.innerHTML = texto;
}

function generarNumeroRand() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados);

    if (numerosSorteados.length === numeroMaximo) {
        elementoDeTexto('p', 'Ya se usaron todos los números');
        document.getElementById("verificador").setAttribute('disabled', true);
    } else {
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroRand();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarNumeroSecreto() {
    
    let numeroIntento= parseInt (document.getElementById('numeroUsuario').value);
//    let respuesta = numeroSecreto === numeroIntento;
    if (numeroSecreto === numeroIntento){
        elementoDeTexto('p', `¡Adivinaste el número correcto! \t Lo hiciste en ${contador} ${(contador == 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroIntento>numeroSecreto) {
            elementoDeTexto('p', 'El número es menor');
        } else {
            elementoDeTexto('p', 'El número es mayor');
        }
        contador++;
        limpiarCaja(); //Se llama la función limpiar en caso de que no se acierte
        
    }
    return;
}

function limpiarCaja(){
    //Esta función quita el número que se puso en la caja de texto en caso de no acertar
    document.getElementById('numeroUsuario').value = "";
    //let valorCaja = document.querySelector('#numeroUsuario'); Otra manera de hacer lo mismo que arriba
    //valorCaja= ""; Asigna el valor de la variable numeroUsuario que contiene el numero ingresado a nada
}

function condicionesIniciales(){
    elementoDeTexto('h1', 'Juego del número secreto');
    elementoDeTexto('p', `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroRand();
    contador = 1;
    console.log(numeroSecreto);
}

function nuevoJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limpiarCaja();
    return;
}

condicionesIniciales();