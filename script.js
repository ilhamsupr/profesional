// start navbar



// Mengambil elemen dengan ID 'menu-toggle' (biasanya tombol hamburger)
const menuToggle = document.getElementById('menu-toggle');

// Mengambil elemen dengan ID 'nav-links' (daftar menu navigasi)
const navLinks = document.getElementById('nav-links');

// Menambahkan event listener saat tombol hamburger diklik
menuToggle.addEventListener('click', () => {
  // Toggle class 'active' pada elemen navLinks
  // Jika sudah ada, maka dihapus; jika belum ada, maka ditambahkan
  // Digunakan untuk membuka/menutup menu navigasi saat tampilan mobile
  navLinks.classList.toggle('active');
});


// end navbar

// Fungsi untuk toggle modal image (perbesar/kecilkan)
function toggleImage(src, btn) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (modal.style.display === "block") {
    // Jika modal sedang tampil, tutup modal dan ubah teks tombol
    closeImage();
    btn.textContent = "Perbesar Gambar";
  } else {
    // Jika modal belum tampil, tampilkan modal dengan gambar dan ubah teks tombol
    modal.style.display = "block";
    modalImg.src = src;
    btn.textContent = "View Image";
  }
}

// Fungsi untuk menutup modal dan reset tombol
function closeImage() {
  document.getElementById("imageModal").style.display = "none";
  const toggleBtn = document.getElementById("toggle-btn");
  if (toggleBtn) toggleBtn.textContent = "View Image"; // Reset tulisan tombol
}

// Menutup modal jika pengguna klik di luar gambar
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeImage();
  }
};
// end view





/* start contact */

document.addEventListener("DOMContentLoaded", function () {
  const whatsappNumber = "6283895775553"; // Nomor WhatsApp tujuan (62 = Indonesia)
  const contactForm = document.querySelector(".contact-form");

  if (!contactForm) {
    console.error("Form with class 'contact-form' not found.");
    return;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form submit normal

    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const whatsappMessage =
      `Halo, saya ${name} (${email}).%0A%0A` + encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank"); // Buka WhatsApp di tab baru
  });
});

/* end contact */