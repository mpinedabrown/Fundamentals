/*
*Conditionals, Functions, Scope and Loops.
 */


<script>

    //Equals
    let equals = 1 === 1;
    console.log(equals);

    //Greater than
    let greaterThan = 5 > 1;

    //Less than
    let lessThan = 2 < 10;

    //Greater than
    let greaterThanEq = 5 >= 5;

    //Less Than Equals
    let lessThanEq= 4 <= 9;

    //Not Equals
    let notEquals = 5 !== 2;


    let storeA = 3.10;
    let storeB = 4.40;

    let storeAIsLower = storeA < storeB;

    function compareStorePrices (storeA, storeB) {
    if (storeAIsLower) {
    console.log("Store A has a lower price.");
} else if (storeB < storeA) {
    console.log("Store B has a lower price.");
} else {
    console.log("Their prices are equal.")
}
}

    compareStorePrices(10, 5);
    compareStorePrices(7, 10)

    function squareNum (number) {
    return number * number;

}

    let squaredNumber = squareNum(7);
    console.log(squaredNumber);


    /*...*/
    /*...*/
    /*...*/

    let x = 10

    function addNumbers (n, m, x) {
    console.log (x);
    let b;
    if (1===1) {
    b=8;
}
    console.log (b);
    return n + m;
}

    addNumbers (1, 2, 10);
