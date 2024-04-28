// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss';
import './styles/breakpoints.scss';
import './styles/clear.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Basketball from './pages/Basketball/Basketball';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/clubs/basketball" element={<Basketball/>}></Route>
        
      </Route>
    </Routes>
  )
}

export default App
