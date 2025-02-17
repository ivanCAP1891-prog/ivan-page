import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>
            I'm <span>Iván</span> Clavijo
          </h1>
          <h2>Junior Developer</h2>
          <p>
            My name is Iván Clavijo. I am a Uruguayan student currently studying
            Computer Engineering at UDE. Additionally, I graduated with a
            Computer Science high school diploma, specializing in development
            and support.
          </p>
          <div className="button">Download my CV</div>
        </div>
        <div className={styles.images}>
          <img
            src="img/ivan-pic.png"
            alt="Ivan picture"
            className={styles.pic}
          />
        </div>
      </div>
      <img src="img/Vector.png" alt="" />
    </div>
  );
};

export default Main;
