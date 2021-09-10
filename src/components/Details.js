import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import microphone from '../images/microphone.png';
import leftArrow from '../images/left-arrow.png';
import settings from '../images/settings.png';

const Details = () => {
  const covidData = useSelector((data) => data.Reducer);
  const { id } = useParams();
  const countryData = covidData.find((data) => data.id === id);
  console.log(countryData);

  return (
    <div className="home-container">
      <div className="flex header">
        <NavLink to="/home" className="flex">
          <img className="images" alt="arrow" src={leftArrow} />
        </NavLink>
        <div>
          <p>Countries Data</p>
        </div>
        <div>
          <img className="images" alt="record" src={microphone} />
          <img className="images" alt="settings" src={settings} />
        </div>
      </div>
      <div className="mainCity">
        <h1 className="mostViewed">{countryData.name}</h1>
        <h2>
          {countryData.today_confirmed}
          {' '}
          Confirmed Cases.
        </h2>
      </div>
      <div>
        <h2 className="stats-title">Country Breakdown 2020-10-10</h2>
        <ul key={countryData.id} className="flex flex-dir stat-container">
          <li className="navLink w-100 stats">
            Today&apos;s confirmed:
            {countryData.today_confirmed}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s deaths:
            {countryData.today_deaths}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s new recovered:
            {countryData.today_new_recovered}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s new confirmed:
            {countryData.today_new_confirmed}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s new deaths:
            {countryData.today_new_deaths}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s new open cases:
            {countryData.today_new_open_cases}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s new recovered:
            {countryData.today_open_cases}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s recovered:
            {countryData.today_recovered}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s confirmed:
            {countryData.today_confirmed}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s vs yesterday&apos;s confirmed:
            {countryData.today_vs_yesterday_confirmed}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s vs yesterday&apos;s deaths:
            {countryData.today_vs_yesterday_deaths}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s vs yesterday&apos;s open cases:
            {countryData.today_vs_yesterday_open_cases}
          </li>
          <li className="navLink w-100 stats">
            Today&apos;s vs yesterday&apos;s recovered:
            {countryData.today_vs_yesterday_recovered}
          </li>
          <li className="navLink w-100 stats">
            Yesterday&apos;s confirmed:
            {countryData.yesterday_confirmed}
          </li>
          <li className="navLink w-100 stats">
            Yesterday&apos;s deaths:
            {countryData.yesterday_deaths}
          </li>
          <li className="navLink w-100 stats">
            Yesterday&apos;s open cases:
            {countryData.yesterday_open_cases}
          </li>
          <li className="navLink w-100 stats">
            Yesterday&apos;s recovered:
            {countryData.yesterday_recovered}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
