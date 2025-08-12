import { useContext } from "react";
import { Context } from "@/context/context";
import styles from "./Card.module.css";
import iconFavorito from "./favorite.png";
import iconNaoFavorito from "./favorite_outline.png";

const Card = ({ movie }) => {
  const { toggleLike } = useContext(Context);

  return (
    <div className={styles.card}>
      <a href={movie.link} target="_blank">
        <img src={movie.capa} alt={movie.titulo} />
      </a>
      <h2>{movie.titulo}</h2>
      <button type="button" onClick={() => toggleLike(movie.id)}>
        <img src={movie.favorito ? iconFavorito : iconNaoFavorito} />
      </button>
    </div>
  );
};

export default Card;
