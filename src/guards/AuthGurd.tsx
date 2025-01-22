import { ReactNode } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <>loading...</>;
  }

  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }

  return <>{children}</>;
}
