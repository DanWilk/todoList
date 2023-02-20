import React, {useState} from "react";
import Auth from "../../utils/auth";

const Login = () => {

    const [userData, setUserData] = useState({usename: "", email: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await fetch("http://localhost3001.com/api/user", {
                method: "POST",
                body: JSON.stringify(userData),
                
            })
            .then(dbUserData => {
                console.log(dbUserData);
                Auth.login(dbUserData);
            })
        } catch(e) {
            console.error(e);
        }
    }
    return (
    <main>
        <form className="loginForm" onSubmit={handleFormSubmit}>
            <label>Email: 
            <input type="email" name="email" id="email" onChange={handleChange}></input>
            </label>
            <label>Password: 
            <input type="password" name="password" id="password" onChange={handleChange}></input>
            </label>
            <button type="submit">Login</button>
        </form>

    </main>
    )
}

export default Login;