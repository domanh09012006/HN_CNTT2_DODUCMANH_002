import React from "react";
import { Note } from "./types";

interface Props {
  note: Note;
  onDelete: () => void;
}
function NoteItem({ note, onDelete }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "350px",
          backgroundColor: "#5b5b5bff",
          borderTop: "5px solid #ffc53d",
          borderRadius: "5px",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white" }}>{note.text}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={onDelete}
            style={{
              border: "none",
              height: "30px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Xóa
          </button>
          <button style={{
              border: "none",
              height: "30px",
              cursor: "pointer",
              borderRadius: "5px",
            }}>Sửa</button>
        </div>
      </div>
    </div>
  );
}
export default NoteItem;
