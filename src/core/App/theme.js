const colorsPalette = {
    parsley: "rgba(20, 70, 32, 0.2)",
    scienceBlue: "#0366D6",
    scienceBlueSoft: "rgba(3, 102, 214, 0.5)",
    scienceBlueTransparent: "rgba(3, 102, 214, 0.2)",
    dodgerBlue: "#2188FF",
    anakiwa: "#8CC2FF",
    shipCove: "#6D93BE",
    ironSoft: "rgba(209, 213, 218, 0.1)",
    iron: "rgba(209, 213, 218, 0.3)",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mercury: "#E5E5E5",
    slateGray: "#6E7E91",
    mineShaft: "rgba(54, 54, 54, 0.72)",
    black: "#252525",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletMax: 991,
        smallDesktopMax: 1199,
    },
    boxShadow: "0 16px 58px rgba(9, 10, 51, 0.03), 0 -2px 50px rgba(9, 10, 51, 0.02)",
    borderRadius: "4px",
};

export const LightMode = {
    ...common,
    colors: {
        textPrimary: colorsPalette.black,
        primary: colorsPalette.scienceBlue,
        page: {
            background: colorsPalette.whiteLilac,
            text: colorsPalette.slateGray,
        },
        buttonLink: {
            text: colorsPalette.white,
            border: colorsPalette.iron,
            shadowFocus: colorsPalette.anakiwa,
            shadowSelected: colorsPalette.parsley,
        },
        boxBorder: colorsPalette.iron,
        boxBackground: colorsPalette.white,
        headerLine: colorsPalette.iron,
        repoTile: {
            border: colorsPalette.iron,
            borderHover: colorsPalette.scienceBlueTransparent,
            header: colorsPalette.scienceBlue,
        },
        themeSwitch: {
            icon: colorsPalette.white,
            shadow: `inset 0 0 0 1px ${colorsPalette.iron}`,
            background: colorsPalette.mercury,
        },
    },
};

export const DarkMode = {
    ...common,
    colors: {
        textPrimary: colorsPalette.white,
        primary: colorsPalette.dodgerBlue,
        page: {
            background: colorsPalette.black,
            text: colorsPalette.white,
        },
        buttonLink: {
            text: colorsPalette.white,
            border: colorsPalette.iron,
            shadowFocus: colorsPalette.shipCove,
            shadowSelected: colorsPalette.parsley,
        },
        boxBorder: colorsPalette.iron,
        boxBackground: colorsPalette.mineShaft,
        headerLine: colorsPalette.ironSoft,
        repoTile: {
            border: colorsPalette.ironSoft,
            borderHover: colorsPalette.scienceBlueSoft,
            header: colorsPalette.white,
        },
        themeSwitch: {
            icon: colorsPalette.black,
            shadow: common.boxShadow,
            background: colorsPalette.mineShaft,
        },
    },
};