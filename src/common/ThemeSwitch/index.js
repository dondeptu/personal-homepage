import { useDispatch, useSelector } from "react-redux";
import { Button, Label, StyledBrightnessIcon, Thumb, Track, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Label>Dark mode {isDarkTheme ? "on" : "off"}</Label>
                <Track>
                    <Thumb $shift={isDarkTheme}>
                        <StyledBrightnessIcon />
                    </Thumb>
                </Track>
            </Button>
        </Wrapper>
    );
};