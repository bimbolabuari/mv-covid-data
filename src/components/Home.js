import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setData } from '../actions/actionCreator';
import microphone from '../images/microphone.png';
import leftArrow from '../images/left-arrow.png';
import right from '../images/right.png';
import settings from '../images/settings.png';

const Home = () => {
  const covidData = useSelector((data) => data.Reducer);
  const [countries, setCountries] = useState(covidData);
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const date = '2020-10-10';
  const APIURL = `https://api.covid19tracking.narrativa.com/api/${date}`;
  useEffect(() => {
    const covidApi = async () => {
      const fetchAPI = await fetch(APIURL);
      const covidData = await fetchAPI.json();
      const data = covidData.dates[date].countries;
      const newData = Object.values(data);
      dispatch(setData(newData));
      // dispatch(filterData(newData, event.target.value));
    };
    covidApi();
  }, []);

  useEffect(() => {
    if (filter !== 'all') {
      const newCovidData = covidData.filter((data) => data.name === filter);
      setCountries(newCovidData);
    } else {
      setCountries([...countries, ...covidData]);
    }
  });

  const onChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="flex header">
        <div className="flex">
          <img className="images" alt="arrow" src={leftArrow} />
          <p>2020</p>
        </div>
        <div>
          <p>most views</p>
        </div>
        <div className="flex">
          <select className="flex stat-container" onChange={onChange}>
            { countries.map(({ id, name }) => (
              <option key={id}>{name}</option>
            ))}
          </select>
          <img className="images" alt="record" src={microphone} />
          <img className="images" alt="settings" src={settings} />
        </div>
      </div>
      <div className="mainCity">
        <h1 className="mostViewed">Covid19 Tracker</h1>
        <h2>365 countries</h2>
      </div>
      <div>
        <h2 className="stats-title">STATS BY COUNTRY</h2>
        <div className="flex stat-container">
          { countries.map(({ id, name, today_confirmed: todayConfirmed }) => (
            <NavLink to={`/details/${id}`} className="navLink stats" key={id}>
              <img className="images" alt="pointer" src={right} />
              <div>
                <p>{name}</p>
                <p>{todayConfirmed}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
