// SPA navigation logic
function openModule(id) {
  // Hide dashboard and all modules
  document.getElementById('dashboard').classList.remove('active');
  document.querySelectorAll('.module-screen').forEach(s => s.classList.remove('active'));
  // Show requested module
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// Back to dashboard
function goBack() {
  document.querySelectorAll('.module-screen').forEach(s => s.classList.remove('active'));
  document.getElementById('dashboard').classList.add('active');
  window.scrollTo(0, 0);
}

// Toast notifications
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = "show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2200);
}

// Language toggle (demo only, static prototype)
let currentLang = 'bn';
function toggleLanguage() {
  if (currentLang === 'bn') {
    document.body.lang = 'en';
    document.querySelector('.lang-toggle').textContent = 'BN';
    document.getElementById('appName').textContent = "Brahmanbaria Bashi";
    showToast("Demo: English version would show (not implemented)");
    currentLang = 'en';
  } else {
    document.body.lang = 'bn';
    document.querySelector('.lang-toggle').textContent = 'EN';
    document.getElementById('appName').textContent = "ব্রাহ্মণবাড়িয়া বাসি";
    currentLang = 'bn';
  }
}

// Animate grid items on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.grid-item').forEach((item, i) => {
    setTimeout(() => item.classList.add('anim-fade-in'), i * 60);
  });
});