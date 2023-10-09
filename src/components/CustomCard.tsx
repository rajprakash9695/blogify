import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    margin: "16px",
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
  button: {
    marginTop: "auto",
  },
}));

interface CustomCardProps {
  image: string;
  title: string;
  description: string;
  onReadMoreClick: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  image,
  title,
  description,
  onReadMoreClick,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onReadMoreClick}
      >
        Read More
      </Button>
    </Card>
  );
};

export default CustomCard;
