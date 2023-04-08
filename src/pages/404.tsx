import * as React from "react";
import Container from '@mui/material/Container';
import Layout from '../components/Layout';


const NotFoundPage = () => {
  return (
    <Layout>
      <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
        404
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404</title>;
