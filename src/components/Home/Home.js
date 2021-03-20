import React, { useEffect, useState } from 'react';
import header from '../../images/riders-bg.jpg';
import ridersData from '../../fackData/RidersData.json';
import Riders from '../Riders/Riders';
import './Home.css'
const Home = () => {
 const [riders, setRiders] = useState([]);

 useEffect(() => {
    setRiders(ridersData);
 }, []);

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header d-flex align-items-center">
       <div className="container">
           <div className="row">
               {
                riders.map((rider) => <Riders key={rider.id} rider={rider}/>)  
               }
           </div>
       </div>
    </div>
    );
};

export default Home;