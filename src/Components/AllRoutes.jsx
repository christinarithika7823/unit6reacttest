import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { AddCountry } from "./AddCountry";
import { AddCities } from "./AddCities";

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-country" element={<AddCountry />} />
                <Route path="/add-city" element={<AddCities />} />
            </Routes>
        </div>
    )
}