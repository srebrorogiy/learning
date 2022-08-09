enum Test {
    Simple,
    Standart,
    Premium
}

const membership = Test.Simple
const membershipReverse = Test[1]

console.log(membership)
console.log(membershipReverse) // не запускается вернуться к enum

