import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";

const Estate = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="my-24">
      <h1 className="text-3xl font-semibold text-center mb-5 md:mb-10">
        Estate Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <EstateCard key={card.id} card={card}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estate;
