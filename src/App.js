import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navbar/Header';
import ProjectCards from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Bio from './components/bio/Bio';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/projects" element={<ProjectCards/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
