var campo = document.getElementById('campo');


function digitar(num){
    campo.innerHTML += num;
}

function limpar(){
    campo.innerHTML = "";
}

function back(){
    var x = campo.innerHTML;
    campo.innerHTML = x.substring(0, x.length -1);
}

function calcular(){
    var x = campo.innerHTML;
    if(x){
        campo.innerHTML = eval(x);
    }
}