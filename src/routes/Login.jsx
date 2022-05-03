import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(UserContext);
  const redirect = useNavigate();

  const handleClickLogin = async (e) => {
    e.preventDefault();
    console.log("Procesing", email, password);
    try {
      await loginUser(email, password);
      console.log("welcome");
      redirect("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleClickLogin}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
