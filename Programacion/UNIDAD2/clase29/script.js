import {suma} from "./suma.js";
import {resta} from "./resta.js";
import {division} from "./division.js";
import {multiplicacion} from "./multiplicacion.js";

let dato1=parseInt(prompt("ingrese el valor de a:"));
let dato2=parseInt(prompt("ingrese el valor de b:"));

let reSuma =suma(dato1, dato2);
let reResta =resta(dato1, dato2);
let reDivision =division(dato1, dato2);
let reMultiplicacion =multiplicacion(dato1, dato2);

document.getElementById("suma").innerHTML = resultado;
document.getElementById("resta").innerHTML = resultado;
document.getElementById("division").innerHTML = resultado;
document.getElementById("multiplicacion").innerHTML = resultado;