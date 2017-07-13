//eval.js

var strEval = 'console.log("hello, eval");';

eval(strEval);

var numTemp = 1;
console.log('init numTemp: ', numTemp);
eval('var numTemp = 2; console.log("numTemp in eval:"')