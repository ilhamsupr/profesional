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
// Function to toggle custom modal and display video
function toggleVideo(videoSrc) {
  // Get the custom modal and video element
  var customModal = document.getElementById("customModal");
  var modalVideo = document.getElementById("video01");

  // Open the modal and display the video
  customModal.style.display = "block";
  modalVideo.src = videoSrc;

  // Close the modal when clicked on X
  var closeBtn = document.getElementsByClassName("modal-close")[0];
  closeBtn.onclick = function() {
    customModal.style.display = "none";
    modalVideo.pause(); // Pause video when closing
  }

  // Minimize video size when clicked
  var minimizeBtn = document.getElementById("minimize-btn");
  minimizeBtn.onclick = function() {
    modalVideo.style.maxWidth = "50%";
    modalVideo.style.maxHeight = "50vh";
  }
}

