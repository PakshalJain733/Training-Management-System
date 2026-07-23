import { Target, Building2, CheckCircle2, Award, Download } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Progress } from "../../components/ui/Progress";
import "../../styles/ui.css";

const gaps = [
  { skill: "System Design",   have: 45, need: 75 },
  { skill: "SQL & DBMS",      have: 74, need: 85 },
  { skill: "React / Frontend",have: 60, need: 80 },
  { skill: "Aptitude",        have: 66, need: 85 },
];

const companies = [
  { name: "Google",    match: 62, tags: ["DSA", "System Design"] },
  { name: "Microsoft", match: 74, tags: ["DSA", "OOP"]          },
  { name: "Amazon",    match: 68, tags: ["DSA", "OS"]           },
  { name: "Flipkart",  match: 71, tags: ["DSA", "SQL"]          },
];

const certificates = [
  { title: "Full-Stack Web Development", issuer: "BTech Portal · 2025", id: "BTC-FSW-2411" },
  { title: "Data Structures Mastery",    issuer: "BTech Portal · 2025", id: "BTC-DSA-2408" },
  { title: "SQL Fundamentals",           issuer: "BTech Portal · 2024", id: "BTC-SQL-2312" },
];

const breakdown = [
  { l: "Academics",   v: 86 },
  { l: "Coding",      v: 74 },
  { l: "Mock drives", v: 72 },
];

export default function Career() {
  return (
    <div className="student-page-inner stack-6">
      <SectionHeader
        eyebrow="Career Development"
        title="Placement readiness"
        description="Understand your skill gaps, target companies and download verified certificates."
      />

      <Tabs defaultValue="gap">
        <TabsList>
          <TabsTrigger value="gap"><Target size={14} />Skill gap</TabsTrigger>
          <TabsTrigger value="companies"><Building2 size={14} />Companies</TabsTrigger>
          <TabsTrigger value="readiness"><CheckCircle2 size={14} />Readiness</TabsTrigger>
          <TabsTrigger value="certs"><Award size={14} />Certificates</TabsTrigger>
        </TabsList>

        {/* Skill gap */}
        <TabsContent value="gap" className="stack-3">
          {gaps.map((g) => (
            <Card key={g.skill}>
              <CardContent className="stack-3">
                <div className="row-between">
                  <p style={{ fontSize: 13, fontWeight: 500 }}>{g.skill}</p>
                  <Badge variant={g.have >= g.need ? "secondary" : "outline"}>
                    {g.have >= g.need ? "On target" : `${g.need - g.have}% to close`}
                  </Badge>
                </div>
                {/* Progress with target marker */}
                <div style={{ position: "relative" }}>
                  <Progress value={g.have} />
                  <div style={{
                    position: "absolute", top: "50%", left: `${g.need}%`,
                    transform: "translateY(-50%)",
                    width: 2, height: 14, borderRadius: 2,
                    background: "var(--text)", marginLeft: -1,
                  }} aria-label="Target" />
                </div>
                <div className="row-between" style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  <span>Current {g.have}%</span>
                  <span>Target {g.need}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Companies */}
        <TabsContent value="companies" className="grid-2">
          {companies.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <div className="row-between">
                  <CardTitle>{c.name}</CardTitle>
                  <Badge>{c.match}% match</Badge>
                </div>
                <CardDescription>Focus areas: {c.tags.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={c.match} />
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Readiness */}
        <TabsContent value="readiness">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>Overall placement readiness</CardTitle>
              <CardDescription>Composite of academics, coding and mock drives</CardDescription>
            </CardHeader>
            <CardContent className="stack-4">
              <div className="row-end">
                <p style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)" }}>78%</p>
                <Badge variant="secondary">Ready for Tier-2</Badge>
              </div>
              <Progress value={78} />
              <div className="grid-3" style={{ gap: 12, paddingTop: 8 }}>
                {breakdown.map((x) => (
                  <div key={x.l} style={{
                    borderRadius: 10, border: "1px solid var(--border)",
                    padding: "12px 14px",
                  }}>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{x.l}</p>
                    <p style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>{x.v}%</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certificates */}
        <TabsContent value="certs" className="grid-3">
          {certificates.map((c) => (
            <Card key={c.id}>
              <CardHeader>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "var(--primary-subtle)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 8,
                }}>
                  <Award size={18} style={{ color: "var(--primary)" }} />
                </div>
                <CardTitle>{c.title}</CardTitle>
                <CardDescription>{c.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="stack-3">
                <p style={{ fontSize: 11.5, color: "var(--text-muted)" }}>ID: {c.id}</p>
                <Button variant="outline" style={{ width: "100%" }}>
                  <Download size={14} /> Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
