import React from "react";
import './style/Contact.css'
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

function Contact({id, name, phone, birth, address, email, update, deletec, search}){
    return(
        <div className="contact-container">
            <div className="contact-text">
                <p><span>Name:</span> {name}</p>
                <p><span>Phone:</span> {phone}</p>
                <p><span>Date of birth:</span> {birth}</p>
                <p><span>Address:</span> {address}</p>
                <p><span>Email:</span> {email}</p>
            </div>
            <div className="contact-button"
            onClick={() => update(id)}>
                <AiFillEdit className="contact-button"/>
            </div>
            <div className="contact-button"
            onClick={() => deletec(id)}>
                <AiOutlineDelete className="contact-button"/>
            </div>
        </div>
    );
}

export default Contact;