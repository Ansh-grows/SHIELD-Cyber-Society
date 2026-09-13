# SHIELD Cyber Society — Official Website

> **Society for Hacking Intelligence and Ethical Learning and Defense**  
> National Institute of Technology Hamirpur (NIT Hamirpur)  
> *Tagline:* **Learn | Build | Defend**  
> *Motto:* **"People | Ideas | A Safer Digital World"**

---

## 🛡️ About SHIELD

**SHIELD Cyber Society** is the official cybersecurity society of **National Institute of Technology Hamirpur**. It serves as an academic and practical incubator for students interested in ethical hacking, network defense, threat intelligence, reverse engineering, cloud security, and adversarial AI defense.

This website is engineered as a clean, technically credible, and responsive multi-page web platform matching the visual identity of the society's official branding.

---

## 🎨 Visual Identity & Design System

- **Colors:**
  - **Primary Dark Navy:** `#101E38` (Headlines, badges, header elements, footer wave)
  - **Secondary Blue Accent:** `#3D6FA6` (CTAs, links, domain badges, active highlights)
  - **Institute Gold / Bronze:** `#C5A059` (NIT Hamirpur crest accent lines, eyebrows)
  - **Backgrounds:** `#FFFFFF` (pure white) and `#F4F6F9` (cool light gray alternating sections)
  - **Dividers & Borders:** `#E5E9F0`
- **Typography:**
  - **Headings:** Montserrat / Poppins (bold geometric sans with tight tracking on display headings and wide tracked-out eyebrows)
  - **Body:** Inter (clean, neutral, readable)
- **Signature Motifs:**
  - Short horizontal rule beneath the logo lockup mirroring the official poster
  - **Learn / Build / Collaborate / Defend** 4-icon badge row & cards
  - Poster-style **InfoCard** pattern (`Eligibility` / `Date & Time` / `Venue` / `Purpose`)
  - Continuous dark navy **SVG Wave Footer**
  - **`SECURE / LEARN / EMPOWER / LEAD`** stacked corner badge

---

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router v6
- **Animations:** Framer Motion (subtle, restrained scroll and entrance fades)
- **Icons:** Lucide React

---

## 📂 Site Structure & Pages

```
SHIELD Website
├── Home              # Hero, 4-pillar strip, preview cards, live stats, featured event
├── About             # Who We Are, Mission, Vision, 4-pillar cards, Ethical Charter
├── Domains           # 8 interactive domain tracks, live search, ethics disclaimer, modal view
│   ├── Web Application Security
│   ├── Network Security
│   ├── Offensive Security & Pentesting
│   ├── Defensive Security & Blue Teaming
│   ├── Cloud Security & DevSecOps
│   ├── Cryptography & Applied Protocols
│   ├── Digital Forensics & Incident Investigation
│   └── AI Security & Machine Learning Defense
├── Activities        # CTFs, Workshops, Hackathons, Tech Talks + Poster-style Event Cards
├── Projects          # Realistic open-source tool showcases, tech badges, modal previews
├── Resources         # 3-tier guides (Beginner/Intermediate/Practice) + 7-step Roadmap
├── Team              # Leadership hierarchy diagram + minimal member directory
└── Join Us           # Eligibility, domain explore tags, interactive recruitment form, FAQ
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js (v18 or higher recommended; built with v24)
- npm (v9 or higher)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repo-url>
cd "shield website"
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be generated in the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚖️ Ethics Disclaimer

All offensive security and penetration testing modules within SHIELD Cyber Society are practiced strictly within authorized, sandboxed, and controlled lab environments under institutional guidelines.
