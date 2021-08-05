// Create a function to calculate simple interest.Principal, Rate and Time should be declared as member variables

function calculateSimpleInterest(p, r, t) {
    let sInterest = (p * r * t) / 100.0;
    return sInterest;
}
let ans = calculateSimpleInterest(2000, 5, 1);
console.log(ans);
