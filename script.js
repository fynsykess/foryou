// Tambahkan logika animasi atau interaksi tambahan di sini jika diperlukan
console.log("Welcome to the Pink Landing Page!");

// Logika tambahan untuk efek saat scroll
document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector("#about");
    const gallerySection = document.querySelector("#gallery");
    const playlistSection = document.querySelector("#playlist");

    // Mengaktifkan animasi saat elemen terlihat di viewport
    const activateAnimation = (element, animationClass) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            element.classList.add(animationClass);
        }
    };

    activateAnimation(aboutSection, "fadeInUp");
    activateAnimation(gallerySection, "fadeInUp");
    activateAnimation(playlistSection, "fadeInUp");
});

// Efek klik pada menu navigasi untuk highlight
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});

// Efek hover interaktif pada hero
const heroTitle = document.querySelector(".hero h1");
heroTitle.addEventListener("mouseover", () => {
    heroTitle.style.color = "#ff66b3";
    heroTitle.style.transform = "rotate(-2deg)";
});

heroTitle.addEventListener("mouseout", () => {
    heroTitle.style.color = "white";
    heroTitle.style.transform = "rotate(0deg)";
});

// Fungsi untuk menampilkan dan memutar playlist
function playSpotifyPlaylist() {
    // Gantilah URL ini dengan playlist Spotify yang sesuai
    var playlistUrl = "https://open.spotify.com/embed/playlist/0a6etZw7qayERXGyJx9H4D"; 

    // Menentukan URL untuk iframe Spotify Player
    var iframe = document.getElementById('spotifyPlayer');
    iframe.src = playlistUrl;  // Masukkan URL playlist ke dalam iframe
    iframe.style.display = 'block';  // Tampilkan iframe
}
