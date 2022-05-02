import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleClickLogin = () => {
    setUser(true);
    navegate("/");
  };
  return (
    <>
      <h1>Login</h1>
      <h2>{user ? "ONLINE" : "OFFLINE"}</h2>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={() => setUser(false)}>LogOut</button>
    </>
  );
};
export default Login;
