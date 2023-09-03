import "./bubble.css";

const Bubble = ({ left, top, imgUrl, gradient, size = 6.25, rotate = 0 }) => {
  return (
    <div
      style={{ width: `${size}em`, height: `${size}em`, rotate: `${rotate}deg`, left: `${left}%`, top: `${top}%` }}
      className={gradient ? "bubble-gradient" : "bubble"}
    >
      {imgUrl && <img className="bubble__img" src={imgUrl} alt="" />}
    </div>
  );
};

export default Bubble;
