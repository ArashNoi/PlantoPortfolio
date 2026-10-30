import Rectangle from "./Rectangle";
import Button from "./Button";
import "./PromoBanner.css";

export default function PromoBanner({
  image,
  alt,
  title,
  description,
  price,
  imageSide = "left",
  onBuyClick,
  onBagClick,
}) {
  return (
    <Rectangle className={`promo-banner promo-banner--image-${imageSide}`}>
      <div className="promo-image-area">
        <img className="promo-image" src={image} alt={alt} />
      </div>

      <div className="promo-content">
        <h3 className="promo-title">{title}</h3>
        <p className="promo-description">{description}</p>
        <p className="promo-price">{price}</p>

        <div className="promo-actions">
          <Button className="pill-button" onClick={onBuyClick}>
            Buy Now
          </Button>

          <button
            type="button"
            className="icon-button"
            onClick={onBagClick}
            aria-label="View bag"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M6 8h12l-1 12H7L6 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 8V6a3 3 0 0 1 6 0v2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Rectangle>
  );
}