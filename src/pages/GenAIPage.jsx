import React, { useState } from 'react';
import { ChatbotContent } from '../components/ChatbotContent';
import { TermsAndConditionsContent } from '../components/TermsAndConditionsContent';

export default function GenAIPage() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 40 }}>
      {showChatbot ? (
        <ChatbotContent />
      ) : (
        <TermsAndConditionsContent
          onAgree={() => setShowChatbot(true)}
          onDecline={() => window.location.href = '/'}
        />
      )}
    </div>
  );
} 