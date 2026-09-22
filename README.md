# Faculty Performance & Contextual Appraisal Platform (VFSTR)

An enterprise-grade, contextual performance appraisal and decision-support system designed for university departments. Built for the Department of Computer Science & Engineering (VFSTR), this platform integrates transparent rubric-based evaluations with algorithmic equity safeguards to account for teaching overload, institutional administration, and high-difficulty course delivery.

## 🚀 Key Features

- **Contextual Equity Matrix (Load vs. Research Output)**:
  - 2D circle repulsion relaxation algorithm to eliminate data point clumping.
  - Decoupled floating tooltip overlay (`z-50`) ensuring sibling nodes never obscure appraisal details.
  - Quadrant-based performance intelligence balancing teaching contact hours and administrative burden against verified research outputs.

- **Appraisal by Score Distribution (999 Cap)**:
  - **Scrollable Cohort Bar Graph**: Pinned left Y-axis (0 to 999 marks) with subtle dashed guidelines and horizontal scrolling across all 42 faculty members.
  - **Division by Colors**:
    - *Dimension Stacks*: Part A (Teaching), Part B (Research & IP), Part C (Institutional Governance), and Context Shield Uplift.
    - *Standard vs. Context Shielded*: Highlights baseline points vs. equity-protected adjustments.
  - **Dynamic Controls**: Academic level filtering (`Level 14`, `Level 12`, `Level 11`, `Level 10`, `Level 10-`), sorting (High to Low, Low to High, A-Z), and instant search.
  - **One-Click Audit**: Direct drilldown to faculty audit dossiers from any bar in the graph.

- **Institutional Analytics Suite**:
  - SVG Outcome Status Donut Ring Chart with center evaluation counter.
  - Dimension attainment distribution progress bars with live department averages.
  - Equity safeguard delta metrics and star performer identification.

- **Faculty Self-Appraisal Portal**:
  - Live preview of Part A, B, and C metric claims with verified point tracking.
  - Contextual parameter sliders (teaching hours, admin roles, remedial student percentage, course difficulty index).
  - Evidence viewer with multi-page verification stamps, digital signing, and file audit logs.

- **HOD Suite & Executive Reporting**:
  - Searchable 42-member faculty directory with grade distributions and quick status filters.
  - Page-centered Executive Brief Modal with print/PDF export and LaTeX summary generation.
  - Aggregate Department Quality Report with IQAC approval workflows.

---

## 🛠 Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS Design Tokens (Minimal Light UI/UX)
- **Icons & Animation**: Lucide Icons, Anime.js
- **Build Tool**: Vite, TypeScript Compiler (`tsc -b`)

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (or npm / yarn)

### Installation
```bash
# Clone the repository
git clone https://github.com/VaatsavKrishnaPolisetty/faculty-performance-profile.git

# Navigate to the project directory
cd faculty-performance-profile

# Install dependencies
pnpm install # or npm install
```

### Development
```bash
pnpm dev # or npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
pnpm build # or npm run build
```

---

## 📄 License
Academic & Institutional Use — Vignan's Foundation for Science, Technology & Research (VFSTR).
