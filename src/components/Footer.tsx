import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
            <p style={{ textAlign: 'center', fontSize: 12 }}>{currentYear} Developed by Raphael Serafim</p>
        </footer>
    );
}

export default Footer;