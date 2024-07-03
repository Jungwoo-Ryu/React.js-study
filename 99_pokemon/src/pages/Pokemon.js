import { useEffect, useState } from "react";
import PokemonItem from "../components/PokemonItem";

function Pokemon(){
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        console.log(123);
        fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json())
        .then(data => setPokemonList(data.results));
    }, [])

    return (
        <>
            <h1>포켓몬 목록</h1>
            <div>
                {pokemonList.map((pokemon) => <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url}></PokemonItem>)}
            </div>
        </>
    )
}

export default Pokemon;