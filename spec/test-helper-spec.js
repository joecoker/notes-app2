function describe(description, fun){
  console.log(description);
  fun();
};

function it(message, func) {
  describe(' ' + message, func);
}

function expect(input) {
  this.output = input;
  return this;
}

function toEqual(expectation) {
  if (this.output === expectation) { console.log("Expected: " + expectation + "\nOutput: " + this.output + "\nTest passed."); }
  else { console.log("Expected: " + expectation + "\nOutput: " + this.output + "\nTest failed."); }
}
