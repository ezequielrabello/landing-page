import React from "react";
import "./Contact.css"
import section from "../../constants/data.jsx"
import { BsArrowRightCircle } from "react-icons/bs";

function Info() {
    return(
        <div className="info bg-md-dark section-p">
            <div className="container">
                <div className="info-content">
                    <div className="item-list grid text-center">
                    {
                        section.contact.map(contact => {
                            return(
                                <div className="item bg-dark translate-effect" key={contact.id}>
                                    <span className="item-icon">{contact.icon}</span>
                                    <div className="item-info-text fw-5 text-white">{contact.info}</div>
                                    <p className='text'>{contact.text}</p>
                                    <a href = "/" className='item-link text-grey'>
                                        <BsArrowRightCircle size = {30} />
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info