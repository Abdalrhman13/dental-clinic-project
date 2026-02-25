import { ArrowLeft, Clock, MapPin, Phone, Star, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Clean Hero Section */}
            <section className="relative bg-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-slate-200">
                {/* Subtle soft glow, no heavy gradients */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm mb-8 border border-primary-100">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                                </span>
                                نرحب بكم في عيادتنا الجديدة
                            </div>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.3] mb-6">
                                ابتسامتك الصحية تبدأ <br />
                                <span className="text-primary-500">من عيادة النور</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                                نقدم لك أحدث التقنيات وأفضل الخبراء في طب الأسنان، لنضمن لك تجربة علاجية لا تُنسى ونتائج مبهرة تعيد لك ثقتك بابتسامتك كل يوم.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to="/booking"
                                    className="px-8 py-3.5 bg-primary-500 text-white font-bold rounded-xl shadow-sm hover:bg-primary-600 hover:shadow-md transition-all duration-300 flex items-center gap-2 group"
                                >
                                    احجز موعد الآن
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="px-8 py-3.5 bg-white text-primary-500 font-bold rounded-xl shadow-sm border border-primary-500 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                >
                                    استكشف خدماتنا
                                </Link>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-600">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-secondary-500 shadow-sm">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800 text-base">رعاية آمنة 100%</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary-500 shadow-sm">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800 text-base">أطباء معتمدون</span>
                                </div>
                            </div>
                        </div>

                        {/* Clean Hero Image Grid */}
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-slate-100 rounded-[2.5rem] transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="طبيب أسنان يعالج مريضة"
                                className="relative rounded-[2rem] w-full h-[550px] object-cover shadow-xl border-4 border-white"
                            />
                            {/* Floating Professional Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none">
                                <div className="text-yellow-400 bg-yellow-50 p-3 rounded-xl border border-yellow-100">
                                    <Star className="w-8 h-8 fill-current" />
                                </div>
                                <div>
                                    <div className="font-extrabold text-2xl text-slate-900">4.9/5</div>
                                    <div className="text-sm text-slate-500 font-medium">تقييم المرضى</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info Cards using Unified Card Style */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">ساعات العمل</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">السبت - الخميس: 9:00 ص - 10:00 م<br />الجمعة: مغلق</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-secondary-50 text-secondary-500 rounded-xl flex items-center justify-center mb-6">
                                <Phone className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">حالات الطوارئ</h3>
                            <p className="text-slate-600 leading-relaxed font-medium mb-4">متواجدون للرد على الطوارئ مدار الساعة.</p>
                            <a href="tel:+966501234567" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors">
                                <span dir="ltr">050-123-4567</span>
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">موقعنا</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">شارع الملك فهد، حي العليا<br />الرياض، السعودية</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
