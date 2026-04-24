import WetherAppcss from './WetherAppcss.module.css'
import { useRef, useState } from 'react'
const WetherApp = () => {
    const key = 'eb0540629f26a9b0b154c14aba5e7295';

    const cityref = useRef('null');
    const [wetherData,setWetherData]  = useState([])

    // console.log(wetherData);
    const handleFormData = async(e) =>{
        e.preventDefault();

        const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityref.current.value}&units=metric&appid=${key}`;
        // console.log(APIURL);
        const response = await fetch(APIURL);
        // console.log(response);
        const data = await response.json();
        // console.log(data.main.temp);
        setWetherData(data);

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
                            ref={cityref}                        />
                    </div>

                    <button type="submit" className={WetherAppcss.from_btn}>Check Weather</button>
                </form>

                <div className={WetherAppcss.weather_preview}>
                    <h2>Mumbai</h2>
                    <p className={WetherAppcss.temperature}>  {weatherData ? Math.round(weatherData.main.temp) : ''} °C</p>
                    <p className={WetherAppcss.condition}>Partly Cloudy</p>
                </div>
            </section>
        </main>
    )
}

export default WetherApp;