const container = document.querySelector('.falling-flowers');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.backgroundImage = "url('assets/flower1.png')";  // bisa diganti gambar bunga PNG/SVG
  flower.style.backgroundSize = "cover";
  flower.style.backgroundRepeat = "no-repeat";
  flower.style.backgroundSize = "20px";

  // posisi random di sumbu X
  flower.style.left = Math.random() * window.innerWidth + 'px';

  // ukuran random
  const size = 20 + Math.random() * 40;
  flower.style.width = size + 'px';
  flower.style.height = size + 'px';

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