import React from 'react';
import {
    Routes,
    Route,
    Link,
    useLocation,
    Navigate
} from 'react-router-dom';
import {
    Users,
    Database,
    CreditCard,
    BarChart3,
    Plus,
    MoreHorizontal,
    Search,
    CheckCircle2,
    Clock,
    AlertCircle,
    Settings as SettingsIcon,
    Shield,
    Key,
    Percent,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DashboardView = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
        >
            <header className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-slate-900">{t('admin.dashboard.title')}</h1>
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all">
                    <Plus className="w-5 h-5" />
                    {t('admin.dashboard.new_pro')}
                </button>
            </header>

            <div className="grid grid-cols-4 gap-6">
                {[
                    { label: t('admin.dashboard.stats.earnings'), value: '€4,250', trend: '+12.5%', icon: CreditCard },
                    { label: t('admin.dashboard.stats.users'), value: '1,240', trend: '+5.4%', icon: Users },
                    { label: t('admin.dashboard.stats.pros'), value: '48', trend: '+2', icon: Database },
                    { label: t('admin.dashboard.stats.pending'), value: '12', trend: '-2', icon: AlertCircle },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-slate-50 rounded-2xl">
                                <stat.icon className="w-6 h-6 text-slate-600" />
                            </div>
                            <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-900">{t('admin.dashboard.recent_bookings')}</h3>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder={t('admin.dashboard.search')} className="pl-12 pr-6 py-3 bg-slate-50 border-none rounded-xl text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">{t('admin.dashboard.table.client')}</th>
                                <th className="px-8 py-5">{t('admin.dashboard.table.pro')}</th>
                                <th className="px-8 py-5">{t('admin.dashboard.table.date')}</th>
                                <th className="px-8 py-5">{t('admin.dashboard.table.amount')}</th>
                                <th className="px-8 py-5">{t('admin.dashboard.table.status')}</th>
                                <th className="px-8 py-5"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <tr key={item} className="hover:bg-slate-50/50 transition-all group">
                                    <td className="px-8 py-6 font-bold text-slate-900">Alexi - Dydialabs</td>
                                    <td className="px-8 py-6 text-slate-600">Dra. Martina Espósito</td>
                                    <td className="px-8 py-6 text-slate-500 font-medium">10 Feb, 2026</td>
                                    <td className="px-8 py-6 font-black text-slate-900">€45.00</td>
                                    <td className="px-8 py-6">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px] uppercase tracking-wider">
                                            <CheckCircle2 className="w-3 h-3" />
                                            {t('admin.dashboard.table.completed')}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg">
                                            <MoreHorizontal className="w-5 h-5 text-slate-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
}

const ProfessionalsView = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
        >
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">Gestión de Profesionales</h1>
                    <p className="text-slate-500">Administra el directorio y aprueba nuevos perfiles.</p>
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 shadow-xl shadow-primary/20">
                    <Plus className="w-5 h-5" />
                    Invitar Profesional
                </button>
            </header>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                        <tr>
                            <th className="px-8 py-5">Profesional</th>
                            <th className="px-8 py-5">Especialidad</th>
                            <th className="px-8 py-5">Valoración</th>
                            <th className="px-8 py-5">Estatus</th>
                            <th className="px-8 py-5">Comisión</th>
                            <th className="px-8 py-5"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {[
                            { name: 'Dra. Martina Espósito', spec: 'Pediatría', rate: '5.0', status: 'Activo', comm: '15%' },
                            { name: 'Lic. Julián Martínez', spec: 'Psicología Infantil', rate: '4.9', status: 'Activo', comm: '15%' },
                            { name: 'Prof. Ana Luz Galán', spec: 'Psicopedagogía', rate: '4.8', status: 'Pendiente', comm: '10%' },
                        ].map((pro, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-all">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100"></div>
                                        <span className="font-bold text-slate-900">{pro.name}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-slate-600 font-medium">{pro.spec}</td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                                        <Search className="w-4 h-4 fill-amber-500" />
                                        {pro.rate}
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${pro.status === 'Activo' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                        {pro.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6 font-bold text-slate-900">{pro.comm}</td>
                                <td className="px-8 py-6 text-right">
                                    <button className="text-primary font-bold text-xs hover:underline">Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

const SettingsView = () => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-4xl space-y-8"
    >
        <header>
            <h1 className="text-3xl font-black text-slate-900">Configuración del Sistema</h1>
            <p className="text-slate-500">Ajustes generales, pasarela de pagos y claves API.</p>
        </header>

        {/* Stripe Config */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                    <CreditCard className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-none mb-1">Pasarela de Pagos (Stripe)</h3>
                    <p className="text-sm text-slate-400">Configura tus credenciales para procesar cobros.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Stripe Public Key</label>
                    <div className="relative">
                        <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                            type="password"
                            value="pk_test_************************"
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm"
                            readOnly
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Stripe Secret Key</label>
                    <div className="relative">
                        <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                            type="password"
                            value="sk_test_************************"
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-mono text-sm"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Platform Rules */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-50 rounded-2xl">
                    <Percent className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-none mb-1">Comisiones de la Plataforma</h3>
                    <p className="text-sm text-slate-400">Define el porcentaje de ganancia por cada reserva.</p>
                </div>
            </div>

            <div className="max-w-xs space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Fee por Transacción (%)</label>
                <div className="flex gap-4">
                    <input
                        type="number"
                        defaultValue="15"
                        className="flex-1 px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-black text-xl"
                    />
                    <button className="bg-primary text-white px-6 rounded-2xl font-bold hover:bg-primary/90 transition-all">
                        Actualizar
                    </button>
                </div>
            </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
            <button className="px-8 py-4 bg-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-200 transition-all">Descartar Cambios</button>
            <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-all flex items-center gap-2">
                Guardar Configuración
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    </motion.div>
);

const AdminPanel: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { id: 'dashboard', label: t('admin.sidebar.dashboard'), icon: BarChart3, path: '/admin' },
        { id: 'professionals', label: t('admin.sidebar.professionals'), icon: Users, path: '/admin/professionals' },
        { id: 'reservations', label: t('admin.sidebar.reservations'), icon: Clock, path: '/admin/reservations' },
        { id: 'payments', label: t('admin.sidebar.payments'), icon: CreditCard, path: '/admin/payments' },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Admin Sidebar */}
            <aside className="w-72 bg-slate-900 flex flex-col p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-3 px-4 mb-12">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Database className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold text-white">PS Admin</span>
                </div>

                <nav className="flex-1 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${currentPath === item.path ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}

                    <div className="pt-4 mt-4 border-t border-white/5">
                        <Link
                            to="/admin/settings"
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${currentPath === '/admin/settings' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <SettingsIcon className="w-5 h-5" />
                            {t('admin.sidebar.settings')}
                        </Link>
                    </div>
                </nav>

                <div className="p-4 bg-white/5 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Plan Actual</p>
                    <p className="text-sm font-bold text-white">MVP v1.0</p>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3">
                        <div className="w-1/3 bg-primary h-full rounded-full"></div>
                    </div>
                </div>
            </aside>

            {/* Admin Main Content */}
            <main className="flex-1 p-10 overflow-auto">
                <Routes>
                    <Route index element={<DashboardView />} />
                    <Route path="professionals" element={<ProfessionalsView />} />
                    <Route path="settings" element={<SettingsView />} />
                    <Route path="*" element={<Navigate to="/admin" replace />} />
                </Routes>
            </main>
        </div>
    );
};

export default AdminPanel;
