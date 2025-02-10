import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import emailjs from "emailjs-com";
import ContactIllustration from "../assets/UDImages/A122.png";
import xfooter from "../assets/UDImages/xfooter.png";
import tiktok from "../assets/UDImages/tik-tok.png";
import insta from "../assets/UDImages/instagram.png";
import linkdin from "../assets/UDImages/linkedin.png";

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
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
        <img src={ContactIllustration} alt="contact illustration" />
      </div>
      <div className="contact-form">
        <div className="form-header">
          <h2>Contact | Our Team - FEEDBACK</h2>
          <span data-aos="fade-up">Reach out and we'll get in touch ASAP</span>
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
              {errors.fname && <span className="error">{errors.fname}</span>}
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
          <div className="send-form-btn">
            <button type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
        <div className="mail-contact" id="socials">
          <h3>
            You can send an e-mail directly |
            <a href="mailto:utopiadreams.pro@gmail.com"> Here</a>{" "}
          </h3>
          <div className="socials-footer" data-aos="fade-up">
            <div className="socials-footer-tag">
              <a
                href="https://x.com/UtopiaDrea42952"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={xfooter} alt="twitter" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://www.linkedin.com/in/namane-yacine-542398252/?trk=opento_sprofile_topcard"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkdin} alt="linkdin" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://www.instagram.com/utopiadreamswallpapers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={insta} alt="instagram" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://www.tiktok.com/@utopiadreamswallpapers"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={tiktok} alt="tiktok" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
