import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Projects from "./Projects";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/my-portfolio-app/projects" element={<Projects />} />
                <Route path="/my-portfolio-app" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;