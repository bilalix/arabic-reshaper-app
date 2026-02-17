import React from 'react';
import AraTopBar from "./components/AraTopBar"
import Footer from "./components/AraFooter"
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AraTopBar />
            <Container component="main" maxWidth="lg">
                <div dir="rtl">
                    {props.children}
                </div>
                <Box mt={8}>
                    <Footer />
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Layout
