import { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

export const AddCountry = () => {

    const [text, setText] = useState();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload={text}
        // axios.post("http://localhost:8081/countries",text).then((res) => {
        //     console.log("added", res);
        // })
        dispatch(AddCountry(payload));
        console.log("country details..",text);
    }
    const handleChange = (e) => {
        const country = e.target.value;
        setText({
            ...text,
            country
        });
   }
    return (
        <div className="countrybox">
            <h1>Add Country</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label id="n1">Add Country Name : </label>
                    <input id="country" type="text" 
                        placeholder="Enter Country Name" onChange={handleChange} />
                    <br />
                    <button id="sub1"onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}