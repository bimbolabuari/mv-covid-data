import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getData from '../actions/actionCreator';
import Filter from './Filter';
import microphone from '../images/microphone.png';
import leftArrow from '../images/left-arrow.png';
import right from '../images/right.png';
import settings from '../images/settings.png';

const Home = () => {
  const covidData = useSelector((data) => data.Reducer);
  const dispatch = useDispatch();
  const date = '2020-10-10';
  const APIURL = `https://api.covid19tracking.narrativa.com/api/${date}`;
  useEffect(() => {
    const covidApi = async () => {
      const fetchAPI = await fetch(APIURL);
      const covidData = await fetchAPI.json();
      const data = covidData.dates[date].countries;
      const newData = Object.values(data);
      return dispatch(getData(newData));
    };
    covidApi();
  }, []);

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
        <div>
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
          { covidData.map(({ id, name, today_confirmed: todayConfirmed }) => (
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
      <Filter />
    </div>
  );
};

export default Home;
