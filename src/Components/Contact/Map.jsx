import React from "react";
import "./Contact.css"
import { matchPath } from "react-router";

function Map(){
    return(
        <div className="map-content">
             {/* eslint-disable-next-line */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1554860.499835665!2d-80.02493840000001!3d40.43461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sus!4v1744673021436!5m2!1spt-BR!2sus" 
            width="100%" height="450" style={{border:0}}></iframe>
        </div>
    )
}

export default Map