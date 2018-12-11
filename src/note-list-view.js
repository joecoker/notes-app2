var NoteListView = function(noteList) {
  this.listView = noteList.list;
}

NoteListView.prototype.stringList = function () {
  var string = "<ul>"
  for (var i = 0; i < this.listView.length; i++) {
    string += "<li><div>" + this.listView[i].text + "</div></li>"
  }
  // console.log(string)
  return (string += "</ul>")
};
