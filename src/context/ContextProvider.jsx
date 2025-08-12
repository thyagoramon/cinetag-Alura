import { useMemo, useState } from "react";
import { Context } from "./context";
import moviesJson from "@/json/db.json";

export const ContextProvider = ({ children }) => {
  //movies
  const [movies, setMovies] = useState(moviesJson);
  
  //liked movies
  const favoriteMovies = useMemo(() => {
    return movies.filter((movie) => movie.favorito);
  }, [movies]);

  //toggle like
  function toggleLike(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, favorito: !movie.favorito } : movie
      )
    );
  }

  //movie to player
  const [toPlay, setToPlay] = useState([])
  
  //start play


  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        favoriteMovies,        
        toggleLike,
        toPlay,
        setToPlay,
      }}
    >
      {children}
    </Context.Provider>
  );
};
