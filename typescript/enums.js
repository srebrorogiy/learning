var Test;
(function (Test) {
    Test[Test["Simple"] = 0] = "Simple";
    Test[Test["Standart"] = 1] = "Standart";
    Test[Test["Premium"] = 2] = "Premium";
})(Test || (Test = {}));
var membership = Test.Simple;
var membershipReverse = Test[1];
console.log(membership);
console.log(membershipReverse);
