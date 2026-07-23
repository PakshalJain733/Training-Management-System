import { Outlet } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import { StudentSidebar } from "../components/StudentSidebar";
import "./StudentLayout.css";

export default function StudentLayout() {
  return (
    <div className="student-layout">
      <StudentSidebar />

      <div className="student-content">
        {/* ── Sticky header ── */}
        <header className="student-header">
          <div className="student-header__search-wrap">
            <Search size={15} className="student-header__search-icon" />
            <input
              type="text"
              placeholder="Search topics, assignments, mentors…"
              className="student-header__search-input"
            />
          </div>

          <div className="student-header__right">
            <button className="student-header__icon-btn" aria-label="Notifications">
              <Bell size={17} />
            </button>

            <div className="student-header__user">
              <div className="student-header__user-info">
                <span className="student-header__name">Aarav Patel</span>
                <span className="student-header__sub">BTech CSE · Sem 6</span>
              </div>
              <div className="student-header__avatar">AP</div>
            </div>
          </div>
        </header>

        {/* ── Page content ── */}
        <main className="student-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
