// Despues de cada prueba
afterEach(()=> console.log('Despues de cada prueba'));
afterAll(()=> console.log('Despues de todas las pruebas'));

// Antes de cada prueba
beforeEach(()=> console.log('Antes de cada prueba'));
beforeAll(()=> console.log('Antes de cada prueba'));

describe('Probar antes de ejecutar', () =>{
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
})