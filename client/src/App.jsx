import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WithoutNav from "./assets/components/WithoutNav";
import WithNav from "./assets/components/WithNav";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Route>
          <Route element={<WithoutNav />}>
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
