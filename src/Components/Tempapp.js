import React, { useEffect,useState } from "react"
import "./css/style.css";

const TempApp = () => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect(()=>{
            const fetchApi= async()=>{
                const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=de13a30d1d9987d30e596acb289267a8`
                const response = await fetch(url);
                const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

 

  return (
    <>
        <div className="box">
            <div className="inputData">
                <input type="search" value={search} className="inputField" placeholder="Enter your city for weather "onChange={(e)=>{
                    {setSearch(e.target.value)}
                }}/>
            </div>
{!city ? (
    <p className="errormsg">No Data Found</p>):(
    <div className="container-weather">
        <div className="info">
            <h2 className="location">
                <i className="fas fa-street-view"></i>City: {search}
            </h2>
            <h2 className="temp">Temperature: {city.temp} &deg;Cel</h2>
            <h3 className="tempin_max">Min : {city.temp_min}&deg;Cel | Max : {city.temp_max}&deg;Cel </h3>
        </div>

        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
    </div>
    )}
        

        </div>
    </>
  )
}
export default TempApp;