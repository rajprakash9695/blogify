import { useEffect, useState } from 'react';
import { IBlog } from '../@types';
import BlogDetail from '../components/BlogDetail';
import axiosInstance from '../utils/axiosIntance';
import { fDateTime } from '../utils/formatTime';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Blogpost() {
  const initialValue: IBlog = {
    _id: '',
    createdAt: '',
    description: '',
    imageUrl: '',
    title: '',
    updatedAt: '',
    user: {
      _id: '',
      email: '',
      name: '',
    },
  };

  const { pathname } = useLocation();

  const id = pathname.split('/').pop();

  // const id = '6788f00a6abe3d1e57a9e66b';
  const [getData, setGetdata] = useState<IBlog>(initialValue);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const res = await axiosInstance.get(`/blog/${id}`);
      setLoading(false);
      if (res?.data) {
        setGetdata(res.data.data);
      }
    };

    getBlogs();
  }, []);

  return (
    <Box mb={2}>
      {loading ? (
        <>Loading..</>
      ) : (
        <BlogDetail
          author={getData.user.name}
          authorImage=''
          title={getData.title}
          description={getData.description}
          image={`http://localhost:8000/image/${getData.imageUrl}`}
          date={fDateTime(getData.createdAt)}
        />
      )}
    </Box>
  );
}

export default Blogpost;
