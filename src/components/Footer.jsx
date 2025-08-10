import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Stack,
  Fade,
  Modal,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#512266',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  color: '#f1e5c2',
  textAlign: 'center',
  minWidth: 300,
};

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "yangian.audiovisual@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailClick = () => {
    setModalOpen(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        alert('No se pudo copiar el email');
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseSnackbar = () => {
    setCopied(false);
  };

  return (
    <>
      <Fade in={visible} timeout={1000}>
        <Box
          component="footer"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#f1e5c2',
            fontFamily: "'Playfair Display', serif",
            py: 4,
            px: 2,
            mt: 8,
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
              <IconButton
                href="https://www.instagram.com/nett_giano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ color: '#d4b75c', '&:hover': { color: '#ffe58a' } }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/in/yan-gian-9b0457314/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{ color: '#d4b75c', '&:hover': { color: '#ffe58a' } }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                onClick={handleEmailClick}
                aria-label="Email"
                sx={{ color: '#d4b75c', '&:hover': { color: '#ffe58a' } }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>

            <Typography variant="body2" sx={{ color: '#c1b69f' }}>
              © {new Date().getFullYear()} Yan Gian. Todos los derechos reservados.
            </Typography>
          </Container>
        </Box>
      </Fade>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-email-title"
        aria-describedby="modal-email-description"
      >
        <Box sx={styleModal}>
          {/* Cruz para cerrar */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#f1e5c2',
            }}
            aria-label="cerrar modal"
          >
            <CloseIcon />
          </IconButton>

          <Typography id="modal-email-title" variant="h6" component="h2" gutterBottom>
            Contacto por Email
          </Typography>
          <Typography id="modal-email-description" sx={{ mb: 2 }}>
            {email}
          </Typography>
          <Button
            variant="contained"
            onClick={handleCopyEmail}
            sx={{ backgroundColor: '#d4b75c', color: '#000', '&:hover': { backgroundColor: '#ffe58a' } }}
          >
            Copiar Email
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Email copiado al portapapeles!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Footer;
