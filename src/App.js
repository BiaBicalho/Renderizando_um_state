import "./styles.css";
import React, { Component } from "react";

export default class Dados extends Component {
  state = {
    sobre: [
      {
        nome: "Beatriz",
        idade: 18,
        comidafavorita: "Lasanha",
        musica: ["Good4u", "Industry baby", "Another Love"]
      }
    ]
  };
  render() {
    return (
      <div className="Dados">
        <h1>Nome: {this.state.sobre[0].nome}</h1>
        <h2>Idade: {this.state.sobre[0].idade}</h2>
        <h3>Comida Favorita: {this.state.sobre[0].comidafavorita}</h3>
        <h4>Músicas favoritas:</h4>
        <ul>
          <li>{this.state.sobre[0].musica[0]}</li>
          <li>{this.state.sobre[0].musica[1]}</li>
          <li>{this.state.sobre[0].musica[2]}</li>
        </ul>
      </div>
    );
  }
}
