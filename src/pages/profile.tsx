import * as React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import Layout from '../components/Layout';

import { isUser } from '../Auth';

const ProfilePage = (prop: any) => {

    const [isLogged, setIsLogged] = React.useState(false);

    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        const checkUser = async () => {
            try {
                const user = await isUser();
                if (user) {
                    setIsLogged(true);
                    setUser(user)
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkUser();
    }, []);

    
    return (
        <Layout>
            {isLogged ? (
                <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
                    Is logado
                </Container>
            ) : (
                <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>
                    Nao logado
                </Container>
            )}
        </Layout>

    );
};

export default ProfilePage;

export const Head = () => <title>Profile</title>;
