import * as React from "react";
import Container from '@mui/material/Container';
import Layout from '../components/Layout';


const SearchPage = (params: any) => {

    const { searchTerm } = params;

    return (
        <Layout>
            <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
                {searchTerm}
            </Container>
        </Layout>
    );
};

export default SearchPage;

export const Head = () => <title>Search</title>;
