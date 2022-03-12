import React, { useState } from "react";
import "../Styles/contact.css";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      className="Section"
      id="Contact"
      action="https://formsubmit.co/vugartaghiyev00@gmail.com"
      method="POST"
    >
      <div className="Section-Title">
        <h3>CONTACT</h3>
        <hr />
        <h4>Let's talk</h4>
      </div>
      <div className="Contact">
        <textarea
          className="Contact__Text"
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          name="message"
        ></textarea>
        <div className="Contact__Inputs">
          <input
            className="Contact__Name Contact__Input"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            required
          />
          <input
            className="Contact__Subject Contact__Input"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
            value={subject}
            required
          />
          <input
            className="Contact__Email Contact__Input"
            placeholder="Your email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="hidden"
            name="_next"
            value="https://vugartaghiyev.netlify.app/"
          ></input>
        </div>
      </div>
      <button className="Contact__Submit" type="submit">
        Send
      </button>
    </form>
  );
};

export default Contact;
