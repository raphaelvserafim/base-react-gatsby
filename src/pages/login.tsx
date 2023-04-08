import * as React from "react";
import Container from '@mui/material/Container';
import Layout from '../components/Layout';


const LoginPage = () => {
    return (
        <Layout>
            <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
                Login
            </Container>
        </Layout>
    );
};

export default LoginPage;

export const Head = () => <title>Login</title>;
