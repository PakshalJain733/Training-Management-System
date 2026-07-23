import { FileQuestion, Code2, GraduationCap, PlayCircle } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/Table";
import "../../styles/ui.css";

const quizzes = [
  { title: "OS — Process Scheduling", duration: "20 min", questions: 15, status: "Live"      },
  { title: "DBMS — Normalization",    duration: "25 min", questions: 20, status: "Upcoming"  },
  { title: "Networks — TCP/IP",       duration: "30 min", questions: 25, status: "Completed" },
];

const coding = [
  { title: "Weekly Contest #14", problems: 4, time: "90 min", status: "Live"     },
  { title: "DP Practice Round",  problems: 3, time: "60 min", status: "Upcoming" },
];

const ia = [
  { subject: "Data Structures",   ia1: 27, ia2: 29, max: 30 },
  { subject: "Operating Systems", ia1: 24, ia2: 26, max: 30 },
  { subject: "DBMS",              ia1: 28, ia2: 27, max: 30 },
  { subject: "Computer Networks", ia1: 22, ia2: 25, max: 30 },
];

function quizVariant(s) {
  if (s === "Live")      return "default";
  if (s === "Upcoming")  return "outline";
  return "secondary";
}

export default function Assessment() {
  return (
    <div className="student-page-inner stack-6">
      <SectionHeader
        eyebrow="Assessment Management"
        title="Tests & results"
        description="Attempt quizzes, coding exams and review your internal assessment scores."
      />

      <Tabs defaultValue="quiz">
        <TabsList>
          <TabsTrigger value="quiz"><FileQuestion size={14} />Quiz</TabsTrigger>
          <TabsTrigger value="coding"><Code2 size={14} />Coding exam</TabsTrigger>
          <TabsTrigger value="ia"><GraduationCap size={14} />IA Results</TabsTrigger>
        </TabsList>

        {/* Quiz */}
        <TabsContent value="quiz" className="grid-3">
          {quizzes.map((q) => (
            <Card key={q.title}>
              <CardHeader>
                <div className="row-start" style={{ gap: 8 }}>
                  <CardTitle style={{ flex: 1 }}>{q.title}</CardTitle>
                  <Badge variant={quizVariant(q.status)}>{q.status}</Badge>
                </div>
                <CardDescription>{q.questions} questions · {q.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  style={{ width: "100%" }}
                  disabled={q.status === "Upcoming"}
                  variant={q.status === "Completed" ? "outline" : "default"}
                >
                  <PlayCircle size={14} />
                  {q.status === "Completed" ? "Review" : q.status === "Live" ? "Start now" : "Locked"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Coding */}
        <TabsContent value="coding" className="grid-2">
          {coding.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <div className="row-start" style={{ gap: 8 }}>
                  <CardTitle style={{ flex: 1 }}>{c.title}</CardTitle>
                  <Badge variant={c.status === "Live" ? "default" : "outline"}>{c.status}</Badge>
                </div>
                <CardDescription>{c.problems} problems · {c.time}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button style={{ width: "100%" }} disabled={c.status !== "Live"}>
                  <Code2 size={14} /> Enter arena
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* IA Results */}
        <TabsContent value="ia">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>Internal assessment scores</CardTitle>
              <CardDescription>Uploaded by your subject faculty</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead right>IA1</TableHead>
                    <TableHead right>IA2</TableHead>
                    <TableHead right>Average</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ia.map((r) => (
                    <TableRow key={r.subject}>
                      <TableCell medium>{r.subject}</TableCell>
                      <TableCell right>{r.ia1} / {r.max}</TableCell>
                      <TableCell right>{r.ia2} / {r.max}</TableCell>
                      <TableCell right bold>{((r.ia1 + r.ia2) / 2).toFixed(1)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
