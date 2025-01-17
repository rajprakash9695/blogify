import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  description: string;
  image: string;
  to: string;
};

function CustomCard({
  title = ' ',
  description = '',
  image = '',
  to = '',
}: Props) {
  const truncatedDescription =
    description.length > 300 ? description.slice(0, 200) + '...' : description;

  return (
    <Box>
      <Card sx={{ maxWidth: 545, minHeight: 480 }}>
        <CardMedia
          component='img'
          height='230'
          image={image}
          alt='Paella dish'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {title}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {truncatedDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Link to={to}>
            <Button size='small'>Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CustomCard;
