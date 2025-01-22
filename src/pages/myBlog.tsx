//Module
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';

// component
import CustomCard from '../components/CustomCard';
import axiosInstance from '../utils/axiosIntance';
import { IBlog } from '../@types';
import { Close } from '@mui/icons-material';
import Swal from 'sweetalert2';

function MyBlogs() {
  const [getData, setGetdata] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDelete, setIsDelete] = useState({
    open: false,
    rowId: '',
  });

  const handleClose = () => {
    setIsDelete({
      open: false,
      rowId: '',
    });
  };

  const handleOpenDelete = (id: string) => {
    setIsDelete({
      rowId: id,
      open: true,
    });
  };

  const handleIsDelete = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.delete(`/blog/${isDelete.rowId}`);

      setLoading(false);

      if (res.data.status === 200) {
        const tempTableData = getData.filter(
          (item) => item._id !== isDelete.rowId
        );
        setGetdata(tempTableData);

        handleClose();
        Swal.fire({
          icon: 'success',
          //@ts-ignore
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
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
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const res = await axiosInstance.get('/blog/user');
      setLoading(false);
      if (res?.data) {
        setGetdata(res.data?.data?.blog);
      }
    };

    getBlogs();
  }, []);

  return (
    <Box py={2}>
      <Container>
        {loading ? (
          <Box height={'60vh'}>
            <Typography variant='h4'>Loading...</Typography>
          </Box>
        ) : getData.length === 0 ? (
          <Box
            height={'60vh'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h4'>No blogs found!</Typography>
          </Box>
        ) : (
          <Grid container spacing={2} justifyContent='center'>
            {getData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} lg={4}>
                <CustomCard
                  title={item.title}
                  description={item.description}
                  image={`http://localhost:8000/image/${item.imageUrl}`}
                  to={`/view/${item._id}`}
                  isEdit={true}
                  id={item._id}
                  onDelete={(id) => handleOpenDelete(id)}
                />
              </Grid>
            ))}
          </Grid>
        )}

        <Dialog
          open={isDelete.open}
          onClose={handleClose}
          maxWidth={'sm'}
          fullWidth
        >
          <DialogTitle>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant='h5'>Are you sure.?</Typography>
              <IconButton aria-label='close' onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
          </DialogTitle>
          <Divider />
          <DialogContent sx={{ minHeight: 'sm' }}>
            <Stack gap={2} alignItems='center'>
              <Typography>This will permanently deleted.</Typography>
              <Stack direction='row' spacing={3}>
                <Button
                  onClick={handleIsDelete}
                  variant='contained'
                  color='error'
                >
                  Delete
                </Button>
                <Button
                  onClick={handleClose}
                  variant='outlined'
                  color='success'
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default MyBlogs;
