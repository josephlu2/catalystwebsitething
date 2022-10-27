import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages & components
import Home from './components/Home'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import SubNavbar from './components/SubNavbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="pages">
          <Routes>
            <Route 
              path = "/"
              element = {<><Navbar /><LandingPage /></>}
            />
            <Route
              path = "/projects"
              element = {<><SubNavbar /><Projects /></>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
