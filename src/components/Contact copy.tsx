import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const form = useRef<HTMLFormElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    let isValid = true;

    if (name.trim() === '') {
      setNameError(true);
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError(true);
      isValid = false;
    }
    if (message.trim() === '') {
      setMessageError(true);
      isValid = false;
    }

    if (!isValid) return;

    const templateParams = { name, email, message };

    emailjs
      .send(
        'service_6y9u5ms',
        'template_qqm7l5e',
        templateParams,
        'OHSlyUQPr5kyeaf-4'
      )
      .then(() => {
        setSnackbarSeverity('success');
        setSnackbarMessage('Message sent successfully!');
        setSnackbarOpen(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error(err);
        setSnackbarSeverity('error');
        setSnackbarMessage('Failed to send message. Please try again.');
        setSnackbarOpen(true);
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f7fa',
        px: 2,
        py: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: '100%',
          p: isMobile ? 3 : 5,
          borderRadius: 4,
          boxShadow: '0px 8px 30px rgba(0,0,0,0.05)',
        }}
      >
        <Typography variant="h4" fontWeight={600} mb={1}>
          Contact Me
        </Typography>
        <Typography variant="body1" mb={4} color="text.secondary">
          Got a project waiting to be realized? Let’s collaborate and make it happen!
        </Typography>

        <Box component="form" ref={form} onSubmit={sendEmail} autoComplete="off">
          <Stack spacing={3}>
            <TextField
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? 'Please enter your name' : ''}
              fullWidth
            />
            <TextField
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Please enter your email or phone number' : ''}
              fullWidth
            />
            <TextField
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                alignSelf: 'flex-start',
                backgroundColor: '#1976d2',
                ':hover': { backgroundColor: '#1565c0' },
                textTransform: 'none',
                px: 4,
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* ✅ Custom Snackbar Alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
