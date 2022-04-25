import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navbar/Header';
import ProjectCards from './components/navbar/projects/Projects';
import Contact from './components/navbar/contact/Contact';
import Footer from './components/navbar/footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/resume" />
        <Route path="/projects" element={<ProjectCards/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
