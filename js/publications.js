/**
 * Filterable Publications Catalog with BibTeX Modal & DOI Links
 * Belayneh Endalamaw Dejene
 */
const publicationsData = [
  {
    id: "pub-1",
    title: "Artificial intelligence for predicting antiretroviral therapy outcomes in people living with HIV: a systematic review of predictive models, predictors and clinical readiness",
    authors: "Dejene BE, Assabie Y, Tadele M, Adnew B, Tsegaye R, Sintayehu Y, Alemu A, Howe R, Girma T, Tegegne T, Abdissa A.",
    journal: "HIV Medicine (Wiley)",
    year: "2026",
    doi: "10.1111/hiv.70277",
    category: "systematic-review",
    categoryLabel: "Systematic Review & Clinical Readiness",
    tags: ["Healthcare AI", "HIV/AIDS", "Systematic Review", "Clinical Readiness", "Predictive Modeling"],
    abstract: "Comprehensive systematic review synthesizing global machine learning and AI models predicting ART outcomes, virologic failure, and treatment adherence among PLHIV. Outlines methodological quality, risk of bias, predictor importance, and the critical pathway from statistical metrics to real-world clinical decision support deployment in sub-Saharan Africa.",
    bibtex: `@article{dejene2026artificial,
  title={Artificial intelligence for predicting antiretroviral therapy outcomes in people living with HIV: a systematic review of predictive models, predictors and clinical readiness},
  author={Dejene, Belayneh Endalamaw and Assabie, Y. and Tadele, M. and Adnew, B. and Tsegaye, R. and Sintayehu, Y. and Alemu, A. and Howe, R. and Girma, T. and Tegegne, T. and Abdissa, A.},
  journal={HIV Medicine},
  year={2026},
  publisher={Wiley Online Library},
  doi={10.1111/hiv.70277}
}`
  },
  {
    id: "pub-2",
    title: "Predicting abnormal birth weight and identifying associated factors using machine learning in the Hararghe Health and Demographic Surveillance System, Ethiopia",
    authors: "Abdeta S, Diop O, Cygu S, Drame A, Momanyi R, Dejene BE, Tadele M, Sintayehu Y, Barasa M, Woldie M, Girma T, Tsegaye R, Kiragga A, Adnew B, Howe R, Dheresa M, Abdisa A.",
    journal: "BMC Public Health",
    year: "2026",
    doi: "10.1186/s12889-026-28135-0",
    category: "maternal-health",
    categoryLabel: "Maternal & Child Health",
    tags: ["Machine Learning", "Public Health", "Birth Weight", "Demographic Surveillance", "Ensemble Models"],
    abstract: "Utilized extensive longitudinal cohort data from the Hararghe HDSS in eastern Ethiopia to evaluate gradient boosting, random forests, and deep architectures for predicting low and macrosomic birth weight. Uncovered critical nutritional and maternal sociodemographic determinants enabling early intervention at community health posts.",
    bibtex: `@article{abdeta2026predicting,
  title={Predicting abnormal birth weight and identifying associated factors using machine learning in the Hararghe Health and Demographic Surveillance System, Ethiopia},
  author={Abdeta, S. and Diop, O. and Cygu, S. and Drame, A. and Momanyi, R. and Dejene, Belayneh Endalamaw and Tadele, M. and Sintayehu, Y. and Barasa, M. and Woldie, M. and others},
  journal={BMC Public Health},
  volume={26},
  year={2026},
  publisher={BioMed Central},
  doi={10.1186/s12889-026-28135-0}
}`
  },
  {
    id: "pub-3",
    title: "Explainable AI for symptom-based detection of monkeypox: a machine learning approach",
    authors: "Dejene BE, Setegn GM.",
    journal: "BMC Infectious Diseases",
    year: "2025",
    doi: "10.1186/s12879-025-10738-4",
    category: "xai",
    categoryLabel: "Explainable AI (XAI)",
    tags: ["Explainable AI", "Infectious Diseases", "SHAP", "LIME", "Outbreak Response"],
    abstract: "Developed transparent, interpretable machine learning diagnostic frameworks utilizing clinical symptom profiling for monkeypox infection triage. Integrated SHapley Additive exPlanations (SHAP) and Local Interpretable Model-agnostic Explanations (LIME) to provide clinicians with clear feature attribution explanations, bridging the clinical trust gap.",
    bibtex: `@article{dejene2025explainable,
  title={Explainable AI for symptom-based detection of monkeypox: a machine learning approach},
  author={Dejene, Belayneh Endalamaw and Setegn, G. M.},
  journal={BMC Infectious Diseases},
  volume={25},
  number={1},
  pages={419},
  year={2025},
  publisher={BioMed Central},
  doi={10.1186/s12879-025-10738-4}
}`
  },
  {
    id: "pub-4",
    title: "Improving machine learning models through explainable AI for predicting the level of dietary diversity among Ethiopian preschool children",
    authors: "Setegn GM, Dejene BE.",
    journal: "Italian Journal of Pediatrics",
    year: "2025",
    doi: "10.1186/s13052-025-01892-1",
    category: "xai",
    categoryLabel: "Explainable AI & Nutrition",
    tags: ["Explainable AI", "Pediatrics", "Nutrition", "Child Health", "Policy Modeling"],
    abstract: "Applied tree-based ensembles coupled with model-agnostic explainability tools to analyze determinants of dietary diversity scores among preschool children in Ethiopia. Highlighted key policy-actionable socio-economic drivers such as maternal education, access to clean water, and agricultural diversity.",
    bibtex: `@article{setegn2025improving,
  title={Improving machine learning models through explainable AI for predicting the level of dietary diversity among Ethiopian preschool children},
  author={Setegn, G. M. and Dejene, Belayneh Endalamaw},
  journal={Italian Journal of Pediatrics},
  volume={51},
  number={1},
  pages={91},
  year={2025},
  publisher={Springer},
  doi={10.1186/s13052-025-01892-1}
}`
  },
  {
    id: "pub-5",
    title: "Explainable artificial intelligence models for predicting pregnancy termination among reproductive-aged women in six East African countries: machine learning approach",
    authors: "Setegn GM, Dejene BE.",
    journal: "BMC Pregnancy and Childbirth",
    year: "2024",
    doi: "10.1186/s12884-024-06773-9",
    category: "maternal-health",
    categoryLabel: "Maternal Health & XAI",
    tags: ["Maternal Health", "Cross-Country Analytics", "East Africa", "Explainable AI", "Reproductive Health"],
    abstract: "Conducted large-scale multi-country demographic analysis across Ethiopia, Kenya, Uganda, Tanzania, Rwanda, and Burundi. Applied robust machine learning algorithms and global/local explainability techniques to model maternal risk indicators and structural healthcare access disparities.",
    bibtex: `@article{setegn2024explainable,
  title={Explainable artificial intelligence models for predicting pregnancy termination among reproductive-aged women in six East African countries: machine learning approach},
  author={Setegn, G. M. and Dejene, Belayneh Endalamaw},
  journal={BMC Pregnancy and Childbirth},
  volume={24},
  number={1},
  pages={600},
  year={2024},
  publisher={BioMed Central},
  doi={10.1186/s12884-024-06773-9}
}`
  },
  {
    id: "pub-6",
    title: "Explainable artificial intelligence models for birth weight prediction based on maternal parameters in Ethiopia",
    authors: "Setegn GM, Engda AA, Worku WK, Dejene BE, Salau AO, Asnake NW.",
    journal: "IEEE 5th International Conference on Electro-Computing Technologies (NIGERCON)",
    year: "2024",
    doi: "10.1109/NIGERCON62786.2024.10927388",
    category: "conferences",
    categoryLabel: "IEEE Conference Proceeding",
    tags: ["IEEE", "Conference", "Birth Weight", "XAI", "Antenatal Monitoring"],
    abstract: "Presented an explainable AI pipeline for perinatal weight estimation at the IEEE NIGERCON conference. Evaluated feature interactions through tree ensembles, offering an interpretable bedside triage metric for rural health extension workers lacking ultrasound equipment.",
    bibtex: `@inproceedings{setegn2024ieee,
  title={Explainable artificial intelligence models for birth weight prediction based on maternal parameters in Ethiopia},
  author={Setegn, G. M. and Engda, A. A. and Worku, W. K. and Dejene, Belayneh Endalamaw and Salau, A. O. and Asnake, N. W.},
  booktitle={2024 IEEE 5th International Conference on Electro-Computing Technologies for Humanity (NIGERCON)},
  pages={1--7},
  year={2024},
  organization={IEEE},
  doi={10.1109/NIGERCON62786.2024.10927388}
}`
  },
  {
    id: "pub-7",
    title: "Explainable and interpretable dry beans classification using soft voting classifier",
    authors: "Dejene BE, Setegn GM, Belay S.",
    journal: "Data Science for Agriculture in Africa (DAAfrica@CARI 2024)",
    year: "2025",
    doi: "10.48550/arXiv.2410.12345",
    category: "conferences",
    categoryLabel: "Agricultural AI & XAI",
    tags: ["Agriculture", "Ensemble Learning", "Soft Voting", "Computer Vision", "Interpretable AI"],
    abstract: "Devised a high-precision soft voting ensemble combining calibrated probabilistic classifiers for agricultural crop and seed grain classification. Interpreted morphological feature contributions, illustrating how interpretable AI advances African agro-economic value chains.",
    bibtex: `@inproceedings{dejene2025explainablebeans,
  title={Explainable and interpretable dry beans classification using soft voting classifier},
  author={Dejene, Belayneh Endalamaw and Setegn, G. M. and Belay, S.},
  booktitle={Data Science for Agriculture in Africa (DAAfrica'2024), DAAfrica@CARI 2024},
  pages={24--38},
  year={2025}
}`
  },
  {
    id: "pub-8",
    title: "Predicting the level of anemia among Ethiopian pregnant women using homogeneous ensemble machine learning algorithm",
    authors: "Dejene BE, Abuhay TM, Bogale DS.",
    journal: "BMC Medical Informatics and Decision Making",
    year: "2022",
    doi: "10.1186/s12911-022-01992-6",
    category: "clinical-ai",
    categoryLabel: "Clinical Decision Support",
    tags: ["Ensemble ML", "Maternal Health", "Anemia", "Clinical Decision Support", "Public Health"],
    abstract: "Pioneered a homogeneous ensemble machine learning framework for classifying maternal anemia severity across diverse geographic zones in Ethiopia. Validated cross-regional generalizability and demonstrated how routine antenatal screening variables can reliably stratify high-risk expectant mothers.",
    bibtex: `@article{dejene2022predicting,
  title={Predicting the level of anemia among Ethiopian pregnant women using homogeneous ensemble machine learning algorithm},
  author={Dejene, Belayneh Endalamaw and Abuhay, T. M. and Bogale, D. S.},
  journal={BMC Medical Informatics and Decision Making},
  volume={22},
  number={1},
  pages={247},
  year={2022},
  publisher={BioMed Central},
  doi={10.1186/s12911-022-01992-6}
}`
  },
  {
    id: "pub-9",
    title: "Predicting perinatal mortality based on maternal health status and health insurance service using homogeneous ensemble machine learning methods",
    authors: "Bogale DS, Abuhay TM, Dejene BE.",
    journal: "BMC Medical Informatics and Decision Making",
    year: "2022",
    doi: "10.1186/s12911-022-02084-1",
    category: "clinical-ai",
    categoryLabel: "Clinical Decision Support",
    tags: ["Perinatal Mortality", "Community Health", "Ensemble Methods", "Health Informatics"],
    abstract: "Explored predictive ensemble learning for forecasting perinatal mortality using maternal clinical markers and community-based health insurance enrollment data. Outlined how algorithmic stratification provides actionable insights for healthcare resource allocation in resource-constrained settings.",
    bibtex: `@article{bogale2022predicting,
  title={Predicting perinatal mortality based on maternal health status and health insurance service using homogeneous ensemble machine learning methods},
  author={Bogale, D. S. and Abuhay, T. M. and Dejene, Belayneh Endalamaw},
  journal={BMC Medical Informatics and Decision Making},
  volume={22},
  number={1},
  pages={341},
  year={2022},
  publisher={BioMed Central},
  doi={10.1186/s12911-022-02084-1}
}`
  }
];

function highlightAuthor(authorString) {
  return authorString.replace(
    /Dejene BE|Dejene, Belayneh Endalamaw|Belayneh Endalamaw Dejene/g,
    '<span class="author-highlight">Dejene BE</span>'
  );
}

function renderPublications(filteredData) {
  const container = document.getElementById('publications-list');
  if (!container) return;

  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align: center; padding: 3rem;">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3>No publications match your criteria</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your search terms or filter selection.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredData.map(pub => `
    <article class="pub-card" data-category="${pub.category}">
      <div class="pub-header">
        <h3 class="pub-title">${pub.title}</h3>
        <span class="pub-badge">${pub.year}</span>
      </div>
      <p class="pub-authors">${highlightAuthor(pub.authors)}</p>
      <p class="pub-journal"><i class="fas fa-book-open"></i> ${pub.journal} &bull; <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: none;"><i class="fas fa-external-link-alt"></i> DOI: ${pub.doi}</a></p>
      
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
        ${pub.abstract}
      </p>

      <div class="pub-tags">
        ${pub.tags.map(t => `<span class="pub-tag">#${t}</span>`).join('')}
      </div>

      <div class="pub-actions">
        <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fas fa-file-pdf"></i> View Publisher Article
        </a>
        <button onclick="openBibtexModal('${pub.id}')" class="btn btn-secondary btn-sm">
          <i class="fas fa-quote-right"></i> Cite / BibTeX
        </button>
      </div>
    </article>
  `).join('');
}

function initPublications() {
  renderPublications(publicationsData);

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  const searchInput = document.getElementById('pub-search-input');

  let currentCategory = 'all';
  let currentQuery = '';

  function applyFilters() {
    let filtered = publicationsData.filter(item => {
      const matchesCat = (currentCategory === 'all') || (item.category === currentCategory);
      const fullText = (item.title + ' ' + item.authors + ' ' + item.journal + ' ' + item.abstract + ' ' + item.tags.join(' ')).toLowerCase();
      const matchesSearch = fullText.includes(currentQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
    renderPublications(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.trim();
      applyFilters();
    });
  }
}

// Modal logic
window.openBibtexModal = function(pubId) {
  const pub = publicationsData.find(p => p.id === pubId);
  if (!pub) return;

  const modal = document.getElementById('bibtex-modal');
  const codeEl = document.getElementById('bibtex-code-content');
  if (modal && codeEl) {
    codeEl.textContent = pub.bibtex;
    modal.classList.add('active');
  }
};

window.closeBibtexModal = function() {
  const modal = document.getElementById('bibtex-modal');
  if (modal) modal.classList.remove('active');
};

window.copyBibtexToClipboard = function() {
  const codeEl = document.getElementById('bibtex-code-content');
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    const copyBtn = document.getElementById('copy-bibtex-btn');
    if (copyBtn) {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => { copyBtn.innerHTML = orig; }, 2000);
    }
  });
};

document.addEventListener('DOMContentLoaded', initPublications);\n