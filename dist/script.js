document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-client-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-client-track]');
  const buttons = carousel.querySelectorAll('[data-carousel-direction]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const isNext = button.dataset.carouselDirection === 'next';
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
    });
  });
});
