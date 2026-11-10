import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({ info }) {
    const HOT_URL = import.meta.env.VITE_HOT_URL;
    const COLD_URL = import.meta.env.VITE_COLD_URL;
    const RAIN_URL = import.meta.env.VITE_RAIN_URL;

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card className="weatherCard">

                    <CardMedia
                        className="weatherImage"
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 10 ? HOT_URL : COLD_URL}
                        title="Weather"
                    />

                    <CardContent className="weatherContent">

                        <Typography className="cityName" gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 10 ? <SunnyIcon /> : <AcUnitIcon />}
                        </Typography>

                        <Typography className="weatherDetails" variant="body2" component="div">
                            <div className="weatherTemp">
                                {info.temp}&deg;C
                            </div>

                            <div className="weatherStats">
                                <div className="weatherItem">
                                    <span>Humidity</span>
                                    <strong>{info.humidity}%</strong>
                                </div>

                                <div className="weatherItem">
                                    <span>Min Temperature</span>
                                    <strong>{info.tempMin}&deg;C</strong>
                                </div>

                                <div className="weatherItem">
                                    <span>Max Temperature</span>
                                    <strong>{info.tempMax}&deg;C</strong>
                                </div>
                            </div>

                            <p className="weatherDescription">
                                {info.weather}
                            </p>

                            <p className="feelsLike">
                                Feels like {info.feelsLike}&deg;C
                            </p>
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}