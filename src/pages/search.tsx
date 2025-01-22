// module
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

// components
import axiosInstance from '../utils/axiosIntance';
import { IBlog } from '../@types';
import CustomCard from '../components/CustomCard';

function Search() {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getData, setGetdata] = useState<IBlog[]>([]);

  const handleSearch = async (e: any) => {
    setSearch(e.target.value);
  };

  const params = {
    description: search,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axiosInstance.get('/blog/search', {
        params,
      });
      setLoading(false);
      if (res.data) {
        setGetdata(res.data.data.blogs);
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <Box my={4}>
      <Container>
        <Box
          sx={{
            my: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              id='search'
              type='search'
              size='small'
              onChange={handleSearch}
              sx={{
                width: 300,
                backgroundColor: 'white',
                mr: 1,
              }}
            />
            <Button type='submit' variant='outlined'>
              Submit
            </Button>
          </form>
        </Box>
        <Box>
          {loading ? (
            <Box
              sx={{
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='h5'>Blog Not Found</Typography>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {getData &&
                getData.map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} lg={4}>
                    <CustomCard
                      title={item.title}
                      description={item.description}
                      image={`http://localhost:8000/image/${item.imageUrl}`}
                      to={`/view/${item._id}`}
                      isEdit={false}
                      id={item._id}
                    />
                  </Grid>
                ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Search;
