import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

export default function Booking() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'الاسم مطلوب';
        if (!formData.phone) newErrors.phone = 'رقم الجوال مطلوب';
        if (!formData.service) newErrors.service = 'الرجاء اختيار خدمة';
        if (!formData.date) newErrors.date = 'الرجاء اختيار التاريخ';
        if (!formData.time) newErrors.time = 'الرجاء اختيار الوقت';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            // Backend simulaiton
        }
    };

    return (
        <div className="py-16 md:py-24 bg-slate-50 px-4 min-h-[90vh] flex items-center justify-center">
            <div className="container mx-auto max-w-3xl">

                {isSubmitted ? (
                    <motion.div
                        className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="w-20 h-20 bg-secondary-50 text-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">تم حجز موعدك بنجاح!</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto font-medium leading-relaxed">
                            شكراً لك {formData.name}، سيقوم فريقنا بالطوارئ أو الاستقبال بالتواصل معك قريباً على الرقم ({formData.phone}) لتأكيد وقت الاستشارة.
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '' });
                            }}
                            className="px-8 py-3.5 bg-primary-500 text-white font-bold rounded-xl shadow-sm hover:bg-primary-600 transition-colors"
                        >
                            حجز موعد جديد
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center p-4 bg-primary-50 text-primary-500 rounded-2xl mb-6 shadow-sm">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">نموذج حجز المواعيد</h1>
                            <p className="text-slate-600 font-medium">املأ النموذج أدناه بسلاسة وسنتواصل معك بأقرب وقت ممكن لتأكيد الموعد.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-2">الاسم الكامل *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                        placeholder="مثل: أحمد عبد الله"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.name}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-2">رقم الجوال *</label>
                                    <input
                                        type="tel"
                                        dir="ltr"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-right focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                        placeholder="05X XXX XXXX"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.phone}</p>}
                                </div>

                                {/* Email (Optional) */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-900 mb-2">البريد الإلكتروني (اختياري)</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                        placeholder="example@doc-clinic.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                {/* Service */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-900 mb-2">نوع الخدمة الطبية *</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700 font-medium"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="">-- يرجى اختيار الخدمة --</option>
                                        <option value="cleaning">تنظيف وتلميع الأسنان</option>
                                        <option value="whitening">تبييض الأسنان بالليزر</option>
                                        <option value="braces">تقويم الأسنان</option>
                                        <option value="implant">زراعة الأسنان</option>
                                        <option value="veneer">عدسات الأسنان (الفينير)</option>
                                        <option value="kids">طب أسنان الأطفال</option>
                                        <option value="consultation">استشارة طبية عامة</option>
                                    </select>
                                    {errors.service && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.service}</p>}
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-2">التاريخ المفضل *</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700 font-medium"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                    {errors.date && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.date}</p>}
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-2">الوقت المفضل *</label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700 font-medium"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="">-- اختيار فترة اليوم --</option>
                                        <option value="morning">صباحاً (9:00 ص - 1:00 م)</option>
                                        <option value="afternoon">مساءً (4:00 م - 7:00 م)</option>
                                        <option value="evening">ليلاً (7:00 م - 10:00 م)</option>
                                    </select>
                                    {errors.time && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.time}</p>}
                                </div>

                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary-500 text-white font-bold text-lg rounded-xl shadow-sm hover:bg-primary-600 hover:shadow-md transition-all duration-300"
                                >
                                    إرسال طلب الحجز الآن
                                </button>
                            </div>

                        </form>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
