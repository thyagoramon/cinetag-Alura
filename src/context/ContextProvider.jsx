import { useEffect, useMemo, useState } from "react";
import { Context } from "./context";
import axios from "axios";

export const ContextProvider = ({ children }) => {
  //movies
  const [movies, setMovies] = useState([]);

  //get data from API
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/thyagoramon/cinetag-API/videos")
      .then((response) => {
        setMovies(response.data)
      })
      .catch(err => console.error(err));
  }, []);

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
  const [toPlay, setToPlay] = useState([null]);

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
