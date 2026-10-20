import "./PlantImage.css";

export default function PlantImage({src, alt = "Plant", className = ""}) {
  return (
    <img src={src} alt={alt} className={`plant-image ${className}`.trim()}/>
  );
}