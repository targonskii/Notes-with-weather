export const getFormattedTemp = (tempKelvin) => {
    const tempCel = Math.round(tempKelvin - 273);
    return `${tempCel > 0 ? "+" : ""}${tempCel}°C`;
};
