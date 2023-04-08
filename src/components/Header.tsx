import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';

import Menu from './Menu';
import ButtonIsLogged from "./ButtonIsLogged"

import { APP_NAME } from '../config';

const log = 0;

import "../css/App.css"

const Header = () => {

    if (log) {
        var ButtonLogin = <ButtonIsLogged />
    } else {
        var ButtonLogin = <Button onClick={() => { navigate(`/login`) }} color="inherit">Login</Button>;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Link className='app-link' to="/">{APP_NAME}</Link>
                    </Typography>
                    {ButtonLogin}
                </Toolbar>
            </AppBar>
        </Box>
    );
}



export default Header;