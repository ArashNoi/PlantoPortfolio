
import { useState } from "react";
import "./PlantShowcase.css";

import Rectangle from "./Rectangle";
import PlantImage from "./PlantImage";
import Button from "./Button";

const plants = [
  {
    id: 1,
    image: "/Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png",
    category: "Trendy House Plant",
    name: "Calathea plant",
  },
  {
    id: 2,
    image: "/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png",
    category: "Popular House Plant",
    name: "Green beauty",
  },
  {
    id: 3,
    image: "/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png",
    category: "Fresh Indoor Plant",
    name: "Tropical plant",
  },
];

export default function PlantShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const plant = plants[currentIndex];

  function showPrevious() {
    setCurrentIndex(
      (index) => (index - 1 + plants.length) % plants.length
    );
  }

  function showNext() {
    setCurrentIndex(
      (index) => (index + 1) % plants.length
    );
  }

  function selectPlant(index) {
    setCurrentIndex(index);
  }

  function buyPlant() {
    console.log(`Buy ${plant.name}`);
  }

  return (
    <Rectangle className="plant-card">
      <div className="plant-image-area">
        <PlantImage key={plant.id} src={plant.image} alt={plant.name}/>
      </div>

      <div className="plant-content">
        <p className="plant-category">
          {plant.category}
        </p>

        <div className="plant-title-row">
          <button
            className="arrow-button previous-arrow"
            type="button"
            onClick={showPrevious}
            aria-label="Previous plant"
            >
            ‹
          </button>

          <h2 className="plant-name">
            {plant.name}
          </h2>

          <button
            className="arrow-button next-arrow"
            type="button"
            onClick={showNext}
            aria-label="Next plant"
            >
            ›
          </button>
        </div>

        <Button className="buy-button" onClick={buyPlant}>
          Buy Now
        </Button>

        <div className="plant-navigation">
          <div className="plant-dots">
            {plants.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`plant-dot ${ index === currentIndex ? "active" : "" }`}
                onClick={() => selectPlant(index)}
                aria-label={`Show ${item.name}`}
                aria-current={ index === currentIndex ? "true" : undefined }
              />
            ))}
          </div>
        </div>
      </div>
    </Rectangle>
  );
}
