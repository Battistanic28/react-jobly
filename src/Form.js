import React, {useState} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import queryString from "query-string";


function Form(props) {

    const params = useParams()
    // const {search} = useLocation();
    // const values = queryString.parse(search)

    
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
            console.log(`/${props.title}/${name}`)
            // const {title, addItem} = props
            // addItem(title, formData)
            // setFormData(initialState)
        }

    return(
        <div>
            <h1>{`Search ${props.title}`}</h1>

            <form>
                <label htmlFor="search">Search:</label>
                <input name="name" value={name} onChange={handleChange} />
                <label htmlFor="range">Range:{range}</label>
                <input type="range" name="range" value={range} onChange={handleChange} />
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