import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' }
  }),
};

const AnimatedTypography = ({ children, index, ...props }) => (
  <Typography
    component={motion.p}
    variants={textVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={index}
    {...props}
  >
    {children}
  </Typography>
);

const SobreMi = () => {
  const paragraphs = [
    `Soy Yan Gian, nombre con el que me conocen en redes, en el ámbito artístico y entre amigos y familia. 
    Es mi nombre artístico, y refleja mi identidad creativa. Mi nombre legal es Yanett Cáncelo, pero uso "Yan Gian" 
    como sello personal y profesional en el mundo audiovisual.`,

    `Soy estudiante de la carrera de Artes Audiovisuales en la Universidad Nacional de las Artes (UNA),
    apasionada por el cine, las series y la creación de contenidos visuales. Mi enfoque creativo busca
    fusionar la narrativa audiovisual con elementos del universo, la espiritualidad y las emociones humanas,
    creando historias que conecten y dejen un mensaje profundo.`,

    `Actualmente me encuentro en proceso de formación, desarrollando proyectos personales y explorando
    diferentes áreas como la producción, la dirección y el guion. Mi objetivo es integrarme a proyectos
    profesionales donde pueda aprender, aportar y seguir creciendo en el mundo audiovisual.`,

    `A futuro, deseo crear contenidos con mensajes espirituales, reflexivos y transformadores, sin dejar de lado géneros
    que también me inspiran como el documental, la comedia contemporánea con identidad local y las narrativas que
    integran humor, crítica social y mirada sensible.`,
  ];

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
          component={motion.h4}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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

        {paragraphs.map((text, i) => (
          <AnimatedTypography
            key={i}
            index={i}
            variant="body1"
            sx={{ fontSize: '1.2rem', lineHeight: 2, textAlign: 'justify', mb: 4 }}
          >
            {text}
          </AnimatedTypography>
        ))}

        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
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
