import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: 24,
  color: '#221E58',
  marginBottom: 16,
});

const Body = styled(Typography)({
  fontSize: 14,
  color: '#222',
  marginBottom: 24,
  lineHeight: 1.6,
});

const Actions = ({ children }) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, p: 0, '@media (max-width:600px)': { p: 0 } }}>
    {children}
  </Box>
);

const DeclineBtn = styled(Button)({
  background: '#F5F5F5',
  color: '#221E58',
  borderRadius: 8,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 14,
  minWidth: 80,
  boxShadow: 'none',
  '&:hover': {
    background: '#ececec',
  },
});

const AgreeBtn = styled(Button)({
  background: '#1DB954',
  color: '#fff',
  borderRadius: 8,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 14,
  minWidth: 80,
  boxShadow: 'none',
  '&:hover': {
    background: '#17a74a',
  },
});

export function TermsAndConditionsContent({ onAgree, onDecline }) {
  return (
    <>
      <Title component="h2">Terms and Conditions</Title>
      <Body component="div">
        By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. All content provided on this site is for informational purposes only. We reserve the right to modify, update, or discontinue any part of the website at any time without prior notice. Users are responsible for ensuring that their use of the website complies with all applicable laws and regulations.<br /><br />
        We do not guarantee the accuracy, completeness, or reliability of any information available on the site. Any reliance you place on such information is strictly at your own risk. In no event shall we be liable for any loss or damage arising from the use of this website. Your continued use of the site after any changes to these terms will constitute your acceptance of such changes.
      </Body>
      <Actions>
        <DeclineBtn onClick={onDecline} variant="contained">Decline</DeclineBtn>
        <AgreeBtn onClick={onAgree} variant="contained">I Agree</AgreeBtn>
      </Actions>
    </>
  );
} 