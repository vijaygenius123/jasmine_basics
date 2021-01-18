

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

/*  Unit Testing: Spies Challenge
*
*   1. Use a spy and test the method getCodeName() fully
*   2. You will need to use spyOn and toHaveBeenCalledWith()
*   3. HINT: you will need to chain the spy
*    example: spyOn(object, 'key').and.returnValue(value)
*/

describe('getCodeName', function (){

    it('should return TESTING GOD! when confirmed', function () {
        const model = new User({firstName: 'Vijayaraghavan', lastName: 'Sundararaman'});
        spyOn(window, 'confirm').and.returnValue(true);
        const result = model.getCodeName();
        expect(result).toBe('TESTING GOD!')
    });

    it('should return "Scrub skipping tests in his best friend\'s ride!" ', function () {
        const model = new User({firstName: 'Vijayaraghavan', lastName: 'Sundararaman'});
        spyOn(window, 'confirm').and.returnValue(false);
        const result = model.getCodeName();
        expect(result).toBe('Scrub skipping tests in his best friend\'s ride!')
    });

    it('should should ask user if they are a testing god ', function () {
        const model = new User({firstName: 'Vijayaraghavan', lastName: 'Sundararaman'});
        spyOn(window, 'confirm').and.returnValue(true);
        model.getCodeName();
        expect(window.confirm).toHaveBeenCalledWith('Are you a testing god?')
    });
})
