describe('Comparadores comunes', () => {
    const user = {
        name: 'rocio',
        lastname: 'matias'
    }
    const user2 = {
        name: 'e',
        lastname: 'mats'
    }
    test('igualdad de elementos', () => {
        expect(user).toEqual(user2)
    });
    test('no son exactamente iguales', () => {
        expect(user).not.toEqual(user2)
    });
})