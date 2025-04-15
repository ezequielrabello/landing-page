import React from "react"
import SingleFeature from"./SingleFeature.jsx"
import "./Features.css"
import sections from "../../constants/data.jsx"

function Features() {
    return(
        <div className="features section-p bg-black" id="features">
            <div className="container">
                <div className="features-content">
                    <div className="item-list text-white">
                        {
                            sections.features.map(feature => {
                                return (
                                    <SingleFeature key={feature.id} {...feature}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features