import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser } = useContext(UserContext);
  const redirect = useNavigate();

  const handleClickRegister = async (e) => {
    e.preventDefault();
    console.log("Procesing", email, password);

    try {
      await registerUser(email, password);
      redirect("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleClickRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
