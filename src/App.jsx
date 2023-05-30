import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';


function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/work" element={<Work />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
