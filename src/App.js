import React from "react";
import Container from '@mui/material/Container';
import Layout from "./Layout";
import AraRoutes from "./AraRoutes";
import CustomThemeProvider from './themes/CustomThemeProvider';

function App(props) {
  return (
    <CustomThemeProvider>
      <Container component="main" maxWidth="lg">
        <Layout {...props}>
          <AraRoutes />
        </Layout>
      </Container>
    </CustomThemeProvider>
  );
}

export default App;
