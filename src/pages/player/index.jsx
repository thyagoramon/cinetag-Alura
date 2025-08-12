import { useContext } from "react";
import { Context } from "@/context/Context";
import Banner from "@/components/Banner";
import VideoPlayer from "@/components/VideoPlayer";
import { useParams } from "react-router";
import NaoEncontrada from "../naoEncontrada";

const Player = () => {
  const { movies } = useContext(Context);
  const movieToPlay = movies[useParams().id - 1];

  return movieToPlay ? (
    <>
      <Banner imagem="player" />
      <VideoPlayer movie={movieToPlay} />
    </>
  ) : (
    <NaoEncontrada />
  );
};

export default Player;
