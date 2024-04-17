import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const activeLink = ({ isActive }) =>
    clsx(styles.link, isActive && styles.isActive);
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={activeLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
