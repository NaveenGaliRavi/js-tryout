/*
JSON - JavaScript Object Notation
-key value pairs 
-string, num, boolean, null, array
-more then one object 
[
{},
{}
]

-refer MDN docs 

-Deep copy and shallow copy

shallow 
{...obj1} or Object.assign({}, obj1)
this will copy obj till 1st layer and pass reference from 2nd layer.

Deep
stringify first 
parse next for deep copy
JSON.parse(JSON.stringify(onj1));
*/