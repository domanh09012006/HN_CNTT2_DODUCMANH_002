import React from "react";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

function Confirm({ onConfirm, onCancel }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <p>Bạn có chắc chắn muốn xóa ghi chú này?</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={onConfirm}
            style={{ backgroundColor: "red", color: "white", padding: "5px 10px", borderRadius: "5px" }}
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            style={{ backgroundColor: "gray", color: "white", padding: "5px 10px", borderRadius: "5px" }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
