# Belayneh Endalamaw Dejene — Academic & AI Researcher Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/belzman/My_portifolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/belzman/My_portifolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-Visit_Portfolio-blue?style=flat&logo=github)](https://belzman.github.io/My_portifolio/)

This repository hosts the official international academic and research portfolio of **Belayneh Endalamaw Dejene** — Data Scientist, AI Researcher, PhD Candidate at Bahir Dar University, and Research Fellow at the Armauer Hansen Research Institute (AHRI).

---

## 🌟 Key Features & Architectural Highlights

- 🔬 **9+ Peer-Reviewed Journal Publications**: Full catalog covering *HIV Medicine*, *BMC Public Health*, *BMC Infectious Diseases*, *BMC Medical Informatics*, and *IEEE*. Includes direct DOI links, search filtering, and one-click **BibTeX citation generator**.
- 🧠 **Live In-Browser Explainable AI (XAI) Playground**: An interactive clinical risk simulator featuring dynamic parameter sliders (Hemoglobin, Blood Pressure, Gestational Age, CD4 counts) that renders real-time risk scores and **SHAP-style local feature attribution charts**.
- 🏆 **Research Leadership & Grants**: Features Co-Investigator role on the **March of Dimes Discovery Research Grant** and Fellowship under **Data Science Without Borders (DSWB / APHRC)**.
- 💻 **Flagship Clinical Systems Showcase**: Deep dives into **ARTist** (bilingual RAG & predictive ART intelligence), **ClimAI-Africa**, **Clinical Trial Audit System**, and **OMOP-CDM standardization**.
- 🎨 **World-Class Design System**:
  - Dark / Light theme toggle with local persistence.
  - Interactive HTML5 canvas neural particle network.
  - Smooth glassmorphic aesthetics, animated stat counters, and responsive typography.
  - Zero heavy build dependencies (100% pure web standards with fast loading speeds).

---

## 🚀 How to Enable GitHub Pages

1. Navigate to your repository on GitHub: [https://github.com/belzman/My_portifolio](https://github.com/belzman/My_portifolio)
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**:
   - Select **GitHub Actions** (recommended — the included workflow will deploy automatically on push), or
   - Select **Deploy from a branch** > branch: `main` / `root`.
4. Your portfolio will be live at:
   👉 **[https://belzman.github.io/My_portifolio/](https://belzman.github.io/My_portifolio/)**

---

## 💻 Local Preview

To preview the portfolio locally on your computer:

```bash
# Python built-in server
cd My_portifolio
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 📂 Project Structure

```
My_portifolio/
├── index.html                  # Semantic single-page application with SEO & Schema.org JSON-LD
├── css/
│   └── style.css               # Design system, glassmorphism, responsive styles, dark/light themes
├── js/
│   ├── particles.js            # Neural constellation canvas network
│   ├── publications.js         # Publications catalog, search filter, and BibTeX modal
│   ├── projects.js             # Categorized project cards & repository links
│   ├── ai-simulator.js         # In-browser Explainable AI & clinical risk simulator
│   ├── contact.js              # Contact form handler & direct mailto link
│   └── main.js                 # Theme switcher, scrollspy, navbar, typing & counter animations
├── assets/
│   └── images/
│       ├── graphical-abstract.png  # Methodological pipeline visual
│       └── ahri-logo.png           # AHRI research emblem
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD pipeline for GitHub Pages
└── README.md
```

---

## 📄 License & Attribution

Designed and engineered for **Belayneh Endalamaw Dejene**. Released under the MIT License.
