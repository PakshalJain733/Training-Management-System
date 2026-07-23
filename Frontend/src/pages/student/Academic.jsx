import {
  BookOpen, FileText, Code2, ClipboardCheck,
  CalendarClock, ChevronLeft, ChevronRight, Download, ExternalLink,
} from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Progress } from "../../components/ui/Progress";
import "../../styles/ui.css";

const topics = [
  { title: "Graphs — BFS & DFS",      subject: "Data Structures",   type: "Lecture", status: "Completed"   },
  { title: "Process Scheduling",       subject: "Operating Systems", type: "Lecture", status: "In progress" },
  { title: "Normalization 3NF/BCNF",  subject: "DBMS",              type: "Lab",     status: "Upcoming"    },
  { title: "TCP Handshake & Flow",     subject: "Networks",          type: "Lecture", status: "Upcoming"    },
];

const notes = [
  { title: "DSA — Trees & Traversals",  size: "2.3 MB", updated: "2 days ago" },
  { title: "OS — Deadlocks Handbook",   size: "1.1 MB", updated: "Yesterday"  },
  { title: "DBMS — SQL Cheatsheet",     size: "780 KB", updated: "Today"      },
];

const assignments = [
  { title: "DSA Assignment 07 — Graph Problems", due: "Tomorrow",  progress: 60, marks: 20 },
  { title: "OS Lab Report — Scheduling",          due: "In 3 days", progress: 20, marks: 15 },
  { title: "DBMS ER Diagram Case Study",          due: "In 6 days", progress: 0,  marks: 25 },
];

const practiceSets = ["Arrays & Strings (25)", "Trees & Graphs (18)", "DP Patterns (30)", "SQL Practice (20)"];

function statusVariant(s) {
  if (s === "Completed")   return "secondary";
  if (s === "In progress") return "default";
  return "outline";
}

export default function Academic() {
  return (
    <div className="student-page-inner stack-6">
      <SectionHeader
        eyebrow="Academic Management"
        title="Your learning workspace"
        description="Lecture topics, notes, practice material and assignments — organised by subject."
        actions={
          <div className="row" style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: 4,
          }}>
            <Button variant="ghost" size="sm">
              <ChevronLeft size={14} /> Prev
            </Button>
            <span style={{ padding: "0 8px", fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
              Week 8 · Nov 17
            </span>
            <Button variant="ghost" size="sm">
              Next <ChevronRight size={14} />
            </Button>
          </div>
        }
      />

      <Tabs defaultValue="topics">
        <TabsList>
          <TabsTrigger value="topics"><BookOpen size={14} />Topics</TabsTrigger>
          <TabsTrigger value="notes"><FileText size={14} />Notes</TabsTrigger>
          <TabsTrigger value="practice"><Code2 size={14} />Practice</TabsTrigger>
          <TabsTrigger value="assignments"><ClipboardCheck size={14} />Assignments</TabsTrigger>
          <TabsTrigger value="due"><CalendarClock size={14} />Due dates</TabsTrigger>
        </TabsList>

        {/* Topics */}
        <TabsContent value="topics" className="stack-3">
          {topics.map((t) => (
            <Card key={t.title}>
              <CardContent>
                <div className="row-between" style={{ flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500 }}>{t.title}</p>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                      {t.subject} · {t.type}
                    </p>
                  </div>
                  <div className="row" style={{ gap: 8 }}>
                    <Badge variant={statusVariant(t.status)}>{t.status}</Badge>
                    <Button variant="ghost" size="sm">
                      Open <ExternalLink size={12} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Notes */}
        <TabsContent value="notes" className="grid-3">
          {notes.map((n) => (
            <Card key={n.title}>
              <CardHeader>
                <CardTitle>{n.title}</CardTitle>
                <CardDescription>{n.size} · Updated {n.updated}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" style={{ width: "100%" }}>
                  <Download size={14} /> Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Practice */}
        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>Practice sets</CardTitle>
              <CardDescription>Curated problem sets and reference links</CardDescription>
            </CardHeader>
            <CardContent className="grid-2" style={{ gap: 12 }}>
              {practiceSets.map((p) => (
                <div key={p} className="row-between" style={{
                  borderRadius: 8, border: "1px solid var(--border)",
                  padding: "10px 14px",
                }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p}</span>
                  <Button size="sm" variant="ghost">Start</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Assignments */}
        <TabsContent value="assignments" className="stack-3">
          {assignments.map((a) => (
            <Card key={a.title}>
              <CardContent className="stack-3">
                <div className="row-start" style={{ gap: 16 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500 }}>{a.title}</p>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                      Due {a.due} · {a.marks} marks
                    </p>
                  </div>
                  <Button size="sm">Submit</Button>
                </div>
                <Progress value={a.progress} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Due dates */}
        <TabsContent value="due">
          <Card>
            <CardContent className="divide-y" style={{ padding: "4px 20px" }}>
              {assignments.map((a) => (
                <div key={a.title} className="row-between" style={{ padding: "14px 0" }}>
                  <div className="row" style={{ gap: 12 }}>
                    <CalendarClock size={16} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 500 }}>{a.title}</p>
                      <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Due {a.due}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{a.marks} marks</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
