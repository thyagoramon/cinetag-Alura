import styles from "./VideoPlayer.module.css";
import Title from "@/components/Title";

const VideoPlayer = ({ movie }) => {
  return (
    <>
      <Title>{movie.titulo}</Title>
      <div className={styles.VideoPlayer}>
        <iframe
          className={styles.player}
          width="50%"
          height="100%"
          src={movie.link}
          title={movie.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
