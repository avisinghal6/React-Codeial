import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom'; //replacement for <a> in react, as <a> refreshes the page.
import { useAuth } from '../hooks';
const Navbar = () => {
  const auth = useAuth();

  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img alt="img" src="" />
        </Link>
      </div>
      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to="/Settings">
              <img alt="" src=" " className={styles.userDp} />
            </Link>
            <span> {auth.user.name}</span>
          </div>
        )}
        {/* <></> are called fragments */}
        <div className={styles.navLinks}>
          <ul>
            {auth.user ? (
              <>
                <li>
                  <button onClick={auth.logout}> Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login"> Log In</Link>
                </li>

                <li>
                  <Link to="/Register"> Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
