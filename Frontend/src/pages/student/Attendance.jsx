import {
  QrCode, Upload, FileBarChart, MessageSquare,
  ShieldCheck, CheckCircle2, XCircle,
} from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Progress } from "../../components/ui/Progress";
import { Input, Label, Textarea } from "../../components/ui/Form";
import "../../styles/ui.css";

const subjects = [
  { name: "Data Structures",   pct: 94, attended: 47, total: 50 },
  { name: "Operating Systems", pct: 88, attended: 44, total: 50 },
  { name: "DBMS",              pct: 92, attended: 46, total: 50 },
  { name: "Computer Networks", pct: 81, attended: 34, total: 42 },
];

const verifications = [
  { title: "Medical leave · Nov 12",    status: "Approved", ok: true,  mentor: "Prof. Reddy" },
  { title: "Family function · Nov 05",  status: "Pending",  ok: false, mentor: "Prof. Reddy" },
];

export default function Attendance() {
  return (
    <div className="student-page-inner stack-6">
      <SectionHeader
        eyebrow="Attendance Management"
        title="Attendance & leave"
        description="Check-in with a live QR, review reports and submit absence reasons for mentor verification."
      />

      <Tabs defaultValue="checkin">
        <TabsList>
          <TabsTrigger value="checkin"><QrCode size={14} />QR Check-in</TabsTrigger>
          <TabsTrigger value="reports"><FileBarChart size={14} />Reports</TabsTrigger>
          <TabsTrigger value="leave"><MessageSquare size={14} />Leave / Absence</TabsTrigger>
          <TabsTrigger value="verify"><ShieldCheck size={14} />Verification</TabsTrigger>
        </TabsList>

        {/* QR Check-in */}
        <TabsContent value="checkin">
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "2fr 1fr" }} className="grid-qr">
            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: 15 }}>Live class QR</CardTitle>
                <CardDescription>Scan to mark your attendance for the active session</CardDescription>
              </CardHeader>
              <CardContent className="stack-4" style={{ alignItems: "center", paddingTop: 32, paddingBottom: 32 }}>
                <div style={{
                  borderRadius: 12, border: "2px dashed var(--border)",
                  background: "var(--muted-bg)", padding: 40,
                }}>
                  <QrCode size={140} style={{ color: "var(--text)" }} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 13, fontWeight: 500 }}>Operating Systems · 10:15 AM</p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>QR refreshes every 15 seconds</p>
                </div>
                <Button style={{ width: 260 }}>Mark my attendance</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: 15 }}>Manual upload</CardTitle>
                <CardDescription>Attach proof if the QR failed</CardDescription>
              </CardHeader>
              <CardContent className="stack-3">
                <div>
                  <Label htmlFor="proof">Photo / attendance sheet</Label>
                  <Input id="proof" type="file" />
                </div>
                <Textarea placeholder="Short note for your mentor…" rows={3} />
                <Button variant="outline" style={{ width: "100%" }}>
                  <Upload size={14} /> Submit for review
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Reports */}
        <TabsContent value="reports" className="grid-2">
          {subjects.map((s) => (
            <Card key={s.name}>
              <CardContent className="stack-3">
                <div className="row-between">
                  <p style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</p>
                  <Badge variant={s.pct >= 85 ? "secondary" : "destructive"}>{s.pct}%</Badge>
                </div>
                <Progress value={s.pct} />
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {s.attended} of {s.total} classes attended
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Leave */}
        <TabsContent value="leave">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: 15 }}>Request leave</CardTitle>
              <CardDescription>Send a reason for review by your mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid-2" style={{ gap: 12, marginBottom: 12 }}>
                <div>
                  <Label>From</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>To</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="stack-2">
                <Label>Reason</Label>
                <Textarea rows={4} placeholder="Explain your absence…" />
              </div>
              <Button style={{ marginTop: 16 }}>Submit request</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Verification */}
        <TabsContent value="verify" className="stack-3">
          {verifications.map((v) => (
            <Card key={v.title}>
              <CardContent>
                <div className="row-between" style={{ padding: "4px 0" }}>
                  <div className="row" style={{ gap: 12 }}>
                    {v.ok
                      ? <CheckCircle2 size={20} style={{ color: "#10b981", flexShrink: 0 }} />
                      : <XCircle size={20} style={{ color: "#f59e0b", flexShrink: 0 }} />
                    }
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 500 }}>{v.title}</p>
                      <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Mentor: {v.mentor}</p>
                    </div>
                  </div>
                  <Badge variant={v.ok ? "secondary" : "outline"}>{v.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
