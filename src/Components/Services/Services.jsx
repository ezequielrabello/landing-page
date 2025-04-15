import React from "react";
import "./Services.css"
import sections from "../../constants/data.jsx"
import SingleService from "./SingleService.jsx"

function Services() {
    return(
        <section className="services section-p bg-md-black" id="services">
            <div className="container">
                <div className="services-content">
                    <svg width="1em" height="1em">
                        <linearGradient 
                            id="blue-gradient" 
                            x1="100%" y1="100%"
                            x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#55b3d5"/>
                            <stop offset="100%" stopColor="#5764de"/>
                        </linearGradient>
                    </svg>

                    <div className="item-list grid text-white text-center">
                        {
                            sections.services.map(
                                service => {
                                    return(
                                        <SingleService service={service} key={service.id}/>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services