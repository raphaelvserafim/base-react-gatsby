import * as React from "react";
import Container from '@mui/material/Container';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';


const BlankPage = () => {
    return (
        <Layout>
            <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
            Blank
            </Container>
        </Layout>
    );
};

export default BlankPage;


export const Head = () => (
    <Helmet>
        <title>Blank</title>
        <meta name="description" content="Este é o login da minha página" />
        <meta name="keywords" content="login, autenticação, página de login" />
        <meta name="author" content="Seu nome ou nome da empresa" />
        <meta property="og:title" content="Login" />
        <meta property="og:description" content="Este é o login da minha página" />
        <meta property="og:image" content="https://www.example.com/image.jpg" />
        <meta property="og:url" content="https://www.example.com/login" />
        <meta name="twitter:title" content="Login" />
        <meta name="twitter:description" content="Este é o login da minha página" />
        <meta name="twitter:image" content="https://www.example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
);