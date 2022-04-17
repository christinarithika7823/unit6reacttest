import { useState } from "react";
import axios from "axios";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";
export const AddCities = () => {
    const [data, setData] = useState({
        cityname: "",
        population: "",
        country: ""
    });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const citydata = {
            cityname: data.cityname,
            population: data.population,
            country: data.country
        }
        dispatch(AddCities(citydata));
        // axios.post("http://localhost:8082/cities", citydata).then((res) => {
        //     console.log("data added", res.cityname);
        // })
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
        <div className="countrybox1">
            <h1>Add City</h1>
            <form onSubmit={handleSubmit}>
                <label id="n2">Add City Name : </label>
                <input id="city"type="text" name="cityname" value={data.cityname} onChange={handleChange} placeholder="Enter City Name" />
                <br />
                <label id="n3">Add Population : </label>
                <input id="pop"type="text" name="population" value={data.population} onChange={handleChange} placeholder="Enter Population" />
                <br />
                <label id="n4">Add Country Name : </label>
                <input id="country12"type="text" name="country" value={data.country} onChange={handleChange} placeholder="Enter Country Name" />
                <button id="sub2" onSubmit={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}