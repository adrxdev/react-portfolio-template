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
  Grid,
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
        background: 'linear-gradient(to right, #e3f2fd, #fff)',
        px: 2,
        py: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4} alignItems="stretch" maxWidth="lg">
        {/* Left: Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              height: '100%',
              p: { xs: 3, sm: 5 },
              borderRadius: 4,
              boxShadow: '0px 8px 30px rgba(0,0,0,0.05)',
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={1}>
              Let's Talk
            </Typography>
            <Typography variant="body1" mb={4} color="text.secondary">
              Send me a message — I'll get back to you soon!
            </Typography>

            <Box component="form" ref={form} onSubmit={sendEmail} autoComplete="off">
              <Stack spacing={3}>
                <TextField
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? 'Please enter your name' : ''}
                  fullWidth
                />
                <TextField
                  label="Email / Phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? 'Please enter a contact method' : ''}
                  fullWidth
                />
                <TextField
                  label="Your Message"
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={messageError}
                  helperText={messageError ? 'Message cannot be empty' : ''}
                  fullWidth
                />
                <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: '#1976d2',
                      ':hover': { backgroundColor: '#115293' },
                      px: 4,
                      textTransform: 'none',
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        {/* Right: Info Block / Design Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
              borderRadius: 4,
              color: '#fff',
              p: { xs: 4, sm: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Let's Collaborate
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
              I’m open to freelance projects, partnerships, and collaborations.
              If you’ve got a project or idea, let’s connect and bring it to life.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar */}
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
