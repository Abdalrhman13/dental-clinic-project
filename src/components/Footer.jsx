import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-primary-100 flex-shrink-0">
                                <img src="/favicon.svg" alt="شعار عيادة النور" className="w-7 h-7 object-contain" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">عيادة النور للأسنان</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed max-w-sm mb-6">
                            نقدم لكم أفضل خدمات العناية بالأسنان والابتسامة المشرقة بجودة عالية وبأحدث التقنيات لنضمن لكم راحة تامة وعلاجاً مثالياً.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-slate-900 font-bold mb-6 text-lg">روابط سريعة</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">الرئيسية</Link></li>
                            <li><Link to="/about" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">عن العيادة</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">خدماتنا</Link></li>
                            <li><Link to="/doctors" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">أطبائنا</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-slate-900 font-bold mb-6 text-lg">تواصل معنا</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                                <span>شارع الملك فهد، العليا<br />الرياض، السعودية</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <span dir="ltr" className="font-medium">+966 50 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>info@alnoor-dental.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-100 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} عيادة النور للأسنان. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
