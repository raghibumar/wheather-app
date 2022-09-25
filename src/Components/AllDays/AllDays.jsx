import React from "react";
import moment from "moment";
import styles from "../AllDays/AllDays.module.css";

const AllDays = ({ weatherData, setId }) => {
  return (
    <div className={styles.container}>
      {weatherData.daily.map((e, index) => (
        <div className={styles.firstDiv} onClick={() => setId(index)}>
          <div>{moment(e.dt * 1000).format("ddd")}</div>
          <div>
            {Math.round(e.temp.max)}° {Math.round(e.temp.min)}°
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
            alt=""
          />
          <div>{e.weather[0].main}</div>
        </div>
      ))}
    </div>
  );
};

export default AllDays;
