import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFullscreen } from "../contexts/FullscreenContext";

const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: 18,
  lineHeight: "28px",
  letterSpacing: 0,
  color: "#221E58",
  marginBottom: 16,
});

const ContentContainer = styled(Box)({
  width: 306,
  height: "100%",
  gap: 32,
  paddingTop: 24,
  paddingRight: 8,
  paddingBottom: 24,
  paddingLeft: 8,
  borderRadius: 16,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#F3F4F6",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: "#F3F4F6",
});

const Actions = styled(Box)({
  width: 306,
  height: 32,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 8,
  marginTop: 24,
});

const contentContainerStyles = {
  padding: "24px 16px",
};

const DeclineBtn = styled(Button)({
  background: "transparent",
  color: "#221E58",
  borderRadius: 8,
  textTransform: "none",
  fontWeight: 500,
  fontSize: 14,
  minWidth: 80,
  boxShadow: "none",
  border: "1px solid #F5F5F5",
});

const AgreeBtn = styled(Button)({
  background: "#1B8354",
  color: "#fff",
  borderRadius: 8,
  textTransform: "none",
  fontWeight: 500,
  fontSize: 14,
  minWidth: 80,
  boxShadow: "none",
});

export function TermsAndConditionsContent({ onAgree, onDecline }) {
  const { value: isFullscreen } = useFullscreen();
  return (
    <>
      {isFullscreen ? (
        // Fullscreen layout (current)
        <>
          <Title component="h2">Terms and Conditions</Title>
          <Typography
            sx={{
              fontSize: 14,
              color: "#222",
              marginBottom: 2,
              lineHeight: 1.6,
            }}
          >
            By accessing and using this website, you agree to comply with and be
            bound by the following terms and conditions. All content provided on
            this site is for informational purposes only. We reserve the right
            to modify, update, or discontinue any part of the website at any
            time without prior notice. Users are responsible for ensuring that
            their use of the website complies with all applicable laws and
            regulations.
            <br />
            <br />
            We do not guarantee the accuracy, completeness, or reliability of
            any information available on the site. Any reliance you place on
            such information is strictly at your own risk. In no event shall we
            be liable for any loss or damage arising from the use of this
            website. Your continued use of the site after any changes to these
            terms will constitute your acceptance of such changes.
          </Typography>
          <Actions>
            <DeclineBtn onClick={onDecline} variant="contained">
              Decline
            </DeclineBtn>
            <AgreeBtn onClick={onAgree} variant="contained">
              I Agree
            </AgreeBtn>
          </Actions>
        </>
      ) : (
        // Not fullscreen layout (custom design)
        <div style={contentContainerStyles}>
          <Title component="h2">Terms and Conditions</Title>
          <ContentContainer>
            <Typography
              sx={{
                fontSize: 14,
                color: "#222",
                marginBottom: 2,
                lineHeight: 1.6,
              }}
            >
              By accessing and using this website, you agree to comply with and
              be bound by the following terms and conditions. All content
              provided on this site is for informational purposes only. We
              reserve the right to modify, update, or discontinue any part of
              the website at any time without prior notice. Users are
              responsible for ensuring that their use of the website complies
              with all applicable laws and regulations.
              <br />
              <br />
              We do not guarantee the accuracy, completeness, or reliability of
              any information available on the site. Any reliance you place on
              such information is strictly at your own risk. In no event shall
              we be liable for any loss or damage arising from the use of this
              website. Your continued use of the site after any changes to these
              terms will constitute your acceptance of such changes.
            </Typography>
          </ContentContainer>
          <Actions>
            <DeclineBtn onClick={onDecline} variant="contained">
              Decline
            </DeclineBtn>
            <AgreeBtn onClick={onAgree} variant="contained">
              I Agree
            </AgreeBtn>
          </Actions>
        </div>
      )}
    </>
  );
}
