let myMap = new Map()
    .set("a", [
        {
            name: "ravi",
            age: 12,
        },
        {
            name: "avi",
            age: 12,
        },
        {
            name: "harsh",
            age: 12,
        },
        {
            name: "test",
            age: 12,
        },
    ]);
myMap.set("b",[
    {
        name: "abc",
        age: 12,
    },
    {
        name: "ifg",
        age: 12,
    },
    {
        name: "qewqe",
        age: 12,
    },
    {
        name: "dsfds",
        age: 12,
    },
])
const arr = [...myMap].map(([keyOut, value]) => {
    //console.log(value);
        return { code: keyOut, plans:[...value]};
    }
);
//console.log(arr);
console.log(arr);
// console.log(arr.code['a']);
//Array.from(keys, ([key1, value1]) => ({ name1, value1 }))

// for (const [keyOuter, valueOuter] of Object.entries(resultSelect)) {
//     let plansOuter = [];
//     valueOuter.forEach(element => {
//          let plansInner = [];
//          for (const [keyInner, valueInner] of Object.entries(element)) {
//              plansInner.push({
//                  keyInner:valueInner
//              })
//          }
//          plansOuter.push(plansInner);
//      });
     
//      resultSelect2.push({
//          code:keyOuter,
//          plans:plansOuter
//      })
//      //console.log(`${key}: ${value}`);
//    }
//    console.log(resultSelect2);