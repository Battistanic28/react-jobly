import React, {useState} from "react";
import { Card, CardTitle, CardHeader, Button, Form, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
// import "../styles/Profile.css";
import JoblyApi from "../API/api.js";


function EditProfile({userData}) {
    const initialState = {
        password: "",
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
    }

    const [formData, setFormData] = useState(initialState);
    const {password, firstName, lastName, email} = formData;
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
            let res = await JoblyApi.updateUser(userData.username, formData);
            console.log(res)
            if (res.user) {
                alert("Profile updated!")
                history.push(`/profile/${formData.userName}`);
                setFormData(initialState);
            } else {
                alert(`Error: ${res}`)
            }
        }


        return(
            <div className="form-div">
                <Card className="form-card">
                <CardHeader>
                    <CardTitle tag="h5">{`Edit ${userData.username}`}</CardTitle>
                </CardHeader>
                <Form>
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
                    <Label htmlFor="password">Password:</Label>
                        <Input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}>
                        </Input>
                    <Button color="primary" onClick={handleSubmit}>Go!</Button>
                </Form>
                </Card>
            </div>
        )
    };

export default EditProfile;