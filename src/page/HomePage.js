import Hero from "../components/hero";
import TeamStanding from "../components/TeamStanding";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/stadium.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40 backdrop-blur-sm ">
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Hero />
            <TeamStanding />
            <StatsSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
