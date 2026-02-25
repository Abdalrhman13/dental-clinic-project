import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Doctors() {
    const doctors = [
        {
            id: 1,
            name: 'د. أحمد محمود',
            specialty: 'استشاري تقويم الأسنان',
            exp: '15 سنة خبرة',
            desc: 'حاصل على البورد في تقويم الأسنان وعضو الجمعية السعودية للتقويم.',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            name: 'د. سارة خليل',
            specialty: 'أخصائية تجميل الأسنان',
            exp: '10 سنوات خبرة',
            desc: 'متخصصة في تصميم الابتسامة وعلاجات الفينير واللومينير بأحدث التقنيات.',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 3,
            name: 'د. خالد عبد الرحمن',
            specialty: 'استشاري زراعة الأسنان',
            exp: '18 سنة خبرة',
            desc: 'خبير في جراحات الفم الدقيقة وزراعة الأسنان الفورية بدون إحساس بالألم.',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-slate-50 min-h-[90vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">أطبائنا</h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        نخبة من أمهر الخبراء والاستشاريين المعتمدين في جميع تخصصات طب الأسنان لتوفير أقصى درجات العناية لك ולعائلتك.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, idx) => (
                        <motion.div
                            key={doc.id}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 flex items-center gap-1 text-yellow-500 bg-white/95 px-2.5 py-1 rounded-lg backdrop-blur text-sm font-bold shadow-sm">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>5.0</span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-bold w-max mb-4">
                                    {doc.exp}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{doc.name}</h3>
                                <p className="text-secondary-500 font-bold text-sm mb-4">{doc.specialty}</p>
                                <p className="text-slate-600 font-medium leading-relaxed mt-auto">
                                    {doc.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
