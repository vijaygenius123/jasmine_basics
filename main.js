
class User{
    firstName;
    middleName;
    lastName;

    constructor(data ={}) {
        this.firstName = data.firstName || '';
        this.middleName = data.middleName || '';
        this.lastName = data.lastName || '';
    }

}


describe(`${User.name} Class`, function () {
    it('should default firstName to empty ', function () {
        //arrange
        const data = {firstName: null};
        //act
        const model = new User(data);
        //assert
        expect(model.firstName).toBe('');
    });

});
