import React from 'react';

export function FloatingChatbotButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2CA16B 0%, #5DD39E 100%)',
        boxShadow: '0 4px 16px rgba(44, 161, 107, 0.2)',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1300,
        padding: 0,
      }}
      aria-label="Open chatbot"
    >
      {/* SVG sparkle/star icon */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <g>
          <path
            d="M18 7c.552 0 1 .448 1 1v4.586l2.293-2.293a1 1 0 111.414 1.414L20.414 14H25a1 1 0 110 2h-4.586l2.293 2.293a1 1 0 11-1.414 1.414L19 17.414V22a1 1 0 11-2 0v-4.586l-2.293 2.293a1 1 0 11-1.414-1.414L15.586 16H11a1 1 0 110-2h4.586l-2.293-2.293a1 1 0 111.414-1.414L17 12.586V8a1 1 0 011-1z"
            fill="#fff"
          />
        </g>
      </svg>
    </button>
  );
} 