import Hero from "../components/Hero.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import Faq from "../components/Faq.tsx";
import HowToSetup from "../components/HowToSetup.tsx";

const Home: React.FC = () => (
  <>
  <Hero/>
  <HowItWorks/>
  <Faq/>
  <HowToSetup/>
  </>
);

export default Home;
