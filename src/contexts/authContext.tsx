import React, { createContext, useState, ReactNode, useEffect } from 'react';
import axiosInstance from '../utils/axiosIntance';
import Swal from 'sweetalert2';

interface IProps {
  name: string;
  email: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  login: (token: string) => void;
  logout: (event: React.FormEvent) => void;
  user: IProps;
  setUser: any;
  loading: boolean;
}

const initailUserValue: IProps = {
  _id: '',
  name: '',
  email: '',
  createdAt: '',
  updatedAt: '',
};

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IProps>(initailUserValue);

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const initialize = async () => {
      try {
        if (accessToken) {
          const res = await axiosInstance.get('/auth/@me');

          if (!res.data) {
            Swal.fire({
              title: 'Something went wrong',
              icon: 'error',
              timer: 1500,
            });
            localStorage.clear();
            setLoading(false);
          }
          if (res.data.data) {
            setUser(res.data.data);
            setIsAuth(true);
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const login = async (accessToken: string) => {
    const res = await axiosInstance.get('/auth/@me');
    console.log('🚀 ~ login ~ res:', res);
  };

  const logout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        login,
        logout,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
