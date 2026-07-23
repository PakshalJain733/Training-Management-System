import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import StudentLayout from "./pages/StudentLayout";
import Overview    from "./pages/student/Overview";
import Academic    from "./pages/student/Academic";
import Attendance  from "./pages/student/Attendance";
import Assessment  from "./pages/student/Assessment";
import Performance from "./pages/student/Performance";
import Career      from "./pages/student/Career";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student workspace — sidebar lives in StudentLayout */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Overview />} />
          <Route path="academic"    element={<Academic />} />
          <Route path="attendance"  element={<Attendance />} />
          <Route path="assessment"  element={<Assessment />} />
          <Route path="performance" element={<Performance />} />
          <Route path="career"      element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;