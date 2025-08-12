let input = "5"; //ubah menjadi 5 agar berhasil

try {
    let angka = parseInt(input);

    if (isNaN(angka)) {
        throw new Error("Input harus beruppa angka!");
    }
    console.log("Kuadrat:", angka * angka);
}catch (e) {
    console.error("Terjadi kesalahan:", e.message);
}