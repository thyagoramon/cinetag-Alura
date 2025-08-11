import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Card from "@/components/Card";
import "./home.module.css";
import Showcase from "@/components/Showcase";

const Home = () => {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
