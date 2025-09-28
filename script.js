const container = document.querySelector('.falling-flowers');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerHTML = '❀';

  // posisi random di sumbu X
  flower.style.left = Math.random() * window.innerWidth + 'px';

  // ukuran random
  const size = 15 + Math.random() * 20;
  flower.style.fontSize = size + 'px';

  // durasi animasi random
  const duration = 5 + Math.random() * 5;
  flower.style.animationDuration = duration + 's';

  container.appendChild(flower);

  // hapus setelah selesai jatuh
  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// bikin bunga terus muncul tiap 300ms
setInterval(createFlower, 500);

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

  const btnBuka = document.getElementById("btn-buka");
  const isiUndangan = document.getElementById("isi-undangan");

  btnBuka.addEventListener("click", function(e) {
    e.preventDefault();

    // aktifkan scroll
    document.body.classList.add("unlocked");

    // scroll ke isi undangan
    isiUndangan.scrollIntoView({ behavior: "smooth" });
  });

  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  const zoomElements = document.querySelectorAll('.zoom-fade');

  const zoomAppearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

  const zoomAppearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, zoomAppearOptions);

  zoomElements.forEach(el => zoomAppearOnScroll.observe(el));