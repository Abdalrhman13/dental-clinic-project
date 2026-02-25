import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 px-4 py-16">
            <div className="text-center max-w-lg bg-white p-12 rounded-2xl border border-slate-200 shadow-sm w-full">

                <div className="relative w-24 h-24 mx-auto mb-8 flex justify-center items-center text-primary-500">
                    <div className="absolute inset-0 bg-primary-50 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-primary-100 rounded-full"></div>
                    <AlertCircle className="w-12 h-12 relative z-10" />
                </div>

                <h1 className="text-7xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">عذراً، الصفحة مفقودة</h2>

                <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                    يبدو أنك تحاول الوصول لصفحة غير موجودة أو تم نقلها. يرجى التأكد من الرابط المستهدف، أو الضغط على الزر للعودة للصفحة الرئيسية.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 text-white font-bold rounded-xl shadow-sm hover:bg-primary-600 hover:shadow-md transition-all duration-300 w-full justify-center group"
                >
                    <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    الرجوع للمركز الرئيسي
                </Link>

            </div>
        </div>
    );
}
