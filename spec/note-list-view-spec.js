describe(".listView", function() {
  it("returns an array", function() {
    var notelist = new NoteList();
    notelist.createNote("First created note");
    var noteListView = new NoteListView(notelist);
    expect(Array.isArray(noteListView.listView)).toEqual(true);
  })
});

describe(".stringList", function() {
  it("returns a long string", function() {
    var notelist = new NoteList();

    var note1 = new Note("Note number 1")
    var note2 = new Note("Note number 2")

    notelist.addNote(note1)
    notelist.addNote(note2)

    var noteListView = new NoteListView(notelist);

    expect(noteListView.stringList()).toEqual(
      "<ul><li><div>Note number 1</div></li>" +
          "<li><div>Note number 2</div></li>" +
          "</ul>")
  })
});
