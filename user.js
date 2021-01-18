
class User{
    firstName;
    middleName;
    lastName;

    constructor(data ={}) {
        this.firstName = data.firstName || '';
        this.middleName = data.middleName || '';
        this.lastName = data.lastName || '';
    }

    get fullName(){
        if(this.middleName.length > 0){
            return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
        } else {
            return `${this.firstName} ${this.lastName}`;
        }
    }

     sayMyName(){
       alert(this.fullName)
    }

    getCodeName(){
        const isATestingGod = confirm('Are you a testing god?');
        if(isATestingGod) {
            return 'TESTING GOD!'
        } else {
            return `Scrub skipping tests in his best friend's ride!`;
        }
    }
}
