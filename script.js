document.addEventListener("DOMContentLoaded", () => {
  const bukaBtn = document.getElementById("buka-undangan");
  const isiUndangan = document.getElementById("isi-undangan");
  const menuBtn = document.querySelector(".bx-menu"); // tombol menu (☰)
  const closeBtn = document.querySelector(".bx-x"); // tombol X
  const sidebar = document.querySelector(".sidebar");

  // Lock scroll saat pertama load
  document.body.classList.add("lock-scroll");

  bukaBtn.addEventListener("click", () => {
    // buka isi undangan
    isiUndangan.classList.add("active");

    // buka scroll
    document.body.classList.remove("lock-scroll");

    // optional: auto scroll ke atas isi undangan
    isiUndangan.scrollIntoView({ behavior: "smooth" });
  });
  
  // Klik icon menu → buka sidebar
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  // Klik icon close → tutup sidebar
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

document.getElementById('buka-undangan').addEventListener('click', function() {
  this.classList.remove('btn-animasi');
});
