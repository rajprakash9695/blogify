import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

function Navbar() {
  const { isAuth, user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ bgcolor: 'primary.main' }}
      p={2}
      position={'fixed'}
      top={0}
      width={'100%'}
      boxShadow={'1'}
      zIndex={1300}
    >
      <Container>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          {/* Brand Logo */}
          <Typography variant='h5' color={'white'}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Blogify
            </Link>
          </Typography>

          {/* For Desktop */}
          <Box
            display={{ xs: 'none', sm: 'flex' }}
            alignItems={'center'}
            gap={2}
          >
            {user && (
              <Typography color={'white'} px={2} fontWeight={700}>
                {user.name.toUpperCase()}
              </Typography>
            )}
            {isAuth ? (
              <Typography color={'white'} px={2}>
                <Link
                  to='/my-blogs'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  My Blog
                </Link>
              </Typography>
            ) : null}
            <NavLink
              to='/search'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Typography>Search Blog</Typography>
            </NavLink>

            {isAuth ? (
              <Typography color={'white'} px={2}>
                <Link
                  to='/post'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  Create Blog
                </Link>
              </Typography>
            ) : null}

            {!isAuth && (
              <Button variant='contained' color='warning'>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to='/login'
                >
                  Login
                </Link>
              </Button>
            )}

            {isAuth && (
              <Button variant='contained' color='warning' onClick={logout}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                  Logout
                </Link>
              </Button>
            )}
          </Box>

          {/* For Mobile */}
          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none', color: 'white' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiMenuItem-root': {
                typography: 'body2',
                borderRadius: 0.75,
              },
            }}
          >
            <Box px={2}>
              {user?.name && (
                <Box pl={2}>
                  <Typography color={'GrayText'} variant='caption'>
                    User Name
                  </Typography>
                  <Typography variant='body2' color={'black'}>
                    {user.name}
                  </Typography>
                </Box>
              )}
              <Divider sx={{ borderStyle: 'dashed', mt: 1 }} />
              <MenuItem onClick={handleMenuClose}>
                <NavLink
                  to='/search'
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Search Blog
                </NavLink>
              </MenuItem>

              {isAuth && (
                <MenuItem onClick={handleMenuClose}>
                  <NavLink
                    to='/post'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Create Blog
                  </NavLink>
                </MenuItem>
              )}

              {!isAuth && (
                <>
                  <Divider sx={{ borderStyle: 'dashed', mt: 1 }} />
                  <MenuItem onClick={handleMenuClose}>
                    <NavLink
                      to='/login'
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Login
                    </NavLink>
                  </MenuItem>
                </>
              )}

              {isAuth && (
                <>
                  <Divider sx={{ borderStyle: 'dashed', mt: 1 }} />

                  <MenuItem
                    onClick={() => {
                      //@ts-ignore
                      logout();
                      handleMenuClose();
                    }}
                  >
                    <NavLink
                      to='/'
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Logout
                    </NavLink>
                  </MenuItem>
                </>
              )}
            </Box>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
