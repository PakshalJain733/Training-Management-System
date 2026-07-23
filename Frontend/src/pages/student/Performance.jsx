import {
  Trophy, Code2, Brain, Rocket, LineChart as LineIcon, BarChart3,
} from "lucide-react";
import {
  Line, LineChart, ResponsiveContainer, Tooltip,
  XAxis, YAxis, CartesianGrid, Bar, BarChart,
} from "recharts";
import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Badge } from "../../components/ui/Badge";
import { Progress } from "../../components/ui/Progress";
import { Avatar, AvatarFallback } from "../../components/ui/Avatar";
import "../../styles/ui.css";

const trend = [
  { month: "Jun", score: 62 },
  { month: "Jul", score: 68 },
  { month: "Aug", score: 71 },
  { month: "Sep", score: 76 },
  { month: "Oct", score: 82 },
  { month: "Nov", score: 87 },
];

const skills = [
  { name: "DSA",           score: 82 },
  { name: "DBMS",          score: 74 },
  { name: "OS",            score: 68 },
  { name: "Networks",      score: 61 },
  { name: "System Design", score: 45 },
];

const leaderboard = [
  { rank: 1,  name: "Riya Shah",        score: 2480, initials: "RS",  you: false },
  { rank: 2,  name: "Kabir Menon",      score: 2415, initials: "KM",  you: false },
  { rank: 3,  name: "Ananya Rao",       score: 2390, initials: "AR",  you: false },
  { rank: 42, name: "Aarav Patel (You)",score: 1875, initials: "AP",  you: true  },
];

const drives = [
  { company: "TCS Digital", score: "82/100", verdict: "Cleared",         variant: "secondary" },
  { company: "Infosys SP",  score: "76/100", verdict: "Cleared",         variant: "secondary" },
  { company: "Wipro Elite", score: "58/100", verdict: "Improve aptitude",variant: "outline"   },
];

const codingStats = [
  { label: "Problems solved",  value: "312"   },
  { label: "Contest rating",   value: "1642"  },
  { label: "Global rank",      value: "12.4k" },
];

const tooltipStyle = {
  background: "var(--popover)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  color: "var(--text)",
  fontSize: 12,
};

export default function Performance() {
  return (
    <div className="student-page-inner stack-6">
      <SectionHeader
        eyebrow="Student Performance"
        title="How you're tracking"
        description="Leaderboard rank, coding progress and analytics from every assessment you've attempted."
      />

      <Tabs defaultValue="analytics">
        <TabsList>
          <TabsTrigger value="analytics"><LineIcon size={14} />Analytics</TabsTrigger>
          <TabsTrigger value="leaderboard"><Trophy size={14} />Leaderboard</TabsTrigger>
          <TabsTrigger value="coding"><Code2 size={14} />Coding</TabsTrigger>
          <TabsTrigger value="knowledge"><Brain size={14} />Knowledge</TabsTrigger>
          <TabsTrigger value="drives"><Rocket size={14} />Mock drives</TabsTrigger>
        </TabsList>

        {/* Analytics */}
        <TabsContent value="analytics" className="grid-2" style={{ gap: 16 }}>
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>Performance trend</CardTitle>
              <CardDescription>Composite score over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 4, fill: "var(--primary)" }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>
                <span className="row" style={{ gap: 6 }}>
                  <BarChart3 size={15} /> Subject strength
                </span>
              </CardTitle>
              <CardDescription>Where to focus your practice</CardDescription>
            </CardHeader>
            <CardContent style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skills}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="score" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Leaderboard */}
        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>Batch leaderboard</CardTitle>
              <CardDescription>Top performers this semester</CardDescription>
            </CardHeader>
            <CardContent className="divide-y" style={{ padding: "0 20px 12px" }}>
              {leaderboard.map((l) => (
                <div
                  key={l.rank}
                  className="row-between"
                  style={{
                    padding: "12px 8px",
                    borderRadius: l.you ? 8 : 0,
                    background: l.you ? "rgba(255,255,255,0.04)" : "transparent",
                    margin: l.you ? "0 -8px" : 0,
                  }}
                >
                  <div className="row" style={{ gap: 12 }}>
                    <span style={{ width: 28, fontSize: 13, fontWeight: 600, color: "var(--text-muted)" }}>
                      #{l.rank}
                    </span>
                    <Avatar size="36">
                      <AvatarFallback style={l.you ? { background: "var(--primary)", color: "#fff" } : {}}>
                        {l.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{l.name}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{l.score} pts</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Coding */}
        <TabsContent value="coding" className="grid-3" style={{ gap: 16 }}>
          {codingStats.map((s) => (
            <Card key={s.label}>
              <CardContent>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", paddingTop: 8 }}>
                  {s.label}
                </p>
                <p style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 8 }}>{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Knowledge */}
        <TabsContent value="knowledge" className="stack-3">
          {skills.map((s) => (
            <Card key={s.name}>
              <CardContent className="stack-2">
                <div className="row-between" style={{ fontSize: 13 }}>
                  <span style={{ fontWeight: 500 }}>{s.name}</span>
                  <span style={{ color: "var(--text-muted)" }}>{s.score}%</span>
                </div>
                <Progress value={s.score} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Mock drives */}
        <TabsContent value="drives" className="grid-3" style={{ gap: 16 }}>
          {drives.map((d) => (
            <Card key={d.company}>
              <CardHeader>
                <CardTitle>{d.company}</CardTitle>
                <CardDescription>Mock placement round</CardDescription>
              </CardHeader>
              <CardContent className="row-between">
                <p style={{ fontSize: 26, fontWeight: 700 }}>{d.score}</p>
                <Badge variant={d.variant}>{d.verdict}</Badge>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
