import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const useStyles = makeStyles(() => ({
  inputContainer: {
    width: "100%",
    maxWidth: 900,
    borderRadius: 16,
    border: "1px solid #E5E7EB",
    background: "#FCFCFD",
    padding: 16,
    display: "flex",
    gap: 32,
    boxSizing: "border-box",
    minHeight: 132,
  },
  textFieldRoot: {
    flex: 1,
    background: "transparent",
    "& .MuiInputBase-root": {
      fontSize: 16,
      background: "transparent",
    },
    "& .MuiInputBase-input": {
      padding: 0,
    },
    "& .MuiInput-underline:before, & .MuiInput-underline:after": {
      borderBottom: "none",
    },
  },
  iconButton: {
    flexShrink: 0,
  },
}));

export function ChatbotInput({ value, onChange, onSend, placeholder }) {
  const classes = useStyles();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <Box className={classes.inputContainer}>
      <TextField
        className={classes.textFieldRoot}
        placeholder={placeholder || "Ask anything..."}
        variant="standard"
        fullWidth
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        InputProps={{ disableUnderline: true }}
      />
      <IconButton
        color="success"
        onClick={onSend}
        className={classes.iconButton}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
}
