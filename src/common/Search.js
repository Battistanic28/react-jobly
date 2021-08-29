import React, {useState} from "react";
import { Button, Form, Label, Input } from 'reactstrap';
import "../styles/Search.css";

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
            <Form >
                <Label htmlFor="search"></Label>
                <Input placeholder="Search companies..." name="name" value={name} onChange={handleChange} />
                <Button color="primary" onClick={handleSubmit}>Find!</Button>
            </Form>
        </div>
    )

}

export default Search;