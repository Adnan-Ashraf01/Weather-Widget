import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, seWeatherInfo] = useState({
        city: "Baramulla",
        feelsLike: 11.62,
        humidity: 34,
        temp: 13.34,
        tempMax: 15.34,
        tempMin: 10.34,
        weather: "broken cloud",
    });

    let updateInfo = (newInfo) => {
        seWeatherInfo(newInfo);
    }


    return (
        <div className="weatherApp">
            <h2 className="appTitle">Weather Dashboard</h2>
            <p className="appSubtitle">Check the weather anywhere in the world</p>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}