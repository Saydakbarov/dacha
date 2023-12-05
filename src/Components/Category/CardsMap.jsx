import React from "react";
import { Card } from "Components/Category/Card/Card";

export const CardsMap = ({ cardsinfo }) => {
  console.log(cardsinfo);
  return (
    <div className="row p-2 p-lg-0">
      {cardsinfo.map((card, index) => (
        <Card
          img={card.images[0]}
          name={card.name}
          price={card.price}
          location={card.district.nameUz}
          beds={card.doubleBad}
          hostCount={card.hostCount}
          superPrice={card.superPrice}
          superComfort={card.superComfort}
          recommended={card.recommended}
          key={index}
          id={card.id}
        />
      ))}
    </div>
  );
};
