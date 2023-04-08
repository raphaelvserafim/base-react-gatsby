import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '../Theme';
import Header from './Header';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Header />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
