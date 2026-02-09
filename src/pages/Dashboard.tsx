import React from 'react';
import {
    Calendar,
    Clock,
    Video,
    User,
    CreditCard,
    Bell,
    Settings,
    LogOut,
    ChevronRight,
    ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const APPOINTMENTS = [
    {
        id: 1,
        professional: 'Dra. Martina Espósito',
        specialty: 'Pediatría',
        date: 'Mañana, 10 Feb',
        time: '11:00 AM',
        status: 'Confirmed',
        link: 'https://meet.google.com/xyz-abc-123',
        image: 'https://images.unsplash.com/photo-1559839734-2b71f15367ef?q=80&w=2070&auto=format&fit=crop'
    }
];

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-slate-100 hidden lg:flex flex-col p-8">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900">ParentSmile</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <button className="w-full flex items-center gap-4 px-6 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20">
                        <Calendar className="w-5 h-5" />
                        Mis Citas
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                        <User className="w-5 h-5" />
                        Perfil Familiar
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                        <CreditCard className="w-5 h-5" />
                        Pagos
                    </button>
                </nav>

                <div className="pt-8 border-t border-slate-50 space-y-4">
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-slate-600 font-bold transition-all">
                        <Settings className="w-5 h-5" />
                        Ajustes
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-red-400 hover:text-red-500 font-bold transition-all">
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 mb-2">¡Hola, Alexi!</h1>
                        <p className="text-slate-500">Aquí tienes el resumen de tu actividad familiar.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 relative">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border-2 border-white shadow-sm flex items-center justify-center font-bold text-primary">
                            AL
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Próxima Cita</p>
                        <h3 className="text-2xl font-black text-slate-900">Mañana, 11:00</h3>
                        <p className="text-primary font-bold text-sm mt-1">Dra. Martina Espósito</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Consultas este mes</p>
                        <h3 className="text-2xl font-black text-slate-900">4</h3>
                        <p className="text-slate-400 font-medium text-sm mt-1">2 pediatrías, 2 psicología</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Presupuesto</p>
                        <h3 className="text-2xl font-black text-slate-900">€160.00</h3>
                        <p className="text-emerald-500 font-bold text-sm mt-1">Suscripción Activa</p>
                    </div>
                </div>

                {/* Appointments List */}
                <section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Próximas Sesiones</h2>
                        <button className="text-primary font-bold text-sm hover:underline">Ver Historial</button>
                    </div>

                    <div className="space-y-4">
                        {APPOINTMENTS.map((app) => (
                            <motion.div
                                key={app.id}
                                whileHover={{ y: -4 }}
                                className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6"
                            >
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50 shadow-sm">
                                    <img src={app.image} alt={app.professional} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="font-bold text-lg text-slate-900">{app.professional}</h4>
                                    <p className="text-slate-400 text-sm">{app.specialty}</p>
                                </div>

                                <div className="flex items-center gap-8 py-4 px-8 bg-slate-50 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-slate-400" />
                                        <span className="font-bold text-slate-600">{app.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-slate-400" />
                                        <span className="font-bold text-slate-600">{app.time}</span>
                                    </div>
                                </div>

                                <div className="flex gap-3 w-full md:w-auto">
                                    <a
                                        href={app.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 md:flex-initial flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                    >
                                        <Video className="w-5 h-5" />
                                        Unirse
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <button className="bg-white border border-slate-100 text-slate-400 p-4 rounded-2xl hover:bg-slate-50 transition-all">
                                        <Settings className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
