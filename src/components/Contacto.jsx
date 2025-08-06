import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacto = () => {
  const [metodo, setMetodo] = useState(null);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChange = (_, newMetodo) => {
    setMetodo(newMetodo);
    setNombre('');
    setEmail('');
    setWhatsapp('');
    setMensaje('');
  };

  const handleEnviar = () => {
    if (!nombre.trim() || !mensaje.trim()) {
      alert('Por favor completa nombre y mensaje');
      return;
    }

    if (metodo === 'email') {
      if (!email.trim()) {
        alert('Por favor completa el email');
        return;
      }
      const subject = encodeURIComponent(`Contacto de ${nombre}`);
      const body = encodeURIComponent(mensaje);
      const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    }

    if (metodo === 'whatsapp') {
      if (!whatsapp.trim()) {
        alert('Por favor completa el número de WhatsApp');
        return;
      }
      const numeroLimpio = whatsapp.replace(/[^\d+]/g, '');
      const texto = encodeURIComponent(`Hola ${nombre}, te contacta: ${mensaje}`);
      const url = `https://wa.me/${numeroLimpio}?text=${texto}`;
      window.open(url, '_blank');
    }
  };

  return (
    <Box
      id="contacto"
      sx={{
        
        color: '#f1e5c2',
        fontFamily: "'Playfair Display', serif",
        py: 12,
        px: 3,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 5,
            color: '#d4b75c',
            fontWeight: 'bold',
            letterSpacing: 1.5,
          }}
        >
          Contacto
        </Typography>

        <ToggleButtonGroup
          value={metodo}
          exclusive
          onChange={handleChange}
          fullWidth
          sx={{ mb: 5, justifyContent: 'center' }}
        >
          <ToggleButton
            value="email"
            sx={{
              backgroundColor: metodo === 'email' ? '#d4b75c' : '#512266',
              color: metodo === 'email' ? '#000' : '#f1e5c2',
              fontWeight: 'bold',
              px: 3,
              py: 1.5,
              borderRadius: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#d4b75c',
                color: '#000',
              },
            }}
          >
            <EmailIcon sx={{ mr: 1 }} /> Email
          </ToggleButton>

          <ToggleButton
            value="whatsapp"
            sx={{
              backgroundColor: metodo === 'whatsapp' ? '#25D366' : '#512266',
              color: metodo === 'whatsapp' ? '#000' : '#f1e5c2',
              fontWeight: 'bold',
              px: 3,
              py: 1.5,
              borderRadius: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#25D366',
                color: '#000',
              },
            }}
          >
            <WhatsAppIcon sx={{ mr: 1 }} /> WhatsApp
          </ToggleButton>
        </ToggleButtonGroup>

        {metodo && (
          <>
            <Divider sx={{ mb: 4, borderColor: '#d4b75c' }} />

            <Stack spacing={3}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                InputLabelProps={{ style: { color: '#f1e5c2' } }}
                sx={{
                  input: { color: '#f1e5c2' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#d4b75c' },
                    '&:hover fieldset': { borderColor: '#ffe58a' },
                  },
                }}
              />

              {metodo === 'email' && (
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: '#f1e5c2' } }}
                  sx={{
                    input: { color: '#f1e5c2' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#d4b75c' },
                      '&:hover fieldset': { borderColor: '#ffe58a' },
                    },
                  }}
                />
              )}

              {metodo === 'whatsapp' && (
                <TextField
                  label="Número de WhatsApp"
                  variant="outlined"
                  fullWidth
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  InputLabelProps={{ style: { color: '#f1e5c2' } }}
                  sx={{
                    input: { color: '#f1e5c2' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#d4b75c' },
                      '&:hover fieldset': { borderColor: '#ffe58a' },
                    },
                  }}
                />
              )}

              <TextField
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                InputLabelProps={{ style: { color: '#f1e5c2' } }}
                sx={{
                  textarea: { color: '#f1e5c2' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#d4b75c' },
                    '&:hover fieldset': { borderColor: '#ffe58a' },
                  },
                }}
              />

              <Button
                variant="contained"
                onClick={handleEnviar}
                sx={{
                  mt: 1,
                  backgroundColor: '#d4b75c',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: '25px',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#ffe58a',
                  },
                }}
              >
                {metodo === 'email' ? 'Enviar Email' : 'Enviar por WhatsApp'}
              </Button>
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Contacto;
