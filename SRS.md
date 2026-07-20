# SOFTWARE REQUIREMENTS SPECIFICATION

# AcadNexus

| | |
|---|---|
| **Document Title** | SRS – AcadNexus (Academic Training, Attendance & Performance Management System) |
| **Version** |  1.0 – Draft |
| **Prepared For** | Development & DBA Team|
| **Status** | Internal – Confidential |
| **Date** | 17 July 2026 |

**CONFIDENTIAL – FOR INTERNAL USE ONLY**

> **Document Revision History**

| **Ver.** | **Date** | **Description** | **Author** |
|---|---|---|---|
| [1.0] | [17 July 2026] | [Initial draft containing project overview, scope, stakeholders, and software requirements specification.] | [Project Defelopment Team] |
| | | | |

---

## 1. Introduction

### 1.1 Purpose

The purpose of this SRS is to define the functional and non-functional requirements of AcadNexus, an Integrated Academic, Training & Performance Management Platform. This document serves as a reference for the development team, database administrators, testers, project managers, and stakeholders throughout the software development lifecycle. AcadNexus is a web-based platform designed to centralize academic and training activities, including attendance management, student performance tracking, faculty management, mentoring, quizzes, learning resources, result management, and departmental analytics. The system provides secure, role-based access for Students, Faculty Members, Mentors, Heads of Departments (HODs), and System Administrators.

### 1.2 Document Conventions

| **Term** | **Description** |
|---|---|
| **SHALL** | All core features defined in this SRS shall be implemented in the current release of AcadNexus. |
| **SHOULD** | Additional enhancements such as advanced analytics and extended reporting should be implemented if time and resources permit. |
| **MAY** | Future enhancements such as a mobile application and additional integrations may be developed in later releases.  |
| **FR-XX** | Functional Requirement identifier. |
| **NFR-XX** | Non-Functional Requirement identifier. |
| **TBD** | To Be Determined – details to be finalised before development. |
| **[Domain Acronym 1]** | [Definition specific to this project's domain.] |
| **[Domain Acronym 2]** | [Definition specific to this project's domain.] |

### 1.3 Intended Audience

| **Stakeholder** | **Purpose** |
|---|---|
| **Database Administrator (DBA)** | Design and maintain the normalized database schema, relationships, indexes, constraints, and data integrity according to the system requirements. |
| **Backend Developers** | Implement business logic, RESTful APIs, authentication, database interactions, and application services using Node.js and Express.js.|
| **Frontend Developers** | Develop responsive user interfaces, dashboards, forms, reports, and user workflows using React.js. |
| **Project Manager** | Monitor project progress, manage scope, allocate resources, and ensure timely completion of development milestones. |
| **QA / Test Engineers** | Design and execute test cases, verify functional and non-functional requirements, and ensure software quality before deployment. |
| **System Administrators** | Deploy, configure, monitor, and maintain the application in the production environment while ensuring system availability and security. |

### 1.4 Project Scope

AcadNexus is a web-based Academic, Training, and Performance Management Platform that centralizes academic operations, attendance, performance tracking, faculty management, mentoring, and analytics. It streamlines institutional processes by replacing manual systems with a unified digital platform for multiple colleges.

- **[Phase / Stage 1]**: User authentication, role-based access control, profile management, attendance management, and dashboard setup.

- **[Phase / Stage 2]**:Training management, lecture and lab topic management, study materials, assignments, quizzes, leaderboards, and student feedback.
.
- **[Phase / Stage 3]**: Performance analytics, mentoring, HOD monitoring, faculty reports, result management, skill gap analysis, and overall student performance tracking.

The system is designed for the following user roles:

Student
Faculty
Mentor
Head of Department (HOD)
Administrator
System Automation (notifications, reports, attendance updates, and performance calculations)

Out of scope for this release are: Native Android and iOS mobile applications.
Online examination with remote proctoring.
Integration with third-party ERP, LMS, or payment gateways.
Video conferencing functionality.
AI-based career recommendations and predictive analytics.
Biometric or RFID attendance integration (manual attendance upload is supported in this release).
Multi-language support.

### 1.5 References

- Existing Training portal 
- React Documentation – Official documentation for React.js framework.
Node.js Documentation – Official documentation for Node.js runtime environment.
Express.js Documentation – Official documentation for Express.js web framework.
MySQL Documentation – Official documentation for MySQL Database Management System.
MDN Web Docs – Reference for HTML, CSS, JavaScript, and Web APIs.
W3Schools – Reference for web development concepts and examples.
AcadNexus Project Requirement Analysis Document – Finalized feature list and module specifications prepared by the development team.
---

## 2. Overall Description

### 2.1 Product Perspective

AcadNexus is a centralized, web-based academic and student development platform for colleges. It manages training, attendance, assessments, learning resources, and performance tracking through role-based dashboards for Students, Faculty, Mentors, HODs, and Administrators.

The system replaces manual processes like paper-based attendance, Excel tracking, separate assessment tools, and manual performance analysis with a single integrated platform.

System Interfaces
College ERP / Master Database: Imports student, faculty, department, and academic data through APIs or data integration.
Third-Party Platforms (Future Scope): Integration with learning, coding, assessment, and placement platforms.
SMS/Email Gateway: Supports OTP, password recovery, alerts, reminders, and notifications.

AcadNexus uses a centralized relational database with Role-Based Access Control (RBAC) to securely manage data access and permissions for different user roles.


### 2.2 Product Functions – High-Level Summary

| **Sr No.** | **Login** | **Phase** | **Modules / Sub-modules** |
|---|---|---|---|
| **1** | Student Login | Phase A – Learning and Training Management | Student Dashboard, Profile Management, Password Management, Task Management, Task Submission, Due Date Tracking, Notes and Reference Materials, Practice Questions, Attendance Tracking, Absence Reason Submission, Trainer Feedback |
| | | Phase B – Assessment and Performance Monitoring | Quiz Participation, Coding Performance Tracking, Dynamic Leaderboard, Performance Reports, Progress Graphs, Strength and Weakness Analysis, Mock Test Performance Tracking |
| | | Phase C – Career Development and Skill Enhancement| Skill Gap Analysis, Company-Based Skill Recommendations, Placement Readiness Tracking, Overall Career Progress Dashboard |
| **2** | Faculty Login | Phase A – Academic Content Management | Faculty Profile, Lecture/Lab Topic Management, Upload Learning Resources, Course Content Management |
| | | Phase B – Assessment and Evaluation| Question Bank Management, Quiz Creation, Timed Assessments, Student Evaluation, Internal Assessment Result Uploading |
| | | Phase C – Faculty Analytics| Teaching Analysis Reports, Topic Completion Tracking, Student Engagement Reports |
| **3** | Mentor Login | Phase A – Student Monitoring | Assigned Student List, Attendance Reports, Student Progress Monitoring |
| | | Phase B – Student Guidance and Intervention | Absence Reason Validation, Warning Management, Three Consecutive Absence Alerts, Mentor Feedback |
| | | Phase C – Student Development Tracking| Student Improvement Monitoring, Risk Identification, Skill Development Tracking |
| **4** | HOD Login| Phase A– Department Monitoring |Branch-wise Student Data Access, Department Dashboard, Attendance Reports, Academic Overview |
| | |Phase B –Analytics and Reporting|Individual Student Reports, Coding Performance Reports, Scorecards, Faculty Activity Monitoring |
| | | Phase C – Institutional Decision Support| Department Analytics, Placement Readiness Reports, Document Sharing, Faculty Meeting Scheduling |
| **5** | **System (Automation)** | Phase A – Basic Automation | User Authentication, Attendance Update, Deadline Alerts, Notification Generation, Report Generation |
| | | Phase B – Intelligent Monitoring| Automated Performance Calculation, Leaderboard Updates, Warning Notifications, Attendance Risk Alerts |
| | | Phase C – Advanced Analytics| Skill Gap Identification, Personalized Recommendations, Performance Prediction, External Platform Integration |

### 2.3 User Classes and Characteristics

| **User Role** | **Technical Proficiency** | **Frequency of Use** | **Key Concerns** |    
|---|---|---|---|                                            
| **Students**       | Basic knowledge of computers and web applications.                           | Daily/Weekly usage for tasks, resources, attendance, quizzes, and performance tracking. | Easy navigation, accurate progress tracking, access to learning resources, privacy of personal data. |
| **Faculty**        | Moderate technical knowledge required for managing content and assessments.  | Regular usage for uploading materials, creating quizzes, and evaluating students.       | Reduced manual workload, easy content management, accurate student evaluation.                       |
| **Mentors**        | Basic to moderate technical knowledge for monitoring dashboards and reports. | Frequent usage for attendance monitoring and student guidance.                          | Early identification of student problems, accurate reports, effective communication.                 |
| **HODs**           | Moderate technical knowledge for understanding analytics and reports.        | Periodic usage for department-level monitoring and decision-making.                     | Department performance insights, secure access to student information, accurate reports.             |
| **Administrators** | Higher technical knowledge for managing users and system settings.           | Regular usage for system maintenance and configuration.                                 | Security, user management, system reliability, and data protection.                                  |


### 2.4 Operating Environment

AcadNexus is a web-based platform designed to work across multiple devices and environments. Users can access the system through modern web browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

The system supports:

Devices: Desktop, laptop, tablet, and smartphone with responsive UI.
Server Environment: Linux-based or Windows servers for application hosting.
Database: Centralized relational databases such as MySQL or PostgreSQL for storing user data, attendance, assessments, and performance records.
Hosting Model: Cloud-based deployment for scalability and remote access, or on-premise deployment for institutions requiring control over their data.

A stable internet or institutional network connection is required for secure system access

### 2.5 Design and Implementation Constraints

The development of AcadNexus is influenced by technical, security, and resource limitations.

The system must follow a web-based modular architecture with separate frontend, backend, and database layers.
Secure authentication and Role-Based Access Control (RBAC) must be implemented to protect user data.
Student and institutional information must be stored and managed securely.
External integrations depend on the availability of APIs and third-party service support.
Development is limited by project timeline, team size, available resources, and infrastructure.
Advanced features such as analytics, recommendations, and future integrations may require additional data and development efforts.
The system should be scalable and maintainable to support future expansion.

### 2.6 Assumptions and Dependencies

Assumptions
The institution will provide accurate student, faculty, and academic data.
Users will have required devices and internet connectivity.
Students, Faculty, Mentors, and HODs will use the system according to their roles.
Faculty and mentors will regularly update and monitor academic information.
Institutional rules for attendance, grading, and assessments will be available.
Dependencies
College ERP/Master Database: Required for importing academic and user information.
SMS/Email Services: Required for OTP and notification features.

Hosting Infrastructure: Depends on cloud or institutional servers.
Third-Party Platforms: Future features depend on external APIs and services.
Institutional Support: Requires involvement of administrators, faculty, mentors, and technical teams.
Data Availability: Analytics features depend on sufficient student performance and activity data.

---

## 3. System Features and Functional Requirements
The Student module enables students to manage their academic profile, participate in training activities, complete assessments, track performance, communicate with mentors and faculty, and monitor their overall placement readiness throughout their engineering journey.

#### 3.1.1  Module :Authentication
This module allows students to securely access the system using password-based authentication and manage their account credentials.

**Sub-module: Login

| **Req ID** | **Priority** | **Description** |
|---|---|---|
| **FR-001** | SHALL | The system SHALL authenticate students using College ID/Email and Password.
| **FR-002** | SHALL | The system SHALL allow password-based authentication.
| **FR-003** | SHOULD | The system SHOULD support Remember Me functionality.
| **FR-004** | MAY | The system MAY allow students to log in using biometric authentication on supported devices.

**Sub-module: Profile Management
| **Req ID** | **Priority** | **Description** |
| **FR-005** | SHALL |Students SHALL update personal details.
| **FR-006** | SHALL |Students SHALL update academic information.
| **FR-006** | SHALL |Students SHALL upload profile photo.
| **FR-006** | SHALL |Students SHALL change their password.
| **FR-006** | SHOULD|Students SHOULD upload resume and portfolio links.


##### 3.1.1.2 Module: Student Academic Profile

This module maintains the complete academic record of the student throughout all engineering years.

Sub-module: Academic Records
|Req ID |	Priority	|Description
|FR-010 | 	SHALL	    |Store Semester-wise academic records.
|FR-011 |	SHALL	    |Store CGPA and SGPA history.
|FR-012	|   SHALL	    |Store 10th and 12th marks.
|FR-013	|   SHALL	    |Store backlog information.
|FR-014	|   SHALL	    |Display complete engineering career progress

#### 3.1.2 [Phase B]
Sub-module: Skill Profile
|Req ID	|Priority	    |Description
|FR-015 |	SHALL	    |Students SHALL update technical skills.
|FR-016	|   SHALL	    |Students SHALL update certifications.
|FR-017	|   SHALL     	|Students SHALL upload project details.
|FR-018 |	SHOULD      |Students SHOULD maintain GitHub, LinkedIn and Portfolio links.
#### 3.1.3 [Phase C]

Module: Attendance & Performance

This module helps students monitor attendance, performance, feedback, and placement readiness.

Sub-module: Attendance

|Req ID|	|Priority|	|Description|
|FR-021|	|SHALL|	Attendance SHALL be marked after the uploaded attendance sheet is verified.
|FR-022|	|SHALL|	Students SHALL be able to submit reasons for absence.
|FR-023|	|SHOULD|	Students SHOULD be able to view their attendance history.

Sub-module: Feedback

|Req ID|	|Priority|	|Description|
|FR-024|	|SHOULD|	Students SHOULD be able to submit feedback for trainers.

Sub-module: Leaderboard

|Req ID|	|Priority|	|Description|
|FR-025|	|SHALL|	The system SHALL display a dynamic leaderboard.
|FR-026|	|SHOULD|	The leaderboard SHOULD highlight areas where students need improvement.

Sub-module: Performance Dashboard

|Req ID |Priority |	Description
|FR-027	|SHALL	  |Students SHALL be able to view their overall engineering performance dashboard.
|FR-028	|SHOULD	  |The system SHOULD display technical knowledge tracking.
|FR-029	|SHOULD	  |The system SHOULD display mock drive results and performance analytics.
|FR-030	|SHOULD	  |The system SHOULD provide skill gap analysis for company-specific preparation.
|FR-031	|SHOULD	  |The system SHOULD display graphical reports of student performance.


### 3.2 Module: Student Monitoring
This module enables mentors to monitor attendance and support their allotted students.

Sub-module: Attendance Monitoring

|Req ID |Priority  |Description
|FR-032||SHALL     |Mentors SHALL view attendance reports of allotted students.
|FR-033 |SHALL     |Mentors SHALL view reasons submitted for student absences.
|FR-034 |SHALL     |Mentors SHALL validate submitted absence reasons.

Sub-module: Student Warnings

|Req ID	|Priority  |Description
|FR-035 |SHALL	   |The system SHALL notify mentors after three consecutive student absences.
|FR-036	|SHALL	   |Mentors SHALL issue warning notifications to students after three consecutive absences.

### 3.3 Module: Department Monitoring
This module enables HODs to monitor students and faculty within their respective branches.

Sub-module: Student Reports

|Req ID |Priority |	Description
|FR-037	|SHALL	  |HODs SHALL access reports of students belonging to their branch only.
|FR-038 |SHALL	  |HODs SHALL view attendance reports of individual students.
|FR-039	|SHALL	  |HODs SHALL view coding performance reports of students.

Sub-module: Student Follow-up

|Req ID |Priority |	Description
|FR-040	|SHALL	  |HODs SHALL be notified after mentors issue three warnings to a student.
|FR-041	|SHALL	  |HODs SHALL contact students after mentor escalation.

Sub-module: Faculty Collaboration

|Req ID	|Priority |Description
|FR-042	|SHOULD   |HODs SHOULD share documents with faculty members.
|FR-043	|SHOULD	  |HODs SHOULD schedule meetings with faculty.

### 3.4 System (Automation)
|Req ID	|Priority|Description
|FR-044	|SHALL	 |The system SHALL authenticate users based on their assigned role.
|FR-045	|SHALL	 |The system SHALL automatically calculate leaderboard scores.
|FR-046	|SHALL	 |The system SHALL notify users about task due dates.
|FR-047	|SHALL	 |The system SHALL automatically notify mentors after three consecutive student absences.
|FR-048	|SHALL	 |The system SHALL notify HODs after mentor escalation.
|FR-049	|SHOULD	 |The system SHOULD generate attendance reports automatically.
|FR-050	|SHOULD	 |The system SHOULD generate student performance analytics.
|FR-051	|SHOULD	 |The system SHOULD maintain complete student records across all engineering years..

## 4. Database Design Guidance (For DBA)

### 4.1 Core Entity Groups

- **User Management – Stores authentication and profile information for all system users, including Students, Faculty, Mentors, HODs, and Administrators. Supports role-based access and password authentication.**

- **Student Management – Maintains student profiles, attendance records, assignment submissions, quiz performance, leaderboard rankings, technical skill progress, and overall academic reports.**

- **Faculty Management – Stores faculty information and supports lecture/lab topic management, quiz creation, result uploading, and teacher performance analytics.**

- **Training & Learning Resources – Manages assignments, practice materials, lecture notes, reference links, due dates, lecture topics, laboratory topics, and learning resources provided to students.**

- **Attendance Management – Records attendance using dynamic QR codes or manual attendance, stores absence reasons, and supports mentor verification of attendance records.**

- **Assessment & Performance Management – Stores quizzes, assignment evaluations, leaderboard scores, technical knowledge tracking, mock drive results, skill gap analysis, and overall student performance reports.**

- **Communication & Reporting – Manages feedback, mentor warnings, notifications, document sharing, meeting schedules, digital certificates, and department-level reports for HODs.**

### 4.2 Key Relationships and Constraints
- One Department can have multiple Students, Faculty members, Mentors, and one HOD (1:N / 1:1).

- One Faculty can manage multiple lecture/lab topics, assignments, quizzes, and result records (1:N).

- One Student can have multiple attendance records, assignment submissions, quiz attempts, and notifications (1:N).

- One Mentor can supervise multiple students and validate attendance-related requests (1:N).

- One HOD can access reports and analytics for all students and faculty within their respective department (1:N).

- Each assignment, quiz, attendance record, and result must be associated with the corresponding student and faculty member.

- User authentication must enforce unique login credentials and role-based authorization.

- Assignment submissions must follow due-date constraints, and leaderboard scores should be updated based on submission timing and performance.

-Attendance should only be recorded through authorized methods (dynamic QR or verified manual attendance), and absence reasons must be validated before approval.

### 4.3 Indexing Recommendations
The following attributes should be indexed to improve system performance for authentication, searching, reporting, and analytics:

- User ID and Email (authentication and login)
- Student ID and Roll Number (student search)
- Faculty ID (faculty operations)
- Department (department-wise reporting)
- Subject (course and resource retrieval)
- Assignment ID and Due Date (assignment management)
- Attendance Date (attendance reports)
- Quiz ID (quiz management)
- Leaderboard Rank (performance dashboard)
- Result Records (result retrieval)
- Notification Date (notification history)

---

## 5. Non-Functional Requirements

| **NFR ID** | **Category** | **Requirement** |
|---|---|---|
| **NFR-001** | Performance | AcadNexus should provide quick response for major operations such as login, dashboard access, task submission, report generation, and viewing academic records under normal usage conditions. |
| **NFR-002** | Security | The system should provide secure authentication, password protection, and Role-Based Access Control (RBAC). User data and academic information should be protected from unauthorized access. |
| **NFR-003** | Availability | The system should be available during regular academic activities with proper backup and recovery mechanisms to prevent data loss. |
| **NFR-004** | Scalability | The system should support increasing numbers of students, faculty, departments, and colleges while maintaining performance and reliability. |
| **NFR-005** | Usability | The system should have a simple and user-friendly interface that can be used by students, faculty, mentors, and HODs. The application should be responsive across desktop, tablet, and mobile devices. |
| **NFR-006** | Maintainability | The system should follow modular design, proper documentation, and coding standards to allow easy maintenance, debugging, and future enhancements. |
| **NFR-007** | Compatibility | The system should support commonly used browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari, along with major operating systems. |
| **NFR-008** | Compliance | The system should follow institutional policies and basic data protection practices for secure handling of student and academic information. |


---

## 6. External Interface Requirements

### 6.1 User Interface Requirements

- The system shall provide a responsive web interface developed using React.js.
The application shall provide role-based dashboards for Students, Faculty, Mentors, HODs, and Administrators.
The interface shall support easy navigation with menu options and Previous/Next buttons for tasks.
All forms shall include input validation and display appropriate success or error messages.
Attendance, results, reports, and performance data shall be displayed in searchable and paginated tables.
Users shall be able to download reports and documents in PDF and Excel formats.
Future enhancements may include Dark Mode and a mobile application.
### 6.2 Hardware Interfaces

No proprietary hardware interfaces are required for the current release.
The system shall run on a standard computer or laptop with a minimum Intel Core i3/Ryzen 3 processor, 4 GB RAM, and 10 GB available storage.
The server shall require a minimum of Intel Core i5/Ryzen 5 processor, 8 GB RAM, 100 GB storage, and a stable internet connection.
The application may be deployed on a cloud platform such as AWS, Microsoft Azure, or Google Cloud Platform in future deployments.

### 6.3 Software Interfaces

| **Interface** | **Technology / Protocol** | **Purpose** |
|---|---|---|
| **Frontend–Backend Communication** | REST API (HTTP/HTTPS), Axios | Enables communication between the React frontend and Node.js backend.. |
| **Database** | MySQL |Stores user information, attendance, quizzes, results, and other system data.. |
| **Authentication** | JWT  | Provides secure user authentication and role-based authorization. |
| **File Upload & Storage** | Multer | Uploads attendance sheets, notes, documents, and results.. |

### 6.4 Communication Interfaces

| **Communication Interface**          | **Technology / Protocol**          | **Purpose**                                                                                                                                                                                            |
| ------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frontend – Backend Communication** | HTTPS, REST API, JSON              | Enables secure communication between the React.js frontend and the Node.js/Express.js backend for user authentication, attendance management, quizzes, results, dashboards, and performance analytics. |
| **Backend – Database Communication** | MySQL Protocol (mysql2)            | Facilitates secure data exchange between the backend application and the MySQL database for storing and retrieving user data, attendance records, quizzes, results, and reports.                       |
| **File Upload Communication**        | HTTP/HTTPS, Multipart Form Data    | Allows faculty and administrators to upload attendance sheets, learning resources, result files, and departmental documents to the system.                                                             |
| **Internal Module Communication**    | Express.js Services and Middleware | Enables communication between system modules such as Authentication, Student, Faculty, Mentor, HOD, Attendance, Quiz, Leaderboard, and Result Management while enforcing business rules and security.  |
| **Real-Time Communication**          | Not Applicable (Current Release)   | The current version does not require real-time communication. Future versions may use WebSockets for live notifications and updates.                                                                   |


---

## 7. Glossary

| **Term / Acronym** | **Definition** |
|---|---|
| **AcadNexus** | A centralized academic and student development platform for managing training, attendance, assessments, and performance tracking in educational institutions.. |
| **API (Application Programming Interface)** | A mechanism that allows communication and data exchange between AcadNexus and external systems or platforms.. |
| **Assessment** | A method used to evaluate student knowledge and performance through quizzes, tests, or assignments.. |
| **Authentication** | The process of verifying a user's identity before providing system access. |
| **Authorization** | [The process of determining user permissions and access rights within the system.]. |
| **Dashboard** | A user interface that displays relevant information, reports, and activities based on the user's role.. |
| **ERP (Enterprise Resource Planning)** | An institutional management system that stores and manages academic and administrative information.. |
| **HOD (Head of Department)** | A department-level authority responsible for monitoring academic activities and student performance. |
| **LMS (Learning Management System)** | A platform used to manage learning resources, courses, and educational activities.. |
| **Mentor** | A faculty member responsible for guiding and monitoring assigned students' academic progress.. |
| **RBAC (Role-Based Access Control)** | A security model that controls system access based on user roles and responsibilities. |
| **Responsive Design** | A design approach that allows the application interface to adapt to different screen sizes and devices.. |
| **Skill Gap Analysis** | The process of identifying missing skills or improvement areas in a student's technical or academic progress.. |
| **Student Performance Analytics** | Analysis of student data such as attendance, assessments, and activities to measure progress and improvement.. |
| **Third-Party Integration** | Connection of AcadNexus with external platforms or services to extend system functionality.. |
| **Training Management System (TMS)** | A system used to manage training activities, tasks, resources, assessments, and student development processes.. |
| **User Role** | A category assigned to users that defines their access permissions and available system functions.. |

---

## 8. Appendix – Issues & Open Items

The following items require resolution before development commences:

| **Issue ID** | **Category** | **Description** | **Owner** | **Status** |
|---|---|---|---|---|
| **ISS-001** | Attendance | Finalize the workflow for uploading manually signed attendance sheets and mapping them to student records.. | Development Team | Open |
| **ISS-002** | Result Management |Finalize the format and validation process for uploading IA1, IA2, and University results.. | Development Team | Open |
| **ISS-003** | Analytics | Finalize the calculation logic for the dynamic leaderboard, skill gap analysis, and overall student performance metrics. | [Owner role/person] | Open |

---

***--- End of Document ---***
