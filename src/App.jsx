import React, { useEffect, useRef, useState } from 'react';
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

import flyingDron from './assets/dron.png'; 

function App() {
  // Renderiza el dron solo en desktop para mejorar rendimiento y UX en mobile.
  let [showDrone, setShowDrone] = useState(false);
  let droneRef = useRef(null);
  let rafRef = useRef(0);

  useEffect(function() {
    let mediaQuery = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');

    function handleMediaChange() {
      setShowDrone(mediaQuery.matches);
    }

    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return function() {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(function () {
    if (!showDrone || !droneRef.current) {
      return;
    }

    function updateDronePosition() {
      rafRef.current = 0;

      let docHeight = document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercent = docHeight > 0 ? window.scrollY / docHeight : 0;
      let droneX = 1.5;
      let droneY = 15 + (scrollPercent * 70);

      if (droneRef.current) {
        droneRef.current.style.transform = `translate(${droneX}vw, ${droneY}vh)`;
      }
    }

    function handleScrollOrResize() {
      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(updateDronePosition);
      }
    }

    handleScrollOrResize();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);

    return function () {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [showDrone]);

  return (
    <div className="min-h-screen font-sans bg-brand-bg text-brand-deep flex flex-col relative overflow-x-hidden">
      <Navbar />

      {/* --- EL DRON GUÍA --- */}
      {showDrone && (
        <div
          ref={droneRef}
          className="fixed z-30 pointer-events-none"
          style={{
            left: 0,
            top: 0,
            width: '95px',
            willChange: 'transform'
          }}
        >
          <img
            src={flyingDron}
            alt="Dron guía"
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(0 0 10px rgba(32, 106, 79, 0.3))' }}
          />
        </div>
      )}

      <main className="flex-1">
        <Hero />
        <ValueProp />
        <CourseContent />
        <TargetAudience />
        <HowItWorks />
        <Instructor />
        <Cta />
      </main>

      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}

export default App;