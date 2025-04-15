import React from "react";
import sections from "../../constants/data"
import images from "../../constants/images.js";
import "./Qualities.css"
function Qualities() {
    return(
        <div className="qualities section-p bg-md-black" id="qualities">
            <div className="container">
                <div className="qualities-content grid">
                    <div className="content-left">
                        <div className="section-t text-center">
                            <h3>We are Professionals</h3>
                            <p className="text">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Minima voluptates rerum sed dolor! 
                                Sint officia dicta repellendus in laudantium 
                                rerum perferendis ad aliquam? Error, magnam placeat 
                                dolorum voluptate illo voluptatum!
                            </p>
                        </div>
                        <div className="item-list grid text-white">
                            {
                                sections.qualities.map(quality => {
                                    return(
                                        <div className="item flex" key={quality.id}>
                                            <div className="item-icon flex flex-center">
                                                {quality.icon}
                                            </div>
                                            <div className="item-text">
                                                <h3 className="item-title fs-25">Ideas & Plans</h3>
                                                <p>{quality.text}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="content-right">
                        <img src={images.professionals_main_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qualities