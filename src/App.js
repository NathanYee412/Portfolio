import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/about' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
