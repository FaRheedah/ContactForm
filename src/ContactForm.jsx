import {useState} from "react";

function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message Sent.");
  };
    return(
        <div className="form-container">
            <div>
                <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" placeholder="Jane Doe" value={formData.name} onChange={handleChange} autoComplete="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input id="email" name="email" type="email" placeholder="JaneDee29@email.com" value={formData.email} onChange={handleChange} autoComplete="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input id="message" name="message" type="text" placeholder="........." value={formData.message} onChange={handleChange}/>
                </div>
                <button type="submit">
                    Send
                </button>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;