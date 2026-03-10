/*
Methods in RegEx
-test() - find and return true/false for pattern matching.
-exec()
-match()
-search()
-replace()
-split()

Atributes /pattern/g
g - global
m - multiline ^ start , $ end
i - case insensitive
s -
u -
y -


*/

// using constructor
var reg = new RegExp("Pattern");

// using literal syntax
var regex = /regex/;

var text = "this is regex script";

console.log(regex.test(text));