//Module
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

// component
import CustomCard from '../components/CustomCard';
import axiosInstance from '../utils/axiosIntance';
import { IBlog } from '../@types';

function HomeBlog() {
  const [getData, setGetdata] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const res = await axiosInstance.get('/blog');
      setLoading(false);
      if (res?.data) {
        setGetdata(res.data?.data?.blogs);
      }
    };

    getBlogs();
  }, []);

  return (
    <Box py={2}>
      <Container>
        {loading ? (
          <Box
            height={'60vh'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h4'>No blogs Found!</Typography>
          </Box>
        ) : (
          <Grid container spacing={2} justifyContent='center'>
            {getData &&
              getData.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} lg={4}>
                  <CustomCard
                    title={item.title}
                    description={item.description}
                    image={`http://localhost:8000/image/${item.imageUrl}`}
                    to={`/view/${item._id}`}
                    isEdit={false}
                    id='/'
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default HomeBlog;
