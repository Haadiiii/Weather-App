import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import continents from '../country.json';

const red = continents[0].countries[0].countryName;
console.log(red)
const Country = () => {
  const navigate = useNavigate();
  return (
    <div className="continent">
      {continents.map((continent) => (
        <div className="count" key={continent.id} >
          <p className="text-primary">{continent.continent}</p>
          <ul >
            <li onClick={() => navigate(`/Details/${continent.countries[0].countryCities[0].cityName}`)}  >
              {continent.countries[0].countryName}
              {' '}
              -
              {' '}
              {continent.countries[0].countryCities[0].cityName}
            </li>
            <li onClick={() => navigate(`/Details/${continent.countries[1].countryCities[0].cityName}`)} >
              {continent.countries[1].countryName}
              {' '}
              -
              {' '}
              {continent.countries[1].countryCities[0].cityName}
            </li>
            <li onClick={() => navigate(`/Details/${continent.countries[2].countryCities[0].cityName}`)} >
              {continent.countries[2].countryName}
              {' '}
              -
              {' '}
              {continent.countries[2].countryCities[0].cityName}
            </li>
            <li onClick={() => navigate(`/Details/${continent.countries[3].countryCities[0].cityName}`)} >
              {continent.countries[3].countryName}
              {' '}
              -
              {' '}
              {continent.countries[3].countryCities[0].cityName}
            </li>
            <li onClick={() => navigate(`/Details/${continent.countries[4].countryCities[0].cityName}`)} >
              {continent.countries[4].countryName}
              {' '}
              -
              {' '}
              {continent.countries[4].countryCities[0].cityName}
            </li>
            <li onClick={() => navigate(`/Details/${continent.countries[5].countryCities[0].cityName}`)} >
              {continent.countries[5].countryName}
              {' '}
              -
              {' '}
              {continent.countries[5].countryCities[0].cityName}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Country;
