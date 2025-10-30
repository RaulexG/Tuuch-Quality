import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ValueProposition from '@/components/ValueProposition';
import TeamSection from '@/components/TeamSection';
import StorySection from '@/components/StorySection';
import TargetAudience from '@/components/TargetAudience';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Tuuch Quality</title>
        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
      </Helmet>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ValueProposition />
        <TeamSection />
        <StorySection />
        <TargetAudience />
        <ContactSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;