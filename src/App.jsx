import React from "react";
import "./App.css";
import { cards } from "./data"; 
import Card from "./components/card/Card";
import Header from "./components/header/Header";

function App() {
  const openLink = () => {
    window.open("https://media-sof1-2.cdn.whatsapp.net/v/t61.24694-24/345018808_772151201141997_8963043988386613320_n.jpg?ccb=11-4&oh=01_Q5AaINtUjyggYFP5PabbjFUAsTdIR3QqG0OizMi8Z8EIAPzn&oe=671A3F67&_nc_sid=5e03e0&_nc_cat=105", "_blank");
  };

  return (
    <div className="App">
      <Header title="Welcome to mr. Davids fan page" />
      <button onClick={openLink} className="fancy-button">
        Download mr. Davids photo
      </button>
      <div className="card-container">
        {cards.map((el) => (
          <Card
            imgSrc={el.src}
            key={el.id}
            age={el.age}
            name={el.name}
            bg={el.bg}
            desc={el.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
