const {test, expect}=require('@jest/globals')
const adicionaroperador = require('../script/adicionaroperador.js')

test('Deve retornar 0', () =>{
    expect(adicionaroperador("+","")).toBe("0+")
});
test('Deve retornar 1+', () =>{
    expect(adicionaroperador("+","1")).toBe("1+")
});
test('Deve retornar 0-', () =>{
    expect(adicionaroperador("-","")).toBe("0-")
});
test('Deve retornar 1-', () =>{
    expect(adicionaroperador("-","1")).toBe("1-")
});
test('Deve retornar 0*', () =>{
    expect(adicionaroperador("*","")).toBe("0*")
});
test('Deve retornar 1*', () =>{
    expect(adicionaroperador("*","1")).toBe("1*")
});
test('Deve retornar 0/', () =>{
    expect(adicionaroperador("/","")).toBe("0/")
});
test('Deve retornar 1/', () =>{
    expect(adicionaroperador("/","1")).toBe("1/")
});
test('Deve retornar 1.1+ ', () =>{
    expect(adicionaroperador("+","1.1")).toBe("1.1+")
});
test('Deve retornar 1.0+ pois foi informado o operador após o ponto decimal', () =>{
    expect(adicionaroperador("+","1.")).toBe("1.0+")
});