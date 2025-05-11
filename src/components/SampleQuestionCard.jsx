import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  card: {
    width: 213,
    height: 152,
    borderRadius: 16,
    border: '1px solid #F3F4F6',
    background: '#FFF',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
    boxShadow: 'none',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: '0 2px 8px rgba(34,30,88,0.08)',
    },
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    background: '#F4FBF6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  questionText: {
    fontWeight: 500,
    fontSize: 14,
    color: '#3A4047',
    textAlign: 'left',
    lineHeight: 1.4,
  },
}));

export function SampleQuestionCard({ icon, children, onClick }) {
  const classes = useStyles();
  return (
    <Paper className={classes.card} elevation={0} onClick={onClick} tabIndex={0} role="button">
      <Box className={classes.iconBox}>
        {icon && <span style={{ fontSize: 28 }}>{icon}</span>}
      </Box>
      <Typography className={classes.questionText}>
        {children}
      </Typography>
    </Paper>
  );
} 