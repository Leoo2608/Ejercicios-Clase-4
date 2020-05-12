var numero;
var Arreglo = [];
var resp = "S";

do {
    numero = Number(prompt("Ingresa un número:"));
    console.log(numero);
    agregar();
    resp = prompt("¿Deseas ingresar otro número?");
} while (resp=="Si" || resp=="SI" || resp=="si");
function agregar() {
    Arreglo.push(numero);
    console.log(Arreglo);
}
function operaciones(){
    var S1 = 0, S2 = 0, contador1 = 0, contador2 = 0;
    for (var i= 0; i< Arreglo.length; i++) {
        if(Arreglo[i]>0){
            S1 = S1 + Arreglo[i];
            contador1++;
        }
    }
    for (var i= 0; i< Arreglo.length; i++) {
        if(Arreglo[i]<0){
            S2 = S2 + Arreglo[i];
            contador2++;
        }
     }
    var S3 = 0, contador3 = 0, S4 = 0, contador4 = 0;
    for (var i = 0; i< Arreglo.length; i++) {
        if(Arreglo[i]%2==0){
            S3 = S3 + Arreglo[i];
            contador3++;
        }
     }
    for (var i= 0; i< Arreglo.length; i++) {
        if(Arreglo[i]%2!=0){
            S4 = S4 + Arreglo[i];
            contador4++;
        }
     }
     var media = null, S5 = 0, contador5 = 0;
     for (var i= 0; i< Arreglo.length; i++) {
        S5 = S5 + Arreglo[i];
        contador5++;
     }
     media = parseFloat(S5 / contador5);
    alert("La suma de todos los numeros positivos es: "+S1);
    alert("La suma de todos los numeros negativos es: "+S2);
    alert("La suma de todos los numeros PARES es: "+S3);
    alert("La suma de todos los numeros IMPARES es: "+S4);
    alert("Has ingresado en total "+contador1+" números POSITIVOS y "+contador2+" números NEGATIVOS.");
    alert("Has ingresado en total "+contador3+" números PARES y "+contador4+" números IMPARES.");
    alert("La media de todos los numeros ingresados es: "+media); 
}

