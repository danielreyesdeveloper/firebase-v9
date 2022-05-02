import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import RequiredAuth from "./components/RequiredAuth";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
