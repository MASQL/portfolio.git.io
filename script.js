// Smooth Scroll dengan Offset
function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: 'smooth'
        });
    }
}

// Integrasi WhatsApp
function kirimWA(layanan) {
    const nomorWA = "625369954235";
    const pesan = `Halo Bayu, saya berkunjung ke portofolio Anda dan tertarik dengan layanan *${layanan}*. Bisa kita diskusikan lebih lanjut?`;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// Efek Shadow Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});