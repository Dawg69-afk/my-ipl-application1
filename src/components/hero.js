import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-[20px] md:py-[28px] bg-gradient-to-b from-orange-400/60 to-green-300/70">
      <div className="container mx-auto px-[4px] relative z-10">
        <div className="text-center max-width-3xl mx-auto">
          <div className="text-center text-[30px] md:text-[25px] font-bold mb-[6px]">
            <span className="text-black-400 px-[8px]">IPL</span>
            <span className="text-green-800">Live Scores</span>
          </div>
          <p className="text-xl font-bold text-gray-900 mb-8">
            Stay updated with real time updates for the Indian Premier League
          </p>
          <div className="flex flex-wrap justify-center gap-[4px]">
            <Button variant="primary" size="lg">
              Live Score
            </Button>
            <Button variant="outline" size="lg">
              Schedule
            </Button>
          </div>
        </div>
      </div>
      {/* //Ball and bat
      <div className="absolute top-20 right-[10%] w-[16px] h-[16px] rounded-full bg-red-600 hidden md:block" />
      <div className="absolute bottom-10 left-[5%] w-[8px] h-[64px] bg-gradient-to-b from-amber-900-to-amber-700 rounded-b-lg " />*/}
    </div>
  );
}
