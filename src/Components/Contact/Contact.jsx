import React from "react";
import "./Contact.css"
import images from "../../constants/images"
import { Formik } from "formik";
import Map from "./Map.jsx"
import Info from "./Info.jsx"

function Contact() {
    return(
        <div className="contact section-p-top bg-dark" id="contact">
            <div className="container">
                <div className="contact-content grid text-center">
                    <div className="contact-left">
                        <div className="section-t">
                            <h3>Let's Talk?</h3>
                            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Accusamus illum totam assumenda tempore, dicta quidem!</p>
                        </div>
                        <Formik
                            initialValues={{ name: "", email: '', address: '' }}
                            validate={values => {
                                    const errors = {};
                                    
                                    if (!values.name) {
                                        errors.name = "Name is required"
                                    } else if (!/^[A-Za-z\s]*$/.test(values.name)){
                                        errors.name = "Invalid name format"
                                    }

                                    if (!values.email) {
                                        errors.email = 'Email is required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }

                                    if (!values.address) {
                                        errors.address = "Address is required"
                                    }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 400);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-elem">
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className="form-control"
                                        />
                                        <span className="form-control-text">
                                            {errors.name && touched.name && errors.name}
                                        </span>
                                    </div>

                                    <div className="form-elem">
                                        <input 
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className="form-control"
                                        />
                                        <span className="form-control-text">
                                            {errors.email && touched.email && errors.email}
                                        </span>
                                    </div>

                                    <div className="form-elem">
                                        <input 
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                            className="form-control"
                                        />
                                        <span className="form-control-text">
                                            {errors.address && touched.address && errors.address}
                                        </span>
                                    </div>

                                    <div className="flex flex-start">
                                        <button     
                                            type="submit"
                                            className="submit-btn"
                                            disabled = {isSubmitting}>
                                            contact us    
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                    <img src={images.form_main_img} alt="" className="contact-right"/>
                </div>

                <Map/>
                <Info/>
            </div>
        </div>
    )
}
export default Contact