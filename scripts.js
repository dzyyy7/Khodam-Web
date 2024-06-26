document.getElementById('kodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const loadingElement = document.getElementById('loading');
    const resultElement = document.getElementById('result');

    // Tampilkan elemen loading dan sembunyikan hasil
    loadingElement.style.display = 'block';
    resultElement.style.display = 'none';

    // Simulasikan loading dengan setTimeout
    setTimeout(function() {
        const kodam = getKodamByName(name);

        // Sembunyikan elemen loading dan tampilkan hasil
        loadingElement.style.display = 'none';
        resultElement.style.display = 'block';
        resultElement.innerText = `Kodam untuk nama ${name} adalah: ${kodam}`;
    }, 3000); // Waktu tunggu 3 detik
});

function getKodamByName(name) {
    // Daftar kodam yang tersedia
    const kodams = [
        "Beat Ember", 
        "Macan Putih", 
        "Naga Hijau", 
        "Samsung", 
        "Orang Hitam", 
        "Gajah Mati", 
        "Rajawali Sepeda", 
        "Banteng Merah PDI", 
        "Singa Langit ke 10", 
        "Kuda Nungging",
        "doggy style",
        "2nd choice",
        "Badut",
        "Manusia Silver",
        "Poco Matot",
        "Bakpau Babi",
        "Ampas Kopling",
        "Selamet Kopling",
        "Chindo islam",
        "Gelas Plastik",
        "Sapi Tantrum",
        "Orang-orangan sampah",
        "Orang-orangan sawah",
        "Kereta thomas",
        "Planet Namek",
        "Thanos ngising",
        "Edgar rawr",
        "Cicak Skizo",
        "Johan Liebert",
        "Kirik Telentang",
        "Bakwan jagung",
        "Tempe mendoan",
        "Bakwan kawi",
        "Gajah duduk",
        "Bagas Drible",
        "Zharif push up",
        "Coco Melon",
        "Gerry shoulder",
        "Tom and Jerry",
        "Timothy Crypto",
        "Mr. Beast",
        "Alok Reaper",
        "Rice Cooker",
        "Ular gondrong",
        "Nugget gosong",
        "Orang normal",
        "Es krim",
        "Vario Kopling",
        "Supra geter",
        "Tobrut jahat",
        "Tobrut Baik"
    ];

    // Mengacak daftar kodam menggunakan algoritma Fisher-Yates
    for (let i = kodams.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kodams[i], kodams[j]] = [kodams[j], kodams[i]];
    }

    // Menghasilkan indeks acak dari 0 hingga panjang daftar kodam - 1
    const randomIndex = Math.floor(Math.random() * kodams.length);

    // Mengembalikan kodam yang dipilih secara acak
    return kodams[randomIndex];
}
