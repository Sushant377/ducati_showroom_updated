/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
const ReadMoreButton = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonText = isExpanded ? "Read Less" : "Read More";
  const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div>
      <p>{displayText}</p>
      <div className="readingbutton">
        <button onClick={toggleReadMore}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ReadMoreButton;
