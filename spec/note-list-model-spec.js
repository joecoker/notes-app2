var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy")
    }
    else {
      console.log("Passed!");
    }
  }
};

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
  var note1 = new Note("Note number 1")
  var note2 = new Note("Note number 2")

  var test = new NoteList();

  test.addNote(note1)
  test.addNote(note2)

  assert.isTrue(test.list.length === 2)
}

canAddList();


function canCreateAndAddNote(){
  var note1 = new Note("Note number 1")
  var note2 = new Note("Note number 2")

  var test = new NoteList();

  test.addNote(note1)
  test.addNote(note2)
  test.createNote("testing 1, 2, 3")
  console.log(test.list)
  assert.isTrue(test.list[2].text === "testing 1, 2, 3")
}

canCreateAndAddNote();
