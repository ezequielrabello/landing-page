import React from "react"
import NavBar from "../NavBar/Navbar.jsx"
import "./Header.css"
import { FaPaperPlane } from "react-icons/fa"


function Header() {
    return(
        <header className="header flex flex-center flex-column">
            <NavBar/>
            <div className="container">
                <div className="header-content text-center flex flex-column">
                    <h1 className="text-uppercase header-title">
                        marketing solution agency
                    </h1>
                    <p className="text-lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptatum harum quae unde similique autem obcaecati ipsa, quia corporis amet 
                        nesciunt! Alias harum unde mollitia nemo fugiat perferendis necessitatibus! 
                        Accusantium, debitis!
                    </p>
                    <a href="/" className="btn header-btn btn-blue">
                        <FaPaperPlane/> <span>Get Started</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header