import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import { useState } from "react";

function Form() {
  const [value, setValue] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    // console.log("Submit");
    e.preventDefault();
    setValue = e.target.value;
  };
  return (
    <Container>
      <Box my={5}>
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <form>
            <TextField
              variant="outlined"
              label="Username"
              fullWidth
              name="name"
              value={name}
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              name="password"
              value={password}
            />
            <TextField type="submit" fullWidth onSubmit={handleSubmit}>
              Submit
            </TextField>
          </form>
        </Formik>

        <Typography>name</Typography>
        <Typography>password</Typography>
      </Box>
    </Container>
  );
}

export default Form;
