import { useContext } from "react";
import { Context } from "@/context/context";
import styles from "./Showcase.module.css";
import Card from "../Card";

const Showcase = () => {
  const { movies } = useContext(Context);

  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
