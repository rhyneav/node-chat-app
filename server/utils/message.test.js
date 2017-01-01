var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

var from = 'Rhyne';
var text = 'this is a test message!';
var latitude = 12345;
var longitude = 54321;

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var res = generateMessage(from, text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');
    });
});
describe('generatLocationeMessage', () => {
    it('should generate the correct location object', () => {
        var res = generateLocationMessage(from, latitude, longitude);

        expect(res.from).toBe(from);
        expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(res.createdAt).toBeA('number');
    });
});