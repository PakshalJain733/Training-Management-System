import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  TrendingUp,
  Briefcase,
  GraduationCap,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./StudentSidebar.css";

const items = [
  { title: "Overview",    url: "/student",            icon: LayoutDashboard, exact: true },
  { title: "Academic",    url: "/student/academic",   icon: BookOpen },
  { title: "Attendance",  url: "/student/attendance", icon: CalendarCheck },
  { title: "Assessments", url: "/student/assessment", icon: ClipboardList },
  { title: "Performance", url: "/student/performance",icon: TrendingUp },
  { title: "Career",      url: "/student/career",     icon: Briefcase },
];

export function StudentSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const isActive = (url, exact) =>
    exact
      ? pathname === url
      : pathname === url || pathname.startsWith(url + "/");

  return (
    <aside className={`student-sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>

      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <GraduationCap size={20} />
          </div>
          {!collapsed && (
            <div className="sidebar-brand-text">
              <span className="sidebar-brand-title">BTech Portal</span>
              <span className="sidebar-brand-sub">Student Workspace</span>
            </div>
          )}
        </div>
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Nav */}
      <div className="sidebar-content">
        {!collapsed && <p className="sidebar-group-label">Workspace</p>}
        <ul className="sidebar-menu">
          {items.map((item) => {
            const active = isActive(item.url, item.exact);
            return (
              <li key={item.url} className="sidebar-menu-item">
                <Link
                  to={item.url}
                  className={`sidebar-menu-btn ${active ? "sidebar-menu-btn--active" : ""}`}
                  title={collapsed ? item.title : undefined}
                >
                  <item.icon size={18} className="sidebar-icon" />
                  {!collapsed && <span className="sidebar-label">{item.title}</span>}
                  {active && !collapsed && <span className="sidebar-active-dot" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <button
          className="sidebar-menu-btn sidebar-signout"
          title={collapsed ? "Sign out" : undefined}
        >
          <LogOut size={18} className="sidebar-icon" />
          {!collapsed && <span className="sidebar-label">Sign out</span>}
        </button>
      </div>

    </aside>
  );
}
