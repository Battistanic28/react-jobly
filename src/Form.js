import React, {useState} from "react";
import { Link } from "react-router-dom";


function Form(props) {
    
    const initialState = {
        name: "",
        range: ""
    }

    const [formData, setFormData] = useState(initialState);
    
        const handleChange = e => {
            const {name, value} = e.target;
            console.log(formData.range)
            setFormData(data => ({
                ...data,
                [name]: value
            }))
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const {title, addItem} = props
            addItem(title, formData)
            setFormData(initialState)
        }

    return(
        <div>
            <h1>{`Search ${props.title}`}</h1>

            <form>
                <label htmlFor="name">Name:</label>
                <input name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="range">Range:{formData.range}</label>
                <input type="range" name="range" value={formData.range} onChange={handleChange} />
                <button onClick={handleSubmit}>Find!</button>
                <Link to={`/`}>
                <button>Go back</button>
                </Link>
            </form>
        </div>
    )

}

export default Form;