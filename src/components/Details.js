import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCity } from '../Redux/DetailsActions';

function Details() {
  const {data} = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { cityName } = useParams();

  useEffect(() => {
    dispatch(fetchCity(cityName));
  }, []);
  console.log(data)

  return (
    <div className="continent">
        <div className="count" key={data.id}>
          <p className="text-primary">{data.data}</p>
          <ul>
            <li>
              {data.city_name}
            </li>
            <li>
              {data.temp}
            </li>
            <li>
              {data.datetime}
            </li>
            <li>
              {data.wind_spd}
            </li>
          </ul>
        </div>
    </div>
  );
}
export default Details;
