var nombre = prompt("Digite su nombre: ");
var edad = prompt("Digite su edad: ");
if(edad<=16){
    alert("No tiene edad para trabajar.");
}else{
    var salario = Number(prompt("Digite su salario: "));
    alert("Su salario actual es: "+salario);
    if(edad>=19 && edad<=50){
        alert("Usted tiene un 5% de salario mas");
        alert("Su salario final es: "+( ((5/100)*salario)+salario));
    }else if(edad>=51 && edad<=60){
        alert("Usted tiene un 10% de salario mas");
        alert("Su salario final es: "+( ((10/100)*salario)+salario));
    }else if(edad>60){
        alert("Usted tiene un 15% de salario mas");
        alert("Su salario final es: "+( ((15/100)*salario)+salario));
    }
}


