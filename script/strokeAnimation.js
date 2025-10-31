document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.stroke__track');
    const viewport = document.querySelector('.stroke');
    if (!track || !viewport) return;
    track.innerHTML += track.innerHTML;
  
    let pos = 0;
    const speed = 0.5;
    let running = true;
  
    viewport.addEventListener('mouseenter', () => running = false);
    viewport.addEventListener('mouseleave', () => running = true);
  
    window.addEventListener('resize', () => {
      pos = 0;
      track.style.transform = 'translateX(0px)';
    });
  
    function loop() {
      if (running) {
        pos -= speed;
        track.style.transform = `translateX(${pos}px)`;
  
        if (Math.abs(pos) >= track.scrollWidth / 2) {
          pos = 0;
        }
      }
      requestAnimationFrame(loop);
    }
  
    requestAnimationFrame(loop);
  });