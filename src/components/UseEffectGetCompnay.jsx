import { use, useEffect, useState } from "react";

export const UseEffectGetCompany = () => {
  const API = "http://localhost:5000/api/public/companies";
  const [company, setCompany] = useState([]);
  
    useEffect(() => {

    const fetchPosts = async () => {
        try{
            const res = await fetch(API);
            const data = await res.json();
            console.log(data);
            setCompany(data);
        }catch(error){
            console.error("Error fetching data:", error);
        }
    } 
    fetchPosts();
    
  },[]);

  return (
    <div>
      <h2>Use Effect Get Company</h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          border: "1px solid #ccc",
          borderRadius: "4px",
          flexDirection: "column",
          display: "flex",
        }}
      >
        {company.map((comp) => (
          <li
            key={comp.id}
            style={{ borderBottom: "1px solid #eee", padding: "12px 16px" }}
          >
            <h3>{comp.name}</h3>
            <img src={`http://localhost:5000/${comp.logo}`} width={"200px"} alt={comp.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
