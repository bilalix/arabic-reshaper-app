import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import Layout from "./Layout";
import AraRoutes from "./AraRoutes";
import CustomThemeProvider from './themes/CustomThemeProvider';

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App(props) {
  return (
    <CacheProvider value={rtlCache}>
      <CustomThemeProvider>
        <Layout {...props}>
          <AraRoutes />
        </Layout>
      </CustomThemeProvider>
    </CacheProvider>
  );
}

export default App;
