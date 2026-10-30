import Button from "./Button";

export default function HeroText() {
  return (
    <section className="hero-text">
      <h1>Breath Natural</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>

      <div className="hero-actions">
        <Button className="pill-button">
          Explore
        </Button>

        <button className="live-demo-button" type="button" aria-label="Watch live demo">
          <span className="play-circle" aria-hidden="true">
            <span className="play-triangle" />
          </span>
          <span className="live-demo-label">Live Demo...</span>
        </button>
      </div>
    </section>
  );
}