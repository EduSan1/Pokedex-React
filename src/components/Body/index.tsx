import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/Body/Body.css";
import Card from "./Card";

const Body = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previewPage, setPreviewPage] = useState("")

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((response) => {
        setPokemons(response.data.results);
        setNextPageUrl(response.data.next)
      });
  };

  const nextPage = async () => {

    console.log(nextPageUrl)
    await axios
      .get(nextPageUrl)
      .then((response) => {
        setPokemons(response.data.results);
        setNextPageUrl(response.data.next);
      });
  };

  useEffect(() => {
    getPokemons();
    
  }, []);

  return (
    <>
      <div className="cards-container">
        {pokemons?.map((pokemon: any) => {
          return <Card pokemon={pokemon}/>
        })}
      </div>
      <div>
      <button onClick={() => nextPage()}>↪</button>
      </div>
    </>
  );
};

export default Body;
