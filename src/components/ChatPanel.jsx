import React, { useState, useEffect } from "react";
import { Box, Paper } from "@mui/material";
import { ChatHeader } from "./ChatHeader";
import { TermsAndConditionsContent } from "./TermsAndConditionsContent";
import { ChatbotContent } from "./ChatbotContent";
import { ChatFooter } from "./ChatFooter";
import { useFullscreen } from "../contexts/FullscreenContext";

const TNC_SESSION_KEY = "chatbot_tnc_accepted";

const panelWrapperStyles = {
  position: "fixed",
  bottom: 32,
  right: 32,
  zIndex: 1400,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  "@media (max-width:600px)": {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    background: "rgba(0,0,0,0.10)",
    transition: "background 0.3s",
  },
};

const panelStyles = {
  width: 330,
  maxWidth: "100vw",
  minHeight: 540,
  maxHeight: "90vh",
  borderRadius: 4,
  boxShadow: "0 8px 32px rgba(34,30,88,0.18)",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition: "transform 0.3s",
  "@media (max-width:600px)": {
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    minHeight: 0,
    borderRadius: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    transform: "translateY(0)",
  },
};

const contentStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  background: "#fff",
  padding: 0,
  "@media (max-width:600px)": {
    paddingBottom: 80, // space for sticky buttons/input
  },
};

export function ChatPanel({ open, onClose }) {
  const [tncAccepted, setTncAccepted] = useState(false);
  const [mobileInput, setMobileInput] = useState("");
  const { value: isFullscreen } = useFullscreen();

  useEffect(() => {
    // DEV: Always show T&C at the beginning for testing
    sessionStorage.removeItem(TNC_SESSION_KEY);
    if (open) {
      const accepted = sessionStorage.getItem(TNC_SESSION_KEY) === "true";
      setTncAccepted(accepted);
    }
  }, [open]);

  const handleAgree = () => {
    sessionStorage.setItem(TNC_SESSION_KEY, "true");
    setTncAccepted(true);
  };

  const handleDecline = () => {
    sessionStorage.removeItem(TNC_SESSION_KEY);
    setTncAccepted(false);
    onClose(); // Collapse widget
  };

  const handleMobileSend = () => {
    if (mobileInput.trim()) {
      // TODO: Connect to chat logic if needed
      setMobileInput("");
    }
  };

  if (!open) return null;
  return (
    <Box sx={panelWrapperStyles}>
      <Paper sx={panelStyles} elevation={8}>
        <ChatHeader title="Help & Support" onClose={onClose} />
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
        {!isFullscreen && (
          <Box
            sx={{
              position: { xs: "fixed", sm: "static" },
              bottom: { xs: 0, sm: "auto" },
              left: { xs: 0, sm: "auto" },
              width: { xs: "100vw", sm: "100%" },
              background: "#fff",
              boxShadow: { xs: "0 -2px 12px rgba(34,30,88,0.08)", sm: "none" },
              p: 1.5,
              zIndex: 1500,
            }}
          >
            <ChatFooter
              value={mobileInput}
              onChange={(e) => setMobileInput(e.target.value)}
              onSend={handleMobileSend}
              placeholder="Message"
              inputDisabled={!tncAccepted}
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
}
