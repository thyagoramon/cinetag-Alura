import Header from "@/components/Header";
import { Outlet } from "react-router";
import Footer from "@/components/Footer";

const Base = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Base;
