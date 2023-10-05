function adicionaroperador(op,input) {
  if (input == "") {
    return "0" + op
  }
  else{
    if (input.indexOf(".") >= 0){
      Numeros = input.split(".")
      if (Number(Numeros[1]) == ""){
        return input + "0" + op; 
      } 
      else{ 
        return input + op; 
     }
    }  
    else{ 
    return input + op; 
    }
  }
}
module.exports = adicionaroperador