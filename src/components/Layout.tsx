import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';

import { lightTheme } from '../Theme';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <ToastContainer />
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;