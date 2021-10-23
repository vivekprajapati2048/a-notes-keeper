import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      // using an arrow function instead of createItem() function
      {notes.map(
        noteItem => (
          <Note
            key={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
          />
        )
      )}
      
      <Footer />
    </div>
  );
}

export default App;
