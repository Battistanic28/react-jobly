import React, {useState} from "react";
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
            <form>
                <label htmlFor="search">Search Companies: </label>
                <input name="name" value={name} onChange={handleChange} />
                <button onClick={handleSubmit}>Find!</button>
            </form>
        </div>
    )

}

export default Search;