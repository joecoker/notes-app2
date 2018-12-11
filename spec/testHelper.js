var describe = function(description, func){
  console.log(description);
  func();
};

var it = function(message, func){
  describe(' ' + message, func);
};

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Passed")
    }
  }
};
