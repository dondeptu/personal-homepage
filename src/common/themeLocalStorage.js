const themeLocalStorageKey = "theme";

export const saveThemeInLocalStorage = isDarkTheme =>
    localStorage.setItem(themeLocalStorageKey, JSON.stringify(isDarkTheme));

export const getThemeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(themeLocalStorageKey)) || false;