import React from "react";

interface Props {
  onSave: () => void;
}

function Header({ onSave }: Props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "400px",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontFamily: "sans-serif" }}>Sticky Note</h1>
        <button
          onClick={onSave}
          style={{
            border: "2xp",
            backgroundColor: "#ffc53d",
            cursor: "pointer",
            height: "35px",
            borderRadius: "10px",
          }}
        >
          <b>Save</b>
        </button>
      </div>
    </div>
  );
}
export default Header;
