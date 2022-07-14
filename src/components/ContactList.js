import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Contact from './Contact'
import './style/ContactList.css';

function ContactList() {

    const [contacts, setContacts] = useState([]);

    const addContact = contact => {
        console.log(contact);
        if (contact.name.trim() &&
            contact.phone.trim() &&
            contact.birth.trim() &&
            contact.address.trim() &&
            contact.email.trim()) {
            contact.name = contact.name.trim();
            contact.phone = contact.phone.trim();
            contact.birth = contact.birth.trim();
            contact.address = contact.address.trim();
            contact.email = contact.email.trim();
            const updateContact = [contact, ...contacts]
            setContacts(updateContact);
        }
    }

    const deleteContact = id => {
        const updateContact = contacts.filter(contact => contact.id !== id);
        setContacts(updateContact);
    }

    const searchContact = contact => {
        const Search = this.state.contactos.filter(contacto => {
            if (contact.name.includes(contact) ||
                contact.phone.includes(contact) ||
                contact.email.includes(contact)) {

                return contact;
            }
        });
        this.setState({ contactos: Search })
    }

    return (
        <>
            <ContactForm onSubmit={addContact} />
            
            <div className='contact-list-container'>
                {
                    contacts.map((contact) =>
                        <Contact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            phone={contact.phone}
                            birth={contact.birth}
                            address={contact.address}
                            email={contact.email}
                            search={searchContact}
                            deletec={deleteContact}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ContactList;