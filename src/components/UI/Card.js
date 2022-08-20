import "./Card.css";

const Card = (props) => {
  // Anything we recieve as a className from outside is added to this string
  const classes = "card " + props.className;
  //props.children is the content
  return <div className={classes}>{props.children}</div>;
};

export default Card;
