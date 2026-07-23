import { useState, createContext, useContext } from "react";
import "../../styles/ui.css";

const TabsCtx = createContext(null);

export function Tabs({ defaultValue, children, className = "" }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsCtx.Provider value={{ active, setActive }}>
      <div className={`stack-5 ${className}`}>{children}</div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`tabs-list ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className = "" }) {
  const { active, setActive } = useContext(TabsCtx);
  return (
    <button
      className={`tabs-trigger ${active === value ? "tabs-trigger--active" : ""} ${className}`}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "" }) {
  const { active } = useContext(TabsCtx);
  if (active !== value) return null;
  return <div className={`tabs-content ${className}`}>{children}</div>;
}
