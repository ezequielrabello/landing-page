import React from "react";
import images from "../../constants/images";
import "./About.css"

function About() {
    return (
        <section className="about section-p bg-dark">
            <div className="container">
                <div className="about-content grid text-center">
                    <div className="content-left">
                        <img src={images.about_main_img} alt="" />
                    </div>
                    <div className="content-left">
                        <div className="section-t">
                            <h3>About Us</h3>
                        </div>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Iste, ipsa iusto quo vitae voluptatem 
                            saepe autem perferendis in aliquid hic adipisci ipsam illum 
                            exercitationem quae iure facilis eligendi consequuntur. In?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About