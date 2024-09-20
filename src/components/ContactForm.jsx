import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import ContactIllustration from "../assets/Works/A26.jpg";

const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formErrors = {};
    const formData = new FormData(form.current);

    if (!formData.get("fname").trim()) {
      formErrors.fname = "Name is required !";
    }
    if (!formData.get("email").trim()) {
      formErrors.email = "Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      formErrors.email = "Invalid email format !";
    }
    if (!formData.get("subject").trim()) {
      formErrors.subject = "Subject is required !";
    }
    if (!formData.get("message").trim()) {
      formErrors.message = "Message is required !";
    }

    return formErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(
          "service_g7ked0j",
          "template_5y4vugm",
          form.current,
          "5VlwFfvCFtx0vh5UE"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className="mecontacter-section" id="Contact">
      <div className="contact-illustration">
        <img src={ContactIllustration} alt="" />
      </div>
      <div className="contact-form">
        <div className="form-header">
          <h2>Contact Our Team</h2>
          <span>Reach out and we'll get in touch ASAP</span>
        </div>
        {messageSent ? (
          <div className={`message-sent`}>
            <p>Message sent!</p>
          </div>
        ) : null}

        <form name="utopiadreams-form" ref={form} onSubmit={sendEmail}>
          <div className="full-name-container">
            <label>
              First name
              <input type="text" name="fname" />
              {errors.name && <span className="error">{errors.fname}</span>}
            </label>
            <label>
              Last name
              <input type="text" name="lname" />
            </label>
          </div>
          <br />
          <div>
            <label>
              Email
              <input type="email" name="email" />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
          </div>
          <br />
          <div>
            <label>
              Subject
              <input type="text" name="subject" />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}
            </label>
          </div>
          <br />
          <div>
            <label>
              Message
              <textarea name="message" />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </label>
          </div>
          <br />
          <div>
            <button type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
        <div className="mail-contact">
          <h3>
            You can send an e-mail directly |
            <a href="mailto:utopiadreams.pro@gmail.com"> Here</a>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
