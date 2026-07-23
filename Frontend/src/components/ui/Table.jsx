import "../../styles/ui.css";

export function Table({ children }) {
  return <div className="table-wrapper"><table className="table">{children}</table></div>;
}
export function TableHeader({ children }) { return <thead>{children}</thead>; }
export function TableBody({ children }) { return <tbody>{children}</tbody>; }
export function TableRow({ children }) { return <tr>{children}</tr>; }
export function TableHead({ children, right = false }) {
  return <th className={`table-head ${right ? "tr" : ""}`}>{children}</th>;
}
export function TableCell({ children, right = false, medium = false, bold = false }) {
  return (
    <td className={`table-cell ${right ? "tr" : ""} ${medium ? "fw" : ""} ${bold ? "fb" : ""}`}>
      {children}
    </td>
  );
}
