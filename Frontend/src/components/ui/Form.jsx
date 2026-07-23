import "../../styles/ui.css";

export function Input({ className = "", ...props }) {
  return <input className={`form-input ${className}`} {...props} />;
}

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label className={`form-label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export function Textarea({ className = "", rows = 3, ...props }) {
  return <textarea className={`form-textarea ${className}`} rows={rows} {...props} />;
}
