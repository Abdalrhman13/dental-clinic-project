import { motion } from 'framer-motion';
import {
    Sparkles,
    SmilePlus,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            id: 1,
            title: 'تنظيف وتلميع الأسنان',
            desc: 'إزالة الجير والبقع باستخدام أحدث الأجهزة الفوق صوتية للحصول على أسنان نظيفة ولثة صحية وقوية.',
            icon: <Sparkles className="w-8 h-8" />
        },
        {
            id: 2,
            title: 'تبييض الأسنان بالليزر',
            desc: 'استعد ابتسامتك المشرقة في جلسة واحدة فقط بفضل تقنية تبييض الأسنان الآمنة عبر نظام الليزر الحديث.',
            icon: <Sparkles className="w-8 h-8" />
        },
        {
            id: 3,
            title: 'تقويم الأسنان',
            desc: 'تصحيح إطباق الأسنان غير المنتظم باستخدام التقويم المعدني، التقويم الشفاف (الإنفزلاين)، أو الخزفي.',
            icon: <SmilePlus className="w-8 h-8" />
        },
        {
            id: 4,
            title: 'زراعة الأسنان',
            desc: 'أحدث الخيارات لتعويض الأسنان المفقودة باستخدام غرسات التيتانيوم القوية والموثوقة على المدى الطويل.',
            icon: <SmilePlus className="w-8 h-8" />
        },
        {
            id: 5,
            title: 'عدسات الأسنان (الفينير)',
            desc: 'تجميل الأسنان المكسورة أو غير المنتظمة بقشور خزفية رقيقة تصمم خصيصاً لتمنحك ابتسامة هوليود.',
            icon: <Sparkles className="w-8 h-8" />
        },
        {
            id: 6,
            title: 'طب أسنان الأطفال',
            desc: 'بيئة آمنة ومريحة لعلاج أسنان طفلك وبناء عادات صحية للفم منذ الصغر بأيدي مختصين بطب الأطفال.',
            icon: <SmilePlus className="w-8 h-8" />
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-slate-50 min-h-[90vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">الخدمات الطبية</h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        مجموعة متكاملة من الخدمات الطبية والتجميلية المصممة بعناية لمنحك الابتسامة التيطالما حلمت بها بكل ثقة وصحة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 font-medium mb-8 leading-relaxed flex-grow">
                                {service.desc}
                            </p>

                            <Link
                                to="/booking"
                                className="inline-flex items-center text-primary-500 font-bold hover:text-primary-600 transition-colors w-max"
                            >
                                احجز موعداً
                                <ArrowRight className="w-5 h-5 mr-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
