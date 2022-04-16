import React from "react";
export const Details = ({ data: { id, cityname, population, country } }) => {
    return (
        <div>
            <tr>
                <td>{id}</td>
                <td>{country}</td>
                <td>{cityname}</td>
                <td>{population}</td>
                <td><button>Edit</button></td>
            </tr>
        </div>
    )
};