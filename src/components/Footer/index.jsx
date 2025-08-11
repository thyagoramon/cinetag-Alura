import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desenvolvido por <a href="https://github.com/thyagoramon" target="_blank">Thyago Ramon</a> e Alura
      </p>
    </footer>
  );
};

export default Footer;
