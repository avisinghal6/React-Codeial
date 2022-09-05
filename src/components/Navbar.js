import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom'; //replacement for <a> in react, as <a> refreshes the page.
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img alt="img" src="" />
        </Link>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.user}>
          <Link to="/">
            <img alt="" src=" " className={styles.userDp} />
          </Link>
          <span> Avi</span>
        </div>

        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/Login"> Log In</Link>
            </li>
            <li>
              <Link to="/"> Log Out</Link>
            </li>
            <li>
              <Link to="/"> Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
