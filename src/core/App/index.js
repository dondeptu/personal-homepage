import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { LightMode } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => (
    <ThemeProvider theme={LightMode}>
        <Normalize />
        <GlobalStyle />
    </ThemeProvider>
);

export default App;