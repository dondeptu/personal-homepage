const colorsPalette = {
    parsley: "rgba(20, 70, 32, 0.2)",
    scienceBlue: "#0366D6",
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
    },
};

export const LightMode = {
    ...common,
    colors: {
        headers: colorsPalette.mineShaft,
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
    },
};