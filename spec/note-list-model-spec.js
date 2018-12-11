describe(".list", function() {
  it("returns an array", function() {
    var test = new NoteList();
    expect(Array.isArray(test.list)).toEqual(true)
  })
});

describe(".addNote", function() {
  it("adds notes to list", function() {
    var test = new NoteList();

    var note1 = new Note("Note number 1")
    var note2 = new Note("Note number 2")

    test.addNote(note1)
    test.addNote(note2)
    expect(test.list.length).toEqual(2)
  })
});

describe(".addNote", function() {
  it("adds notes to list", function() {
    var test = new NoteList();

    test.createNote("testing 1, 2, 3")

    expect(test.list[0].text).toEqual("testing 1, 2, 3")
  })
});
