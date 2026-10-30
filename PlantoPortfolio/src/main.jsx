import { createRoot } from 'react-dom/client'
import './style.css';
import Rectangle from './Rectangle.jsx';
import HeroText from "./HeroText";
import PlantShowcase from "./PlantShowcase";
import ReviewCard from './ReviewCard.jsx';
import PromoBanner from './PromoBanner.jsx';

function App() {
  return (
    <main>
      <HeroText />
      <PlantShowcase />
      <ReviewCard
        avatar="/images.jfif"
        name="Alina Patel"
        rating={4.5}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…"
      />
      <PromoBanner
        imageSide="left"
        image="/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png"
        alt="For Small Desk Ai Plant"
        title="For Small Desk Ai Plant"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        price="Rs. 599/-"
      />

      <PromoBanner
        imageSide="right"
        image="/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png"
        alt="For Small Desk Ai Plant"
        title="For Small Desk Ai Plant"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        price="Rs. 599/-"
      />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <>
  <App />
  </>
)
