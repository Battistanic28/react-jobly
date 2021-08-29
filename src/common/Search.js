import React, {useState} from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../styles/Form.css";

function Search({searchFor}) {


    const [formData, setFormData] = useState("");
    const {name} = formData;

    
        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(data => ({
                ...data,
                [name]: value
            }
            ))
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            searchFor(`?name=${formData.name}`)
        }

    return(        
        <div>
            <Form>
                <FormGroup row>
                <Label htmlFor="search">Search Companies: </Label>
                <Input name="name" value={name} onChange={handleChange} />
                <Button onClick={handleSubmit}>Find!</Button>
                </FormGroup>
            </Form>
        </div>
    )

}

export default Search;