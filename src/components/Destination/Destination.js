
import React, { useState } from 'react';
import './Destination.css';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import fakeData from '../../fackData/RidersData.json';
import { useParams } from 'react-router';

const Map = () => {
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 23.8103, lng: 90.4125 }}
        >
        </GoogleMap>
    ); 
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
 


const Destination = () => {
    const {id} = useParams();
    const rider = fakeData.find(rd => rd.id == id);
    const [destination, setDestination] = useState();

  const handelBlur = (e) => {
    let isFieldValid = true;

    if (e.target.name === "text" &&  e.target.name === "text2") {
        isFieldValid = e.target.value;
       
      } 
      if (isFieldValid) {
        const destinationInfo = {...destination};
        destinationInfo[e.target.name] = e.target.value;
        setDestination(destinationInfo);
      }
  }
    

    return (
        <>
        <div className="container destination__section">
           <div className="row mt-lg-5">
               <div className="col-lg-5 col-md-10 mb-md-4 col-12 ">
               <h4 className="text-center text-success">{destination?.text}  <br/>{destination?.text2}</h4>
                <div className="card p-4 bg-gray">
                <div class="mb-3">
                            <label for="pickFrom" class="form-label">Pick From</label>
                            <input onBlur={handelBlur} type="text" name="text" class="form-control" id="pickFrom" aria-describedby="emailHelp" />
                </div>
                 <div class="mb-3">
                            <label for="pickTo" class="form-label">Pick To</label>
                            <input onBlur={handelBlur} type="text" name="text2" class="form-control" id="picTo" aria-describedby="emailHelp" />
                   </div>
                  
                      <button  className="btn btn-danger" >Search</button>       
                
                </div>
                <div className="card">
                    <div className="card__img d-flex align-items-center">
                        <img src={rider?.imgUrl} className="img-fluid" alt="riders"/>
                         <h6>Price: ${rider?.price}</h6>
                    </div>
                </div>


                
               </div>
              
               <div className="col-lg-7 col-md-10 col-12">
               <div style={{width: '50vw', height: '100'}}>
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places?key=AIzaSyD2SGWYwiiqs3_01lc3jY7dW1rTnTSX19U&callback=initMap"}
                    loadingElement= {<div style={{ height: `100%` }} />}
                    containerElement= {<div style={{ height: `400px` }} />}
                    mapElement= {<div style={{ height: `100%` }} />}
                    />
              </div>
               </div>
           </div>
        </div>
       </> 
    );
};

export default Destination;