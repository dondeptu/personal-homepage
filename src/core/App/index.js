import { ThemeProvider } from "styled-components";
import { LightMode } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage";

export const App = () => (
    <ThemeProvider theme={LightMode}>
        <GlobalStyle />
        <PersonalHomepage />
    </ThemeProvider>
);

export default App;