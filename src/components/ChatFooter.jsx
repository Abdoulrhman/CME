import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function ChatFooter({
  value,
  onChange,
  onSend,
  placeholder,
  inputDisabled,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !inputDisabled) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: 2,
        boxShadow: "none",
        gap: "5px",
      }}
    >
      <TextField
        variant="standard"
        placeholder={placeholder || "Message"}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          disableUnderline: true,
          sx: {
            background: "#F8F9FA",
            fontSize: 14,
            padding: "0px 8px",
            flex: 1,
            borderRadius: 1,
          },
        }}
        sx={{ flex: 1, background: "#F8F9FA", borderRadius: 2, p: 0 }}
        disabled={inputDisabled}
      />
      <IconButton
        onClick={inputDisabled ? undefined : onSend}
        sx={{
          background: inputDisabled ? "#F8F9FA" : "#1B8354",
          color: inputDisabled ? "#A0A0A0" : "#fff",
          border: inputDisabled ? "1px solid #159447" : "none",
          borderRadius: 1,
          width: 32,
          height: 32,
          minWidth: 32,
          minHeight: 32,
          maxWidth: 32,
          maxHeight: 32,
          "&:hover": { background: inputDisabled ? "#E0E0E0" : "#107a39" },
        }}
        aria-label="Send"
        disabled={inputDisabled}
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
