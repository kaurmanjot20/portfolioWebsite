import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

        try {
            const contactsRef = ref(db, 'contacts');
            await push(contactsRef, formData);
            console.log('Form submitted successfully!');
            setSuccessMessage('Form submitted successfully!');
            setErrorMessage('');

            // Reset the form after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Error submitting form. Please try again.');
            setSuccessMessage('');
        }
    };

    useEffect(() => {
        let successTimeout;
        let errorTimeout;

        if (successMessage) {
            successTimeout = setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Message will disappear after 3 seconds
        }

        if (errorMessage) {
            errorTimeout = setTimeout(() => {
                setErrorMessage('');
            }, 3000); // Message will disappear after 3 seconds
        }

        // Clean up the timeout on component unmount or when messages change
        return () => {
            clearTimeout(successTimeout);
            clearTimeout(errorTimeout);
        };
    }, [successMessage, errorMessage]);

    return (
        <div className="contact-form-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name" // Set autocomplete to "name"
            required
        />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email" // Set autocomplete to "email"
            required
        />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off" // You can set it to "off" if it's not applicable
            required
        ></textarea>
    </div>
                <button type="submit">Send</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default ContactForm;
