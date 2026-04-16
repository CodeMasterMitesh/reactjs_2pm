import { Button } from "./components/Hello.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
    const url = "https://jsonplaceholder.typicodes.com/posts";
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            // const response = await fetch(url);
            // const data = await response.json();
            const response = await axios.get(url);
            console.log(response.data);
            // console.log(data);
            setData(response.data);
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {data.map((item) => (
                    <div className="card-item" key={item.id} style={{ width: "50%", border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
                        <div className="card_title">{item.title}</div>
                        <div className="card_body">{item.body}</div>
                    </div>
                ))}
            </div>
        </>
    
    )
}

export default Home;