import React, { useState } from 'react';
const FormWithUseState = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleformData = (event) =>{
        // console.log(event.target.name);
        // setFirstName(event.target.value);
        // setLastName(event.target.value);
        // setEmail(event.target.value);
        // setPhone(event.target.value);
        // setPassword(event.target.value);

        // this is a better way to handle form data using a single function for all input fields
        // this is destructuring the name and value from the event.target object and using it to update the state
        const {name, value} = event.target;
        console.log(name, value);

        if(name === "firstname"){
            setFirstName(value);
        }
        if(name === "lastname"){
            setLastName(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "phone"){
            setPhone(value);
        }
        if(name === "password"){
            setPassword(value);
        }
    }

    const getFormData = (event) => {
        event.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            phone,
            password
        }
        // return formData;
    };
    return (
        <div>
            <h1>Form with useState</h1>
            <form onSubmit={getFormData} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto" }}>
                <label htmlFor="">First Name</label>
                <input type="text" name="firstname" value={firstName} placeholder="Enter Your Name" onChange={handleformData} />
                <br />
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname" value={lastName} placeholder="Enter Your Last Name" onChange={handleformData} />
                <br />
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={email} placeholder="Enter Your Email" onChange={handleformData} />
                <br /> 
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" value={phone} placeholder="Enter Your Phone Number" onChange={handleformData} /> 
                <br />              
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={password} placeholder="Enter Your Password" onChange={handleformData} />
                <br />
                <button type="submit">Submit</button>
            </form>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <h2>Form Data</h2>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Last Name:</strong> {lastName}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone Number:</strong> {phone}</p>
                    <p><strong>Password:</strong> {password}</p>
                </div>
        </div>

    )

};

export default FormWithUseState;