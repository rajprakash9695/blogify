import { Container, Typography } from "@mui/material";

function Layout() {
  return (
    <Container>
      <div>
        {/* <meta charSet="utf-8" />
        <meta name="description" content={propss.description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title> */}
      </div>
      <Typography>Layout</Typography>
    </Container>
  );
}

Layout.defaultProps = {
  title: "Blogify",
  description: "React project",
  keywords: "mern,react,node",
  author: "Raj Prakash",
};

// interface c {
//   children: string;
//   title: string;
//   description: string;
//   keywords: string;
//   author: string;
// }
export default Layout;
