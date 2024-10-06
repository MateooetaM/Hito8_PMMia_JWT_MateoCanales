import { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { UserContext } from "../context/UserContext";
// import { TokenContext } from "../context/TokenContext";

const Navbar = () => {
  const { token, logOut } = useContext(UserContext);
  const { calcularTotal } = useContext(CarritoContext);
  // const logOut = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // };
  // const token = localStorage.getItem("token") || false;
  // const { user, setUser } = useContext(TokenContext);
  const setActiveClass = ({ isActive }) =>
    isActive ? "linkActivo" : "linkInactivo";

  return (
    <nav className="navbar ">
      <div className="nav-elements container-fluid">
        <h1 className="fs-5 text-light">¡Pizzería Mamma Mia!</h1>
        <div className="nav-button">
          <NavLink className={setActiveClass} to="/home ">
            🍕 Home
          </NavLink>

          <NavLink className={setActiveClass} to="/profile">
            🔓 Profile
          </NavLink>

          {token ? null : (
            <NavLink className={setActiveClass} to="/login">
              🔐 Login
            </NavLink>
          )}
          {token ? null : (
            <NavLink className={setActiveClass} to="/register">
              🔐 Register
            </NavLink>
          )}
          {token ? (
            <NavLink
              className={setActiveClass}
              onClick={() => {
                logOut();
              }}
              to="/logout"
            >
              🔒 Logout
            </NavLink>
          ) : null}
        </div>

        <div>
          <NavLink className="btn btn-outline-info" to="/cart">
            🛒 Total: ${calcularTotal()}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
