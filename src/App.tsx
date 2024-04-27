// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss';
import './styles/breakpoints.scss';
import './styles/clear.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>
  )
}

export default App
