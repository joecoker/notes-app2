var NoteList = function(){
  this.list = [];
};


NoteList.prototype.addNote = function(note) {
  this.list.push(note);
};
