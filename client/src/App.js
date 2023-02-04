import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
        <Routes>
          <Route exact path={"/"} element={<Login />}/>
          <Route exact path={"/:id"} element={<Dashboard />}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
