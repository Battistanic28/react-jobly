import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardTitle, CardHeader, Button, Form, Label, Input } from 'reactstrap';
import JoblyApi from "../API/api.js";



function Signup({setToken, setUser}) {

const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
}

const [formData, setFormData] = useState(initialState);
const {username, password, firstName, lastName, email} = formData;
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
        let res = await JoblyApi.registerUser(formData);
        if (res.token) {
            alert("success!")
            history.push('/companies');
            setFormData(initialState);
            setUser(formData.username);
            setToken(res.token)
            localStorage.setItem('token', res.token);

            let data = await JoblyApi.fetchUserData(formData.username);
            localStorage.setItem('userData', JSON.stringify(data.user));
        } else {
            alert(`Error: ${res}`)
        }
    }


    return(
        <Card>
            <CardHeader>
            <CardTitle tag="h4">Signup</CardTitle>
            </CardHeader>
            <Form>
                <Label htmlFor="username">Username:</Label>
                <Input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}>
                </Input>
                <Label htmlFor="password">Password:</Label>
                <Input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}>
                </Input>
                <Label htmlFor="fname">First Name:</Label>
                <Input 
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}>
                </Input>
                <Label htmlFor="lname">Last Name:</Label>
                <Input 
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}>
                </Input>
                <Label htmlFor="email">Email:</Label>
                <Input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}>
                </Input>
                <Button type="submit" color="primary" onClick={handleSubmit}>Go!</Button>
            </Form>
            <p>Already have an account?</p>
            <Link to={`/login`}>
            <Button color="primary">Login!</Button>
            </Link>
        </Card>
    )
};

export default Signup;