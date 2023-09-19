import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    <Connect />
    </div>
  );
}

export default App;
