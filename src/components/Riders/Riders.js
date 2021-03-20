import React from 'react';
import { useHistory } from 'react-router';
import './Riders.css'

const Riders = (props) => {
    const{id, title, imgUrl} = props.rider;
    const history = useHistory()

    const handelRiders = () => {
        history.push(`/destination/${id}`);
    }
    
    return (
        <div className="card-body col-lg-3 col-md-6 col-12  ">
           <div className="card" onClick={handelRiders}>
              <img className="img-fluid" src={imgUrl} alt="ridersImg"/>
              <h3 className="text-center text-dark text-uppercase">{title}</h3>
           </div> 
        </div>
    );
};

export default Riders;