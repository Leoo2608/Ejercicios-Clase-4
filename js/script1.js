function factorial(){
    var num = document.getElementById("numero").value;
    var fac = 1;
    while(num!=0){
        fac = fac * num;
        num--;
    }
    document.getElementById("resultado").value = fac;
}