import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../styles/Body/Card/Card.css"

const Card = (props: any) => {


  const [pokemon, setPokemon] = useState<any>([]);
  const getPokemon = async () => {
    await axios.get(props.pokemon.url).then((response: any) => {
      setPokemon(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img src={pokemon?.sprites?.front_default} alt="" />
        </div>
        <div className="info-container">
            <div className="id-pokemon"><p>{pokemon?.id}</p></div>
            <div className="nome-pokemon"><p>{pokemon?.name}</p></div>
            <div className="elements-container">
                {pokemon?.types?.map((type : any) => {
                    return (
                        <p>{type.type.name}</p>
                        )
                })}
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;
