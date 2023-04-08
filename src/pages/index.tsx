import * as React from "react";
import Container from '@mui/material/Container';
import Layout from '../components/Layout';


const IndexPage = () => {
  return (
    <Layout>
      <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
        Home
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
