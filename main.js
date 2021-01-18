

/* Unit Testing: It Test Challenge
*
*   1. Write a unit test for lastName and middleName to test its default values.
*   2. Group all 3 unit tests with an appropriate describe.
*/
/* Unit Testing: Setting Up Data with beforeEach Challenge
*
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/

describe(`${User.name} Class`, function () {

    describe('Default Values', function () {
        let model
        beforeEach(() => {
            const data = {}
            model = new User(data);
        })
        it('should default firstName to empty ', function () {
            expect(model.firstName).toBe('');
        });

        it('should default middleName to empty ', function () {
            expect(model.middleName).toBe('');
        });

        it('should default lastName to empty ', function () {
            expect(model.lastName).toBe('');
        });
    });

});


describe('get fullName', function () {

    it('should return only first and last name if middleName is empty', function () {
        const model = new User({firstName: 'Vijayaraghavan', lastName: 'Sundararaman'})
        expect(model.fullName).toBe('Vijayaraghavan Sundararaman');
    });

    it('should return first middle and last name if middleName exists', function () {
        const model = new User({firstName: 'Rock', middleName: 'Dwayne', lastName: 'Johnson'})
        expect(model.fullName).toBe('Rock D. Johnson');
    });


})

describe('Display Name', function () {

    it('should alert the user with name', function () {
        const model = new User({firstName: 'Vijayaraghavan', lastName: 'Sundararaman'})
        spyOn(window, 'alert');
        model.sayMyName()
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Vijayaraghavan Sundararaman");
    });

    it('should have been called with right arguments', function () {
        const model = new User({firstName: "Vijay", lastName: "S"});
        spyOn(window, 'alert');
        model.sayMyName();
        expect(window.alert).toHaveBeenCalledWith('Vijay S');
    });
});
