import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { TermsAndConditionsContent } from './TermsAndConditionsContent';
import { ChatbotContent } from './ChatbotContent';

export function ChatbotModal({ open, onClose }) {
  const [showChatbot, setShowChatbot] = useState(false);

  // Reset to T&C when modal is reopened
  React.useEffect(() => {
    if (!open) setShowChatbot(false);
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      aria-labelledby="chatbot-modal-title"
      PaperProps={{
        style: { borderRadius: 16, overflow: 'visible', minHeight: 600 },
      }}
    >
      <DialogContent sx={{ position: 'relative', p: { xs: 2, sm: 4 }, height: '100%' }}>
        {showChatbot ? (
          <ChatbotContent onClose={onClose} />
        ) : (
          <TermsAndConditionsContent
            onAgree={() => setShowChatbot(true)}
            onDecline={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
} 