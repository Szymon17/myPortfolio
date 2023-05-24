import "./ContactMe.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <p className="section-title">Skontaktuj się</p>
      <div className="section-body">
        <div className="contact-me__container">
          <a href="https://www.linkedin.com/in/szymon-jab%C5%82o%C5%84ski-88649b249/" target="__blank">
            <FontAwesomeIcon className="contact-me__icon in" icon={faLinkedinIn} />
          </a>
          <a href="mailto:jablonski.szymon21@gmail.com" target="__blank">
            <FontAwesomeIcon className="contact-me__icon at" icon={faAt} />
          </a>
          <a href="https://github.com/Szymon17" target="__blank">
            <FontAwesomeIcon className="contact-me__icon gh" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
