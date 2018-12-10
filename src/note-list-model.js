var NoteList = function(){
  this.list = [];
};


NoteList.prototype.addNote = function(note) {
  this.list.push(note);
};

NoteList.prototype.createNote = function(text) {
  note = new Note(text)
  this.list.push(note);
};
