import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const pages = ['Original Characters'];

const Navbar = () => {

  return (
    <AppBar position="sticky" sx={{
        boxShadow: 0, 
        background: '#2E3B55'
      }}>
      <Container maxWidth="l">
        <Toolbar sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Link to="/">
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Quckidon
          </Typography>
          </Link>
          <Box >
            {pages.map((page) => (
              <Link to="/characters">
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
