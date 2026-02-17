import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function AraFooter() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            جميع الحقوق <b>غير</b> محفوظة
            <br />
            <Link href="https://github.com/bilalix/arabic-reshaper-app">
                رابط الكود المفتوح المصدر
            </Link>{' '}
            <br />
            {new Date().getFullYear()}
        </Typography>
    );
}

export default AraFooter
