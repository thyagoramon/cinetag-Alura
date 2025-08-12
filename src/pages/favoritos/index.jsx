import { useContext } from "react";
import { Context } from "@/context/Context";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Showcase from "@/components/Showcase";

const Favoritos = () => {
  const { favoriteMovies } = useContext(Context);

  return (
    <>
      <Banner imagem="favoritos" />
      <Title>Meus Favoritos</Title>
      <Showcase toShow={favoriteMovies} />
    </>
  );
};

export default Favoritos;
