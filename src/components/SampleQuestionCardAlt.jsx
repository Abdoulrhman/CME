import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    minHeight: 56,
    borderRadius: 16,
    border: "1px solid #F3F4F6",
    background: "#F3F4F6",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 0,
    boxShadow: "none",
    cursor: "pointer",
  },
  questionText: {
    fontWeight: 500,
    fontSize: 14,
    color: "#3A4047",
    textAlign: "left",
    lineHeight: 1.4,
  },
}));

export function SampleQuestionCardAlt({ children, onClick }) {
  const classes = useStyles();
  return (
    <Paper
      className={classes.card}
      elevation={0}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <Typography className={classes.questionText}>{children}</Typography>
    </Paper>
  );
}
