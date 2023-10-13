import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import blogImage from "../assets/blog-icon.png";

type Props = {
  title: string;
  description: string;
  image: string;
};

function CustomCard({ title = " ", description = "", image = "" }: Props) {
  const [isImage, setImage] = useState("");
  console.log("log", isImage);
  return (
    <Box>
      <Container>
        <Card sx={{ maxHeight: "22222" }}>
          {isImage ? (
            <img alt="green iguana" src={image} width={300} height={200} />
          ) : (
            <img alt="blog image" src={blogImage} width={300} height={200} />
          )}
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
