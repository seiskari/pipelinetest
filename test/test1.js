var assert = require('assert');
describe('Array', () => {
    describe('#indexOf()', () => {
        it('debería retornar -1 cuando el valor no este presente', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});