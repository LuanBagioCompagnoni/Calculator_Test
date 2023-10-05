
function adicionarnumero(string, input,operador, parar) {
  if (!parar){  
    if (string === '.' && input.indexOf(".") === -1 || (string !== '.')) {
      if (input === "" && string === ".")
        return "0" + string;
      else
        return input + string;    
    }
    else {
      if (string === '.') {
        display = input + string;
        ocorrencias = (display.match(/./g) || []).length;
        numeros = display.split(operador);

        if (ocorrencias ===2)
            return input;       
        else{      
          if (Number(numeros[1]) >= 0)
            return input + string;           
          else
            return input;          
        } 
      }
    }
  }
  else
    return string;
}
module.exports = adicionarnumero

