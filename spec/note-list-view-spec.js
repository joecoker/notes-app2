
function canCreateNoteListView() {
  var notelist = new NoteList();
  notelist.createNote("First created note");

  var noteListView = new NoteListView(notelist);

  assert.isTrue(Array.isArray(noteListView.list));
}

 canCreateNoteListView();


 function canCreateNoteListView() {
   var note1 = new Note("Note number 1")
   var note2 = new Note("Note number 2")

   var notelist = new NoteList();
   notelist.addNote(note1)
   notelist.addNote(note2)
   notelist.createNote("First created note");


   var noteListView = new NoteListView(notelist);
   stringlist = noteListView.stringList();
   console.log("stringlist is:" + stringlist)
   assert.isTrue(stringlist === "<ul><li><div>Note number 1</div></li><li><div>Note number 2</div></li><li><div>First created note</div></li></ul>")
 }

  canCreateNoteListView();
