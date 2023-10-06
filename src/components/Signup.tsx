import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Signup() {
  return (
    <Container maxWidth="sm">
      <Box
        padding={3}
        border={1}
        borderRadius={2}
        textAlign={"center"}
        gap={2}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography variant="h4" mb={3}>
          Signup User{" "}
        </Typography>
        <TextField variant="outlined" fullWidth label="Please Enter Name" />
        <TextField
          variant="outlined"
          fullWidth
          label="Please Enter Email Address"
        />
        <TextField variant="outlined" fullWidth label="Please Enter Password" />
        <TextField variant="outlined" fullWidth label="Confirm  Password" />
        <Button type="submit" variant="contained">
          Signup
        </Button>

        <Typography variant="body2">
          If you where Signup Click to login
        </Typography>
      </Box>
    </Container>
  );
}

export default Signup;
