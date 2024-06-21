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
        "Orang-orangan sampah+",
    ];

    // Menghasilkan indeks acak dari 0 hingga panjang daftar kodam - 1
    const randomIndex = Math.floor(Math.random() * kodams.length);

    // Mengembalikan kodam yang dipilih secara acak
    return kodams[randomIndex];
}
