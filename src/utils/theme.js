export function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return 'dark';
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}
