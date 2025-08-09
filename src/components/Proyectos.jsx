import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Container,
} from '@mui/material';
import video_rell from '../assets/videos/reel_todo_el_uiverso_es_energia.mp4'
const proyectos = [
  {
    titulo: 'Todo el uiverso es energia',
    videoUrl: video_rell,
    descripcion: `Fragmento audiovisual de exploración estética y narrativa personal, desarrollado como parte de su formación artística.`,
    thumbnail: '/assets/thumb2.jpg',
    duracion: '0:44',
  },
  {
    titulo: 'Entre el instante y la eternidad',
    videoUrl: 'https://www.youtube.com/embed/4pEcQiZBkgQ',
    descripcion: `Cortometraje poético realizado para Historia Sociocultural del Arte I (UNA). Una reflexión sobre el tiempo, el arte y el alma.`,
    thumbnail: '/assets/thumb1.jpg',
    duracion: '3:21',
  },
  {
    titulo: 'Proyecto audiovisual Yan Gian',
    videoUrl: 'https://www.youtube.com/embed/cCe3Fcngono',
    descripcion: `Fragmento audiovisual de exploración estética y narrativa personal, desarrollado como parte de su formación artística.`,
    thumbnail: '/assets/thumb2.jpg',
    duracion: '3:09',
  },
  // Puedes agregar más proyectos aquí
];

const Proyectos = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState(proyectos[0]);

  return (
    <Box
      id="proyectos"
      sx={{
        backgroundColor: '#0d0d0d',
        color: '#f1e5c2',
        fontFamily: "'Playfair Display', serif",
        py: 10,
        px: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, color: '#d4b75c', letterSpacing: 1.5 }}
        >
          Proyectos
        </Typography>

        <Grid container spacing={4}>
          {/* LISTA DE VIDEOS */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#87cefa', mb: 2 }}>
              Mis proyectos
            </Typography>

            <List
              dense
              sx={{
                maxHeight: 500,
                overflowY: 'auto',
                bgcolor: 'rgba(255,255,255,0.03)',
                borderRadius: 2,
                pr: 1,
              }}
            >
              {proyectos.map((proyecto, index) => (
                <React.Fragment key={index}>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={videoSeleccionado.videoUrl === proyecto.videoUrl}
                      onClick={() => setVideoSeleccionado(proyecto)}
                      sx={{
                        alignItems: 'flex-start',
                        gap: 2,
                        borderRadius: 1,
                        p: 1.2,
                        bgcolor:
                          videoSeleccionado.videoUrl === proyecto.videoUrl
                            ? 'rgba(212, 183, 92, 0.2)'
                            : 'transparent',
                        '&:hover': {
                          bgcolor: 'rgba(212, 183, 92, 0.1)',
                        },
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src={proyecto.thumbnail}
                          alt={proyecto.titulo}
                          sx={{
                            width: 64,
                            height: 36,
                            border: '1px solid #d4b75c',
                          }}
                        />
                      </ListItemAvatar>

                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 'bold', color: '#ffffff' }}
                          >
                            {proyecto.titulo}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" sx={{ color: '#d4b75c' }}>
                            {proyecto.duracion}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider sx={{ backgroundColor: '#333' }} />
                </React.Fragment>
              ))}
            </List>
          </Grid>

          {/* VIDEO SELECCIONADO */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 4,
                mb: 3,
                position: 'relative',
                pb: '56.25%',
                border: '1px solid #d4b75c',
              }}
            >
              <iframe
                src={videoSeleccionado.videoUrl}
                title={videoSeleccionado.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>

            <Typography variant="h6" sx={{ color: '#ffe58a', mb: 1 }}>
              {videoSeleccionado.titulo}
            </Typography>
            <Typography variant="body2">{videoSeleccionado.descripcion}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Proyectos;
