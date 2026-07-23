import "../../styles/ui.css";

export function Progress({ value = 0, className = "" }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`progress-track ${className}`}>
      <div className="progress-fill" style={{ width: `${clamped}%` }} />
    </div>
  );
}
