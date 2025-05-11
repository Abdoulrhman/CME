import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useFullscreen } from "../contexts/FullscreenContext";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    padding: "var(--Global-spacing-xl, 16px)",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderBottom: "1px solid #F3F4F6",
    background: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 56,
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2CA16B 0%, #5DD39E 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    color: "#222",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}));

export function ChatHeader({ title, onClose }) {
  const classes = useStyles();
  const { set: setIsFullscreen } = useFullscreen();

  const handleToggleFullscreen = () =>
    setIsFullscreen((prev) => {
      if (!prev) {
        window.open("/gen-ai", "_blank");
      }
      return !prev;
    });
  return (
    <Box className={classes.header}>
      <Box className={classes.left}>
        <span className={classes.logo}>
          <span className={classes.logoIcon}>✦</span>
        </span>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
      <Box className={classes.right}>
        <IconButton
          size="small"
          onClick={handleToggleFullscreen}
          aria-label="Fullscreen"
        >
          <OpenInFullIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={onClose} aria-label="Close">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
