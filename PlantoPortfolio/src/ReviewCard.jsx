import Rectangle from "./Rectangle";
import "./ReviewCard.css";

export default function ReviewCard({
  avatar,
  name,
  rating = 5,
  maxRating = 5,
  text,
}) {
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const fillAmount = Math.min(Math.max(rating - index, 0), 1);
    return (
      <span key={index} className="review-star">
        <span className="review-star-fill" style={{ width: `${fillAmount * 100}%` }}>
          ★
        </span>
        <span className="review-star-outline">★</span>
      </span>
    );
  });

  return (
    <Rectangle className="review-card">
      <img className="review-avatar" src={avatar} alt={name} />

      <div className="review-header">
        <p className="review-name">{name}</p>
        <div className="review-stars">{stars}</div>
      </div>

      <p className="review-text">{text}</p>
    </Rectangle>
  );
}