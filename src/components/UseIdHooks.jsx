import { useId,useRef } from "react";
const UseIdHooks = () => {
    const nameId = useId() + "name";
    // console.log(nameId);
    const lastNameId = useId() + "lastName";
    const emailId = useId() + "email";

    const name = useRef('null');
    const lastName = useRef('null');
    const email = useRef('null');

    // console.log(nameId, lastNameId, emailId);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name.current.value, lastName.current.value, email.current.value);

    }

    return (
        <div>
            <h1>UseIdHooks Component</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor={nameId}>Name</label>
                <input type="text" name="name" placeholder="Enter your name" id={nameId} ref={name} />
                <br />
                <label htmlFor={lastNameId}>LastName</label>
                <input type="text" name="lastName" placeholder="Enter your last name" ref={lastName} id={lastNameId} />
                <br />
                <label htmlFor={emailId}>Email</label>
                <input type="email" name="email" placeholder="Enter your email" ref={email} id={emailId} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UseIdHooks;