
// //
// var it = function(message, func){
//   describe(' ' + message, func);
// };
//
// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//     } else {
//       console.log("Passed")
//     }
//   }
// };

function describe(description, fun){
  console.log(description);
  // console.log(fun);
  fun();
};

function it(message, func) {
  describe(' ' + message, func);
}



// function it(description, test) {
//   console.log(description);
//   console.log(test);
// }

function expect(input) {
  this.output = input;
  return this;
}

function toEqual(expectation) {
  if (this.output === expectation) { console.log("Expected: " + expectation + "\nOutput: " + this.output + "\nTest passed."); }
  else { console.log("Expected: " + expectation + "\nOutput: " + this.output + "\nTest failed."); }
}
