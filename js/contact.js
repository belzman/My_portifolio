/**
 * Contact Form Controller & Client-Side Verification
 * Belayneh Endalamaw Dejene
 */
(function() {
  function initContact() {
    const form = document.getElementById('portfolio-contact-form');
    const statusMsg = document.getElementById('form-status-msg');

    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      const submitBtn = document.getElementById('contact-submit-btn');

      if (!name || !email || !message) {
        showStatus('Please complete all required fields.', 'error');
        return;
      }

      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';

      // Primary client-side mailto trigger fallback
      const mailtoUrl = `mailto:belzman2011@gmail.com,Belaynehendalamaw2008@gmail.com?subject=${encodeURIComponent('[Portfolio Inquiry] ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;

      setTimeout(() => {
        showStatus('Thank you for reaching out! Opening your email client to send message to Belayneh...', 'success');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        window.location.href = mailtoUrl;
      }, 700);
    });

    function showStatus(text, type) {
      if (!statusMsg) return;
      statusMsg.textContent = text;
      statusMsg.style.display = 'block';
      statusMsg.style.padding = '0.75rem 1rem';
      statusMsg.style.borderRadius = '8px';
      statusMsg.style.marginTop = '1rem';
      statusMsg.style.fontSize = '0.9rem';
      statusMsg.style.fontWeight = '600';

      if (type === 'error') {
        statusMsg.style.background = 'rgba(239, 68, 68, 0.15)';
        statusMsg.style.color = 'var(--danger)';
        statusMsg.style.border = '1px solid rgba(239, 68, 68, 0.3)';
      } else {
        statusMsg.style.background = 'rgba(16, 185, 129, 0.15)';
        statusMsg.style.color = 'var(--success)';
        statusMsg.style.border = '1px solid rgba(16, 185, 129, 0.3)';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', initContact);
})();\n