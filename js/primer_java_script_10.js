//alert("mensaje en la carpeta de js")

var numero1=4878;
var numero2=4.343
var nombre="Pepito";
var masculino=true;
var edad="23";

//alert("El nombre "+nombre+" la edad es: "+edad);
// Realizar codigo de sumatoria de dos numeros 
/*var numero1= prompt("ingrese numero 1");
var numero2= prompt("ingrese numero 2");
var sumar = parseInt(numero1)+parseInt(numero2);
alert("El valor de la suma es: "+sumar);

document.write("<h4> la suma de los valores ingresados es " +sumar+ " </h4>");*/

var numero3;
document.write("<h5> El numero tres es " +numero3+ " </h5>");
document.write("<br/><br/>");

var materias=["Quimica","Fisica","Matematicas","Frances",888, false, 787.34];


document.write("<h1><center> Materias<center></h1><br/>");
document.write("<h4>"+materias[0]+"</h4><br/>")
document.write("<h4>"+materias[1]+"</h4><br/>")
document.write("<h4>"+materias[2]+"</h4><br/>")

document.write("<h1><center> Mostrar todo el arreglo<center></h1><br/>");
document.write("<h4>"+materias.join(":")+"</h4><br/>")


materias[0]="Tecnologia";

document.write("<h1><center> Materias Cambiadas</center></h1><br/>");
document.write("<h4>"+materias[0]+"</h4><br/>")
document.write("<h4>"+materias[1]+"</h4><br/>")
document.write("<h4>"+materias[2]+"</h4><br/>")

materias[materias.length]="Ingles"
document.write("<h4>"+materias[7]+"</h4><br/>")
materias.pop();
document.write("<h4>"+materias[7]+"</h4><br/>")

//Condicionales
document.write("<h1><center> Condicionales <center></h1><br/>");

if (edad<18){
    document.write("<h4>"+nombre+" es menor de edad</h4><br/>")
}else{
    document.write("<h4>"+nombre+" es mayor de edad </h4><br/>");
}

document.write("<p class='fs-3'>Texto con  bootstrap estilos</p>"); 

//Ciclo For
document.write("<h1><center> Ciclo for <center></h1><br/>");

for(i=1; i<=10;i=i+3){
    document.write("<p class='fs-4'>La i va en el numero: "+i+"</p><br/>"); 
}

document.write("<h1><center> Ciclo While <center></h1><br/>");
var j=2;
while(j<8){
    document.write("<br/><br/><p class='fs-4'>La j va en el numero: "+j+"</p>"); 
    j+=2;
    //j=j+2
}

document.write("<h1><center> Ciclo do While <center></h1><br/>");
var k=1;
do{
    document.write("<br/><br/><p class='fs-4'>La k va en el numero: "+k+"</p>")  
    k+=4
}while(k<15);

//Definir la Función
/*function sumar(numero1,numero2){
    var resultado=numero1+numero2;
    alert("Resultado: "+ resultado);
    return resultado;
}

var resultado2=sumar(52,353);
alert("Resultado2: "+resultado2);


 */
function sumar(){
    var numero1_formulario=document.getElementById("numero1").value;
    
    var numero2_formulario=document.getElementById("numero2").value;
    var resultado= parseInt(numero1_formulario)+parseInt(numero2_formulario);

    alert("la sumatoria es: "+ resultado);
    
}
var pruebas_cadenas_texto="Pepito Perez";
/*alert("convertir en mayusculas"+ pruebas_cadenas_texto.toUpperCase)
alert("convertir en minusculas"+ pruebas_cadenas_texto.toLowerCase)
alert*/

// Variable de tipo Global
var prueba1=1;

function realizar_operaciones_matematicas(){
    
    //Variable de tipo local
    var prueba2=2; 

    //alert("Ingreso a realizar_operaciones_matematicas");
    //multiplicar();
    sumar();
    //restar();

    function sumar(){
        var numero1_formulario=document.getElementById("numero1").value;
        var numero2_formulario=document.getElementById("numero2").value;
        var resultado_multiplicar= parseInt(numero1_formulario) + parseInt(numero2_formulario);
        alert("Resultado de suma: "+ resultado_multiplicar);
        
        var boton_sumar=document.getElementById("boton_sumar");
        boton_sumar.setAttribute("class","btn btn-warning");

    }
    function restar(){
        var numero1_formulario=document.getElementById("numero1").value;
        var numero2_formulario=document.getElementById("numero2").value;
        var resultado_multiplicar= parseInt(numero1_formulario) - parseInt(numero2_formulario);
        alert("Resultado de resta: "+ resultado_multiplicar);


    }
    function multiplicar(){
        var numero1_formulario=document.getElementById("numero1").value;
        var numero2_formulario=document.getElementById("numero2").value;
        var resultado_multiplicar= parseInt(numero1_formulario) * parseInt(numero2_formulario);
        alert("Resultado Multiplicar: "+ resultado_multiplicar);

    }
}

realizar_operaciones_matematicas();

var crer_etiqueta_h2=document.createElement("h2");
var contenido_h2=document.createTextNode("Este es un texto Dinamico");
crer_etiqueta_h2.appendChild(contenido_h2);
document.getElementById("div_dinamico").appendChild(crer_etiqueta_h2);
