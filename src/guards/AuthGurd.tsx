import { ReactNode, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      Swal.fire({
        icon: 'error',
        title: 'Login Required',
      }).then(() => {
        navigate('/login'); // Navigate to home or login page after showing the alert
      });
    }
  }, [isAuth, navigate]);

  return <>{children}</>;
}
