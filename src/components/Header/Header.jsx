import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const activeLink = ({ isActive }) =>
    clsx(styles.link, isActive && styles.isActive);
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.headerList}>
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
      </header>
    </>
  );
};

export default Header;
