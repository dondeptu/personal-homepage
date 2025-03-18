import { ThemeProvider } from "styled-components";
import { DarkMode, LightMode } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { Normalize } from "styled-normalize";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";

export const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? DarkMode : LightMode}>
            <Normalize />
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    );
};

export default App;