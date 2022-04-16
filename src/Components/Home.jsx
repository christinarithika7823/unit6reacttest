import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import { cites } from "../../db1.json";
export const Home = () => {
    const [datas, setDatas] = useState();


    // const tablebody = datas.map((e) => {
    //     return (
    //         <tr>
    //             <td>{e.id}</td>
    //             <td>{e.country}</td>
    //             <td>{e.cityname}</td>
    //             <td>{e.population}</td>
    //         </tr>
    //     );
    // });

    useEffect(() => {
        const infos = async () => {
            const response = await axios("http://localhost:8081/cities");
            setDatas(response.data);
        }
        infos();
    },[])

    return (
        <div>
            <h1>Countries and Cities Table</h1>
            <div id="pagebox">
                <div id="lcount"><Link to="/add-country">Add Country</Link></div>
                <div id="lcity">  <Link to="/add-city">Add City</Link></div>
            </div>
            <div>
                <table border="1px">
                    <thead>
                        <tr>
                        <th><p>id</p></th>
                        <th><p>Country</p></th>
                        <th><p>City</p></th>
                        <th><p>Population</p></th>
                        </tr>
                    </thead>
                    <tbody id="table">
                        {/* {tablebody} */}
                    </tbody>
                </table>
            </div>
           
        </div>
    )
}