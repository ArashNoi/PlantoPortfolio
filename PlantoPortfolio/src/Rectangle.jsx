import './Rectangle.css';

function Rectangle({ children, className = '' }) {
  return (
    <div className={`rectangle ${className}`}>
      {children}
    </div>
  );
}

export default Rectangle;