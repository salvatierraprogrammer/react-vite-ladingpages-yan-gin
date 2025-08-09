import React from 'react';
import { Box, Typography, Container, IconButton, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#d4b75c', '&:hover': { color: '#ffe58a' } }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/yan-gian-9b0457314/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#d4b75c', '&:hover': { color: '#ffe58a' } }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="#"
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
  );
};

export default Footer;
