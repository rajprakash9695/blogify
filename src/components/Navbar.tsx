import { Box, Container, Typography, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Navbar() {
  const { isAuth, user, logout } = useAuth();

  return (
    <Box
      sx={{ bgcolor: 'primary.main' }}
      p={2}
      position={'fixed'}
      top={0}
      width={'100%'}
      boxShadow={'1'}
    >
      <Container>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant='h4' color={'white'}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Blogify
            </Link>
          </Typography>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <NavLink
              to='/search'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Typography>Search Blog</Typography>
            </NavLink>

            {user && (
              <Typography variant='h6' color={'white'} px={2}>
                {user.name}
              </Typography>
            )}

            {isAuth ? (
              <Typography variant='h6' color={'white'} px={2}>
                <Link
                  to='/post'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Create Blog
                </Link>
              </Typography>
            ) : null}

            {isAuth ? null : (
              <Button variant='contained' color='warning'>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to='/login'
                >
                  Login
                </Link>
              </Button>
            )}

            {isAuth ? (
              <Button variant='contained' color='warning' onClick={logout}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                  Logout
                </Link>
              </Button>
            ) : null}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
