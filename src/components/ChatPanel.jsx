import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { ChatHeader } from './ChatHeader';
import { TermsAndConditionsContent } from './TermsAndConditionsContent';
import { ChatbotContent } from './ChatbotContent';

const TNC_SESSION_KEY = 'chatbot_tnc_accepted';

const panelWrapperStyles = {
  position: 'fixed',
  bottom: 32,
  right: 32,
  zIndex: 1400,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  '@media (max-width:600px)': {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    background: 'rgba(0,0,0,0.10)',
    transition: 'background 0.3s',
  },
};

const panelStyles = {
  width: 380,
  maxWidth: '100vw',
  minHeight: 540,
  maxHeight: '90vh',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(34,30,88,0.18)',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.3s',
  '@media (max-width:600px)': {
    width: '100vw',
    height: '100vh',
    maxHeight: '100vh',
    minHeight: 0,
    borderRadius: 0,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    transform: 'translateY(0)',
  },
};

const contentStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  background: '#fff',
  padding: 0,
  '@media (max-width:600px)': {
    paddingBottom: 80, // space for sticky buttons/input
  },
};

export function ChatPanel({ open, onClose, onFullscreen }) {
  const [tncAccepted, setTncAccepted] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // DEV: Always show T&C at the beginning for testing
    sessionStorage.removeItem(TNC_SESSION_KEY);
    if (open) {
      const accepted = sessionStorage.getItem(TNC_SESSION_KEY) === 'true';
      setTncAccepted(accepted);
      setShowChatbot(accepted);
    }
  }, [open]);

  const handleAgree = () => {
    sessionStorage.setItem(TNC_SESSION_KEY, 'true');
    setTncAccepted(true);
    setShowChatbot(true);
  };

  const handleDecline = () => {
    sessionStorage.removeItem(TNC_SESSION_KEY);
    setTncAccepted(false);
    setShowChatbot(false);
    onClose(); // Collapse widget
  };

  if (!open) return null;
  return (
    <Box sx={panelWrapperStyles}>
      <Paper sx={panelStyles} elevation={8}>
        <ChatHeader
          title="Help & Support"
          onClose={onClose}
          onFullscreen={onFullscreen}
        />
        <Box sx={contentStyles}>
          {!tncAccepted ? (
            <TermsAndConditionsContent
              onAgree={handleAgree}
              onDecline={handleDecline}
            />
          ) : (
            <ChatbotContent inputDisabled={!tncAccepted} />
          )}
        </Box>
      </Paper>
    </Box>
  );
} 