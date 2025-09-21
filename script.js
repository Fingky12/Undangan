document.addEventListener("DOMContentLoaded", () => {
  const bukaBtn = document.querySelector("#buka-undangan"); // tombol "Buka Undangan"
  const isiUndangan = document.getElementById("isi-undangan");

  // Lock scroll saat awal
  document.body.classList.add("lock-scroll");

  bukaBtn.addEventListener("click", (e) => {
    e.preventDefault(); // cegah scroll default

    // Tampilkan section 2
    isiUndangan.classList.add("active");

    // Buka scroll
    document.body.classList.remove("lock-scroll");

    // Scroll halus ke section 2
    isiUndangan.scrollIntoView({ behavior: "smooth" });
  });
});