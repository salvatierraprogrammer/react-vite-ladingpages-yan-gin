// components/ReelModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton, Typography, Avatar, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import reel_publicidad from '../assets/videos/reel_publicidad.mp4';

const ReelModal = ({ open, onClose }) => {
  const [likes, setLikes] = useState(120000);
  const [comments, setComments] = useState(8500);
  const [shares, setShares] = useState(1200);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        setLikes(l => l + Math.floor(Math.random() * 10));
        setComments(c => c + Math.floor(Math.random() * 2));
        setShares(s => s + Math.floor(Math.random() * 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [open]);

  const togglePlayPause = () => {
    const video = document.getElementById('reel-video');
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          p: 1,
        }}
      >
        {/* Botón cerrar */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: { xs: 10, sm: 20 },
            right: { xs: 10, sm: 20 },
            color: 'white',
            zIndex: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />
        </IconButton>

        {/* Contenedor del video */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: { xs: '95%', sm: 400 },
            maxHeight: '90vh',
          }}
        >
          <video
            id="reel-video"
            src={reel_publicidad}
            autoPlay
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={togglePlayPause}
          />

          {/* Botones estilo TikTok */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: 5, sm: 10 },
              bottom: { xs: 40, sm: 50 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 2, sm: 3 },
              color: 'white',
            }}
          >
            <Box textAlign="center">
              <IconButton sx={{ color: 'white' }}>
                <FavoriteIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />
              </IconButton>
              <Typography fontSize={{ xs: '0.8rem', sm: '1rem' }}>
                {likes.toLocaleString()}
              </Typography>
            </Box>
            <Box textAlign="center">
              <IconButton sx={{ color: 'white' }}>
                <ChatBubbleIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />
              </IconButton>
              <Typography fontSize={{ xs: '0.8rem', sm: '1rem' }}>
                {comments.toLocaleString()}
              </Typography>
            </Box>
            <Box textAlign="center">
              <IconButton sx={{ color: 'white' }}>
                <ShareIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />
              </IconButton>
              <Typography fontSize={{ xs: '0.8rem', sm: '1rem' }}>
                {shares.toLocaleString()}
              </Typography>
            </Box>
          </Box>

          {/* Gradiente inferior */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: { xs: '100px', sm: '150px' },
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              borderRadius: '0 0 10px 10px',
            }}
          />

          {/* Info creador */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 5, sm: 10 },
              left: { xs: 5, sm: 10 },
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              color: 'white',
              flexWrap: 'wrap',
            }}
          >
            <Avatar
              src="/assets/creadora.jpg"
              alt="Creador"
              sx={{ width: { xs: 35, sm: 40 }, height: { xs: 35, sm: 40 } }}
            />
            <Box>
              <Typography fontWeight="bold" fontSize={{ xs: '0.8rem', sm: '1rem' }}>
                @yan_gian
              </Typography>
              <Typography variant="body2" fontSize={{ xs: '0.7rem', sm: '0.9rem' }}>
                🎬 Proyecto audiovisual - Clip especial
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                ml: 1,
                backgroundColor: '#ff0050',
                color: 'white',
                textTransform: 'none',
                fontWeight: 'bold',
                px: { xs: 1, sm: 2 },
                py: { xs: 0.3, sm: 0.5 },
                fontSize: { xs: '0.7rem', sm: '0.9rem' },
                '&:hover': { backgroundColor: '#e00045' },
              }}
            >
              Seguir
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReelModal;
