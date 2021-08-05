// Create a program to calculate compound interest using math object
function calculate(p, t, r, n) {
    let amount = p * Math.pow(1 + (r / n), n * t);
    cInterest = amount - p;
    console.log(cInterest);
    console.log(amount);
}
calculate(2000, 5, .08, 12);