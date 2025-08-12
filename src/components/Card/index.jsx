import { Link } from "react-router";
import { useContext } from "react";
import { Context } from "@/context/context";
import styles from "./Card.module.css";
import iconFavorito from "./favorite.png";
import iconNaoFavorito from "./favorite_outline.png";

const Card = ({ movie }) => {
  const { toggleLike } = useContext(Context);

  return (
    <div className={styles.card}>
      <Link to={`/${movie.id}`}>
        <img src={movie.capa} alt={movie.titulo} />
      </Link>
      <h2>{movie.titulo}</h2>
      <button type="button" onClick={() => toggleLike(movie.id)}>
        <img src={movie.favorito ? iconFavorito : iconNaoFavorito} />
      </button>
    </div>
  );
};

export default Card;
