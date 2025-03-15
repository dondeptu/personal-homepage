const colorsPalette = {
    parsley: "rgba(20, 70, 32, 0.2)",
    scienceBlue: "#0366D6",
    scienceBlueTransparent: "rgba(3, 102, 214, 0.2)",
    anakiwa: "#8CC2FF",
    iron: "rgba(209, 213, 218, 0.3)",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    slateGray: "#6E7E91",
    mineShaft: "#252525",
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
        textPrimary: colorsPalette.mineShaft,
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
    },
};