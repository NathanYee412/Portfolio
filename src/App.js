import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/Portfolio/' element={<Home/>} />
          <Route path='/Portfolio/projects' element={<ProjectPage />} />
          <Route path='/Portfolio/about' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
