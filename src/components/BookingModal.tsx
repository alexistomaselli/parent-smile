import React, { useState } from 'react';
import { X, CreditCard, Video, Calendar, Clock, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
    professional: any;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ professional, onClose }) => {
    const [step, setStep] = useState<'DATE' | 'PAYMENT' | 'SUCCESS'>('DATE');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('SUCCESS');
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 outline-none focus:outline-none">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                            <img src={professional.image} alt={professional.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">{professional.name}</h3>
                            <p className="text-xs text-primary font-bold uppercase tracking-wider">{professional.specialty}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-3 bg-white hover:bg-slate-100 rounded-2xl transition-all shadow-sm">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                <div className="p-10">
                    <AnimatePresence mode="wait">
                        {step === 'DATE' && (
                            <motion.div
                                key="date"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                        <Calendar className="w-6 h-6 text-primary" />
                                        Selecciona Fecha y Hora
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['10 Feb - 10:00', '10 Feb - 11:30', '11 Feb - 09:00', '11 Feb - 15:00'].map(date => (
                                            <button
                                                key={date}
                                                onClick={() => setSelectedDate(date)}
                                                className={`p-4 rounded-2xl border-2 transition-all font-bold text-sm ${selectedDate === date ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                                            >
                                                {date}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-500 font-medium">Sesión Virtual (1h)</span>
                                        <span className="text-slate-900 font-black">€{professional.price}</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pago 100% seguro v&iacute;a Stripe</p>
                                </div>

                                <button
                                    disabled={!selectedDate}
                                    onClick={() => setStep('PAYMENT')}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all disabled:opacity-50"
                                >
                                    Continuar al Pago
                                </button>
                            </motion.div>
                        )}

                        {step === 'PAYMENT' && (
                            <motion.div
                                key="payment"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                        <CreditCard className="w-6 h-6 text-primary" />
                                        Información de Pago
                                    </h4>

                                    {/* Mock Stripe Element */}
                                    <div className="space-y-4">
                                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                                            <CreditCard className="w-6 h-6 text-slate-400" />
                                            <span className="text-slate-400">4242 4242 4242 4242</span>
                                            <div className="flex-1 text-right text-xs font-bold text-slate-400 uppercase tracking-widest">Stripe Core</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-2xl border border-emerald-100 italic text-sm">
                                        <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                                        Tu pago está protegido. El profesional recibirá sus honorarios después de la consulta.
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep('DATE')}
                                        className="flex-1 bg-white text-slate-500 py-5 rounded-2xl font-bold border border-slate-100 hover:bg-slate-50"
                                    >
                                        Atrás
                                    </button>
                                    <button
                                        onClick={handlePay}
                                        disabled={loading}
                                        className="flex-[2] bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-black transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" /> : `Pagar €${professional.price}`}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 'SUCCESS' && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10 space-y-6"
                            >
                                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <CheckCircle className="w-12 h-12" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 leading-tight">¡Turno Confirmado!</h3>
                                <p className="text-slate-500 max-w-sm mx-auto">
                                    Has reservado con <strong className="text-slate-900">{professional.name}</strong> para el <strong className="text-slate-900">{selectedDate}</strong>.
                                </p>

                                <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 flex flex-col items-center gap-3 mt-8">
                                    <Video className="w-8 h-8 text-primary" />
                                    <p className="text-sm font-medium text-slate-600">Enlace de la Videoconsulta:</p>
                                    <code className="bg-white px-4 py-2 rounded-xl text-primary font-bold shadow-sm">meet.google.com/xyz-abc-123</code>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Hemos enviado el enlace a tu email.</p>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all"
                                >
                                    Ir a Mis Citas
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default BookingModal;
