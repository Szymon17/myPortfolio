import "./navigation.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const navHeight = 50;

  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li>
          <Link onClick={() => scroll.scrollToTop()} className="navigation__item">
            Strona główna
          </Link>
        </li>
        <li>
          <Link to="About" smooth offset={-navHeight} className="navigation__item">
            O mnie
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth offset={-navHeight} className="navigation__item">
            Umiejętności
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth offset={-navHeight} className="navigation__item">
            Projekty
          </Link>
        </li>
        <li>
          <Link to="Timeline" smooth offset={-navHeight} className="navigation__item">
            Linia czasu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
