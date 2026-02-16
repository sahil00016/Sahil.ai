import { useState } from 'react';
import Navbar from '../layout/Navbar';
import Hero from '../sections/Hero';
import Work from '../sections/Work';
import Process from '../sections/Process';
import Philosophy from '../sections/Philosophy';
import Testimonials from '../sections/Testimonials';
import Stats from '../sections/Stats';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../layout/Footer';
import FloatingElements from '../components/FloatingElements';

export default function Home() {
    const [contactOpen, setContactOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Navbar onOpenContact={() => setContactOpen(true)} />
            <Hero onOpenContact={() => setContactOpen(true)} />
            <Work />
            <Process />
            <Philosophy />
            <Testimonials />
            <Stats />
            <FinalCTA onOpenContact={() => setContactOpen(true)} />
            <Footer />
            <FloatingElements
                contactOpen={contactOpen}
                setContactOpen={setContactOpen}
                chatOpen={chatOpen}
                setChatOpen={setChatOpen}
            />
        </main>
    );
}
