import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CircleType from 'circletype';
import logo from '../assets/logo.png';
import SobreMi from '../components/SobreMi';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';

const Home = () => {
  const arcoRef = useRef(null);

  useEffect(() => {
    if (arcoRef.current) {
      new CircleType(arcoRef.current).radius(250); // Ajustá el radio según quieras
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
      <Typography
        ref={arcoRef}
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

      {/* LOGO */}
      <Box sx={{ mb: 1 }}>
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

      {/* IMÁGENES */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        {['reel1.jpg', 'reel2.jpg'].map((img, i) => (
          <Grid item key={i}>
            <Box
              component="img"
              src={`/assets/${img}`}
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

      {/* BOTÓN */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#d4b75c',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '1rem',
          borderRadius: '25px',
          px: 6,
          py: 1.5,
          '&:hover': {
            backgroundColor: '#f1e5c2',
          },
        }}
      >
        VER REEL
      </Button>
    </Box>

    {/* ✅ NUEVA SECCIÓN SOBRE MÍ */}
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
