// Create a function to declare student information(firstName, lastName, class) as an object and display “fullName” using object's property.

class Student {
    constructor(first, last, kclass) {
        this.firstName = first;
        this.lastName = last;
        this.kclass = kclass;
        this.fullName = (function () {
            return first + " " + last;
        })();
    }
}

let student = new Student('ravi', 'gupta', '11');
console.log(student.fullName);