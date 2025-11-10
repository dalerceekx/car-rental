function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("darkMode");
  const isDark = savedTheme === "true";
  applyTheme(isDark);
});

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
});