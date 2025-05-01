import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.png'
import mail_icon from '../../assets/mail_icon.svg'
import call from '../../assets/call.png'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e3a5ce83-526e-403c-b2cc-bda6da3d2a9c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Connect</h1>
            <p>Whether you have a project idea, need a website makeover I’d like to hear from you. Fill out the form or send me an email, and I’ll get back to you soon.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>gomathisreeelumalai@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call} alt="" /> <p>+91-7639944090</p>
                    </div>
            </div>
        </div>
        <form onSubmit={onSubmit}className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your EmailID' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'>
            </textarea>
            <button type='submit' className="contact-submit">Submit </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
