/**
 * Live In-Browser Explainable AI & Clinical Risk Playground
 * Demonstrates real-time calibrated scoring and SHAP-style local feature attributions
 * Belayneh Endalamaw Dejene
 */
(function() {
  function initSimulator() {
    const hbSlider = document.getElementById('sim-hb');
    const bpSlider = document.getElementById('sim-bp');
    const gaSlider = document.getElementById('sim-ga');
    const cd4Slider = document.getElementById('sim-cd4');
    const prevCompSelect = document.getElementById('sim-comp');

    const hbVal = document.getElementById('val-hb');
    const bpVal = document.getElementById('val-bp');
    const gaVal = document.getElementById('val-ga');
    const cd4Val = document.getElementById('val-cd4');

    const gaugeScore = document.getElementById('gauge-score');
    const gaugeCategory = document.getElementById('gauge-category');
    const gaugeCircle = document.getElementById('gauge-circle');

    const shapHbFill = document.getElementById('shap-hb-fill');
    const shapBpFill = document.getElementById('shap-bp-fill');
    const shapGaFill = document.getElementById('shap-ga-fill');
    const shapCd4Fill = document.getElementById('shap-cd4-fill');
    const shapCompFill = document.getElementById('shap-comp-fill');

    const shapHbVal = document.getElementById('shap-hb-val');
    const shapBpVal = document.getElementById('shap-bp-val');
    const shapGaVal = document.getElementById('shap-ga-val');
    const shapCd4Val = document.getElementById('shap-cd4-val');
    const shapCompVal = document.getElementById('shap-comp-val');

    if (!hbSlider || !gaugeScore) return;

    function updateCalculations() {
      const hb = parseFloat(hbSlider.value);
      const bp = parseFloat(bpSlider.value);
      const ga = parseFloat(gaSlider.value);
      const cd4 = parseFloat(cd4Slider.value);
      const hasPriorComp = prevCompSelect ? prevCompSelect.value === 'yes' : false;

      // Update text displays
      hbVal.textContent = hb.toFixed(1) + ' g/dL';
      bpVal.textContent = bp + ' mmHg';
      gaVal.textContent = ga + ' wks';
      cd4Val.textContent = cd4 + ' cells/uL';

      // Base log-odds (baseline prior ~ 18%)
      let logOdds = -1.5;

      // Calibrated clinical feature contributions (SHAP approximations)
      // 1. Hemoglobin impact (Normal 12-15; < 10 increases risk sharply)
      let hbShap = 0;
      if (hb < 10) hbShap = (11 - hb) * 0.45;
      else if (hb < 12) hbShap = (12 - hb) * 0.2;
      else hbShap = -((hb - 12) * 0.15);

      // 2. Systolic Blood Pressure impact (Normal < 120; > 140 is high)
      let bpShap = 0;
      if (bp > 140) bpShap = (bp - 140) * 0.04 + 0.5;
      else if (bp > 125) bpShap = (bp - 120) * 0.02;
      else bpShap = -0.2;

      // 3. Gestational Age (Preterm < 37 weeks)
      let gaShap = 0;
      if (ga < 34) gaShap = (34 - ga) * 0.35 + 0.6;
      else if (ga < 37) gaShap = (37 - ga) * 0.2;
      else gaShap = -0.3;

      // 4. CD4 Count (Immunosuppressed < 350)
      let cd4Shap = 0;
      if (cd4 < 200) cd4Shap = 0.85;
      else if (cd4 < 350) cd4Shap = 0.4;
      else if (cd4 > 500) cd4Shap = -0.35;

      // 5. Prior Obstetric / Clinical Complications
      let compShap = hasPriorComp ? 0.75 : -0.15;

      // Total log-odds to probability
      logOdds += (hbShap + bpShap + gaShap + cd4Shap + compShap);
      const probability = 1 / (1 + Math.exp(-logOdds));
      const percentage = Math.min(Math.max(Math.round(probability * 100), 2), 98);

      // Update Gauge
      gaugeScore.textContent = percentage + '%';
      
      let category = 'Low Risk';
      let catColor = 'var(--success)';
      let borderColor = 'rgba(16, 185, 129, 0.6)';

      if (percentage >= 50) {
        category = 'High Risk';
        catColor = 'var(--danger)';
        borderColor = 'rgba(239, 68, 68, 0.8)';
      } else if (percentage >= 25) {
        category = 'Moderate Risk';
        catColor = 'var(--warning)';
        borderColor = 'rgba(245, 158, 11, 0.8)';
      }

      gaugeCategory.textContent = category;
      gaugeCategory.style.color = catColor;
      gaugeScore.style.color = catColor;
      gaugeCircle.style.borderColor = borderColor;
      gaugeCircle.style.boxShadow = `0 0 25px ${borderColor}`;

      // Update SHAP Bar visualizer
      function renderShapBar(elFill, elVal, shapVal) {
        const isPos = shapVal >= 0;
        const widthPct = Math.min(Math.abs(shapVal) * 65, 100);
        elFill.className = 'shap-bar-fill ' + (isPos ? 'positive' : 'negative');
        elFill.style.width = widthPct + '%';
        elVal.textContent = (isPos ? '+' : '') + shapVal.toFixed(2);
        elVal.style.color = isPos ? 'var(--danger)' : 'var(--success)';
      }

      renderShapBar(shapHbFill, shapHbVal, hbShap);
      renderShapBar(shapBpFill, shapBpVal, bpShap);
      renderShapBar(shapGaFill, shapGaVal, gaShap);
      renderShapBar(shapCd4Fill, shapCd4Val, cd4Shap);
      renderShapBar(shapCompFill, shapCompVal, compShap);
    }

    [hbSlider, bpSlider, gaSlider, cd4Slider].forEach(slider => {
      slider.addEventListener('input', updateCalculations);
    });

    if (prevCompSelect) {
      prevCompSelect.addEventListener('change', updateCalculations);
    }

    updateCalculations();
  }

  document.addEventListener('DOMContentLoaded', initSimulator);
})();\n