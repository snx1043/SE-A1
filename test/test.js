const mocha = require('mocha');
const assert = require('assert');
const app = require('../demo');

describe('To test the calulation function', function () {
    it('Testing add ', function () {
        assert.equal(app.cal('+', 3, 4), 'Answer : 3 + 4 = 7');
    });
    it('Testing multiply ', function () {
        assert.equal(app.cal('*', 3, 4), 'Answer : 3 * 4 = 12');
    });
    it('Testing minus ', function () {
        assert.equal(app.cal('-', 10, 4), 'Answer : 10 - 4 = 6');
    });
    it('Testing divide ', function () {
        assert.equal(app.cal('/', 4, 2), 'Answer : 4 / 2 = 2');
    });
});

describe('input checking', function () {
    it('To test the check input function', function () {
        assert.equal(app.checkInput(1, 6), true);
    });
    it('To test the check input function', function () {
        assert.equal(app.checkInput('g', 'g'), false);
    });
    it('To test the check input function', function () {
        assert.equal(app.checkInput('', ''), false);
    });
});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});