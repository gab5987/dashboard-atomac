import React from "react";
import './App.scss';

export class Unauthorized extends React.Component {
  render() {
    return (
        <div className="Exeption-handler-main">
            <h1> 401 </h1>
            <span className="border-bottom">Não Autorizado</span>
            <p className="pt-5"> Você não tem permissão para acessar essa página </p>
        </div>
    );
  }
}