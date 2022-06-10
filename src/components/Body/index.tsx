import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/Body/Body.css";
import Card from "./Card";

const Body = () => {
  const [pokemons, setPokemons] = useState<any>([]);
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previewPageUrl, setPreviewPageUrl] = useState("")




  const getPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9")

    setPokemons(response.data.results);
    setNextPageUrl(response.data.next)

  };

  const previewPage = async () => {

    if (previewPageUrl != "") {
      await axios
        .get(previewPageUrl)
        .then((response) => {
          setPokemons(response.data.results);

          setPreviewPageUrl(response.data.previous)

          if (response.data.next) {
            setNextPageUrl(response.data.next);
          } else {
            setNextPageUrl("");
          }

        });
    }



  }

  const nextPage = async () => {
    if (nextPageUrl != "") {
      await axios
        .get(nextPageUrl)
        .then((response) => {
          setPokemons(response.data.results);
          setNextPageUrl(response.data.next);


          if (response.data.previous) {
            setPreviewPageUrl(response.data.previous)
          } else {
            setPreviewPageUrl("")
          }

        });
    };
  }


  useEffect(() => {
    getPokemons();
  }, []);



  return (
    <>

      <div className="cards-container">
        {pokemons.map((pokemon: any) => <Card pokemon={pokemon} />)}
      </div>
      <div className="buttons-container">
        <button onClick={() => previewPage()}> « </button>
        <button onClick={() => nextPage()}> » </button>

      </div>
    </>
  );
};

export default Body;
