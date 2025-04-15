import React from "react";
import "./Footer.css"

function Footer() {
    let date = new Date()
    return(
        <div className="footer flex flex-center bg-black">
            <div className="container flex flex-center w-100">
                <div className="grid footer-content text-center">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, 
                        reprehenderit!
                    </p>
                    <span className="text">&copy; {date.getFullYear().toString} Solnhup Theme</span>
                </div>
            </div>
        </div>
    )
}

export default Footer