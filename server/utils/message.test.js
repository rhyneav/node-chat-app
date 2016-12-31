var expect = require('expect');

var {generateMessage} = require('./message');

var from = 'Rhyne';
var text = 'this is a test message!'

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var res = generateMessage(from, text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');
    });
});