import React from "react";
import { formatISODateToCustomStrings } from "../../utils/formatISODateToCustomStrings";
import { getFormattedTemp } from "../../utils/getFormattedTemp";
import { getImageUrl } from "../../utils/getImageUrl";

import style from "./index.module.css";

export const Weather = ({ post }) => {
    const { main, weather, isoDateString } = post;
    const tempCel = getFormattedTemp(main.temp);
    const imgUrl = getImageUrl(weather[0].icon);
    const { formattedDate, formattedTime } =
        formatISODateToCustomStrings(isoDateString);

    return (
        <div className={style.weather}>
            <img src={imgUrl} alt="Weather icon" />
            <div>{tempCel}</div>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
        </div>
    );
};
