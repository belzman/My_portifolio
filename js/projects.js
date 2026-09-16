/**
 * Filterable Projects Grid & Case Studies
 * Belayneh Endalamaw Dejene
 */
const projectsData = [
  {
    id: "proj-artist",
    title: "ARTist: AI Clinical Decision Support & Bilingual RAG Platform",
    category: "clinical-ai",
    categoryLabel: "Healthcare AI & RAG",
    icon: "fa-heartbeat",
    description: "An enterprise-grade, guideline-grounded AI platform for Antiretroviral Therapy (ART) and HIV care management. Combines calibrated machine learning for treatment failure risk prediction, care-cascade longitudinal tracking, and a bilingual (English/Amharic) RAG assistant powered by Google Gemini 2.0 and ChromaDB vector search referencing national Ethiopian and WHO ART guidelines.",
    tech: ["React 18", "Tailwind CSS", "Flask", "PostgreSQL", "ChromaDB", "Google Gemini 2.0", "Scikit-Learn", "Docker"],
    githubUrl: "https://github.com/belzman/ARTist",
    demoUrl: null,
    highlight: "Featured Flagship Clinical AI System"
  },
  {
    id: "proj-preterm",
    title: "Spontaneous Preterm Birth Dynamic Risk Stratifier",
    category: "clinical-ai",
    categoryLabel: "Maternal Health AI",
    icon: "fa-baby",
    description: "Developed under the prestigious March of Dimes Discovery Research Grant cluster randomized controlled trial. Deploys ensemble machine learning to model maternal demographic, clinical, and nutritional predictors, delivering risk-responsive antenatal care pathways across Ethiopian health facilities.",
    tech: ["Python", "Ensemble Learning", "Explainable AI (SHAP)", "FastAPI", "Pandas", "PostgreSQL"],
    githubUrl: "https://github.com/belzman/My_portifolio",
    demoUrl: null,
    highlight: "March of Dimes Discovery Grant"
  },
  {
    id: "proj-climai",
    title: "ClimAI-Africa: Climate-Respiratory Disease Forecasting",
    category: "climate-health",
    categoryLabel: "Geospatial & Climate AI",
    icon: "fa-cloud-sun-rain",
    description: "A spatiotemporal predictive intelligence engine integrating satellite meteorological metrics, particulate atmospheric pollution, and epidemiological registries to forecast seasonal respiratory illness surges across African sub-regions.",
    tech: ["PyTorch", "GeoPandas", "Rasterio", "XGBoost", "Streamlit", "Scikit-Learn"],
    githubUrl: "https://github.com/belzman/ClimAI-Africa",
    demoUrl: null,
    highlight: "Climate & Planetary Health"
  },
  {
    id: "proj-audit",
    title: "Clinical Trial Intelligent Audit & Quality System",
    category: "data-eng",
    categoryLabel: "Health Data Engineering",
    icon: "fa-clipboard-check",
    description: "Comprehensive automated quality assurance, outlier reconciliation, and regulatory audit pipeline for multi-center epidemiological and randomized controlled clinical trials in Africa.",
    tech: ["Python", "Pandas", "PostgreSQL", "Data Quality Auditing", "React", "Docker"],
    githubUrl: "https://github.com/belzman/clinical-trial-audit-system",
    demoUrl: null,
    highlight: "Enterprise Clinical QA"
  },
  {
    id: "proj-omop",
    title: "OMOP-CDM Health Data Standardization Pipeline",
    category: "data-eng",
    categoryLabel: "Informatics & Interoperability",
    icon: "fa-database",
    description: "Standardized clinical datasets from Ethiopian hospital electronic medical record systems and Health and Demographic Surveillance Sites (HDSS) into the international OMOP Common Data Model (OHDSI) for federated observational research.",
    tech: ["SQL", "WhiteRabbit", "PostgreSQL", "OMOP CDM v5.4", "Python ETL"],
    githubUrl: "https://github.com/belzman/OMOP",
    demoUrl: null,
    highlight: "OHDSI Global Standards"
  },
  {
    id: "proj-xai-mpox",
    title: "Explainable Symptom-Based Viral Triage System",
    category: "xai",
    categoryLabel: "Explainable AI (XAI)",
    icon: "fa-virus",
    description: "Machine learning diagnostic and triage decision tool published in BMC Infectious Diseases. Provides granular local feature attributions using SHAP waterfall and force plots to give frontline health extension workers transparent, explainable recommendations.",
    tech: ["Python", "XGBoost", "SHAP", "LIME", "Streamlit", "Bioinformatics"],
    githubUrl: "https://doi.org/10.1186/s12879-025-10738-4",
    demoUrl: null,
    highlight: "BMC Infectious Diseases (2025)"
  }
];

function renderProjects(filteredData) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = filteredData.map(proj => `
    <div class="project-card">
      <div class="project-thumb">
        <i class="fas ${proj.icon}"></i>
        <div style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.6); padding: 0.25rem 0.65rem; border-radius: 9999px; font-size: 0.725rem; font-weight: 700; color: var(--accent-primary); border: 1px solid rgba(56, 189, 248, 0.3);">
          ${proj.highlight}
        </div>
      </div>
      <div class="project-body">
        <span class="project-category">${proj.categoryLabel}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        
        <div class="project-tech">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-links">
          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fab fa-github"></i> Repository / Details
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function initProjects() {
  renderProjects(projectsData);

  const filterBtns = document.querySelectorAll('.proj-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      if (cat === 'all') {
        renderProjects(projectsData);
      } else {
        const filtered = projectsData.filter(p => p.category === cat);
        renderProjects(filtered);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initProjects);\n