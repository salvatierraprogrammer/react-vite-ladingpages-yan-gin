import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'INICIO', href: '#inicio' },
    { text: 'SOBRE MÍ', href: '#sobre-mi' },
    { text: 'PROYECTOS', href: '#proyectos' },
    { text: 'CONTACTO', href: '#contacto' },
  ];

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          backgroundImage: 'url("/assets/fondo.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          py: 1.5,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: isMobile ? 2 : 6,
          }}
        >
          {/* LOGO */}
          <Box
            component="a"
            href="#inicio"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo Yan Gian"
              sx={{
                height: { xs: 40, md: 60 },
                width: 'auto',
              }}
            />
          </Box>

          {/* Menú */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: '#f1e5c2' }} />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map(({ text, href }, index) => (
                <Button
                  key={index}
                  component="a"
                  href={href}
                  sx={{
                    color: '#f1e5c2',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    ml: 2,
                    '&:hover': {
                      color: '#ffe58a',
                    },
                    textDecoration: 'none',
                  }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer para mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: '#1a1a1a',
            height: '100%',
            p: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map(({ text, href }, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={href}
                sx={{
                  color: '#f1e5c2',
                  '&:hover': {
                    color: '#ffe58a',
                  },
                  textDecoration: 'none',
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
