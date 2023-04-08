import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { APP_NAME } from '../config';

import Menu from './Menu';

export default function Header() {
    var ButtonLogin = <Button color="inherit">Login</Button>;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        {APP_NAME}
                    </Typography>
                    {ButtonLogin}
                </Toolbar>
            </AppBar>
        </Box>
    );
}