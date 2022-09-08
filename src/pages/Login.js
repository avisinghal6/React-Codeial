import styles from '../styles/login.module.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { login } from '../api';
import { useAuth } from '../hooks';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLogginIn] = useState(false);
  const auth = useAuth();

  console.log(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogginIn(true);

    if (!email || !password) {
      return toast('enter email and password');
    }

    const response = await auth.login(email, password);

    if (response.success) {
      toast('successfully logged in');
    } else {
      toast(response.message);
    }

    setLogginIn(false);
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'Logging In..' : 'Log In'}
        </button>
      </div>
    </form>
  );
};

export default Login;
