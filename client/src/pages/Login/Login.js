import React, {useState} from "react";
import Auth from "../../utils/auth";

const Login = () => {

    const [userData, setUserData] = useState({email: "", password: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(userData);

        setUserData({
            ...userData,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await fetch("http://localhost:3001/api/user/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
                
            })
            .then( response => response.json())
            .then( (userData) => {
                console.log(userData);
                Auth.login(userData.token);
                if(Auth.loggedIn()) {
                    window.location.assign(`/${userData.user._id}`)
                }
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