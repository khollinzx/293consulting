document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-client-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-client-track]');
  const buttons = carousel.querySelectorAll('[data-carousel-direction]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let paused = false;

  const move = (direction) => {
    const isNext = direction === 'next';
    const firstCard = track.querySelector('li');
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atEnd = track.scrollLeft >= maxScroll - 4;
    const atStart = track.scrollLeft <= 4;
    const destination = isNext
      ? (atEnd ? 0 : Math.min(track.scrollLeft + step, maxScroll))
      : (atStart ? maxScroll : Math.max(track.scrollLeft - step, 0));

    track.scrollTo({ left: destination, behavior: 'smooth' });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      move(button.dataset.carouselDirection);
    });
  });

  carousel.addEventListener('mouseenter', () => { paused = true; });
  carousel.addEventListener('mouseleave', () => { paused = false; });
  carousel.addEventListener('focusin', () => { paused = true; });
  carousel.addEventListener('focusout', () => { paused = false; });

  if (!reducedMotion) {
    window.setInterval(() => {
      if (!paused && !document.hidden) move('next');
    }, 4000);
  }
});
