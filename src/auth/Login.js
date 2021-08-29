import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardTitle, CardHeader, Button, Form, Label, Input } from 'reactstrap';
import JoblyApi from "../API/api.js";
import "../styles/Form.css";


function Login({setToken, setUser}) {

    const initialState = {
        username: "",
        password: ""
    }
    
    const [formData, setFormData] = useState(initialState);
    const {username, password} = formData;
    const history = useHistory();
    
    
        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(data => ({
                ...data,
                [name]: value
            }
            ))
        }
    
        async function handleSubmit(e) {
            e.preventDefault();
            let res = await JoblyApi.loginUser(formData);
            if (res.token) {
                alert("success!")
                history.push('/companies');
                setFormData(initialState);
                localStorage.setItem('token', res.token);
                setUser(formData.username);
                setToken(res.token);
            } else {
                alert(`Error: ${res}`)
            }
        }

    return(
        <Card>
            <CardHeader>
            <CardTitle tag="h4">Login</CardTitle>
            </CardHeader>
            <Form>
                <Label htmlFor="Username">Username:</Label>
                <Input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}>
                    </Input>
                <Label htmlFor="Password">Password:</Label>
                <Input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}>
                </Input>
                <Button color="primary" onClick={handleSubmit}>Go!</Button>
            </Form>
            <p>Don't have an account?</p>
            <Link to={`/signup`}>
            <Button color="primary">Sign up!</Button>
            </Link>
        </Card>
    )
};

export default Login;