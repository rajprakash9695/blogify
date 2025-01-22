import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Avatar,
  Grid,
  Button,
} from '@mui/material';

type Props = {
  title: string;
  author: string;
  date: string | null;
  description: string;
  image: string;
  authorImage: string;
};

function BlogDetail({
  title,
  author,
  date,
  description,
  image,
  authorImage,
}: Props) {
  return (
    <Container maxWidth='md'>
      {/* Blog Header */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography
          sx={{
            fontSize: {
              xs: 24,
              md: 44,
            },
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {date}
        </Typography>
      </Box>

      {/* Blog Image */}
      <Card>
        <CardMedia
          component='img'
          height='400'
          image={image}
          alt='Blog Feature'
        />
      </Card>

      {/* Blog description */}
      <Box sx={{ my: 4 }}>
        <Typography variant='body1' color='text.primary' paragraph>
          {description}
        </Typography>
      </Box>

      {/* Author Info */}
      <Box sx={{ my: 4, display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={author}
          src={authorImage}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant='subtitle1' fontWeight='bold'>
            {author}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Blog Author
          </Typography>
        </Box>
      </Box>

      {/* Social Sharing Buttons */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant='subtitle1' gutterBottom>
          Share this article:
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <Button variant='outlined' size='small'>
              Share on Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' size='small'>
              Share on Twitter
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' size='small'>
              Share on LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default BlogDetail;
