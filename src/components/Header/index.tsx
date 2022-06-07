import React from "react";
import "../../styles/Header/Header.css";
import logo from "../../assets/image/logo.png"

const Header = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Pesquise um Pokemon..." />
        <select name="searchType" id="">
          <option value="0">Selecione um tipo...</option>
        </select>
        <button>Pesquisar</button>
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Header;
