import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Dashboard } from './components/Dashboard';
import { RiskAnalyzer } from './pages/RiskAnalyzer';
import { Compliance } from './pages/Compliance';
import { CaseStudy } from './pages/CaseStudy';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/risk-analyzer" element={<RiskAnalyzer />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
