import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  bubble: {
    alignSelf: "flex-end",
    background: "#1B8354",
    color: "#fff",
    borderRadius: "16px 16px 4px 16px",
    padding: "12px 20px",
    margin: "8px 0",
    maxWidth: "80%",
    fontSize: 14,
    boxShadow: "0 1px 4px rgba(34,30,88,0.04)",
  },
}));

export function ChatMessageQuestion({ text }) {
  const classes = useStyles();
  return (
    <Box className={classes.bubble}>
      <Typography>{text}</Typography>
    </Box>
  );
}
