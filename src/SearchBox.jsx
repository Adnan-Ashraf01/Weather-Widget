import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            setError(false);
            return result;
        } catch (err) {
            throw err;
        }


    }



    let handleChange = (event) => {
        setCity(event.target.value);

    }
    let handleSubmit = async (event) => {
         event.preventDefault();
        try {
            let newInfo = await getWeatherInfo();
              setCity("");
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }



    return (
        <div className='searchBox'>
            <form action="" onSubmit={handleSubmit} className="searchForm">
                <TextField  className="cityInput"  id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <Button variant="contained" type='Submit'  className="searchBtn">Search</Button>
                {error && <p  className="errorMsg">No such place exists</p>}
            </form>
        </div>
    )
}