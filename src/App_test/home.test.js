import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

const mockedWeather = {
  count: 1,
  data: [
    {
      app_temp: 18.5,
      aqi: 52,
      city_name: 'Raleigh',
      clouds: 0,
      country_code: 'US',
      datetime: '2022-10-11:15',
      dewpt: 7.7,
      dhi: 104.47,
      dni: 844.41,
      elev_angle: 38.17,
      ghi: 619.66,
      gust: 3.1,
      h_angle: -30,
      lat: 35.7796,
      lon: -78.6382,
      ob_time: '2022-10-11 15:10',
      pod: 'd',
      precip: 0,
      pres: 1016.6,
      rh: 47,
      slp: 1029.8,
      snow: 0,
      solar_rad: 619.7,
      sources: ['1327W'],
      state_code: 'NC',
      station: '1327W',
      sunrise: '11:18',
      sunset: '22:44',
      temp: 19.3,
      timezone: 'America/New_York',
      ts: 1665501000,
      uv: 4.465233,
      vis: 16,
      weather: {
        description: 'Clear sky',
        code: 800,
        icon: 'c01d',
      },
      wind_cdir: 'NNW',
      wind_cdir_full: 'north-northwest',
      wind_dir: 335,
      wind_spd: 0.9,
    },
  ],
};

describe('Home component', () => {
  test('matches the snapshot', () => {
    const home = render(<Home weather={mockedWeather} />);
    expect(home).toMatchSnapshot();
  });
});
