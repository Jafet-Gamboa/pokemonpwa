import { useState, useEffect } from "react";
import "./App.css";

function App() {

  // Estados principales
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  // Función para buscar el Pokémon en la API
  const buscarPokemon = async () => {
    if (!nombre) return; // Evita búsqueda vacía

    setError("");

    try {
      // Petición a la PokéAPI
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
      );

      if (!res.ok) throw new Error("No encontrado");

      const data = await res.json();

      // Se extraen solo los datos necesarios
      const pokemonData = {
        nombre: data.name,
        imagen: data.sprites.front_default,
        tipo: data.types.map(t => t.type.name).join(", "),
        altura: data.height,
        peso: data.weight
      };

      setPokemon(pokemonData);

      // Guarda el último Pokémon para modo offline
      localStorage.setItem("ultimoPokemon", JSON.stringify(pokemonData));

    } catch (err) {
      // Si falla (ej. sin internet), intenta mostrar el guardado
      setError("No se pudo obtener el Pokémon. Mostrando último guardado.");

      const guardado = localStorage.getItem("ultimoPokemon");
      if (guardado) {
        setPokemon(JSON.parse(guardado));
      }
    }
  };

  // Al iniciar la app, carga el último Pokémon guardado
  useEffect(() => {
    const guardado = localStorage.getItem("ultimoPokemon");
    if (guardado) {
      setPokemon(JSON.parse(guardado));
    }
  }, []);

  return (
    <div className="container">
      <h1>PokemonPWA</h1>

      <div className="search-row">
        <input
          type="text"
          placeholder="Ej: pikachu"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarPokemon()}
        />
        <button onClick={buscarPokemon}>Buscar</button>
      </div>

      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div className="card">
          <h2>{pokemon.nombre}</h2>
          <img src={pokemon.imagen} alt={pokemon.nombre} />
          <p><strong>Tipo:</strong> {pokemon.tipo}</p>
          <p><strong>Altura:</strong> {pokemon.altura}</p>
          <p><strong>Peso:</strong> {pokemon.peso}</p>
        </div>
      )}
    </div>
  );
}

export default App;
