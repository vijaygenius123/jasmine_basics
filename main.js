

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

});
