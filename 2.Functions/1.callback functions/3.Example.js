var myArr = [{
        num: 5,
        str: "apple",
    },
    {
        num: 7,
        str: "cabbage",
    },
    {
        num: 1,
        str: "ban",
    },
];

// sort in desc order of dictionary based upon the value of 'str'
myArr.sort(function(valOne, valTwo) {
    if (valOne.str > valTwo.str) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);