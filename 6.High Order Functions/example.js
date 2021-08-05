resultSelect = {
    
}

var resultSelect2 = [];
for (const [keyOuter, valueOuter] of Object.entries(resultSelect)) {
    let plansOuter;
    plansOuter = valueOuter.result.reduce(function (acc, curr) {
        acc.push(curr);
        return acc;
    }, []);
    //   let plansOuter = [];
    //    valueOuter.forEach(element => {
    //         let plansInner = [];
    //         for (const [keyInner, valueInner] of Object.entries(element)) {
    //             //console.log(`${keyInner}: ${valueInner}`);
    //             plansInner.push({
    //                 keyInner:valueInner
    //             })
    //         }
    //         plansOuter.push(plansInner);
    //     });


    resultSelect2.push({
        code: keyOuter,
        plans: plansOuter
    })
    //console.log(`${key}: ${value}`);
}
console.log(resultSelect2);