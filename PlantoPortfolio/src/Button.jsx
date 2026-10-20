export default function Button({ children, onClick, className = "" }) {
  return (
    <button className={`button ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}