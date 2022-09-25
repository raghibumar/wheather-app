import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../City/City.module.css";

const City = ({ setLatitude, setLongitude }) => {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const API_KEY = "acea41cc8dabb7fee849daf18d69d320";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}`
      )
      .then((res) => {
        setLatitude(res.data.city.coord.lat);
        setLongitude(res.data.city.coord.lon);
        setData(res.data);
      });
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputDiv}>
        <input
          type="text"
          placeholder="Enter City Name"
          onChange={handleSearch}
        />
      </div>
      <div className={styles.nameDiv}>
        {data != undefined ? data.city.name : null}
      </div>
    </div>
  );
};

export default City;
