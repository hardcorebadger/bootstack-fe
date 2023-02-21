import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// hooks
import { useAuth } from '../contexts/AuthContext';
// routes

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/dashboard/home' />;
  }

  return <>{children}</>;
}
