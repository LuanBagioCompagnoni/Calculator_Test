
var input = document.querySelector("#display");
var operador = "";
var parar = false;

function limpar(){
  input.value = clear();
  document.querySelector("#history").innerHTML = clear();
  operador = clear();
}

function add_numero(string) {
  if (!parar){
    input.value = adicionarnumero(string, input.value, operador);
    document.querySelector("#history").innerHTML =  input.value;
  }
  else{
    parar = false;
    document.querySelector("#history").innerHTML = clear();
    operador = clear();
    input.value = string;
  }
}

function add_operador(op) {
   if (operador == ""){
    operador = op;
    input.value = adicionaroperador(op, input.value);
  } else {
    total()
    input.value = adicionaroperador(op, input.value);
    operador = op;
    parar=false;
  }
}

function total() {
  if (!parar) {
    numeros = input.value.split(operador);

    if (numeros[1] == "") {
      input.value = input.value + '0';
      numeros[1] = 0;
    }

    document.querySelector("#history").innerHTML = input.value;
    input.value = totalizar(numeros[0], numeros[1], operador)

    parar = true;
  }
}

function totalizar (num1, num2, operador){
  let resultado = 0
switch (operador){
  case '+':
    resultado = (num1* 1) + (num2* 1)
    break
  case '-':
    resultado = num1 - num2
    break
  case '*':
    resultado = num1 * num2
    break
  case '/':
    resultado = num2 == 0 ? 0 : num1 / num2
     break
    default:
      resultado = 0
      break
}
return resultado
}