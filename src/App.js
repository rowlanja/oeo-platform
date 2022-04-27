import React from "react";
import NavMenu from "./components/sidebar/sidebar"
import { SaasProvider, ModalsProvider, AuthProvider } from '@saas-ui/react'

import theme from './styles/theme'

function App() {
  
  
  return (
    <SaasProvider theme={theme}>
      <div className="App">
        <NavMenu/>
      </div>
    </SaasProvider>

  );
}
  
export default App;