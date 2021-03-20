
import React from 'react';
import './Destination.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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
    return (
        <>
        <div className="container destination__section">
           <div className="row mt-lg-5">
               <div className="col-lg-5 col-md-10 mb-md-4 col-12 ">
                <div className="card p-4 bg-gray">
                <div class="mb-3">
                            <label for="pickFrom" class="form-label">Pick From</label>
                            <input type="text" class="form-control" id="pickFrom" aria-describedby="emailHelp" />
                </div>
                 <div class="mb-3">
                            <label for="pickTo" class="form-label">Pick To</label>
                            <input type="text" class="form-control" id="picTo" aria-describedby="emailHelp" />
                   </div>
                  
                      <button  className="btn btn-danger" >Search</button>       
                
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