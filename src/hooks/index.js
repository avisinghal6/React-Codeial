import { useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { login as userLogin } from '../api';
export const useAuth = () => {
  return useContext(AuthContext); //hook to get the state from authContext so that we dont have to import authConteext everytime
};
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const response = await userLogin(email, password);

    if (response.success) {
      setUser(response.data.user);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    loading,
  };
};
