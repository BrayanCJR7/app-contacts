import React, { useState } from "react";
import './style/ContactForm.css'

import { v4 as uuidv4 } from 'uuid';

function ContactForm(props) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [search, setSearch] = useState('');


    const shipping = e => {
        e.preventDefault();
        const newContact = {
            id: uuidv4(),
            name: name,
            phone: phone,
            birth: birth,
            address: address,
            email: email,
        }
        props.onSubmit(newContact)
    }

    const searchC = e => {
        setSearch(e.target.value)
        filter(e.target.value)

    }
    const filter = (valueSearch) => {
        var searchresults = name.filter((elemento) => {
            if (elemento.name.tostring().toLowerCase().includes(valueSearch.toLowerCase())
            || elemento.phone.tostring().toLowerCase().includes(valueSearch.toLowerCase())
            || elemento.email.tostring().toLowerCase().includes(valueSearch.toLowerCase())
            ){
                return elemento;
            }
            setName(searchresults);
        })
    }
    return (
        <>
            <form
                className="contact-form"
                onSubmit={shipping}>
                <input
                    className="contact-input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)} />
                <input
                    className="contact-input"
                    type="number"
                    min="1930-01-01"
                    max="2016-12-31"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)} />
                <input
                    className="contact-input"
                    type="date"
                    placeholder="Date of Birth"
                    name="date-of-birth"
                    onChange={(e) => setBirth(e.target.value)} />
                <input
                    className="contact-input"
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)} />
                <input
                    className="contact-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="button-contact">Save Contact</button>
            </form>
            <form
                onSubmit={search}>
                <input
                    className="contact-input"
                    type="text"
                    placeholder="Search Contact"
                    name="search"
                    onChange={searchC}
                />
                <button type="submit" className="button-contact" >Search</button>
            </form>
        </>
    );
}

export default ContactForm;