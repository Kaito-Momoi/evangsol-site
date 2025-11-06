import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import HeroSection from '../components/sections/HeroSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import SolutionsSection from '../components/sections/SolutionsSection';

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
