import { Box, Container, Typography } from "@mui/material";

function Blogpost() {
  return (
    <div>
      <Container maxWidth="md">
        <Box
          my={5}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            width={600}
            alt="iamge"
          />
          <Typography variant="h4" my={2}>
            Tittle
          </Typography>
          <Typography variant="body1">
            Tittle Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus ullam molestiae similique numquam, praesentium blanditiis
            cumque commodi cum eos sapiente hic assumenda quisquam totam
            possimus, ipsa ducimus. Animi, impedit a. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Autem ut placeat aperiam soluta
            mollitia esse? Tenetur suscipit, temporibus at culpa cumque dolor
            mollitia ducimus, distinctio illum officiis in laboriosam libero.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Blogpost;
