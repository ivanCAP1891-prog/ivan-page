import styles from "./Header.module.css"; // ✅ CORRECTO

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        I<span>C</span>
      </h1>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">My Jobs</a>
        </li>
      </ul>
      <div className={styles.miniIcons}>
        <img src="mini-icons/bxl-github.png" alt="Perfil de GitHub" />
        <img src="mini-icons/bxl-linkedin-square.png" alt="Perfil de GitHub" />
      </div>
    </div>
  );
};

export default Header;
