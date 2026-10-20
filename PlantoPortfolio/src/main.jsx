import { createRoot } from 'react-dom/client'
import './style.css';
import Rectangle from './Rectangle.jsx';
import HeroText from "./HeroText";
import PlantShowcase from "./PlantShowcase";

function App() {
  return (
    <main>
      <HeroText />
      <PlantShowcase />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <>
  <App />
  </>
)
