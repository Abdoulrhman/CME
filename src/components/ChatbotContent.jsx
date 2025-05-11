import React from 'react';
import { Box, Typography, TextField, IconButton, Grid, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SampleQuestionCard } from './SampleQuestionCard';
import { ChatbotInput } from './ChatbotInput';
import { ChatMessageQuestion } from './ChatMessageQuestion';
import { ChatMessageAnswer } from './ChatMessageAnswer';

const useStyles = makeStyles(() => ({
  centeredBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 32,
  },
  botAvatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: '#F4F8F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  sampleQuestionsBox: {
    width: '100%',
    maxWidth: 900,
    margin: '32px auto 0 auto',
  },
  sampleTitle: {
    fontWeight: 600,
    fontSize: 15,
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  chatHistory: {
    width: '100%',
    maxWidth: 900,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 24px auto',
    gap: 0,
  },
}));

const BotFace = () => (
  <svg width="64" height="100" viewBox="0 0 64 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3926_48467)">
      <path d="M57.6992 29.4078L59.1199 29.1894C61.4132 28.8365 63.1062 26.8656 63.1062 24.5484V20.0212C63.1062 17.7033 61.4132 15.7324 59.1199 15.3803L57.6992 15.1619V29.4085V29.4078Z" fill="#C4CCD6"/>
      <path d="M6.30001 29.4078L4.87929 29.1894C2.58604 28.8365 0.893066 26.8656 0.893066 24.5484V20.0212C0.893066 17.7033 2.58604 15.7324 4.87929 15.3803L6.30001 15.1619V29.4085V29.4078Z" fill="#D3D9E2"/>
      <path d="M32.3939 13.7705C37.6695 13.7705 41.9462 10.6878 41.9462 6.88523C41.9462 3.08262 37.6695 0 32.3939 0C27.1183 0 22.8416 3.08262 22.8416 6.88523C22.8416 10.6878 27.1183 13.7705 32.3939 13.7705Z" fill="#D3D9E2"/>
      <path d="M5.74146 29.2155C5.74146 32.4649 7.5222 35.4544 10.3837 37.0003C14.0211 38.9653 20.4858 40.7862 31.9543 40.7862C43.4227 40.7862 49.8874 38.9653 53.5248 37.0003C56.3863 35.4544 58.167 32.4649 58.167 29.2155V14.9688C58.167 11.7193 56.3863 8.72989 53.5248 7.18391C49.8874 5.21893 43.4227 3.39807 31.9543 3.39807C20.4858 3.39807 14.0211 5.21893 10.3837 7.18391C7.5222 8.72989 5.74146 11.7193 5.74146 14.9688V29.2155Z" fill="#E4E8EF"/>
      <path d="M45.4608 10.9867C45.0903 8.7194 43.3044 5.65938 41.7408 3.93213C47.5093 4.57251 51.4174 6.04717 53.5247 7.18456C56.3862 8.73054 58.1677 11.72 58.1677 14.9694V29.2154C58.1677 32.4648 56.3862 35.4543 53.5247 36.9995C49.8873 38.9645 43.4226 40.7853 31.9542 40.7853C20.4857 40.7853 14.0218 38.9637 10.3837 36.9995C9.0693 36.29 7.98405 35.276 7.19409 34.0717C12.7967 36.1095 18.7399 37.2127 24.7025 37.3182C25.8361 37.3383 26.9824 37.3182 28.1227 37.2395L45.4615 10.986L45.4608 10.9867Z" fill="#D3D9E2"/>
      <path d="M54.5557 58.3692C54.5557 62.187 54.2009 65.6824 53.5411 68.8404C53.4749 69.1621 53.4042 69.4808 53.3306 69.7958C50.318 82.7216 42.0815 89.7205 32.3938 89.7205C22.7061 89.7205 14.4696 82.7216 11.457 69.7958C11.3826 69.4808 11.3127 69.1621 11.2465 68.8404C10.5875 65.6824 10.2319 62.1863 10.2319 58.3692C10.2319 49.8763 19.1252 44.4338 32.3938 44.4338C45.6624 44.4338 54.5557 49.8763 54.5557 58.3692Z" fill="#E4E8EF"/>
      <path d="M32.3937 37.3376C21.3559 37.3376 15.6894 35.5286 12.8799 34.0109C10.9846 32.9871 9.80786 31.0125 9.80786 28.8573V18.3259C9.80786 16.1708 10.9854 14.1961 12.8799 13.1724C15.6894 11.6547 21.3559 9.8457 32.3937 9.8457C43.4315 9.8457 49.098 11.6547 51.9075 13.1724C53.8028 14.1961 54.9796 16.1708 54.9796 18.3259V28.8573C54.9796 31.0125 53.8021 32.9871 51.9075 34.0109C49.098 35.5286 43.4315 37.3376 32.3937 37.3376Z" fill="#1F4760"/>
      <path d="M26.9489 22.0368C26.9489 24.1065 25.2693 23.0761 23.197 23.0761C21.1247 23.0761 19.4451 24.1057 19.4451 22.0368C19.4451 19.9678 21.1247 18.2896 23.197 18.2896C25.2693 18.2896 26.9489 19.967 26.9489 22.0368Z" fill="#B8EACB"/>
      <path d="M35.5276 28.8321C35.5276 29.6969 35.1765 30.4791 34.6097 31.0452C34.0421 31.6121 33.2589 31.962 32.3938 31.962C30.6629 31.962 29.2593 30.5601 29.2593 28.8314C29.2593 28.7081 29.3091 28.5959 29.3902 28.5149C29.4713 28.4339 29.5836 28.3842 29.7071 28.3842H35.0798C35.3268 28.3842 35.5276 28.5847 35.5276 28.8314V28.8321Z" fill="#B8EACB"/>
      <path d="M31.9996 99.9999C38.3453 99.9999 43.4896 98.9975 43.4896 97.7608C43.4896 96.5242 38.3453 95.5217 31.9996 95.5217C25.6538 95.5217 20.5095 96.5242 20.5095 97.7608C20.5095 98.9975 25.6538 99.9999 31.9996 99.9999Z" fill="#E4E8EF"/>
      <path d="M54.5557 58.3691C54.5557 62.1869 54.2009 65.6823 53.5411 68.8403C53.4749 69.1628 53.4042 69.4807 53.3298 69.7957C50.3173 82.7215 42.0808 89.7204 32.3931 89.7204C26.7749 89.7204 21.6454 87.3669 17.7395 82.8686C20.543 83.8938 23.7296 84.211 26.734 83.7497C32.2108 82.9072 36.9974 79.738 40.039 75.704C43.0805 71.6701 44.4983 66.8397 44.8583 62.0316C45.1967 57.5044 44.5712 52.7632 41.8287 48.8986C40.6385 47.2211 38.9835 45.7494 37.0681 44.6744C47.7087 45.8141 54.5557 50.9178 54.5557 58.3684V58.3691Z" fill="#D3D9E2"/>
      <path d="M54.9795 18.326V28.8574C54.9795 31.0125 53.8028 32.9872 51.9075 34.0109C49.0973 35.5286 43.4315 37.3376 32.3937 37.3376C30.8696 37.3376 29.4473 37.3027 28.1218 37.2395C40.6108 35.7478 47.0309 29.471 47.0309 20.6847C47.0309 18.1915 46.4708 14.9851 45.4607 10.9861C48.4844 11.622 50.5366 12.4318 51.9075 13.1724C53.8028 14.1962 54.9795 16.1708 54.9795 18.326Z" fill="#163849"/>
      <path d="M45.3417 22.036C45.3417 23.6266 44.3494 23.3866 42.9488 23.1898C42.5278 23.1311 42.0688 23.0761 41.5898 23.0761C39.5182 23.0761 37.8379 24.1058 37.8379 22.036C37.8379 19.9663 39.5175 18.2888 41.5898 18.2888C42.0926 18.2888 42.5732 18.3884 43.0113 18.5674C44.3784 19.1261 45.3417 20.4685 45.3417 22.036Z" fill="#B8EACB"/>
    </g>
    <defs>
      <clipPath id="clip0_3926_48467">
        <rect width="62.2137" height="100" fill="white" transform="translate(0.893066)"/>
      </clipPath>
    </defs>
  </svg>
);

const SAMPLE_QA = [
  {
    question: 'What should I include in my response to vendor profile question one?',
    answer: `<b>Artificial intelligence (AI) is rapidly transforming how businesses operate and compete in today's digital economy. From strategic planning to customer engagement, AI is becoming a core driver of innovation and efficiency.</b><br/><br/><b>1. Enhancing Decision-Making with AI</b><br/>Artificial intelligence is revolutionizing the business world by enabling faster, data-driven decision-making across various departments. Companies are using AI tools to analyze customer behavior, predict market trends, and optimize pricing strategies. With AI's ability to process large volumes of data in real-time, businesses can make more informed choices, reduce risk, and stay ahead of competitors.<br/><br/><b>2. Boosting Efficiency Through Automation</b><br/>AI is also streamlining operations by automating routine tasks such as customer service, inventory management, and financial reporting. Chatbots, for example, can handle thousands of customer inquiries simultaneously, improving response times and reducing support costs.`
  },
  {
    question: 'What are the conditions to get platinum?',
    answer: 'To get platinum, you need to meet the following conditions: ... (customize as needed)'
  },
  {
    question: 'How can i get max score on thos question?',
    answer: 'To get the maximum score, make sure to: ... (customize as needed)'
  },
  {
    question: 'Which documents should I focus on for this inquiry?',
    answer: 'You should focus on the following documents: ... (customize as needed)'
  },
];

export function ChatbotContent({ onClose }) {
  const [input, setInput] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState([]);
  const classes = useStyles();

  const handleSend = () => {
    if (input.trim()) {
      setChatHistory([...chatHistory, { type: 'question', text: input }]);
      setInput('');
    }
  };

  const handleSampleCardClick = idx => {
    const qa = SAMPLE_QA[idx];
    setChatHistory([
      ...chatHistory,
      { type: 'question', text: qa.question },
      { type: 'answer', text: qa.answer },
    ]);
    setInput(qa.question);
  };

  return (
    <>
      <Box className={classes.centeredBox}>
        <div className={classes.botAvatar}>
          <BotFace />
        </div>
        <Typography variant="h5" fontWeight={700} align="center" gutterBottom>
          Hello, I'm GenAI. How can i help?
        </Typography>
        <Box className={classes.chatHistory}>
          {chatHistory.map((msg, i) =>
            msg.type === 'question' ? (
              <ChatMessageQuestion key={i} text={msg.text} />
            ) : (
              <ChatMessageAnswer key={i} text={<span dangerouslySetInnerHTML={{ __html: msg.text }} />} />
            )
          )}
        </Box>
        <ChatbotInput
          value={input}
          onChange={e => setInput(e.target.value)}
          onSend={handleSend}
        />
      </Box>
      <Box className={classes.sampleQuestionsBox}>
        <Typography className={classes.sampleTitle}>
          Sample Questions on Your Classification Process — No Data Stored
        </Typography>
        <Grid container spacing={2}>
          {SAMPLE_QA.map((qa, idx) => (
            <Grid item xs={12} sm={6} md={3} key={qa.question}>
              <SampleQuestionCard
                icon={
                  idx === 0 ? (
                    <span role="img" aria-label="info">❓</span>
                  ) : idx === 1 ? (
                    <span role="img" aria-label="medal">🥈</span>
                  ) : idx === 2 ? (
                    <span role="img" aria-label="trophy">🏆</span>
                  ) : (
                    <span role="img" aria-label="docs">📄</span>
                  )
                }
                onClick={() => handleSampleCardClick(idx)}
              >
                {qa.question}
              </SampleQuestionCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      {onClose && (
        <Button onClick={onClose} className={classes.closeButton}>
          Close
        </Button>
      )}
    </>
  );
} 