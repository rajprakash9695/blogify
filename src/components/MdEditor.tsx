import { Box, Container, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

function MdEditor() {
  const [value, setValue] = useState("");
  return (
    <Box mt={5}>
      <Container maxWidth="lg">
        <Typography variant="h4" my={2} textAlign={"center"}>
          Create Blog
        </Typography>
        <MDEditor value={value} onChange={setValue} height={350} />

        <Typography variant="h5" my={2} textAlign={"center"}>
          Preview Blog
        </Typography>
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      </Container>
    </Box>
  );
}

export default MdEditor;
