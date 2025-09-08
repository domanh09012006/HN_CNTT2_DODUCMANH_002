import React, { useState } from "react";
import Header from "./component/Header";
import NoteForm from "./component/NoteForm";
import NoteList from "./component/NoteList";
import Confirm from "./component/Confirm";

export interface Note {
  id: number;
  text: string;
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState("");
  const [error, setError] = useState("");
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  function handleSave() {
    if (noteText.trim() === "") {
      setError("Ghi chú không được để trống!");
      return;
    }
    const newNote: Note = { id: Date.now(), text: noteText };
    const updatedNotes = [...notes];
    updatedNotes.push(newNote);
    setNotes(updatedNotes);

    setNoteText("");
    setError("");
  }
  function askDelete(note: Note) {
    setNoteToDelete(note);
  }
  function confirmDelete() {
    if (noteToDelete) {
      const updatedNotes = notes.filter((n) => n.id !== noteToDelete.id);
      setNotes(updatedNotes);
      setNoteToDelete(null);
    }
  }
  function cancelDelete() {
    setNoteToDelete(null);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          height: "500px",
          border: "1px solid black",
          alignItems: "center",
          gap: "30px",
          borderRadius: "10px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffc53d",
            paddingBottom: "20px",
            borderStartEndRadius: "10px",
            borderStartStartRadius: "10px",
          }}
        >
          <Header onSave={handleSave} />
          <NoteForm text={noteText} setText={setNoteText} error={error} />
        </div>
        <div>
          <NoteList notes={notes} onDelete={askDelete} />
        </div>
      </div>
      {noteToDelete && (
        <Confirm onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
}
