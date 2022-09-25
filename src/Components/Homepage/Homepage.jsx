import axios from "axios";
import React, { useEffect, useState } from "react";
import TodaysDay from "../TodaysDay/TodaysDay";
import AllDays from "../AllDays/AllDays";
import City from "../City/City";
import styles from "../Homepage/Homepage.module.css";

const Homepage = () => {
  const API_KEY = "acea41cc8dabb7fee849daf18d69d320";
  const [id, setId] = useState(0);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&APPID=${API_KEY}`
      ).then((res) => {
        setWeatherData(res.data);
      });
    };
    fetchData();
  }, [latitude, longitude]);

  return (
    <div className={styles.container}>
      {weatherData != undefined ? (
        <>
          <City setLatitude={setLatitude} setLongitude={setLongitude} />
          <AllDays weatherData={weatherData} setId={setId} />
          <TodaysDay weatherData={weatherData} id={id} />
        </>
      ) : null}
    </div>
  );
};

export default Homepage;
