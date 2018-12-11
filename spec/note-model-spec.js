describe(".text", function() {
  it("Should return Hello World", function() {
    var note = new Note("Hello World");
    expect(note.text).toEqual("Hello World");
  })
});

describe(".text", function() {
  it(".returnNoteText Should return Hello World", function() {
    var note = new Note("Hello World");
    expect(note.returnNoteText()).toEqual("Hello World")
  })
});
