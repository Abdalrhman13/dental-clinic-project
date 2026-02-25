import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-primary-100 selection:text-primary-900">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default MainLayout;
