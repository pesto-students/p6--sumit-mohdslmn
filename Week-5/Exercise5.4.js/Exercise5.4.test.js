//const { exportAllDeclaration } = require("@babel/types");
//const { default: test } = require("node:test");

const { exportAllDeclaration } = require("@babel/types");
//const { default: test } = require("node:test");


//Outcome:1.Understanding of Set API and its functionalities.Exercise5.4:Create a simple Javascript function code for addition, subtraction, and multiplication of 2numbers and write the corresponding Jest based tests for it.
const mathOperations={
    sum:function(a,b){
        return a+b;
    },
    diff:function(a,b){
        return a-b;
    },
    product:function(a,b){
        return a*b;
    },
    }
    
    module.exports=mathOperations;


       test("return sum of two nos", () => {
      expect(mathOperations.sum(20,10)).toBe(30);
    });
      test("return difference of two nos", () => {
        expect(mathOperations.diff(3,1)).toBe(2);
   });
    test(" return product of two nos", () => {
      expect(mathOperations.product(2,33)).toBe(66);
  });
  /*on doing npm test we got
   PASS  ./Exercise5.4.test.js
  √ return sum of two nos (3 ms)
  √ return difference of two nos                                                                                                                                                                         
  √  return product of two nos                                                                                                                                                                           
                                                                                                                                                                                                         
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.546 s, estimated 1 s
Ran all test suites. 
*/