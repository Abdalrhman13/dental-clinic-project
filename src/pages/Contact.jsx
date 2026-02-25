import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="py-16 md:py-24 bg-slate-50 min-h-[90vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">اتصل بنا</h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        نحن متواجدون للرد على جميع استفساراتكم وملاحظاتكم الطبية. يمكنك التواصل معنا عبر أي من القنوات الموضحة أو ملئ النموذج.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                    {/* Contact Details */}
                    <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-l border-slate-200 bg-slate-50/50">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">معلومات التواصل المباشر</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white border border-slate-200 text-primary-500 rounded-xl shadow-sm">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">الموقع</h3>
                                    <p className="text-slate-600 font-medium">شارع الملك فهد، حي العليا<br />الرياض، المملكة العربية السعودية</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white border border-slate-200 text-primary-500 rounded-xl shadow-sm">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">دعم العملاء والحجوزات</h3>
                                    <p dir="ltr" className="text-slate-600 font-medium text-right">+966 50 123 4567</p>
                                    <p dir="ltr" className="text-slate-600 font-medium text-right">+966 11 234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white border border-slate-200 text-primary-500 rounded-xl shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">البريد الإلكتروني</h3>
                                    <p className="text-slate-600 font-medium">info@alnoor-dental.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white border border-slate-200 text-primary-500 rounded-xl shadow-sm">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">مواعيد الدوام</h3>
                                    <ul className="text-slate-600 font-medium space-y-1">
                                        <li>السبت - الخميس: 9:00 ص إلى 10:00 م</li>
                                        <li className="text-red-500">الجمعة: مغلق كلياً (للطوارئ فقط)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">دعنا نسمع منك</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-900 mb-2">الاسم</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                    placeholder="كيف يمكننا مناداتك؟"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-900 mb-2">البريد الإلكتروني / الجوال</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                                    placeholder="للتواصل معك للرد على استفسارك"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-900 mb-2">رسالتك للإدارة</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-slate-400 bg-slate-50 focus:bg-white resize-none"
                                    placeholder="اكتب استفسارك، مقطتراحك أو شكواك هنا.."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary-500 text-white font-bold text-lg rounded-xl shadow-sm hover:bg-primary-600 transition-colors duration-300"
                                onClick={(e) => { e.preventDefault(); alert('تم استلام رسالتك! سيقوم الفريق بمراجعتها والرد عليك بأقرب وقت.') }}
                            >
                                إرسال الاستفسار
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}
