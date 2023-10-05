const {test, expect}=require('@jest/globals')
const clear = require('../script/clear.js')

test('Deve retornar aspas duplas', () =>{
    expect(clear()).toBe("")
});