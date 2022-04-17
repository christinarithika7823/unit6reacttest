import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);



    // const tablebody = 

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8081/cities").then((response) => {
            setDatas(response.data);
        })
            .finally(() => {
            setLoading(false);
        });
    },[])
    if (loading) {
        return <p>Data is loading...</p>;
    }
    const Sort = (a) => {
        var val = datas;
        if (a == 1) {
            val = val.sort((a, b) => { return a.population - b.population });

        } else if (a == -1) {
            val = val.sort((a, b) => { return b.population - a.population });

        }
        // console.log(arr)
        setDatas([...val]);
    }
    return (
        <div>
            <h1>Countries and Cities Table</h1>
            <button onClick={() => { Sort(1) }}> Ascending Order</button>
            <button onClick={() => { Sort(-1) }}>Descending Order</button>
            <div id="pagebox">
                <div id="lcount"><Link to="/add-country">Add Country</Link></div>
                <div id="lcity">  <Link to="/add-city">Add City</Link></div>
            </div>
            <div>
                <table border="1px">
                    {/* <thead> */}
                    <tbody>
                        <tr>
                        <th><p>id</p></th>
                        <th><p>Country</p></th>
                        <th><p>City</p></th>
                        <th><p>Population</p></th>
                        </tr>
                    {/* </thead> */}

                    
                        {datas.map((e) => {
                            // <tr id="table">
                            return (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.country}</td>
                                    <td>{e.cityname}</td>
                                    <td>{e.population}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
           
        </div>
    )
}