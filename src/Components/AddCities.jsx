import { useState } from "react";
import axios from "axios";
import "../App.css";
export const AddCities = () => {
    const [data, setData] = useState({
        cityname: "",
        population: "",
        country: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const citydata = {
            cityname: data.cityname,
            population: data.population,
            country: data.country
        }
        axios.post("http://localhost:8081/cities", citydata).then((res) => {
            console.log("data added", res.cityname);
        })
        console.log("city added", data);
    }

    const handleChange = (e) => {
        const info = e.target.value;
        setData({
            ...data,
            [e.target.name]:info
        })
    }
    return (
        <div>
            <h1>Add City</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cityname" value={data.cityname} onChange={handleChange} placeholder="Enter City Name" />
                <br />
                <input type="text" name="population" value={data.population} onChange={handleChange} placeholder="Enter Population" />
                <br />
                <input type="text" name="country" value={data.country} onChange={handleChange} placeholder="Enter Country Name" />
                <button  onSubmit={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}