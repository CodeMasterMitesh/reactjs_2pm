import WetherAppcss from './WetherAppcss.module.css'

const WetherApp = () => {
    return (
        <main className={WetherAppcss.wether_cell}>
            <section className={WetherAppcss.weather_card}>
                <div className={WetherAppcss.card_header}>
                    <h1>Weather Forecast</h1>
                    <p>Search current weather conditions for any city</p>
                </div>

                <form className={WetherAppcss.weather_form}>
                    <div className={WetherAppcss.form_input}>
                        <label htmlFor="city">Enter City Name</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder="e.g. Ahmedabad"
                            autoComplete="off"
                        />
                    </div>

                    <button type="submit" className={WetherAppcss.from_btn}>Check Weather</button>
                </form>

                <div className={WetherAppcss.weather_preview}>
                    <h2>Mumbai</h2>
                    <p className={WetherAppcss.temperature}>29 C</p>
                    <p className={WetherAppcss.condition}>Partly Cloudy</p>
                </div>
            </section>
        </main>
    )
}

export default WetherApp;