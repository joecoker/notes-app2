function describe(description, function){
  console.log(description);
  function();
};

(function(exports) {
  function(message, function){
    describe(' ' + message, function)
  };
  exports.it = it;
})(this);

var it = function(message, function){
  describe(' ' + message, function)
};

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy")
    }
  };
};
