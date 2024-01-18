import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container font-body">
      <nav className="flex justify-between items-center px-4 py-2 mt-3">
        <NavLink
          className="text-2xl font-display capitalize text-primary font-extrabold tracking-wide"
          to="/"
        >
          todo
        </NavLink>
        <div className="flex gap-5 justify-items-center text-second">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/todo"}>Write todo</NavLink>
          <div className="px-4 border-l-2 border-primary">
            <NavLink
              className="py-1.5 px-4 mr-4 hover:bg-button hover:text-highlight border-button text-button rounded border-2"
              to={"/signin"}
            >
              Log in
            </NavLink>
            <NavLink
              className="py-2 px-4 bg-primary rounded text-white"
              to={"/signup"}
            >
              Signup
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
