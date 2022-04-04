import "./CardContainer.css";

function CardsContainer(props) {
  return (
    <div className="card-container">
      <img src={props.character.image} alt={props.character.name} />
      <h1>{props.character.name}</h1>
      <h2>{props.character.tagline}</h2>
      <p>{props.character.description}</p>
    </div>
  );
}

export default CardsContainer;
