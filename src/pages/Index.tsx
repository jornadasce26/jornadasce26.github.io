import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Agenda from "@/components/Agenda";
import Guests from "@/components/Guests";
import Team from "@/components/Team";
import Supporters from "@/components/Supporters";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Agenda />
      <Guests />
      <Team />
      <Supporters />
      <Contact />
    </main>
  );
};

export default Index;
