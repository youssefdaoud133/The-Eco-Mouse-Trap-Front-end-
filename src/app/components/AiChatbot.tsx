  import React, { useState } from 'react';
  import Button from '@mui/material/Button';
  import SendIcon from '@mui/icons-material/Send';
  import TextField from '@mui/material/TextField';
  import Box from '@mui/material/Box';
  import ReactMarkdown from 'react-markdown';
  import axios from 'axios';
  import { useTheme } from '@mui/material/styles';

  const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState('');
    const theme = useTheme(); // Access the theme to apply dark/light mode styles

    const handleSend = async () => {
      if (!input.trim()) return;

      const botResponse = await fetchGeminiResponse(input);

      setMessages((prevMessages) => [
        ...prevMessages,
        { user: input, bot: botResponse }
      ]);

      setInput('');
    };

    const fetchGeminiResponse = async (message: string): Promise<string> => {
      try {
        const response = await axios.post('https://the-eco-mouse-trap-backend-atl7jkh55-youssefdaouds-projects.vercel.app/api/chat', {
          message: message, // Send the message in the request body
        });
        return response.data.data; // Adjust this based on your actual response structure
      } catch (error) {
        console.error('Error fetching response from Gemini API:', error);
        return 'Sorry, something went wrong. Please try again.';
      }
    };

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90%',
          height: '90vh',
          maxWidth: '100%',
          // backgroundColor: theme.palette.mode === 'dark' ? '#FFFFfd' : '#f5f5f5',
          overflow: 'hidden',
          p: 2,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            width: '100%',
            p: 2,
          }}
          // className="unity-desktop"

        >
          {messages.map((msg, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: '#fff',
                    p: 2,
                    borderRadius: 2,
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                  }}
                >
                  <strong>User:</strong> <ReactMarkdown>{msg.user}</ReactMarkdown>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 1 }}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    p: 2,
                    borderRadius: 2,
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                  }}
                >
                  <strong>Gemini:</strong> <ReactMarkdown>{msg.bot}</ReactMarkdown>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            backgroundColor: theme.palette.background.default,
            p: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
<TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />  
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={handleSend}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Box>
    );
  };

  export default ChatBot;
