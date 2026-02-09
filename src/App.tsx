import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LandingPage from './pages/LandingPage';
import Directory from './pages/Directory';
import ParentDashboard from './pages/ParentDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import AdminPanel from './pages/AdminPanel';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${i18n.language === 'es' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('it')}
        className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${i18n.language === 'it' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
      >
        IT
      </button>
    </div>
  );
};

const NavigationHelper = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-2xl z-[100] flex items-center gap-6 md:gap-8">
      <Link
        to="/"
        className={`text-xs font-bold uppercase tracking-widest ${currentPath === '/' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        {t('nav.home')}
      </Link>
      <Link
        to="/directory"
        className={`text-xs font-bold uppercase tracking-widest ${currentPath === '/directory' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        {t('nav.directory')}
      </Link>
      <div className="w-px h-4 bg-slate-700"></div>
      <Link
        to="/parent-dashboard"
        className={`text-xs font-bold uppercase tracking-widest ${currentPath === '/parent-dashboard' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        {t('nav.parents')}
      </Link>
      <Link
        to="/professional-dashboard"
        className={`text-xs font-bold uppercase tracking-widest ${currentPath === '/professional-dashboard' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        {t('nav.professionals')}
      </Link>
      <div className="w-px h-4 bg-slate-700"></div>
      <Link
        to="/admin"
        className={`text-xs font-bold uppercase tracking-widest ${currentPath.startsWith('/admin') ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        {t('nav.admin')}
      </Link>
      <div className="w-px h-4 bg-slate-700"></div>
      <LanguageSwitcher />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="antialiased selection:bg-primary/20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          {/* Backwards compatibility / alias */}
          <Route path="/dashboard" element={<ParentDashboard />} />
        </Routes>

        <NavigationHelper />
      </div>
    </Router>
  );
}

export default App;
