function main_1() {
    Array.prototype.myFunction = function () {
        console.log(this);
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    arr.myFunction();
}

// main_1();


function main_2() {
    Array.prototype.myMap = function (cb) {
        let newArr = [];
    
        for(let i = 0; i < this.length; i++) {
            newArr.push(cb(this[i]));
        }
    
        return newArr;
    }
    
    function square(x) {
        return x*x;
    }

    let arr = [1,2,3,4];
    
    let mappedArr = arr.myMap(square);
    
    console.log(mappedArr);
}

// main_2();

