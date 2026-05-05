import { Button } from "./components/Hello.jsx";
import { UseReducerHooks } from "./components/UseReducerHooks.jsx";
const About = () => {
    return (
        
        <div>
            <Button link="https://www.facebook.com" name="FaceBook"/>
             <h1>This is About Page</h1>
             <UseReducerHooks/>
        </div>

    )
}

export default About;