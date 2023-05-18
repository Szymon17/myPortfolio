import { useEffect, useState } from "react";
import "./TypeWriter.styles.css";

const delay = 100;

const TypeWriter = ({ text, cssClass, handler = () => null }) => {
  const [textToType, setTextToType] = useState("");

  useEffect(() => {
    if (textToType.length < text.length) setTimeout(() => setTextToType(textToType + text[textToType.length]), delay);
    else handler();
  }, [textToType, text, handler]);

  return <p className={cssClass ? `type-writer ${cssClass}` : "type-writer"}>{textToType}</p>;
};

export default TypeWriter;
