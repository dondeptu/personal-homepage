import { ThemeProvider } from "styled-components";
import { DarkMode, LightMode } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage";
import { Normalize } from "styled-normalize";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { useDisableTransition } from "../hooks/useDisableTransition";

export const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const disableTransition = useDisableTransition();

    return (
        <ThemeProvider theme={isDarkTheme ? DarkMode : LightMode}>
            <Normalize />
            <GlobalStyle disableTransition={disableTransition} />
            <PersonalHomepage />
        </ThemeProvider>
    );
};

export default App;