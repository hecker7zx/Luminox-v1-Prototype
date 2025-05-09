const toggle = document.getElementById('cosmicToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('cosmicTheme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('cosmicTheme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
