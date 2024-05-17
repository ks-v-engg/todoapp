import React from "react";
import { useNavigate } from "react-router-dom";
import { Routetodo } from "./Route";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Row, Col} from "react-bootstrap";

const Login = () => {

const loginnavi =  useNavigate();

const login = () => {
    loginnavi(Routetodo.todolist)
    }
const [email,Setemail] = React.useState('');
const [passowrd,Setpassword] = React.useState('');

const [result,setResult] = React.useState('');

const onSubmit = (event) => {
    event.preventDefault();
   
   if (email === 'test@gmail.com' && passowrd === '12345678') 
    {
        setResult('Login Sucessful');
        login();
    } else {
        setResult('Login Unsucessful');
    }
    
}

return  <div> 
<Row>
    <Col class="text-center"> <h3>Login</h3></Col>
</Row>

<div class="d-flex justify-content-center align-items-center vh-100">

    <Form onSubmit={onSubmit}>
    <Form.Control
        type="text" 
        value={email} 
        name="email" 
        id="email" 
        placeholder="Enter email" 
        onChange={(e) => Setemail(e.target.value)}/> <br />
    <Form.Control 
        type="password" 
        value={passowrd} 
        name="password" 
        id="password" 
        placeholder="Enter password" 
        onChange={(e) => Setpassword(e.target.value)}/> <br />
    <Button variant="primary"
        type="submit" 
        value={"Login"}> Login </Button>
    <br />
    <h3>{result}</h3>
    </Form>
</div>
</div>
}

export default Login