import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Resume from './components/Home/resume';
import Sidebar from './components/Sidebar';
import About from './components/About';



function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
