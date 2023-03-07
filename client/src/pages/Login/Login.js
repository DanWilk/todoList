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
        <div className="FormContainer">
        <form className="loginForm" onSubmit={handleFormSubmit}>
            
            <label className="emailLabel">Email:
            <input className="emailInput" type="email" name="email" id="email" onChange={handleChange}></input>
            </label>
            <label className="passwordLabel">Password: 
            <input className="passwordInput" type="password" name="password" id="password" onChange={handleChange}></input>
            </label>
            <div className="buttonContainer">
            <button type="submit">Login</button>
            </div>
        </form>
        </div>
        <div className="FormContainer">
            <form className="signupForm">
                <label className="usernameLabel">Username:
                    <input className="usernameInput" type="text" name="username" id="username" onChange={handleChange}></input>
                </label>
                <label className="emailLabel">Email:
                    <input className="emailInput" type="email" name="email" id="email"></input>
                </label>
                <label className="passwordLabel">Password: 
                    <input className="passwordInput" type="password" name="password" id="password"></input>
                </label>
            </form>
        </div>
    </main>
    )
}

export default Login;