import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const redirect = useNavigate();
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      redirect("/");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("email", {
            message: "usurio ya registrado papu",
          });
          break;
        default:
          console.log("ocurrio an error");
      }
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Your email"
          {...register("email", {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Incorrect email format",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          type="password"
          placeholder="Your password"
          {...register("password", {
            setValueAs: (v) => v.trim(), //limpiar espacios de la contraseña
            minLength: {
              value: 6,
              message: "Minmum 6 characters",
            },
            validate: {
              trim: (v) => {
                if (!v.trim()) {
                  return "No seas Payaso esribe algo xD";
                }
                return true;
              },
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Repeat password"
          {...register("repassword", {
            setValueAs: (v) => v.trim(),
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
