import styles from "./Showcase.module.css";
import Card from "../Card";

const Showcase = ({ toShow }) => {
  return (
    <div className={styles.showcase}>
      {toShow.length < 1
      ? <p>Você ainda não adicionou nenhum favorito</p>
      : <div className={styles.container}>
          {toShow.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      }
    </div>
  );
};

export default Showcase;
