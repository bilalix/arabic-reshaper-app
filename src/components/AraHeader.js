import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

export const arabicIntro = "Arabic Reshaper هو موقع يسمح بتحويل الكتابة العربية الى كتابة مفهومة من قبل اغلب برامج التصميم مثل Photoshop و After Effects و Premiere Pro و Avid Media Composer و برامج اخرى كثيرة"
export const englishIntro = "Arabic Reshaper is a website that allows you to convert arabic text to a format compatible with many softwares like PhotoShop, After Effects, Premiere Pro, Avid Media Composer etc.."

function AraHeader() {
    return (
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="Arabic Reshaper logo"
                sx={{ width: { xs: 110, sm: 130 }, height: 'auto' }}
            />

            <Typography
                component="h1"
                variant="h4"
                sx={{ textAlign: 'center', fontWeight: 700, lineHeight: 1.35 }}
            >
                (إعادة تشكيل كلمات اللغة العربية) Arabic Reshaper
            </Typography>

            <Alert severity="info" sx={{ width: '100%' }}>
                {arabicIntro}
            </Alert>

            <Alert severity="info" dir="ltr" sx={{ width: '100%', textAlign: 'left' }}>
                {englishIntro}
            </Alert>
        </Box>
    )
}

export default AraHeader
