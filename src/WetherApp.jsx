import { Button } from "./components/Hello.jsx";
import Nav from "./components/Nav.jsx";
import { Footer } from "./Footer.jsx";
import WetherAppcss from './WetherAppcss.module.css'
console.log(WetherAppcss)
const WetherApp = () => {
    return (
        <>
            <div className={WetherAppcss.wether_cell}>
                <form>
                    <div className={WetherAppcss.form_input}>
                        <label htmlFor="">Enter City Name :</label>
                        <input type="text" name="city"/>
                    </div>
                    <div className={WetherAppcss.from_btn}>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default WetherApp;