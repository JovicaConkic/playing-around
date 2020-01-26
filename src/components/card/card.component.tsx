import React, { FunctionComponent } from "react";

import { IMonster } from "../../interfaces/monster/monster.interface";

import "./card.component.css";

export const Card: FunctionComponent<{ monster: IMonster }> = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={monster.name}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h1> {monster.name} </h1>
      <p> {monster.email} </p>
    </div>
  );
};
