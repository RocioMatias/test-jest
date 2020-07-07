import { callbackHell } from '../callbacks';

describe('Probando un callback', () => {
    test('Callback', done => {
        function otherCallBack(data) {
            expect(data).toBe('Hola Javascripters');
            done();
        };
        callbackHell(otherCallBack);
    });
    test('Resuelve un Hola!', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
    });
    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});