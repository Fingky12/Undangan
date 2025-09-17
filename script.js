// Tentukan target waktu (YYYY, bulan(0-11), tanggal, jam, menit, detik)
    const target = new Date(2026, 3, 28, 12, 59, 59).getTime();

    const daysEl=document.getElementById("days");
    const hoursEl=document.getElementById("hours");
    const minutesEl=document.getElementById("minutes");
    const secondsEl=document.getElementById("seconds");
    const doneEl=document.getElementById("done");

    function update(){
        const now = new Date().getTime();
        const diff = target - now;

        if(diff <= 0){
            clearInterval(timer);
            daysEl.textContent=0;
            hoursEl.textContent="00";
            minutesEl.textContent="00";
            secondsEl.textContent="00";
            doneEl.style.display="block";
            return;
        }

        const s = Math.floor(diff/1000);
        const d = Math.floor(s/86400);
        const h = Math.floor((s%86400)/3600);
        const m = Math.floor((s%3600)/60);
        const sec = s%60;

        daysEl.textContent=d;
        hoursEl.textContent=String(h).padStart(2,"0");
        minutesEl.textContent=String(m).padStart(2,"0");
        secondsEl.textContent=String(sec).padStart(2,"0");
    }

    update();
    const timer=setInterval(update,1000);

// Menu Toggle
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    });