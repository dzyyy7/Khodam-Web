document.getElementById('kodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const kodam = getKodamByName(name);
    document.getElementById('result').innerText = `Kodam untuk nama ${name} adalah: ${kodam}`;
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

    // Menghasilkan indeks acak dari 0 hingga panjang daftar kodam - 1
    const randomIndex = Math.floor(Math.random() * kodams.length);

    // Mengembalikan kodam yang dipilih secara acak
    return kodams[randomIndex];
}
