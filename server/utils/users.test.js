const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'blah'
        }, {
            id: '23',
            name: 'Jeff',
            room: 'nah'
        }, {
            id: '123213',
            name: 'Jen',
            room: 'blah'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123123',
            name: 'Rhyne',
            room: 'blah'
        };
        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var res = users.removeUser('1');

        expect(res.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var res = users.removeUser('5');

        expect(res).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var res = users.getUser('1');

        expect(res.id).toBe('1');
    });

    it('should not find a user', () => {
        var res = users.getUser('54');

        expect(res).toNotExist();
    });

    it('should return names for blah', () => {
        var res = users.getUserList('blah');

        expect(res).toEqual(['Mike', 'Jen']);
    });

    it('should return names for nah', () => {
        var res = users.getUserList('nah');

        expect(res).toEqual(['Jeff']);
    });
});