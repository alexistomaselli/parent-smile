import React, { useState, useMemo } from 'react';
import { Search, MapPin, Video, Star, Calendar, Filter, ChevronRight, Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BookingModal from '../components/BookingModal';

const Directory: React.FC = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedPro, setSelectedPro] = useState<any>(null);

    const CATEGORIES = [
        'Todos',
        'Pediatría',
        'Psicología Infantil',
        'Psicopedagogía',
        'Fonoaudiología',
        'Nutrición Infantil'
    ];

    const PROFESSIONALS = [
        {
            id: 1,
            name: 'Dra. Martina Espósito',
            specialty: 'Pediatría & Neonatología',
            category: 'Pediatría',
            rating: 5.0,
            reviews: 124,
            price: 45,
            location: 'Buenos Aires, AR',
            modalities: ['virtual', 'presencial'],
            image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
            available: t('common.today')
        },
        {
            id: 2,
            name: 'Lic. Julián Martínez',
            specialty: 'Psicología Infantil',
            category: 'Psicología Infantil',
            rating: 4.9,
            reviews: 89,
            price: 35,
            location: 'Córdoba, AR',
            modalities: ['virtual'],
            image: 'https://images.pexels.com/photos/12093556/pexels-photo-12093556.jpeg?auto=compress&cs=tinysrgb&w=800',
            available: t('common.tomorrow')
        },
        // ... (remaining objects could also use translations for dynamic fields)
    ];

    const filteredProfessionals = useMemo(() => {
        return PROFESSIONALS.filter(pro => {
            const matchesSearch = pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pro.specialty.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'Todos' || pro.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 lg:px-8">
            <AnimatePresence>
                {selectedPro && (
                    <BookingModal
                        professional={selectedPro}
                        onClose={() => setSelectedPro(null)}
                    />
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">{t('directory.title')}</h1>
                    <p className="text-xl text-slate-500 font-medium">{t('directory.subtitle')}</p>
                </header>

                <div className="relative z-20 mb-12">
                    <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row gap-4 items-center border border-slate-100">
                        <div className="flex-1 relative w-full">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                            <input
                                type="text"
                                placeholder={t('directory.search_placeholder')}
                                className="w-full pl-16 pr-8 py-5 rounded-3xl bg-slate-50 border-none focus:ring-4 focus:ring-primary/10 transition-all text-lg font-medium placeholder:text-slate-400"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center justify-center gap-3 px-8 py-5 rounded-[1.5rem] font-bold transition-all transition-all duration-300 w-full md:w-auto ${showFilters ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                        >
                            {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
                            {showFilters ? t('directory.filters.close') : t('directory.filters.open')}
                        </button>
                    </div>

                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute top-full left-0 right-0 mt-4 p-8 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-wrap gap-3 z-30"
                            >
                                {CATEGORIES.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            if (window.innerWidth < 768) setShowFilters(false);
                                        }}
                                        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${activeCategory === category ? 'bg-primary/10 border-primary text-primary shadow-sm' : 'bg-slate-50 border-transparent text-slate-500 hover:border-slate-200 hover:bg-slate-100'}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {(searchTerm || activeCategory !== 'Todos') && (
                    <div className="flex items-center gap-4 mb-8 bg-white/50 p-4 rounded-2xl border border-slate-100 animate-in fade-in slide-in-from-top-4">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                            {t('directory.status.showing')}: <span className="text-primary">{activeCategory}</span>
                            {searchTerm && <> {t('directory.status.for')} "<span className="text-primary">{searchTerm}</span>"</>}
                        </p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveCategory('Todos'); }}
                            className="text-xs font-black text-rose-500 uppercase hover:underline"
                        >
                            {t('directory.status.clear')}
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence>
                        {filteredProfessionals.map((pro, index) => (
                            <motion.div
                                key={pro.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img src={pro.image} alt={pro.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <button className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-3 rounded-[1.2rem] shadow-xl hover:bg-white transition-all transform hover:scale-110 active:scale-95">
                                        <Heart className={`w-5 h-5 transition-colors ${index === 0 ? 'text-rose-500 fill-rose-500' : 'text-slate-400 group-hover:text-rose-500'}`} />
                                    </button>
                                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                        {pro.modalities.map(m => (
                                            <span key={m} className={`px-4 py-2 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase rounded-xl shadow-lg flex items-center gap-2`}>
                                                {m === 'virtual' ? <Video className="w-3.5 h-3.5 text-primary" /> : <MapPin className="w-3.5 h-3.5 text-accent-orange" />}
                                                {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1 group-hover:text-primary transition-colors">{pro.name}</h3>
                                            <p className="text-primary font-bold text-sm tracking-wide">{pro.specialty}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                            <span className="text-sm font-black text-amber-700">{pro.rating}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-slate-500 font-medium">
                                            <MapPin className="w-5 h-5 text-slate-400" />
                                            <span className="text-sm">{pro.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-emerald-500" />
                                            <span className="text-sm font-bold text-emerald-600">{t('directory.card.available')} {pro.available}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.1em]">{t('directory.card.session_from')}</span>
                                            <span className="text-3xl font-black text-slate-900 tracking-tight">€{pro.price}</span>
                                        </div>
                                        <button onClick={() => setSelectedPro(pro)} className="bg-slate-900 text-white p-5 rounded-[1.5rem] hover:bg-primary transition-all shadow-xl">
                                            <ChevronRight className="w-7 h-7" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProfessionals.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
                        <Search className="w-20 h-20 text-slate-100 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('directory.no_results.title')}</h3>
                        <p className="text-slate-500">{t('directory.no_results.desc')}</p>
                        <button onClick={() => { setSearchTerm(''); setActiveCategory('Todos'); }} className="mt-6 text-primary font-bold hover:underline">
                            {t('directory.no_results.cta')}
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Directory;
