import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';



function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
