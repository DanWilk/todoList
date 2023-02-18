import React from "react";

const Login = () => {
    return (
    <main>
        <form class="loginForm">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email"></input>
            <label for="password">Password: </label>
            <input type="password" name="password" id="password"></input>
        </form>
    </main>
    )
}

export default Login;