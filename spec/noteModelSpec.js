function doesNoteModelHaveTextProperty() {
  var note = new Note("Hello World");

  if(note.text != "Hello World") {
    console.log("Fail");
    throw new Error("It doesn't work bro");
  }
  else {
    console.log("Pass");
  }
}

function returnNoteText() {
  var note = new Note("Goodbye Cruel World");

  var methodOutput = note.returnNoteText();

  if (note.text != methodOutput) {
    console.log("Fail");
    throw new Error("It doesn't work bro");
  }
  else {
    console.log("Noice one bro");
  }

}

// function isAnInstance() {
//   var note = new Note("Hello World");
//   if(note != new Note("Hello World")){
//   console.log("Fail");
//   throw new Error("It doesn't work bro");
//   }
//   else {
//   console.log("Pass");
//   }
// }


doesNoteModelHaveTextProperty()
returnNoteText()
