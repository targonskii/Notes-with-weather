import React from 'react';

const Weather = ({ post }) => {
  const tempCel = Math.round(post.main.temp - 273);
  const img = post.weather[0].icon;
  const imgUrl = `http://openweathermap.org/img/wn/${img}.png`;
  return (
    <div className='weather'>
      <img src={imgUrl} alt='img_weather' />
      {tempCel > 0 ? <div>+{tempCel}&#176;C</div> : <div>{tempCel}&#176;C</div>}
      <p>{`${post.date.slice(0, 11)}`}</p>
      <p>{`${post.date.slice(11)}`}</p>
    </div>
  );
};

export default Weather;
