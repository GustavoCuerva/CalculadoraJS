var campo = document.getElementById("campo");
var operacoes, cont=0;

//Inserindo valores
function digitar(num) {
    //Verificando se vai adicionar ou limpar caso já tenha um resultado
  if (campo.classList.contains("resultado")) {
    removerClass();
    if (num == "*" || num == "/" || num == "-" || num == "+") {
    } else {
      limpar();
    }
    campo.innerHTML += num;
  } else {
    //verificando se está digitando operadores em sequencia
    if (operacoes == true) {
      campo.innerHTML += num;
    } else {
      if (num == "*" || num == "/" || num == "-" || num == "+") {
        back();
      }
      campo.innerHTML += num;
    }
  }

  //definindo operador/numero
  if (num == "*" || num == "/" || num == "-" || num == "+") {
    operacoes = false;
  } else {
    operacoes = true;
  }
}

//excluir tudo
function limpar() {
  campo.innerHTML = "";
}

//limpar um por vez
function back() {
  var x = campo.innerHTML;
  campo.innerHTML = x.substring(0, x.length - 1);
}

//realizar o calculo
function calcular() {
  let x = campo.innerHTML;
  if (x) {
    campo.innerHTML = eval(x);
    campo.classList.add("resultado");
  }
}

//Estilizar o resultado
function removerClass() {
  campo.classList.remove("resultado");
}