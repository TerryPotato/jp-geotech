import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ValueProp from './components/sections/ValueProps';
import CourseContent from './components/sections/CourseContent';
import TargetAudience from './components/sections/TargetAudience';
import HowItWorks from './components/sections/HowItWorks';
import Instructor from './components/sections/Instructor';
import Cta from './components/sections/Cta';
import Footer from './components/sections/Footer';
import FloatingWhatsappButton from './components/ui/FloatingWhatsappButton';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-bg text-brand-deep">
      <Navbar />
      
      <main>
        {/* Renderizamos el Hero como la primera sección */}
        <Hero />
        <ValueProp />
        <CourseContent />
        <TargetAudience />
        <HowItWorks />
        <Instructor />
        <Cta />
        <Footer />
        
        {/* Aquí integraremos las demás secciones después */}
      </main>
      <FloatingWhatsappButton />
    </div>
  );
}

export default App;