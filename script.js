document.getElementById('year').textContent = new Date().getFullYear();
const currentFile = location.pathname.split('/').pop() || 'index.html';
const pageName = currentFile === 'index.html' ? 'home' : currentFile.replace('.html','');
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.dataset.page === pageName) link.classList.add('active');
});