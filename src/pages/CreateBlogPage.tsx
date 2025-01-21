import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';
import axiosInstance from '../utils/axiosIntance';
import useAuth from '../hooks/useAuth';

function BlogCreationPage() {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('user', user._id);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await axiosInstance.post('/blog', formData);
      if (res.status === 200) {
        setMessage('Blog posted successfully!');
        setTitle('');
        setDescription('');
        setImage(null);
      }
    } catch (error) {
      setMessage('Error posting the blog. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Create a New Blog
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label='Title'
            variant='outlined'
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label='Description'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          {image && (
            <img src={URL.createObjectURL(image)} alt='Preview' height={200} />
          )}
          {image && (
            <Typography variant='body2' sx={{ mt: 1 }}>
              Selected: {image.name}
            </Typography>
          )}
          <Button variant='outlined' component='label'>
            Upload Image
            <input
              type='file'
              accept='image/*'
              hidden
              onChange={handleImageChange}
            />
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post Blog'}
          </Button>
        </Box>
        {message && (
          <Typography
            my={4}
            textAlign={'center'}
            variant='body1'
            color={message.includes('successfully') ? 'green' : 'red'}
          >
            {message}
          </Typography>
        )}
      </form>
    </Container>
  );
}

export default BlogCreationPage;