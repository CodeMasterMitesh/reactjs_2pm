import WetherAppcss from './WetherAppcss.module.css'
import { useRef, useState } from 'react'
const WetherApp = () => {
    const key = 'eb0540629f26a9b0b154c14aba5e7295';

    const cityref = useRef(null);
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState('')

    // console.log(wetherData);
    const handleFormData = async(e) =>{
        e.preventDefault();
        setError('')

        const city = cityref.current?.value?.trim();
        if (!city) {
            setError('Please enter a city name.')
            return;
        }

        const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
        // console.log(APIURL);
        try {
            const response = await fetch(APIURL);
            console.log(response);
            const data = await response.json();
            // console.log(data);

            if (response.ok === false) {
                setWeatherData(null)
                setError(data?.message || 'City not found.')
                return;
            }

            setWeatherData(data);
        } catch {
            setWeatherData(null)
            setError('Unable to fetch weather data right now.')
        }

    }

    // console.log(wetherData);

    return (
        <main className={WetherAppcss.wether_cell}>
            <section className={WetherAppcss.weather_card}>
                <div className={WetherAppcss.card_header}>
                    <h1>Weather Forecast</h1>
                    <p>Search current weather conditions for any city</p>
                </div>

                <form  onSubmit={handleFormData} className={WetherAppcss.weather_form}>
                    <div className={WetherAppcss.form_input}>
                        <label htmlFor="city">Enter City Name</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder="e.g. Ahmedabad"
                            autoComplete="off"
                            ref={cityref}/>
                    </div>

                    <button type="submit" className={WetherAppcss.from_btn}>Check Weather</button>
                </form>

                {error ? <p className={WetherAppcss.condition}>{error}</p> : null}

                <div className={WetherAppcss.weather_preview}>
                    <h2>{weatherData?.name || 'Search a city'}</h2>
                    <p className={WetherAppcss.temperature}>{weatherData?.main ? `${Math.round(weatherData.main.temp)} °C` : '--'}</p>
                    <p className={WetherAppcss.condition}>{weatherData?.weather?.[0]?.main || 'No weather data yet'}</p>
                </div>
            </section>
        </main>
    )
}

export default WetherApp;