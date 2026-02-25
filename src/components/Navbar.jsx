import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'الرئيسية', path: '/' },
        { name: 'عن العيادة', path: '/about' },
        { name: 'خدماتنا', path: '/services' },
        { name: 'أطبائنا', path: '/doctors' },
        { name: 'المدونة', path: '/blog' },
        { name: 'اتصل بنا', path: '/contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm border border-primary-100">
                            <img src="/favicon.svg" alt="شعار عيادة النور" className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 leading-tight">عيادة النور</h1>
                            <p className="text-xs text-slate-500 font-medium">لطب وتقويم الأسنان</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-600 font-semibold hover:text-primary-600 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/booking"
                            className="px-6 py-2.5 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-sm"
                        >
                            احجز موعد
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 absolute w-full shadow-lg">
                    <ul className="flex flex-col py-4 px-4 space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-slate-600 font-semibold hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4 pb-2">
                            <Link
                                to="/booking"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
                            >
                                احجز موعد الآن
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;
