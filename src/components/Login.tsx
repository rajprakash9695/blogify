import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Login() {
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
          Login User
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          label="Please Enter Email Address"
        />
        <TextField variant="outlined" fullWidth label="Please Enter Password" />
        <Button type="submit" variant="contained">
          Login
        </Button>

        <Typography variant="body2">
          If you where not Signup Click to Signup
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
