import React, {useState} from "react";
import { Link } from "react-router-dom";


function Form(props) {

    
    const initialState = {
        search: "",
        range: ""
    }

    const [formData, setFormData] = useState(initialState);
    const {name, range} = formData;
    
        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(data => ({
                ...data,
                [name]: value
            }))
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("submitted")
        }

    return(
        <div>
            <h1>{`Search ${props.title}`}</h1>

            <form>
                <label htmlFor="search">Search:</label>
                <input name="name" value={name} onChange={handleChange} />
                <Link to={`/${props.title}/${name}`}>
                <button onClick={handleSubmit}>Find!</button>
                </Link>
                <Link to={`/`}>
                <button>Go back</button>
                </Link>
            </form>
        </div>
    )

}

export default Form;