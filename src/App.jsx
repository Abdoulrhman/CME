// src/App.jsx
import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FloatingChatbotButton } from './components/FloatingChatbotButton';
import { ChatPanel } from './components/ChatPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenAIPage from './pages/GenAIPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  const [chatPanelOpen, setChatPanelOpen] = useState(false);

  const handleChatbotClick = () => {
    setChatPanelOpen(true);
  };

  const handleFullscreen = () => {
    setChatPanelOpen(false);
    window.open('/gen-ai', '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome to MUI + Vite
                </Typography>
                <Button variant="contained" color="primary">
                  Click Me
                </Button>
                <FloatingChatbotButton onClick={handleChatbotClick} />
                <ChatPanel
                  open={chatPanelOpen}
                  onClose={() => setChatPanelOpen(false)}
                  onFullscreen={handleFullscreen}
                />
              </Container>
            }
          />
          <Route path="/gen-ai" element={<GenAIPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
