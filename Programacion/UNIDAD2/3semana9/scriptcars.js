const autos = ["audi","bmw","ferrari","fiat","ford","lexus"];
let cars ="";
for (let i = 0; i < autos.length; i++) {
    cars+= '<img src="assets/img/'+autos[i]+'.png" width="100"></img>';    
}

document.getElementById("demo").innerHTML=cars;


let b1 =document.getElementById("btn-push");
b1.onclick = functionPush;


function functionPush() {
    autos.push("saab");
    cars = "";
    for (let i = 0; i < autos.length; i++) {
        cars+='<img src="assets/img/'+autos[i]+'.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=cars;
}