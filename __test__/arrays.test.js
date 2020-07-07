import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobamos que existe un elemento', () => {
    test('existe banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('no contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test('Comprobaremos que existe un color',  () =>{
        expect(arrayColors()).toContain('azul');
    });
});