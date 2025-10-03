// Minimal script: set the year in the footer
// Minimal script placeholder (no dynamic behavior required)
document.addEventListener('DOMContentLoaded', function(){
  const foot = document.querySelector('.foot');
  if(foot) {
    const year = new Date().getFullYear();
    foot.textContent = `© ${year} Agysys`;
  }
});

