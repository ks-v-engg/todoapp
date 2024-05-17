import React from "react";
import { useNavigate } from "react-router-dom";
import { Routetodo } from "./Route";

const Login = () => {

const loginnavi =  useNavigate();

const login = () => {
    loginnavi(Routetodo.todolist)
    }
    
return <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" id="username"/>
        <input type="password" placeholder="Password" id="password"/>
        <button onClick={login}>Login</button>
</div>
} 

export default Login;