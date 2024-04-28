import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss';
import './styles/breakpoints.scss';
import './styles/clear.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Basketball from './pages/Clubs/Basketball/Basketball';
import Volleyball from './pages/Clubs/Volleyball/Volleyball';
import Football from './pages/Clubs/Football/Football';
import Chess from './pages/Clubs/Chess/Chess';
import { useEffect } from 'react';


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/clubs/basketball" element={<Basketball/>}></Route>
        <Route path="/clubs/volleyball" element={<Volleyball/>}></Route>
        <Route path="/clubs/football" element={<Football/>}></Route>
        <Route path="/clubs/chess" element={<Chess/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
