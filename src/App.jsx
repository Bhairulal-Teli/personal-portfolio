import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import EducationSection from './components/EducationSection';
import TechStack from './components/TechStackSection';
import Contact from './components/Contact';
import AllProjectsPage from './components/AllProjectPage';
import ResumePage from './components/ResumePage';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <EducationSection />
      <TechStack />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;