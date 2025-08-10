import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Grid, keyframes, Fade, Slide } from '@mui/material';
import CircleType from 'circletype';
import logo from '../assets/logo.png';
import SobreMi from '../components/SobreMi';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import ReelModal from '../components/ReelModal';

// Animaciones con keyframes
const shine = keyframes`
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Hook para animación al hacer scroll
const useScrollAnimation = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Home = () => {
  const arcoRef = useRef(null);
  const [openReel, setOpenReel] = useState(false);

  const [titleRef, titleVisible] = useScrollAnimation();
  const [logoRef, logoVisible] = useScrollAnimation();
  const [imagesRef, imagesVisible] = useScrollAnimation();

  useEffect(() => {
    if (arcoRef.current) {
      new CircleType(arcoRef.current).radius(250);
    }
  }, []);

  return (
    <>
      <Box
        id="inicio"
        sx={{
          backgroundImage: 'url("/assets/fondo.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          color: '#f1e5c2',
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          px: 2,
          pt: 1,
          pb: 1,
        }}
      >
        {/* TEXTO EN ARCO */}
        <Fade in={titleVisible} timeout={1000}>
          <Typography
            ref={(el) => {
              arcoRef.current = el;
              titleRef.current = el;
            }}
            variant="subtitle2"
            sx={{
              display: 'inline-block',
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontSize: '1.5rem',
              color: '#e4d3ac',
              mb: 1,
            }}
          >
            Creadora Audiovisual
          </Typography>
        </Fade>

      {/* LOGO */}
      <Fade in={logoVisible} timeout={1500}>
        <Box ref={logoRef} sx={{ mb: 1 }}>
          <img
            src={logo}
            alt="Logo Yan Gian"
            style={{
              width: 350,
              maxWidth: '90%',
              marginBottom: '1rem',
            }}
          />
        </Box>
      </Fade>


        {/* IMÁGENES */}
        <Fade in={imagesVisible} timeout={1500}>
          <Grid
            ref={imagesRef}
            container
            spacing={3}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            {[
              'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqHhUIoNYpDXLmRXktZ5CiEJs9WwAuB49-rS3SxzvHquAs4Wf9m3TRq4B3EtsrS5PsBo_2pD-bZiF1XH7c-st1_rUGe8D2RMq5KxGpQbAu0uu8ZruwSrfXNhV1Pe5OpuleuawMhPa1iAA/s1600/audiovisuales.jpg',
              'https://wallpapers.com/images/hd/couple-sunset-pictures-150abqkkhkriahcz.jpg',
            ].map((img, i) => (
              <Grid item key={i}>
                <Box
                  component="img"
                  src={img}
                  alt={`Reel ${i + 1}`}
                  sx={{
                    width: 220,
                    height: 120,
                    objectFit: 'cover',
                    border: '2px solid #d4b75c',
                    borderRadius: 2,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Fade>

        {/* BOTÓN con efecto */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#d4b75c',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '25px',
            marginBottom: '2rem',
            px: 6,
            py: 1.5,
            position: 'relative',
            overflow: 'hidden',
            animation: `${pulse} 1.5s infinite`,
            '&:hover': {
              backgroundColor: '#f1e5c2',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)',
              animation: `${shine} 2s infinite`,
            },
          }}
          onClick={() => setOpenReel(true)}
        >
          VER REEL
        </Button>
      </Box>

      {/* Modal estilo TikTok */}
      <ReelModal open={openReel} onClose={() => setOpenReel(false)} />

      {/* Secciones */}
      <Box id="sobre-mi">
        <SobreMi />
      </Box>
      <Box id="proyectos">
        <Proyectos />
      </Box>
      <Box id="contacto">
        <Contacto />
      </Box>
    </>
  );
};

export default Home;
