function isAnArray(){
  var test = new NoteList();
  if(Array.isArray(test.list)) {
    console.log("isAnArray Passed!!");
  }
  else {
    console.log("Fail");
    throw new Error("isAnArray doesn't work bro");
  }
}

isAnArray();


function canAddList(){
  var test = new NoteList();
  if(Array.isArray(test.list)) {
    console.log("isAnArray Passed!!");
  }
  else {
    console.log("Fail");
    throw new Error("isAnArray doesn't work bro");
  }
}
