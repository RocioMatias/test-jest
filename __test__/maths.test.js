import { sumar, restar, multiplicar, dividir } from '../maths.js'

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(3);
    });
    test('Prueba de multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Prueba de dividir', () => {
        expect(dividir(2,2)).toBe(1);
    });
    test('Prueba de restar', () => {
        expect(restar(5,3)).toBe(1);
    });

})