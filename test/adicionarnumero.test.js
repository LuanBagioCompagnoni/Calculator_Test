const {test, expect}=require('@jest/globals')
const adicionarnumero = require('../script/adicionarnumero.js')
//primeiro parâmetro  = o que foi digitado
//segundo parâmetro   = o que está em tela (display)
//terceiro parâmetro  = operador informado 
//quarto parâmetro    = controle parar

test('Deve retornar 1', () =>{
    expect(adicionarnumero('1',"", "", true)).toBe("1")
});
test('Deve retornar 1', () =>{
    expect(adicionarnumero('1',"1", "+", true)).toBe("1")
});
test('Deve retornar 1', () =>{
    expect(adicionarnumero('1',"", "", false)).toBe("1")
});
test('Deve retornar 0.', () =>{
    expect(adicionarnumero('.',"","", false)).toBe("0.")
});
test('Deve retornar a contatenação 1.', () =>{
    expect(adicionarnumero(".","1","", false)).toBe("1.")
});
test('Deve retornar a contatenação 1. pois foi informado dois pontos seguidos', () =>{
    expect(adicionarnumero(".","1.","", false)).toBe("1.")
});
test('Deve retornar a contatenação 1.1', () =>{
    expect(adicionarnumero("1","1.","", false)).toBe("1.1")
});
test('Deve retornar a contatenação 1.1 pois informado mais um ponto antes de escolher a operação ', () =>{
    expect(adicionarnumero(".","1.1","", false)).toBe("1.1")
});
test('Deve retornar a contatenação 1.12', () =>{
    expect(adicionarnumero("2","1.1","", false)).toBe("1.12")
});
test('Deve retornar a contatenação 1.12+', () =>{
    expect(adicionarnumero("+","1.12","", false)).toBe("1.12+")
});
test('Deve retornar a contatenação 1.12+ porque informou o ponto depois da operação', () =>{
    expect(adicionarnumero(".","1.12+","+", false)).toBe("1.12+")
});
test('Deve retornar a contatenação 1.12+1', () =>{
    expect(adicionarnumero("1","1.12+","+", false)).toBe("1.12+1")
});
test('Deve retornar a contatenação 1.12+1.', () =>{
    expect(adicionarnumero(".","1.12+1","+", false)).toBe("1.12+1.")
});
test('Deve retornar a contatenação 1.12.1 porque foi informado um ponto na sequeência do outro', () =>{
    expect(adicionarnumero(".","1.12+1.","+", false)).toBe("1.12+1.")
});
test('Deve retornar a contatenação 1.12+1.2', () =>{
    expect(adicionarnumero("2","1.12+1.","+", false)).toBe("1.12+1.2")
});