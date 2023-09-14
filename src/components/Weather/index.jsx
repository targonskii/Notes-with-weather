import React from "react";
import { formatISODateToCustomStrings } from "../../utils/formatISODateToCustomStrings";
import { convertKelvinToCelsius } from "../../utils/convertKelvinToCelsius";
import { getImageUrl } from "../../utils/getImageUrl";

import style from "./index.module.css";

export const Weather = ({ post }) => {
    const { main, weather, isoDateString } = post;
    const tempCel = convertKelvinToCelsius(main.temp);
    const imgUrl = getImageUrl(weather[0].icon);
    const { formattedDate, formattedTime } =
        formatISODateToCustomStrings(isoDateString);

    return (
        <div className={style.weather}>
            <img src={imgUrl} alt="Weather icon" />
            <div>
                {tempCel > 0 ? "+" : ""}
                {`${tempCel}°C`}
            </div>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
        </div>
    );
};
