import { motion } from 'framer-motion';
import { Target, Lightbulb, HeartHandshake, CheckCircle } from 'lucide-react';

export default function About() {
    const values = [
        { icon: <HeartHandshake className="w-8 h-8" />, title: 'الرعاية والاهتمام', desc: 'نضع راحة المريض في المقام الأول ونحرص على توفير بيئة علاجية مريحة وداعمة وبكل احترافية.' },
        { icon: <CheckCircle className="w-8 h-8" />, title: 'الجودة والاحترافية', desc: 'نلتزم بأعلى معايير الجودة العالمية في مجالات طب الأسنان ونطبق أحدث سياسات مكافحة العدوى.' },
        { icon: <Lightbulb className="w-8 h-8" />, title: 'التطوير المستمر', desc: 'نواكب أحدث التقنيات الطبية ونعتمد دائماً على أمهر الكوادر لتوفير نتائج مثالية لا تشوبها شائبة.' },
    ];

    return (
        <div className="py-16 md:py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Content */}
                <div className="text-center max-w-3xl mx-auto mb-20 text-slate-900">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">من نحن</h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        عيادة النور للأسنان هي وجهتك الأولى للحصول على ابتسامة صحية ومشرقة. انطلقنا من مبدأ أساسي يتمثل في
                        بناء بيئة مبنية على الثقة بين الطبيب والمريض، وتقديم خدمات طبية تتوافق مع التطور التكنولوجي.
                    </p>
                </div>

                {/* Vision & Mission Cards Unified Style */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mb-6">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">رسالتنا</h2>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            تقديم خدمات طبية متكاملة في مجال العناية بصحة الأسنان والفم، بمهنية عالية وأسعار مدروسة، لضمان صحة ورفاهية مجتمعنا وصناعة ابتسامات سعيدة تدوم.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="w-16 h-16 bg-secondary-50 rounded-xl flex items-center justify-center text-secondary-500 mb-6">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">رؤيتنا</h2>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            أن نكون المركز الرائد والأكثر ثقة في تقديم رعاية استثنائية لصحة الفم والأسنان، معتمدين على الابتكار والتطوير المستمر للارتقاء بجودة وأسلوب الحياة.
                        </p>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">قيمنا الجوهرية</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md text-center transition-all duration-300 hover:-translate-y-1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary-500">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
