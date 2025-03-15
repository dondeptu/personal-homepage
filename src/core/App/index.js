import { ThemeProvider } from "styled-components";
import { LightMode } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage";
import { Normalize } from "styled-normalize";

export const App = () => (
    <ThemeProvider theme={LightMode}>
        <Normalize />
        <GlobalStyle />
        <PersonalHomepage />
    </ThemeProvider>
);

export default App;