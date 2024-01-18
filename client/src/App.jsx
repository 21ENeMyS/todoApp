import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// membuat 2 componentns
import WithoutNav from "./assets/components/WithoutNav";
import WithNav from "./assets/components/WithNav";
import Error from "./pages/404";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" Component={Error} />
          {/* menggunakan Navbar */}
          <Route element={<WithNav />}>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Route>
          {/* tidak menggunakan Navbar */}
          <Route element={<WithoutNav />}>
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
            <Route path="/todo" Component={Todo} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
