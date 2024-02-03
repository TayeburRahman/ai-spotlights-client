import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/" replace></Navigate>;
};

export default PrivateRoute;
