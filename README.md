<div align="center">

```
██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗
██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝
██████╔╝█████╗  ███████╗██║   ██║██╔████╔██║█████╗  █████╗  ██║   ██║██████╔╝██║  ███╗█████╗  
██╔══██╗██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝  ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝  
██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

### *Hire on skill. Not on paper.*

<br/>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

<br/>

</div>

---

## ❓ The Problem

> Resumes lie. Or at least — they don't tell the whole story.

Traditional hiring pipelines rely on resume screening that creates:

| Pain Point | Impact |
|---|---|
| 📄 Resume noise over real skill signal | Good engineers get filtered out |
| 📐 Inconsistent evaluation standards | Bias creeps into every decision |
| 🔍 Manual filtering across large pools | Recruiters burn hours on low-signal tasks |
| ⏳ Long hiring cycles | Top candidates accept offers elsewhere |

**ResumeForge fixes this** — by replacing gut-feel screening with a structured, score-driven evaluation system.

---

## 🧠 Overview

**ResumeForge** is a skill-based hiring evaluation platform. Candidates upload resumes, complete technical assessments, and receive a **composite skill score** generated through a weighted evaluation matrix.

Recruiters filter candidates using objective thresholds — not vibes.

> Built to demonstrate: async processing · caching strategies · RBAC · modular architecture

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

**🔐 Auth & Access**
- Role-based authentication
- Candidate / Recruiter / Admin roles
- JWT-secured endpoints

**📄 Resume Pipeline**
- Resume upload & automated skill extraction
- Resume parsing microservice (FastAPI + NLP)
- Application lifecycle tracking

**📊 Evaluation Engine**
- Weighted skill evaluation matrix
- Composite scoring (0–100)
- Candidate ranking & tier classification

</td>
<td width="50%">

**🖥️ Recruiter Tools**
- Dashboard for candidate filtering
- Score threshold queries
- Fast leaderboard via Redis cache

**⚙️ Infrastructure**
- Redis job queue for async evaluation
- Background job processing
- RESTful API architecture
- Dockerized dev environment

</td>
</tr>
</table>

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────┐
│                      CLIENT                         │
│                (React + TypeScript)                 │
└───────────────────────┬─────────────────────────────┘
                        │ HTTP / REST
                        ▼
┌─────────────────────────────────────────────────────┐
│              API SERVER  (Node.js / Express)        │
│   Auth  ·  Evaluation Logic  ·  Recruiter Ops       │
└──────┬──────────────────────┬────────────┬──────────┘
       │                      │            │
       ▼                      ▼            ▼
┌─────────────┐    ┌──────────────┐   ┌──────────────────────┐
│   MongoDB   │    │    Redis     │   │  Resume Parsing Svc  │
│  (Primary   │    │  Cache  +    │   │  (FastAPI + Python)  │
│  Database)  │    │  Job Queue   │   │  NLP skill extract   │
└─────────────┘    └──────────────┘   └──────────────────────┘
```

### Component Responsibilities

| Component | Role |
|---|---|
| **API Server** | Auth, evaluation logic, recruiter operations |
| **MongoDB** | Candidate profiles, evaluations, applications |
| **Redis** | Leaderboard caching + async job queue |
| **Resume Parsing Service** | NLP-based skill extraction from uploaded resumes |

---

## 📐 Evaluation Model

Candidates receive a **composite score (0–100)** based on weighted backend engineering competencies.

### Skill Weight Matrix

| Skill Area | Weight | Visual |
|---|---|---|
| API Design | 25% | `█████████████░░░░░░░░░░░░` |
| Database Schema Design | 20% | `██████████░░░░░░░░░░░░░░░` |
| Code Quality | 20% | `██████████░░░░░░░░░░░░░░░` |
| Performance Optimization | 20% | `██████████░░░░░░░░░░░░░░░` |
| Edge Case Handling | 15% | `███████░░░░░░░░░░░░░░░░░░` |

### Composite Score Formula

```
FinalScore = Σ ( skill_score × weight )

Example:
  API Design         →  90 × 0.25  =  22.5
  DB Schema Design   →  80 × 0.20  =  16.0
  Code Quality       →  85 × 0.20  =  17.0
  Perf Optimization  →  75 × 0.20  =  15.0
  Edge Case Handling →  70 × 0.15  =  10.5
                              ─────────────
                              Total:  81.0
```

### Recruiter Query Example

```http
GET /candidates?minScore=85
```

---

## 🛠️ Tech Stack

<table>
<tr>
<th>Layer</th>
<th>Technology</th>
</tr>
<tr>
<td><b>Backend</b></td>
<td>Node.js · Express.js · MongoDB · Redis · JWT</td>
</tr>
<tr>
<td><b>Microservice</b></td>
<td>FastAPI · Python · NLP Libraries</td>
</tr>
<tr>
<td><b>Frontend</b></td>
<td>React · TypeScript · Redux Toolkit · Chakra UI</td>
</tr>
<tr>
<td><b>DevOps</b></td>
<td>Docker · Nginx · CI/CD Pipeline</td>
</tr>
</table>

---

## 🚀 Installation

### Prerequisites

```bash
node >= 18.x
python >= 3.10
docker (optional but recommended)
bun or npm
```

### 1 · Clone the Repository

```bash
git clone https://github.com/your-username/resumeforge.git
cd resumeforge
```

### 2 · Backend Setup

```bash
cd server
npm install
npm run dev
```

### 3 · Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 4 · Resume Parsing Microservice

```bash
cd resume-service
pip install -r requirements.txt
uvicorn main:app --reload
```

### 5 · Docker (All-in-One)

```bash
docker-compose up --build
```

---

## 🗺️ API Overview

```
POST   /auth/register          → Register candidate or recruiter
POST   /auth/login             → Get JWT token

POST   /resumes/upload         → Upload resume (candidate)
GET    /resumes/:id/skills     → View extracted skills

POST   /evaluations/:id        → Submit evaluation scores
GET    /evaluations/:id        → Get candidate composite score

GET    /candidates             → List all candidates (recruiter)
GET    /candidates?minScore=85 → Filter by score threshold

GET    /dashboard/leaderboard  → Ranked candidate list (cached)
```

---

## 🔭 Future Improvements

- [ ] 🤖 AI-based cheating detection
- [ ] 🔔 Real-time recruiter notifications (WebSockets)
- [ ] ⚖️ Distributed worker scaling
- [ ] 📈 Observability with Prometheus & Grafana
- [ ] 📊 Advanced candidate analytics dashboard

---

<div align="center">

**ResumeForge** — Built to show what modern backend engineering looks like.

*PRs welcome · Issues welcome · Stars appreciated ⭐*

</div>