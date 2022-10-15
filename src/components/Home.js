import React, { useState } from 'react';
import Continent from './Continent';

function Home() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=104126515dcd47909287677b53fb12dd&minutely`;
  // const weather = useSelector((state) => state.weather);
  const fetchWeather = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(url);
      const weather = await response.json();
      setData(weather);
      setCity('');
    }
  };
  // const dispatch = useDispatch;
  return (
    <div>
      <div className="inputContainer">
        <input
          type="text"
          value={city}
          className="input"
          placeholder="Enter a city"
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={fetchWeather}
        />
      </div>
      <div className="sectionOne">
        <div className="sectorOne">
          {data.data ? <p>{data.data[0].city_name}</p> : null}
          {data.data ? (
            <h1>
              {data.data[0].temp.toFixed()}
              °F
            </h1>
          ) : null}
        </div>
        <div className="sectorTwo">
          {data.data ? <p>{data.data[0].weather.description}</p> : null}
        </div>
      </div>
      <div className="divider">More Details</div>
      <div className="sectionTwo">
        <div className="left">
          {data.data ? <p>{data.data[0].ob_time}</p> : null}
          <p>Date and Time</p>
        </div>
        <div className="middle">
          {data.data ? <p>{data.data[0].timezone}</p> : null}
          <p>Timezone</p>
        </div>
        <div className="right">
          {data.data ? (
            <p>
              {data.data[0].wind_spd}
              {' '}
              MPH
            </p>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
      <Continent />
    </div>
  );
}
export default Home;
// {
//   "count": 1,
//   "data": [{
//     "app_temp": 18.5,
//     "aqi": 52,
//     "city_name": "Raleigh",
//     "clouds": 0,
//     "country_code": "US",
//     "datetime": "2022-10-11:15",
//     "dewpt": 7.7,
//     "dhi": 104.47,
//     "dni": 844.41,
//     "elev_angle": 38.17,
//     "ghi": 619.66,
//     "gust": 3.1,
//     "h_angle": -30,
//     "lat": 35.7796,
//     "lon": -78.6382,
//     "ob_time": "2022-10-11 15:10",
//     "pod": "d",
//     "precip": 0,
//     "pres": 1016.6,
//     "rh": 47,
//     "slp": 1029.8,
//     "snow": 0,
//     "solar_rad": 619.7,
//     "sources": ["1327W"],
//     "state_code": "NC",
//     "station": "1327W",
//     "sunrise": "11:18",
//     "sunset": "22:44",
//     "temp": 19.3,
//     "timezone": "America/New_York",
//     "ts": 1665501000,
//     "uv": 4.465233,
//     "vis": 16,
//     "weather": {
//       "description": "Clear sky",
//       "code": 800,
//       "icon": "c01d"
//     },
//     "wind_cdir": "NNW",
//     "wind_cdir_full": "north-northwest",
//     "wind_dir": 335,
//     "wind_spd": 0.9
//   }]
// }
