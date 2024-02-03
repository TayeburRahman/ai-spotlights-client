import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Button from "./Button";
import useToast from "../hooks/useToast";
import { baseUrl } from "../config/Url";

const GoogleLogin = () => {
  const { user, googleSignIn, logOut } = useContext(AuthContext);
  const { showToast } = useToast();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        showToast(`Welcome Back ${res.user.displayName}!`);
        const saveUser = {
          userName: res.user.displayName,
          userEmail: res.user.email,
          userImage: res.user.photoURL,
        };
        axios.post(`${baseUrl}/users`, saveUser);
      })
      .catch((err) => {
        showToast(err.message);
      });
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        showToast("Logout Successful!");
      })
      .catch((err) => {
        showToast(err.message);
      });
  };

  return (
    <>
      {user ? (
        <Button
          onClick={handleLogout}
          className="flex items-center gap-1"
          size="small"
          colors="transparent"
        >
          <FcGoogle className="w-6 h-6" /> Logout
        </Button>
      ) : (
        <Button
          onClick={handleGoogleLogin}
          className="flex items-center gap-1"
          size="small"
          colors="transparent"
        >
          <FcGoogle className="w-6 h-6" /> LogIn
        </Button>
      )}
    </>
  );
};

export default GoogleLogin;
