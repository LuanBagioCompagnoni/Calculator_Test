const {test, expect}=require('@jest/globals')
const clear = require('../script/limpar.js')

test('Deve retornar aspas duplas', () =>{
    expect(clear()).toBe("")
});