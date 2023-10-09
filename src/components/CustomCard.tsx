import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  description: string;
  image: string;
};

function CustomCard({ title = " ", description = "", image = "" }: Props) {
  return (
    <Box>
      <Container>
        <Card>
          <img alt="green iguana" src={image} width={300} height={200} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}

export default CustomCard;
