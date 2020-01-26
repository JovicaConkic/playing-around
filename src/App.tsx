import React, { Component } from "react";

import { IMonster } from "./interfaces/monster/monster.interface";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

type IProps = {};
type IState = { monsters: IMonster[]; searchField: string };

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response: Response) => response.json())
      .then((monsters: IMonster[]) => this.setState({ monsters }));
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters: IMonster[] = monsters.filter((monster: IMonster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="app-heading">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
