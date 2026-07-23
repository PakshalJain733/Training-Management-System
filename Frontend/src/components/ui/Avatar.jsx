import "../../styles/ui.css";

export function Avatar({ children, size = "36", className = "" }) {
  return (
    <div className={`avatar avatar--${size} ${className}`}>{children}</div>
  );
}

export function AvatarFallback({ children, style = {} }) {
  return (
    <span className="avatar-fallback" style={style}>{children}</span>
  );
}
