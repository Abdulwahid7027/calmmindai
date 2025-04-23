import "./builder-settings";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { AITherapist } from "./components/AITherapist";
import { Resources } from "./components/Resources";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const isPreviewing = useIsPreviewing();

  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <main className="flex flex-col gap-12">
        <Hero />
        <HowItWorks />
        <AITherapist />
        <Resources />
        <Contact />
      </main>
      <Footer />
      {isPreviewing && <BuilderComponent model="page" />}
    </div>
  );
}

export default App;
