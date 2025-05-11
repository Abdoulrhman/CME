import React from "react";

export function FloatingChatbotButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #2CA16B 0%, #5DD39E 100%)",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1300,
        padding: 0,
        boxShadow: "none",
      }}
      aria-label="Open chatbot"
    >
      <span
        style={{
          color: "#fff",
          fontSize: 32,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✦
      </span>
    </button>
  );
}
