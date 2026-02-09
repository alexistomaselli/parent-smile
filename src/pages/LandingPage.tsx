import React from 'react';
import {
    Heart,
    ArrowRight,
    PlayCircle,
    Search,
    Calendar,
    ShieldCheck,
    Lock,
    Facebook,
    Mail,
    Share2,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-display">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <Heart className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900">ParentSmile</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#services">{t('nav.services')}</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#how-it-works">{t('nav.how_it_works')}</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#testimonials">{t('nav.testimonials')}</a>
                            <div className="h-6 w-px bg-slate-200"></div>
                            <button className="text-sm font-medium hover:text-primary transition-colors">{t('nav.login')}</button>
                            <a
                                href="#directory"
                                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                                {t('nav.join')}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.png"
                        alt="Fondo Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold uppercase tracking-wider mb-8">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {t('landing.hero.trusted')}
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
                            {t('landing.hero.title')}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                            {t('landing.hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="#directory"
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 group"
                            >
                                {t('landing.hero.cta_start')}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <button className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                                <PlayCircle className="w-6 h-6 text-primary" />
                                {t('landing.hero.cta_how')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Specialized Care Verticals */}
            <section className="py-24 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{t('landing.services.title')}</h2>
                        <p className="text-lg text-slate-500 font-medium">{t('landing.services.subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Pediatrics */}
                        <div className="group bg-blue-50/50 p-12 rounded-[2.5rem] transition-all hover:bg-blue-50 border border-transparent hover:border-blue-100">
                            <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">{t('landing.services.pediatrics.title')}</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">{t('landing.services.pediatrics.desc')}</p>
                            <a className="text-primary font-black flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                                {t('landing.services.pediatrics.link')} <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                        {/* Psychology */}
                        <div className="group bg-amber-50/50 p-12 rounded-[2.5rem] transition-all hover:bg-amber-50 border border-transparent hover:border-amber-100">
                            <div className="w-16 h-16 bg-white text-amber-500 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">{t('landing.services.psychology.title')}</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">{t('landing.services.psychology.desc')}</p>
                            <a className="text-amber-500 font-black flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                                {t('landing.services.psychology.link')} <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                        {/* Education */}
                        <div className="group bg-emerald-50/50 p-12 rounded-[2.5rem] transition-all hover:bg-emerald-50 border border-transparent hover:border-emerald-100">
                            <div className="w-16 h-16 bg-white text-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4">{t('landing.services.education.title')}</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">{t('landing.services.education.desc')}</p>
                            <a className="text-emerald-500 font-black flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                                {t('landing.services.education.link')} <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works - Care as Simple as 1, 2, 3 */}
            <section className="py-24 bg-slate-50" id="how-it-works">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        {t('landing.how_it_works.title')}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                        {t('landing.how_it_works.subtitle')}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Step 1 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center relative z-10">
                            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-8 shadow-inner">1</div>
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Search className="w-6 h-6 text-primary/60" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{t('landing.how_it_works.step1.title')}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">{t('landing.how_it_works.step1.desc')}</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center relative z-10">
                            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-8 shadow-inner">2</div>
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Calendar className="w-6 h-6 text-amber-500/60" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{t('landing.how_it_works.step2.title')}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">{t('landing.how_it_works.step2.desc')}</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center relative z-10">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-8 shadow-inner">3</div>
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-6 h-6 text-emerald-500/60" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">{t('landing.how_it_works.step3.title')}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">{t('landing.how_it_works.step3.desc')}</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl">
                            {t('landing.how_it_works.cta')}
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                    <Heart className="text-white w-6 h-6" />
                                </div>
                                <span className="text-2xl font-bold text-white tracking-tight">ParentSmile</span>
                            </div>
                            <p className="max-w-sm mb-10 leading-relaxed text-lg">
                                Nuestra misión es brindar a cada familia un soporte profesional y compasivo para su bienestar. Salud integral al alcance de un clic.
                            </p>
                            <div className="flex gap-4">
                                <a className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                                    <Share2 className="w-5 h-5" />
                                </a>
                                <a className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                        <p>© 2026 ParentSmile Platform. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-8">
                            <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Plataforma Segura</span>
                            <span className="flex items-center gap-2 text-slate-300 font-semibold italic">By DyD Labs</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
