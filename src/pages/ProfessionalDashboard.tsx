import React from 'react';
import {
    Calendar,
    Clock,
    Video,
    DollarSign,
    Bell,
    Settings,
    Stethoscope,
    Users,
    Star,
    Search,
    MoreVertical,
    Plus,
    MessageSquare,
    ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TODAY_AGENDA = [
    {
        id: 1,
        time: '09:00 AM',
        patient: 'Luca Rossi',
        detail: '6 Meses • Control de Rutina',
        status: 'Confirmado',
        type: 'pediatrics',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        id: 2,
        time: '10:30 AM',
        patient: 'Sofia Bianchi',
        detail: '4 Años • Vacunación',
        status: 'En Progreso',
        type: 'vaccine',
        color: 'bg-amber-50 text-amber-600'
    },
    {
        id: 3,
        time: '02:15 PM',
        patient: 'Marco Verga',
        detail: '12 Años • Consulta Online',
        status: 'Programado',
        type: 'virtual',
        color: 'bg-purple-50 text-purple-600'
    }
];

const PENDING_REQUESTS = [
    {
        id: 1,
        patient: 'Elena Ferrari',
        requested: 'Mañana, 11:00 AM',
        message: '"Hola Doctora, Leo tiene una tos persistente desde anoche. Nos gustaría verla."',
        image: 'https://i.pravatar.cc/100?img=5'
    },
    {
        id: 2,
        patient: 'Matteo Gallo',
        requested: 'Viernes, 04:00 PM',
        image: 'https://i.pravatar.cc/100?img=11'
    }
];

const RECENT_PATIENTS = [
    {
        id: 1,
        name: 'Luca Rossi',
        lastVisit: '24 Oct, 2023',
        condition: 'Seguimiento Asma',
        status: 'Estable',
        statusColor: 'bg-emerald-500',
        initials: 'LR'
    },
    {
        id: 2,
        name: 'Sofia Bianchi',
        lastVisit: '21 Oct, 2023',
        condition: 'Resfriado Común',
        status: 'Recuperando',
        statusColor: 'bg-blue-500',
        initials: 'SB'
    },
    {
        id: 3,
        name: 'Marco Verga',
        lastVisit: '19 Oct, 2023',
        condition: 'Check Post-Cirugía',
        status: 'Crítico',
        statusColor: 'bg-rose-500',
        initials: 'MV'
    }
];

const ProfessionalDashboard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r border-slate-200 hidden lg:flex flex-col p-8 sticky top-0 h-screen">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                        <Stethoscope className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900">ParentSmile</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <button className="w-full flex items-center gap-4 px-6 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20">
                        <Calendar className="w-5 h-5" />
                        Dashboard
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                        <Clock className="w-5 h-5" />
                        Agenda / Citas
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                        <Users className="w-5 h-5" />
                        Pacientes / Familias
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                        <MessageSquare className="w-5 h-5" />
                        Consultas
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold transition-all">
                        <DollarSign className="w-5 h-5" />
                        Ingresos
                    </button>
                </nav>

                <div className="pt-8 border-t border-slate-100 space-y-4">
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-slate-600 font-bold transition-all">
                        <Settings className="w-5 h-5" />
                        Configuración
                    </button>
                    <div className="flex items-center gap-4 p-4 mt-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" alt="ME" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-slate-900 leading-none mb-1">Dra. Sarah Jenkins</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pediatra</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 mb-1">{t('dashboard_prof.greeting')}</h1>
                        <p className="text-slate-500 font-medium">{t('dashboard_prof.summary', { count: 8 })}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder={t('dashboard_prof.search_placeholder')}
                                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            />
                        </div>
                        <button className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 relative">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t('dashboard_prof.stats.earnings')}</p>
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg">+12.5%</span>
                        </div>
                        <h3 className="text-4xl font-black text-slate-900 mb-4">$3,420 <span className="text-sm text-slate-400 font-medium ml-2">{t('dashboard_prof.stats.vs_last_week')}</span></h3>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[65%] h-full bg-primary"></div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t('dashboard_prof.stats.new_patients')}</p>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg">Este Mes</span>
                        </div>
                        <h3 className="text-4xl font-black text-slate-900 mb-4">24 <span className="text-sm text-slate-400 font-medium ml-2">{t('dashboard_prof.stats.active_records')}</span></h3>
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Paciente" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm">+12</div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t('dashboard_prof.stats.rating')}</p>
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        </div>
                        <h3 className="text-4xl font-black text-slate-900 mb-4">4.9 <span className="text-sm text-slate-400 font-medium ml-2">/ 5.0 (120 {t('dashboard_prof.stats.reviews')})</span></h3>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4].map(i => <div key={i} className="flex-1 h-1.5 bg-primary rounded-full"></div>)}
                            <div className="flex-1 h-1.5 bg-slate-100 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Today's Agenda */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('dashboard_prof.agenda.title')}</h2>
                            <button className="text-primary font-bold text-sm hover:underline">{t('dashboard_prof.agenda.view_calendar')}</button>
                        </div>

                        <div className="space-y-4">
                            {TODAY_AGENDA.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ x: 8 }}
                                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-8 group"
                                >
                                    <div className="text-sm font-black text-slate-400 min-w-[70px]">
                                        {item.time.split(' ')[0]} <br />
                                        <span className="text-[10px] tracking-widest">{item.time.split(' ')[1]}</span>
                                    </div>

                                    <div className="flex items-center gap-6 flex-1">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color.split(' ')[0]} transition-all group-hover:scale-110`}>
                                            {item.type === 'pediatrics' && <Stethoscope className={`w-6 h-6 ${item.color.split(' ')[1]}`} />}
                                            {item.type === 'vaccine' && <Plus className={`w-6 h-6 ${item.color.split(' ')[1]}`} />}
                                            {item.type === 'virtual' && <Video className={`w-6 h-6 ${item.color.split(' ')[1]}`} />}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl text-slate-900 mb-1">{item.patient}</h4>
                                            <p className="text-slate-500 text-sm font-medium">{item.detail}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${['Confirmado', 'Confirmato'].includes(item.status) ? 'bg-emerald-50 text-emerald-600' :
                                            ['En Progreso', 'In Corso'].includes(item.status) ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
                                            }`}>
                                            {item.status}
                                        </span>
                                        <button className="text-slate-300 hover:text-slate-600">
                                            <MoreVertical className="w-6 h-6" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                            <button className="w-full py-6 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3 group">
                                <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-white transition-all">
                                    <Plus className="w-4 h-4" />
                                </div>
                                {t('dashboard_prof.agenda.title') === 'Agenda de Hoy' ? 'Añadir entrada manual o bloquear tiempo' : 'Aggiungi voce manuale o blocca tempo'}
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Pending & Message */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('dashboard_prof.requests.title')}</h2>

                        <div className="space-y-4">
                            {PENDING_REQUESTS.map(req => (
                                <div key={req.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-slate-50 shadow-sm">
                                            <img src={req.image} alt={req.patient} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 leading-none mb-1">{req.patient}</h4>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t('dashboard_prof.requests.requested_for')}: {req.requested.split(',')[0]}</p>
                                        </div>
                                    </div>

                                    {req.message && (
                                        <div className="bg-slate-50 p-4 rounded-2xl text-xs text-slate-600 font-medium leading-relaxed italic mb-6">
                                            {req.message}
                                        </div>
                                    )}

                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-primary text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">{t('dashboard_prof.requests.accept')}</button>
                                        <button className="flex-1 bg-slate-50 text-slate-500 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all">{t('dashboard_prof.requests.reschedule')}</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4 relative overflow-hidden group cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                                <MessageSquare className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 leading-none mb-1">{t('dashboard_prof.messages.new')}</h4>
                                <p className="text-[10px] text-blue-500 font-black uppercase tracking-wider">{t('dashboard_prof.messages.from')} Laboratorio Clínico #12</p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
                        </div>
                    </div>
                </div>

                {/* Recent Patients Table */}
                <section className="mt-16 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                        <h2 className="text-xl font-black text-slate-900">{t('dashboard_prof.recent_patients.title')}</h2>
                        <button className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">{t('dashboard_prof.recent_patients.search_all')}</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-slate-50">
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('dashboard_prof.recent_patients.col_name')}</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('dashboard_prof.recent_patients.col_visit')}</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('dashboard_prof.recent_patients.col_condition')}</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('dashboard_prof.recent_patients.col_status')}</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {RECENT_PATIENTS.map(patient => (
                                    <tr key={patient.id} className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-black text-[10px] border border-primary/20">
                                                    {patient.initials}
                                                </div>
                                                <span className="font-black text-slate-900">{patient.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-slate-500 font-bold">{patient.lastVisit}</td>
                                        <td className="px-8 py-6 text-sm text-slate-500 font-medium">{patient.condition}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${patient.statusColor}`}></div>
                                                <span className="text-sm font-bold text-slate-700">{patient.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-slate-300 hover:text-primary transition-colors hover:bg-white rounded-lg border border-transparent hover:border-slate-100 hover:shadow-sm">
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProfessionalDashboard;
