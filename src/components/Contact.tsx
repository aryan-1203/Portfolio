import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <p>
              <h4>Aryan Shrivastava</h4>
              +91 7611199572 
              <br /><a href="mailto:aryanshrivastava619@gmail.com" data-cursor="disable">
                aryanshrivastava619@gmail.com
              </a>
              <h4>Pune, Maharashtra</h4>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/aryan-1203"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-shrivastava27"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aryan Shrivastava</span>
            </h2>
            <h4>
            <MdCopyright />  Copyright 2026
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
