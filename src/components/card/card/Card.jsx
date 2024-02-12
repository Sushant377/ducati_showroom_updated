/* eslint-disable react/prop-types */
import "./Card.css";

function Card(props) {
  const { specs, title, image } = props;

  return (
    <div className="card1">
      {title && <div className="title">{title}</div>}
      {image && <img className="image" src={image} />}
      {specs && <div className="specs">{specs}</div>}
    </div>
  );
}

export default Card;
