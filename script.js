const container = document.querySelector('.falling-flowers');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerHTML = '❀'; // bisa diganti gambar bunga PNG/SVG

  // posisi random di sumbu X
  flower.style.left = Math.random() * window.innerWidth + 'px';

  // ukuran random
  const size = 15 + Math.random() * 25;
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
setInterval(createFlower, 300);