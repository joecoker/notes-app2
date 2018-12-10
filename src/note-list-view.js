var NoteListView = function(noteList) {
  this.list = noteList.list;
}

NoteListView.prototype.stringList = function () {
  var string = "<ul>"
  for (var i = 0; i < this.list.length; i++) {
    string += "<li><div>" + this.list[i].text + "</div></li>"
  }
  console.log(string)
  return (string += "</ul>")
};
