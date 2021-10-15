var campo = document.getElementById("campo");
var operacoes, cont=0;

function digitar(num) {
  if (campo.classList.contains("resultado")) {
    removerClass();
    if (num == "*" || num == "/" || num == "-" || num == "+") {
    } else {
      limpar();
    }
    campo.innerHTML += num;
  } else {
    if (operacoes == true) {
      campo.innerHTML += num;
    } else {
      if (num == "*" || num == "/" || num == "-" || num == "+") {
        back();
      }
      campo.innerHTML += num;
    }
  }

  if (num == "*" || num == "/" || num == "-" || num == "+") {
    operacoes = false;
  } else {
    operacoes = true;
  }
}

function limpar() {
  campo.innerHTML = "";
}

function back() {
  var x = campo.innerHTML;
  campo.innerHTML = x.substring(0, x.length - 1);
}

function calcular() {
  let x = campo.innerHTML;
  if (x) {
    campo.innerHTML = eval(x);
    campo.classList.add("resultado");
  }
}

function removerClass() {
  campo.classList.remove("resultado");
}

function digitP(){
    cont++
    if(cont==1){
        campo.innerHTML += "(";
    }else if(cont==2){
        campo.innerHTML += ")";
        cont=0;
    }
    operacoes = true;
}