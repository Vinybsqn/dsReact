import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Ajout from "./components/ajout/ajout.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    { <Route path="/ajout" element={<Ajout />} /> }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
