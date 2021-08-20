import React, {useState} from "react";
// import { Link, Redirect } from "react-router-dom";


function Search(props) {

    
    const initialState = {
        search: "",
    }

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const {name} = formData;

    
        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(data => ({
                ...data,
                [name]: value
            }))
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmitted(true);
            console.log("submitted")
            console.log(name)
        }

    return(
        <div>
            <form>
                <label htmlFor="search">Search Companies: </label>
                <input name="name" value={name} onChange={handleChange} />
                <button onClick={handleSubmit}>Find!</button>
            </form>
        </div>
    )

}

export default Search;