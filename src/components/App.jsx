import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(noteParts) {
    // console.log(noteParts);
    // console.log("add clicked");

    setNoteArray(function (prevItem) {
      // console.log(prevItem);
      return [...prevItem, noteParts];
    });
  }

  function deleteNote(id) {
    // console.log("in delete note");

    setNoteArray(function () {
      // console.log("in setNote");
      return noteArray.filter(function (singleNote, index) {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {noteArray.map(function (singleNote, index) {
        return (
          <Note
            key={index}
            id={index}
            title={singleNote.title}
            content={singleNote.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
