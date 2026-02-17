import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function AraFooter() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            صُنع بحب كمشروع مفتوح المصدر
            <br />
            <Link href="https://github.com/bilalix/arabic-reshaper-app">
                رابط الكود على GitHub
            </Link>{' '}
            <br />
            {new Date().getFullYear()}
        </Typography>
    );
}

export default AraFooter
