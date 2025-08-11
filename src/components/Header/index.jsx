import { Link } from "react-router";
import logo from "./logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Logo do Cine Tag" />
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/favoritos">Favoritos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
