// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

var x = 10;
// Here x is 10

{
    var x = 2;
    // Here x is 2
}

// Here x is 2