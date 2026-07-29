import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiscoverySandbox from "./components/DiscoverySandbox";
import Services from "./components/Services";
import ProcessSection from "./components/ProcessSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <DiscoverySandbox />
      <Services />
      <ProcessSection />
      <CaseStudiesSection />
      <InquiryForm />
      <Footer />
    </main>
  );
}
