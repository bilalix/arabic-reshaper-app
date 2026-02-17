import React from 'react';
import AraTopBar from "./components/AraTopBar"
import Footer from "./components/AraFooter"
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AraTopBar />
            <div dir="rtl">
                {props.children}
            </div>
            <Box mt={8}>
                <Footer />
            </Box>
        </React.Fragment>
    )
}

export default Layout
