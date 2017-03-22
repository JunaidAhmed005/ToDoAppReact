function add(a,b) {
    return a + b;
}

console.log(add(3,1));

var toAdd = [5, 9];
// it is too difficult tto do like this
console.log("Old index method " + add(toAdd[0], toAdd[1])); 

// instead of above method we use spread operator (...ArrayName)
console.log("Spread operator " + add(...toAdd));

var groupA = ["Junaid", "Ahmed"];
var groupB = ["Faraz"];
var final = [...groupB ,3, ...groupA];

console.log(final);

var person1 = ["Junaid", 23];
var person2 = ["Daniyal", 20];

function greeting(name, age) {
    console.log("Hi " + name + ", you are " + age);
}

greeting(...person1);
greeting(...person2);

var names = ["Hammad", "Faraz"];
var final = ["Junaid", ...names];

final.forEach(function(name) {
    console.log("Hi " + name);
}, this);