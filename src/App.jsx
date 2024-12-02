import "./App.css";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import { Route, Routes, Link } from "react-router-dom";

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}
function App() {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "29px" }}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about/1">About</Link>
          </li>
          <li>
            <Link to="/contact/12">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
