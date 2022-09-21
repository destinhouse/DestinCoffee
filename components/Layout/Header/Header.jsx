import styles from "./Header.module.scss";
import useWindowDimensions from "../../Window/window";

function Header() {
  const {height, width} = useWindowDimensions();
  return (
    <div>
      {width > 900 ? (
        <div className={styles.header}>
          <img src="/destincoffeeLOGO.png" />
          <div className={styles.components}>
            <a href="/">Home </a>
            <a href="/menu">Menu </a>
            <a href="/contact">Contact us </a>
            <a href="/about">About us</a>
          </div>
          <div className={styles.telephone}>
            <i className="fa-solid fa-phone" /> <p> +30 2421 182038</p>
          </div>
        </div>
      ) : (
        <div className={styles.tel_header}>
          <img src="/destincoffeeLOGO.png" />
          <div className={styles.tel_components}>
            <a href="/">
              <i className="fa-solid fa-house-blank"></i>
            </a>
            <a href="/menu">
              <i className="fa-solid fa-mug-hot"></i>
            </a>
            <a href="/contact">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="/about">
              <i className="fa-solid fa-images"></i>
            </a>
          </div>
          <div className={styles.tel_telephone}>
            <a href="tel:30 2421 182038">
              <i className="fa-solid fa-phone" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
