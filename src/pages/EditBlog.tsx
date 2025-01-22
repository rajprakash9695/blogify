import React, { useEffect, useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Stack,
} from '@mui/material';
import axiosInstance from '../utils/axiosIntance';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

function EditBlog() {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: '',
    description: '',
  });

  const [imageUrl, setImageUrl] = useState();

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const { title, description } = input;
    if (!title || !description || !image) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append('title', input.title);
    formData.append('description', input.description);
    formData.append('user', user._id);
    if (image) {
      formData.append('image', image);
    }
    try {
      const res = await axiosInstance.patch(`/blog/${id}`, formData);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: `${res.data.message}`,
        });
        setInput({
          title: '',
          description: '',
        });
        //@ts-ignore
        setImageUrl(null);
        setImage(null);
        navigate('/my-blogs');
      }
    } catch (error) {
      console.error(error);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      const res = await axiosInstance.get(`/blog/${id}`);
      setLoading(false);
      if (res?.data) {
        setInput(res.data?.data);
        setImageUrl(res.data.data.imageUrl);
      }
    };

    getBlog();
  }, []);

  return (
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      <Typography
        sx={{
          fontSize: {
            xs: 24,
            md: 36,
          },
          mb: 0.5,
        }}
      >
        Updates Blogs
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label='Tittle'
            variant='outlined'
            fullWidth
            value={input.title}
            onChange={(e) =>
              setInput((pre) => ({ ...pre, title: e.target.value }))
            }
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label='Description'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            value={input.description}
            onChange={(e) =>
              setInput((pre) => ({ ...pre, description: e.target.value }))
            }
          />
        </Box>
        <Stack direction={'column'} sx={{ mb: 2 }}>
          <img
            src={`${
              image
                ? URL.createObjectURL(image)
                : imageUrl
                ? `http://localhost:8000/image/${imageUrl}`
                : ''
            }`}
            alt='Preview'
            width={300}
          />

          {image && (
            <Typography variant='body2' sx={{ mt: 1 }}>
              Selected: {image.name}
            </Typography>
          )}
          <Button variant='outlined' component='label' sx={{ mt: 2 }}>
            Upload Image
            <input
              type='file'
              accept='image/*'
              hidden
              onChange={handleImageChange}
            />
          </Button>
        </Stack>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Update Blog'}
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default EditBlog;
