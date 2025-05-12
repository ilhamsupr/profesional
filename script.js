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
  const contactForm = document.querySelector(".contact-form");
  const whatsappNumber = "6283895775553"; // Ganti dengan nomor kamu

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form submit default

    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    const fullMessage = `Halo, saya ${name} (${email}) ingin menghubungi Anda.%0A%0A${encodeURIComponent(message)}`;
    const waLink = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

    window.open(waLink, "_blank"); // Buka link WA di tab baru
  });
});




/* end contact */




// vidio rakit pc
// Fungsi untuk toggle video (tampilkan video dan sembunyikan gambar)
function toggleVideo() {
  var imageCard = document.getElementById('image-card');
  var videoCard = document.getElementById('video-card');
  var videoSource = document.getElementById('videoSource');
  var video = document.getElementById('video01');
  
  // Menyembunyikan gambar, menampilkan video
  imageCard.style.display = 'none';
  videoCard.style.display = 'block';
  
  // Memasang sumber video dan memulai pemutaran video
  videoSource.src = 'gambar/wel.mp4';  // Ganti dengan path video Anda
  video.load();
  video.play();

  // Menampilkan modal
  document.getElementById('customModal').style.display = 'block';
}

// Fungsi untuk menutup modal dan menghentikan video
function closeModal() {
  var video = document.getElementById('video01');
  video.pause();  // Hentikan video
  video.currentTime = 0;  // Setel video ke awal

  // Menampilkan gambar kembali, menyembunyikan video
  document.getElementById('image-card').style.display = 'block';
  document.getElementById('video-card').style.display = 'none';

  // Menutup modal
  document.getElementById('customModal').style.display = 'none'; 
}

// Fungsi untuk minimize video
function minimizeVideo() {
  var video = document.getElementById('video01');
  video.pause();  // Hentikan video
  video.currentTime = 0;  // Setel video ke awal

  // Menyembunyikan video dan menutup modal
  document.getElementById('customModal').style.display = 'none';

  // Menampilkan gambar kembali, menyembunyikan video
  document.getElementById('image-card').style.display = 'block';
  document.getElementById('video-card').style.display = 'none';
}

// Pastikan kode ini dijalankan setelah halaman dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (e) => {
    const flame = document.createElement('div');
    flame.className = 'rocket-flame';
    flame.style.left = `${e.clientX}px`;
    flame.style.top = `${e.clientY}px`;
    document.body.appendChild(flame);

    setTimeout(() => {
      flame.remove();
    }, 400);
  });
});



