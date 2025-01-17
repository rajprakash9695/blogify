import { Box, Container, Grid } from '@mui/material';
import CustomCard from '../components/CustomCard';
import { useEffect, useState } from 'react';
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
          <>Loading...</>
        ) : (
          <Grid container spacing={2} justifyContent='center'>
            {getData &&
              getData.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} lg={4}>
                  <CustomCard
                    title={item.title}
                    description={item.description}
                    //image='https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
                    image={`http://localhost:8000/image/${item.imageUrl}`}
                    to={`/view/${item._id}`}
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
