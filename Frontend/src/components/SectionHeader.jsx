import "./SectionHeader.css";

export function SectionHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="section-header">
      <div className="section-header__left">
        {eyebrow && (
          <p className="section-header__eyebrow">{eyebrow}</p>
        )}
        <h1 className="section-header__title">{title}</h1>
        {description && (
          <p className="section-header__description">{description}</p>
        )}
      </div>
      {actions && (
        <div className="section-header__actions">{actions}</div>
      )}
    </div>
  );
}
