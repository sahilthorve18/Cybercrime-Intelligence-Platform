import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Risk Analyzer', path: '/risk-analyzer' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Case Study', path: '/case-study' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl shadow-cyan-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="w-9 h-9 text-cyan-500 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-400/30 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                CyberInsight
              </span>
              <span className="text-[10px] text-slate-500 -mt-1 flex items-center gap-1">
                <Sparkles className="w-2 h-2" />
                Elite Security Platform
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQvxGkyI2_5zq1syzF2Cohl2JJdPvAj3WUycC-bzSLLgve2A/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            Submit Response
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-800/50 animate-slide-down">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQvxGkyI2_5zq1syzF2Cohl2JJdPvAj3WUycC-bzSLLgve2A/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              Submit Response
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
