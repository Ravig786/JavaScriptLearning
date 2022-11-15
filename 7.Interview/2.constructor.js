function Car(brand,model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;

    this.drive = function(){
        console.log("I am driving "+this.model);
    }
}

let car1 = new Car("XYZ", "X5", "White");
let car2 = new Car("WXYZ", "Y5", "Red");

console.log(car1);
console.log(car2);

car1.brand = `new ${car1.brand}`;
console.log(car1);

car1.drive();


