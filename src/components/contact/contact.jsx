import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact shadow">
      <a className="contact__link" target="__blank" href="https://github.com/Szymon17">
        <FontAwesomeIcon className="contact__icon" icon={faGithub} />
      </a>
      <a className="contact__link" target="__blank" href="https://www.linkedin.com/in/szymon-jab%C5%82o%C5%84ski-88649b249/">
        <FontAwesomeIcon className="contact__icon" icon={faLinkedin} />
      </a>
      <a className="contact__link" target="__blank" href="mailto:jablonski.szymon21@gmail.com">
        <FontAwesomeIcon className="contact__icon" icon={faEnvelope} />
      </a>
    </section>
  );
};

export default Contact;
