import "./App.css";
import EarnSection from "./Componets/EarnSection";
import GildSection from "./Componets/GildSection";
import HeroSection from "./Componets/HeroSection";
import PlatformSection from "./Componets/PlatformSection";
import UtilitySection from "./Componets/UtilitySection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UniswapSection from "./Componets/UniswapSection";
import RoadmapSection from "./Componets/RoadmapSection";
import PoweredSection from "./Componets/PoweredSection";
import FrequentlySection from "./Componets/FrequentlySection";

function App() {
  return (
    <div className="App">
  
        <>
          <HeroSection />
          <UtilitySection />
          <EarnSection />
          <PlatformSection />
          <GildSection />
          <RoadmapSection />
          <UniswapSection />
          <PoweredSection />
          <FrequentlySection />
        </>
    
    </div>
  );
}

export default App;
