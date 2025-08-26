
// Tiny, accessible mobile menu toggler
(function(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if(!toggle || !nav) return;

  function set(open){nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  ; try{document.querySelector('.site-header')?.classList.toggle('nav-open', open);}catch(e){}; try{document.body.classList.toggle('nav-open', open);}catch(e){}}

  toggle.addEventListener('click', () => set(!nav.classList.contains('is-open')));

  // Close when clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(a && nav.classList.contains('is-open')) set(false);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && nav.classList.contains('is-open')) set(false);
  });
})();
