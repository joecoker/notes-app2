var describe = function(description, function){
  console.log(description);
  function();
};

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
