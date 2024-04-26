import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import Login from "./pages/login/Login.tsx";
import './App.css';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
