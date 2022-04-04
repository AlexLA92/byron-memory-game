import "./App.css";
import CardsWrapper from "./components/CardsWrapper";

function App() {
  return (
    <div className="App">
      <header className="header-wrapper"></header>
      <section className="game-container">
        <h1>LES PERSONNAGES DE LA PAT PATROUILLE</h1>
        <CardsWrapper />
      </section>
    </div>
  );
}

export default App;
