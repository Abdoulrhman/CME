import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  bubble: {
    alignSelf: 'flex-start',
    background: '#F7F8FA',
    color: '#222',
    borderRadius: '16px 16px 16px 4px',
    padding: '16px 20px',
    margin: '8px 0',
    maxWidth: '90%',
    fontSize: 16,
    boxShadow: '0 1px 4px rgba(34,30,88,0.04)',
  },
}));

export function ChatMessageAnswer({ text }) {
  const classes = useStyles();
  return (
    <Box className={classes.bubble}>
      <Typography component="div">{text}</Typography>
    </Box>
  );
} 