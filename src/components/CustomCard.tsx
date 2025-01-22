import { DeleteForever } from '@mui/icons-material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  description: string;
  image: string;
  to: string;
  isEdit: boolean;
  id: string;
  onDelete: (id: string) => void;
};

function CustomCard({
  title = ' ',
  description = '',
  image = '',
  to = '',
  isEdit = false,
  id = '',
  onDelete,
}: Props) {
  const truncatedDescription =
    description.length > 200 ? description.slice(0, 200) + '...' : description;

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
          {isEdit && (
            <Box sx={{ display: 'flex', justifyContent: 'end', flex: 1 }}>
              <Link to={`/${id}/edit`}>
                <IconButton>
                  <Tooltip title={'Edit'} placement='top'>
                    <EditNoteIcon color='primary' fontSize='medium' />
                  </Tooltip>
                </IconButton>{' '}
              </Link>
              <IconButton onClick={() => onDelete(id)}>
                <Tooltip title={'Delete'} placement='top'>
                  <DeleteForever color='primary' fontSize='medium' />
                </Tooltip>
              </IconButton>{' '}
            </Box>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default CustomCard;
