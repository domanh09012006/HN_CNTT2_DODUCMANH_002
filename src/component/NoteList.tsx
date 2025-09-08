import React from "react";
import { Note } from "../App";

interface Props {
  notes: Note[];
  onDelete: (note: Note) => void;
}
function NoteList({ notes, onDelete }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "350px",
            backgroundColor: "#5b5b5bff",
            borderRadius: "5px",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white" }}>{note.text}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => onDelete(note)}
              style={{
                border: "none",
                height: "30px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
