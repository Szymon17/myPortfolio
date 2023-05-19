import "./CvLink.styles.css";
import PDFLINK from "../../assets/cv.pdf";

const Download = () => {
  return (
    <a href={PDFLINK} target="_blank" rel="noreferrer" className="download-button">
      CV
    </a>
  );
};

export default Download;
