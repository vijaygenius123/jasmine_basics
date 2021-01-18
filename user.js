
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
}
