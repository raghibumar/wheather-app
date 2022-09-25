import moment from "moment";
import React, { useState } from "react";
import styles from "../TodaysDay/TodaysDay.module.css";

const TodaysDay = ({ weatherData, id }) => {
  return (
    <>
      <div className={styles.firstDiv}>
        <div>
          <div>
            <b>Pressure</b>
          </div>
          <div>{weatherData.daily[id].pressure} hpa</div>
        </div>
        <div>
          <div>
            <b>Humidity</b>
          </div>
          <div>{weatherData.daily[id].humidity}%</div>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <div>
          <div>
            <b>Sunrise</b>
          </div>
          <div>
            {moment(weatherData.daily[id].sunrise * 1000).format("hh:mm a")}
          </div>
        </div>
        <div>
          <div>
            <b>Sunset</b>
          </div>
          <div>
            {moment(weatherData.daily[id].sunset * 1000).format("hh:mm a")}
          </div>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <div>
          <div>
            <b>5 AM</b>
          </div>
          <div>{Math.round(weatherData.daily[id].temp.day)}°</div>
        </div>
        <div>
          <div>
            <b>2 PM</b>
          </div>
          <div>{Math.round(weatherData.daily[id].temp.eve)}°</div>
        </div>
        <div>
          <div>
            <b>6 PM</b>
          </div>
          <div>{Math.round(weatherData.daily[id].temp.min)}°</div>
        </div>
      </div>
    </>
  );
};

export default TodaysDay;
