import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosIntance';

function Signup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, email, password } = input;
    if (!name || !email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'All Fields are required',
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const res = await axiosInstance.post('/auth/signup', input);
      if (res.data.status === 201) {
        //@ts-ignore
        Swal.fire({
          icon: 'success',
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setInput({
          name: '',
          email: '',
          password: '',
        });
        navigate('/login');
      }
    } catch (error) {
      //@ts-ignore
      if (error.response.data.status >= 400) {
        Swal.fire({
          icon: 'error',
          //@ts-ignore
          title: `${error.response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <Box sx={{ height: '80vh' }} mt={4}>
      <Container maxWidth={'sm'}>
        <form onSubmit={handleSubmit}>
          <Typography variant='h4' textAlign={'center'}>
            Signup Form
          </Typography>
          <TextField
            label=' Full Name'
            fullWidth
            required
            margin='normal'
            name='name'
            value={input.name}
            onChange={handleInput}
          />
          <TextField
            label='Email'
            type='email'
            fullWidth
            required
            margin='normal'
            name='email'
            value={input.email}
            onChange={handleInput}
          />
          <TextField
            label='Password'
            type='password'
            fullWidth
            required
            name='password'
            margin='normal'
            value={input.password}
            onChange={handleInput}
          />
          <Button variant='contained' color='primary' fullWidth type='submit'>
            Signup
          </Button>
        </form>
        <Typography mt={2} textAlign={'center'}>
          If user already Exist Please <Link to='/login'>Login</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Signup;
