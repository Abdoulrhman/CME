import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFullscreen } from "../contexts/FullscreenContext";

const TermsAndConditionsWrapper = styled("div")({
  maxWidth: 900,
  height: "100%",
  background: "#FCFCFD",
  border: "1px solid #F3F4F6",
  borderRadius: 16,
  gap: 32,
  padding: 24,
});

const TermsAndConditionsText = styled("div")({
  width: "100%",
  height: "100%",
  fontSize: 16,
  fontWeight: 400,
});

const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: 30,
  lineHeight: "28px",
  letterSpacing: 0,
  marginBottom: 16,
});

const ContentContainer = styled(Box)({
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
const FullScreenActions = styled(Box)({
  height: 40,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: 32,
  marginTop: 32,
});

const contentContainerStyles = {
  padding: "24px 16px",
};

const DeclineBtn = styled(Button)({
  background: "transparent",
  color: "#221E58",
  borderRadius: 4,
  textTransform: "none",
  fontWeight: 500,
  fontSize: 14,
  minWidth: 80,
  height: 40,
  boxShadow: "none",
  border: "1px solid #D2D6DB",
});

const AgreeBtn = styled(Button)({
  background: "#1B8354",
  color: "#fff",
  borderRadius: 4,
  textTransform: "none",
  fontWeight: 500,
  fontSize: 14,
  minWidth: 80,
  height: 40,
  boxShadow: "none",
});

export function TermsAndConditionsContent({ onAgree, onDecline }) {
  const { value: isFullscreen } = useFullscreen();
  return (
    <>
      {isFullscreen ? (
        // Fullscreen layout (current)
        <TermsAndConditionsWrapper>
          <Title component="h2">Terms and Conditions</Title>
          <TermsAndConditionsText>
            By acessing and using this website, you agree to comply with and be
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
          </TermsAndConditionsText>
          <FullScreenActions>
            <DeclineBtn onClick={onDecline} variant="contained">
              Decline
            </DeclineBtn>
            <AgreeBtn onClick={onAgree} variant="contained">
              I Agree
            </AgreeBtn>
          </FullScreenActions>
        </TermsAndConditionsWrapper>
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
