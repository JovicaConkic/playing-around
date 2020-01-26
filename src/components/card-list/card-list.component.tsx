import React, { FunctionComponent } from "react";

import { Card } from "../card/card.component";
import { IMonster } from "../../interfaces/monster/monster.interface";

import "./card-list.component.css";

type CardListProps = {
  monsters: IMonster[];
};

export const CardList: FunctionComponent<CardListProps> = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster: IMonster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
