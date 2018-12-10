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

function canCreateNoteListView() {
  var notelist = new NoteList();
  notelist.createNote("First created note");

  var noteListView = new NoteListView(notelist);

  assert.isTrue(Array.isArray(noteListView.list));
}

 canCreateNoteListView();
