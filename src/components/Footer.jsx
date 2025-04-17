import {
  FaMobileAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-green-300/60 to-orange-400/50"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">IPL Score Tracker</h2>
            <p className="text">
              The ultimate destination for IPL cricket fans to stay updated with
              live scores, team standings, and match schedules.
            </p>
          </div>

          <div>
            <h3 className="text-white-500 text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-medium">
              {["Live Scores", "Schedule", "Teams", "Stats", "News"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text hover:text-black transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex items-center mb-5">
              <FaMobileAlt className="mr-3" />
              <span className="text font-semibold">
                Download our mobile app for a better experience
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text hover:text-blue-400 transition">
                <FaTwitter size={25} />
              </a>
              <a href="#" className="text hover:text-blue-600 transition">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="text hover:text-purple-500 transition">
                <FaInstagram size={25} />
              </a>
              <a href="#" className="text hover:text-red-400 transition">
                <FaYoutube size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-white">
          © 2025 IPL Score Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
