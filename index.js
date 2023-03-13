const objMe = require("./information.js");
const cowsay = require("cowsay");

console.log("objMe --->", objMe);

console.log(cowsay.say({
    text : `${objMe.name} , ${objMe.campus}`,
    e : "oO",
    T : "U "
}));