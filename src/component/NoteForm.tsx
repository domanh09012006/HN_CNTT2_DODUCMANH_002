import React from "react";

interface Props {
  text: string;
  setText: (value: string) => void;
  error: string;
}
function NoteForm({ text, setText, error }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        width: "400px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ color: "#646464ff" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "300px",
            height: "70px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        />
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
export default NoteForm;
