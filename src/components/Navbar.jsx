import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <NavLink to="/">Home</NavLink>
          <button onClick={() => setUser(false)}>LogOut</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <button onClick={() => setUser(true)}>LogIn</button>
        </>
      )}
    </div>
  );
};
