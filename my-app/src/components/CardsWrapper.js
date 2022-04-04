import characters from "../data/characters";
import CardsContainer from "./CardContainer";
import "./CardsWrapper.css";

function CardsWrapper() {
  const charactersElements = characters.map((character) => {
    return <CardsContainer character={character} />;
  });
  return <div className="cards-wrapper">{charactersElements}</div>;
}

export default CardsWrapper;
