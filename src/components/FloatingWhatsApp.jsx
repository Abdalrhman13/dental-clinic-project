import { Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/966501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-lg border border-[#20b958] hover:bg-[#128C7E] hover:scale-105 transition-all duration-300 group flex items-center justify-center"
            aria-label="Contact on WhatsApp"
        >
            <Phone className="w-6 h-6" />

            {/* Tooltip */}
            <div className="absolute left-full mr-4 bg-white border border-slate-200 text-slate-900 font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap rtl:-translate-x-full rtl:right-full rtl:mr-0 rtl:ml-4 flex top-1/2 -translate-y-1/2">
                تواصل عبر واتساب
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-t-[6px] border-t-transparent border-l-[6px] border-l-white border-b-[6px] border-b-transparent rtl:border-l-0 rtl:border-r-[6px] rtl:border-r-white rtl:left-[-6px] rtl:right-auto rtl:scale-x-100 scale-x-[-1]"></div>
            </div>
        </a>
    );
}
