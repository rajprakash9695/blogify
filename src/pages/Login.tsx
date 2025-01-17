import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosIntance';
import { IUsers } from '../@types';

const initialValue: IUsers = {
  user: {
    _id: '',
    email: '',
    name: '',
  },
  accessToken: '',
  refreshToken: '',
};

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  // const [getdata, setGetData] = useState();
  // const [getdata, setGetData] = useState<IUsers>(initialValue);

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, password } = input;
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'All fields are required',
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    }

    // Add more complex validation if needed (e.g., email format)
    return true;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/login', input);

      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.data.accessToken);
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <Box sx={{ height: '80vh' }} mt={4}>
      <Container maxWidth={'sm'}>
        <form onSubmit={handleSubmit}>
          <Typography variant='h4' textAlign={'center'}>
            Login Form
          </Typography>
          <TextField
            label='Email'
            type='email'
            fullWidth
            margin='normal'
            name='email'
            value={input.email}
            onChange={handleInput}
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            name='password'
            margin='normal'
            value={input.password}
            onChange={handleInput}
          />
          <Button variant='contained' color='primary' fullWidth type='submit'>
            Login
          </Button>
        </form>
        <Typography mt={2} textAlign={'center'}>
          If User doesn't exist please <Link to='/signup'>Register</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Login;
