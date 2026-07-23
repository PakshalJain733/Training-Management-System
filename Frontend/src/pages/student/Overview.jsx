import { Link } from "react-router-dom";
import {
  BookOpen, CalendarCheck, ClipboardList, TrendingUp,
  Briefcase, ArrowUpRight, Clock, Target, Award,
} from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Progress } from "../../components/ui/Progress";
import "../../styles/ui.css";

const stats = [
  { label: "Attendance",     value: "92%",  hint: "This semester",  icon: CalendarCheck, color: "#10b981" },
  { label: "CGPA",           value: "8.6",  hint: "IA1 + IA2 avg",  icon: Award,         color: "#3b82f6" },
  { label: "Coding Rank",    value: "#42",  hint: "Batch of 240",   icon: TrendingUp,    color: "#8b5cf6" },
  { label: "Placement Ready",value: "78%",  hint: "3 skills to go", icon: Target,        color: "#f97316" },
];

const shortcuts = [
  { to: "/student/academic",    title: "Academic",    desc: "Topics, notes & assignments",  icon: BookOpen },
  { to: "/student/attendance",  title: "Attendance",  desc: "QR check-in & reports",        icon: CalendarCheck },
  { to: "/student/assessment",  title: "Assessments", desc: "Quizzes & coding exams",       icon: ClipboardList },
  { to: "/student/performance", title: "Performance", desc: "Leaderboard & analytics",      icon: TrendingUp },
  { to: "/student/career",      title: "Career",      desc: "Skill gap & certificates",     icon: Briefcase },
];

const upcoming = [
  { title: "DSA Assignment 07",      due: "Due tomorrow, 11:59 PM", tag: "Assignment", variant: "destructive" },
  { title: "Operating Systems Quiz", due: "In 2 days · 20 marks",   tag: "Quiz",       variant: "default" },
  { title: "IA2 — DBMS",            due: "In 5 days · Room 402",   tag: "Exam",       variant: "secondary" },
  { title: "Mock Placement Drive",   due: "Next Monday · TCS",      tag: "Drive",      variant: "outline" },
];

const companies = [
  { name: "Google",    pct: 62 },
  { name: "Microsoft", pct: 74 },
  { name: "TCS Digital",  pct: 88 },
  { name: "Infosys",  pct: 91 },
];

export default function Overview() {
  return (
    <div className="student-page-inner stack-8">
      <SectionHeader
        eyebrow="Welcome back"
        title="Good morning, Aarav"
        description="Here's a snapshot of your training progress and what needs your attention today."
        actions={
          <Link to="/student/academic" className="btn btn--default btn--md">
            Continue learning
          </Link>
        }
      />

      {/* Stats */}
      <div className="grid-4" style={{ gap: 16 }}>
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent>
              <div className="row-between" style={{ paddingTop: 8 }}>
                <div className="stack-2">
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.hint}</p>
                </div>
                <div style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: "var(--muted-bg)", display: "flex",
                  alignItems: "center", justifyContent: "center", color: s.color, flexShrink: 0,
                }}>
                  <s.icon size={17} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming + Placement */}
      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr" }}>
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "2fr 1fr" }} className="overview-split">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
              <CardDescription>Deadlines and events from your mentors</CardDescription>
            </CardHeader>
            <CardContent className="stack-1">
              {upcoming.map((u) => (
                <div key={u.title} className="row-between hover-item" style={{ padding: "10px 8px" }}>
                  <div className="row" style={{ gap: 12 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: "var(--muted-bg)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Clock size={14} style={{ color: "var(--text-muted)" }} />
                    </div>
                    <div className="stack-1">
                      <p style={{ fontSize: 13, fontWeight: 500 }}>{u.title}</p>
                      <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{u.due}</p>
                    </div>
                  </div>
                  <Badge variant={u.variant}>{u.tag}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Placement readiness</CardTitle>
              <CardDescription>Track progress toward top companies</CardDescription>
            </CardHeader>
            <CardContent className="stack-4">
              {companies.map((c) => (
                <div key={c.name} className="stack-2">
                  <div className="row-between" style={{ fontSize: 13 }}>
                    <span style={{ fontWeight: 500 }}>{c.name}</span>
                    <span style={{ color: "var(--text-muted)" }}>{c.pct}%</span>
                  </div>
                  <Progress value={c.pct} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Shortcuts */}
      <div>
        <h2 style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", marginBottom: 12 }}>
          Jump into a section
        </h2>
        <div className="grid-5" style={{ gap: 16 }}>
          {shortcuts.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              style={{
                display: "block",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card-bg)",
                padding: 16,
                transition: "border-color 0.18s, box-shadow 0.18s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(108,99,255,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="row-between" style={{ marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--muted-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.icon size={15} style={{ color: "var(--text-muted)" }} />
                </div>
                <ArrowUpRight size={15} style={{ color: "var(--text-muted)" }} />
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{s.title}</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
