import { getCharacter } from '../snapshots';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
    test('siempre fallara la instantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        }
        expect(user).toMatchSnapshot();
    });
    test('permitimos una expecion', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Rocio Matias'
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});