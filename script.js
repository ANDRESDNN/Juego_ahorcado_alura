
var inputLetra= document.querySelector(".entrada_letra");
var listaTecnolgia= ['HTML','JAVA','CSS','INPUT','KEYUP','SCRIPT'];
var palabra='';
var intentos=0;
var letrasnulas="";
var numLetras=0;
var resultado=["_"];
var iniciojuego=true;
var sigueElJuego= true;
var nuevojuego=true;
var palabranueva="";

primeravista();

/*Es para bloquear la seleccion de texto en los botones*/
window.onload = function()
{
    document.onselectstart = function()
    {
        return false;
    } 
}

const   outpuTexto= document.querySelector(".mensajensalida");
const   letrasprobada= document.querySelector(".letrasprobadas");
const   mensajeSalida= document.querySelector(".mensajeSalida");
const   inputPalabra= document.querySelector(".palabraAgregada");

function mostrarimg0() {
    document.getElementById('imagen_ahorcado').src="recursos/escena0.gif";   
}
function mostrarimg1() {
    document.getElementById('imagen_ahorcado').src="recursos/escena1.svg";   
}
function mostrarimg2() {
    document.getElementById('imagen_ahorcado').src="recursos/escena2.svg";   
}
function mostrarimg3() {
    document.getElementById('imagen_ahorcado').src="recursos/escena3.svg";   
}
function mostrarimg4() {
    document.getElementById('imagen_ahorcado').src="recursos/escena4.svg";   
}
function mostrarimg5() {
    document.getElementById('imagen_ahorcado').src="recursos/escena5.svg";   
}
function mostrarimg6() {
    document.getElementById('imagen_ahorcado').src="recursos/escena6.svg";   
}
function mostrarimg7() {
    document.getElementById('imagen_ahorcado').src="recursos/escena7.svg";   
}
function mostrarimg8() {
    document.getElementById('imagen_ahorcado').src="recursos/ganaste.gif";   
}


function cambiarcolortextosalida(colore) {
    document.getElementById("mensaje_final").style.color = colore;
}


function imprimir(textos) {
    document.write(textos);
}


function primeravista() {
    /*botones que se ven en la primera vista*/
    document.getElementById('id_primera_vista').style.display = 'block'; 
    /*botones que se ocultan en primera vista*/
    document.getElementById('id_segunda_vista').style.display = 'none'; 
    document.getElementById('id_agregar_palabas').style.display = 'none'; 
}


function ocultarBtnsInicio() {
    /*botones que se ven en segunda vista*/
    document.getElementById('id_segunda_vista').style.display = 'block'; 
    /*botones que se ven ocultan en la segunda vista*/
    document.getElementById('id_primera_vista').style.display = 'none';
    document.getElementById('id_agregar_palabas').style.display = 'none'; 
}



function btnIniciarJuego() {
    /*ocultar btnIniciarJuego y BtnAgregarPalabra cuando doy click*/
    ocultarBtnsInicio();
    btnNuevoJuego();
    
}


function btnAgregarPalabra() {
    /*ocultar btnIniciarJuego y BtnAgregarPalabra cuando doy click*/
    /**/
    document.getElementById('id_agregar_palabas').style.display = 'block'; 
    document.getElementById('id_primera_vista').style.display = 'none';
    document.getElementById('id_segunda_vista').style.display = 'none';
    /**/

    /*falta agregar la tercera vista que seria la de agregrar una nueva palabra*/
}

function btnCancelar() {
    btndesistir()
}

function btnagregarPalabra() {

    palabranueva=inputPalabra.value;
    palabranueva=palabranueva.toUpperCase();
    if (palabranueva.length>=8) {
        alert('! prueba una palabra mas corta!'); 
        inputPalabra.value="";
    }
    else{
        listaTecnolgia=listaTecnolgia.concat(palabranueva)
        inputPalabra.value="";
        btnIniciarJuego()
        console.log(listaTecnolgia)
    }

    
}




function palabraRandom() {
    palabra= listaTecnolgia[Math.floor(Math.random()*listaTecnolgia.length)]; 
    numLetras=palabra.length; 
    iniciojuego=true;
    sigueElJuego=true;
    for (let i = 0; i < numLetras-1; i++) {
        resultado.push(" " + "_" +" " ) 
    }
    return  palabra
}


function btnNuevoJuego() {

    intentos=7;
    palabra='';
    numLetras=0;
    letrasnulas="";
    resultado=["_"];
    iniciojuego=true;
    sigueElJuego= true;
    nuevojuego=true;
    
    palabraRandom()

    mensajeSalida.value="";
    letrasprobada.value= "";
    outpuTexto.value= resultado.join('');

    mostrarimg0()
    cambiarcolortextosalida("#0a3871")
}


function btndesistir() {
    primeravista();
    btnNuevoJuego();
}


function btnprobarLETRA() {
    var letra=inputLetra.value;
    inputLetra.value='';
    letra=String(letra);
    letra= letra.toUpperCase();

    /*validar si ingresó solo una letra*/
    if (letra.length > 1) {
        alert('! prueba una LETRA al a vez!');
    }

    /*validar si es letra*/
    if (letra!='') {
        if (letra <'A' || letra >'Z') {
            alert(' ( '+letra + ' ) no es una LETRA!');
        }  
    }

    if (letra.length==1) {
        /*comparar la letra con el juego*/
        CompararLETRA(letra);     
    }
}


/* tomar letra al precionar enter*/
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        if (sigueElJuego==true) {
            btnprobarLETRA();
        }
    }
});




function CompararLETRA(letra) {

    if (iniciojuego==true) {
        mensajeSalida.value="";
        iniciojuego=false;        
    }
    var palabraGen="";
    if (nuevojuego == true) {
        if (palabra.includes(letra)) {
            for (let i = 0; i < numLetras; i++) {
                if (letra== palabra.charAt(i)) {
                    resultado[i]=letra;  
                }
                palabraGen=palabraGen.concat(resultado[i]);
            } 
        }
        else{
            if (letrasnulas.includes(letra) || letra>=0 && letra<=9) {
            }
            else{
                intentos=intentos-1;
                letrasnulas=letrasnulas.concat(letra);   
                if (intentos==6) {
                    mostrarimg1()
                }
                if (intentos==5) {
                    mostrarimg2()
                }
                if (intentos==4) {
                    mostrarimg3()
                }
                if (intentos==3) {
                    mostrarimg4()
                }
                if (intentos==2) {
                    mostrarimg5()
                }
                if (intentos==1) {
                    mostrarimg6()
                }
                if (intentos==0) {
                    mostrarimg7()
                }
            }   
        }
    
        if (intentos==0) {
            sigueElJuego=false;
            mensajeSalida.value= "Fin del juego perdiste, la palabra era "+ palabra ; 
            nuevojuego=false;
            mostrarimg7()
            cambiarcolortextosalida("red")    
        }
        else{
            if (palabraGen == palabra) {
                mensajeSalida.value= "GANASTE !!!" ;
                cambiarcolortextosalida("green")
                mostrarimg8()
                nuevojuego=false;  
            }
            else{
                mensajeSalida.value= "Te quedan "+ intentos +" intentos";
            }        
        }  
    }
    
    letrasprobada.value= letrasnulas;
    outpuTexto.value= resultado.join('');  
}