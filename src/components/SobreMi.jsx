import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const SobreMi = () => {
  return (
    <Box
      id="sobre-mi"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#f1e5c2',
        fontFamily: "'Playfair Display', serif",
        py: 10,
        px: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
            color: '#d4b75c',
            letterSpacing: 1.5,
          }}
        >
          Sobre Mí
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            lineHeight: 2,
            textAlign: 'justify',
            mb: 4,
          }}
        >
          Soy estudiante de la carrera de Artes Audiovisuales en la Universidad Nacional de las Artes (UNA),
          apasionada por el cine, las series y la creación de contenidos visuales. Mi enfoque creativo busca
          fusionar la narrativa audiovisual con elementos del universo, la espiritualidad y las emociones humanas,
          creando historias que conecten y dejen un mensaje profundo.
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: '1.2rem', lineHeight: 2, textAlign: 'justify', mb: 4 }}
        >
          Actualmente me encuentro en proceso de formación, desarrollando proyectos personales y explorando
          diferentes áreas como la producción, la dirección y el guion. Mi objetivo es integrarme a proyectos
          profesionales donde pueda aprender, aportar y seguir creciendo en el mundo audiovisual.
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: '1.2rem', lineHeight: 2, textAlign: 'justify', mb: 4 }}
        >
          A futuro, deseo crear contenidos con mensajes espirituales, reflexivos y transformadores, sin dejar de lado géneros
          que también me inspiran como el documental, la comedia contemporánea con identidad local y las narrativas que
          integran humor, crítica social y mirada sensible.
        </Typography>

        <Box
          sx={{
            borderLeft: '4px solid #d4b75c',
            pl: 2,
            mt: 6,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: '#ffe58a',
              textAlign: 'left',
            }}
          >
            "Mi cámara es el puente entre las estrellas y las historias que quiero contar, con la intención de inspirar, despertar y transformar".
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SobreMi;
