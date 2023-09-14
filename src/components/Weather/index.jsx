import React from "react";
import moment from "moment";

import style from "./index.module.css";

export const Weather = ({ post }) => {
    const { main, weather, date } = post;
    const tempCel = Math.round(main.temp - 273);
    const img = weather[0].icon;
    const imgUrl = `http://openweathermap.org/img/wn/${img}.png`;
    const formattedDate = moment(date).format("D MMM YYYY");
    const formattedTime = moment(date).format("HH:mm");

    return (
        <div className={style.weather}>
            <img src={imgUrl} alt="Weather icon" />
            <div>{tempCel >= 0 ? `+${tempCel}°C` : `${tempCel}°C`}</div>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
        </div>
    );
};
