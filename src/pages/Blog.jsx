import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: 'كيف تحافظ على صحة أسنانك خلال شهر رمضان؟',
            excerpt: 'أهم النصائح الغذائية والسلوكية للعناية بأسنانك وتجنب الجفاف والروائح الكريهة أثناء صيام شهر رمضان المبارك.',
            date: '15 مارس 2024',
            author: 'د. أحمد محمود',
            image: 'https://images.unsplash.com/photo-1598256989417-eb7d792b0c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'نصائح طبية'
        },
        {
            id: 2,
            title: 'الفرق بين تبييض الأسنان بالليزر والتبييض المنزلي',
            excerpt: 'تعرف بدقة على أبرز إيجابيات وسلبيات كل طريقة لتختار العلاج الذي يتوافق مع ميزانيتك، وقتك، وتوقعاتك.',
            date: '02 فبراير 2024',
            author: 'د. سارة خليل',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'تجميل الأسنان'
        },
        {
            id: 3,
            title: 'أهمية الزيارة الدورية لطبيب الأسنان للأطفال',
            excerpt: 'لماذا يجب ألا تنتظر طويلا حتى يشعر طفلك بالألم؟ اكتشف أهمية الكشف الطبي الاحترازي المبكر وأثره على اللثة.',
            date: '20 يناير 2024',
            author: 'د. خالد عبد الرحمن',
            image: 'https://images.unsplash.com/photo-1606265752439-1f18756f1f48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'أسنان الأطفال'
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-slate-50 min-h-[90vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">المنصة التثقيفية</h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        مكتبة مقالات علمية ونصائح وقائية موثوقة تقدم حصرياً من أطباء وخبراء عيادة النور لمساعدتك في العناية بأسنانك بشكل مثالي.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="relative h-56 overflow-hidden bg-slate-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                {/* Meta details */}
                                <div className="flex items-center gap-4 text-sm text-slate-500 font-bold mb-5 pb-5 border-b border-slate-100">
                                    <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                        <Calendar className="w-4 h-4 text-primary-500" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                        <User className="w-4 h-4 text-primary-500" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 font-medium mb-8 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Action */}
                                <div className="mt-auto">
                                    <Link
                                        to="#"
                                        className="inline-flex items-center font-bold text-primary-500 group-hover:text-primary-600 transition-colors gap-1.5"
                                    >
                                        متابعة القراءة
                                        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </div>
    );
}
