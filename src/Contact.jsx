import { Button } from "./components/Hello.jsx";
import Nav from "./components/Nav.jsx";
const Contact = () => {
    return (
        <div>
            <Nav/>
            <Button link="https://www.facebook.com" name="FaceBook"/>
             <h1>This is Contact Page</h1>
        </div>
    )
}

export default Contact;