// Small JS utilities: year update and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Smooth scroll for nav links (account for navbar height so target isn't hidden)
  const navEl = document.querySelector('.navbar');
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        // Immediately set the clicked link as active so the header reflects the user's choice
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const navHeight = navEl ? navEl.offsetHeight + 10 : 80;
        const targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetY, behavior: 'smooth' });

        // close navbar on small screens
        const navCollapse = document.querySelector('.navbar-collapse');
        if(navCollapse && navCollapse.classList.contains('show')){
          new bootstrap.Collapse(navCollapse).toggle();
        }
      }
    });
  });

  // Initialize Bootstrap ScrollSpy with dynamic offset so active nav links update while scrolling
  const nav = document.querySelector('.navbar');
  const offset = nav ? nav.offsetHeight + 10 : 80;
  if (typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, { target: '#navMenu', offset });
  }

  // Ensure body has top padding equal to navbar height so fixed navbar doesn't cover content
  function adjustBodyPadding(){
    const nav = document.querySelector('.navbar');
    if(nav){
      document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
      document.body.style.paddingTop = '';
    }
  }
  adjustBodyPadding();
  window.addEventListener('resize', adjustBodyPadding);
});