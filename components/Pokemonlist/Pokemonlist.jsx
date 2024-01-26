import { useEffect, useState } from "react";
import "./Pokemonlist.css"
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon.jsx";


function Pokemonlist(){
    const DEFAULT_URL="https://pokeapi.co/api/v2/pokemon/";
    const [pokemonlist,setpokemonlist]=useState([])
    const [POKEDEX_URL,setPOKEDEX_URL]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setnextUrl]=useState(DEFAULT_URL);
    const [prevUrl,setprevUrl]=useState(DEFAULT_URL);
    async function downloadPokemons(){
        const response=await axios.get(POKEDEX_URL?POKEDEX_URL:DEFAULT_URL);

        const pokemonResults=response.data.results;//array of pokemon

        setnextUrl(response.data.next);
        setprevUrl(response.data.previous);
        const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const pokemonlistdata=await axios.all(pokemonPromise);
        
        const pokemonfinallist=pokemonlistdata.map((pokemondata)=>{
            const pokemon=pokemondata.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                type:pokemon.types
            }
        });
        setpokemonlist(pokemonfinallist);

       

        
    }
    useEffect(()=>{
        downloadPokemons();
    },[POKEDEX_URL]);

    return (
        
           <div className="pokemon-list-wrapper">
                <div>
                    <h1>Pokemon List</h1>
                    
                </div>
                <div className="page-controls">
                    
                    <button onClick={()=>setPOKEDEX_URL(prevUrl)}>Previous</button>
                    <button onClick={()=>setPOKEDEX_URL(nextUrl)}>Next</button>

                </div>
                <div className="pokemon-list">
                {pokemonlist.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
                </div>
               
           </div>

       
    )
}
export default Pokemonlist;