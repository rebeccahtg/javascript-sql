//Fungsi untuk menghitung luas Persegi
function hitungLuas(sisi) {
    return sisi * sisi;
}

//Fungsi untuk mengitung keliling persegi
function hitungKeliling(sisi) {
    return 4 * sisi;
}

//Fungsi utama untuk menampilkan hasil
function tampilkanPersegi(sisi) {
    console.log("========== Persegi ==========");
    console.log("Sisi           :", sisi);
     console.log("Luas Persegi          :", hitungLuas(sisi));
      console.log("Keliling Persegi          :", hitungKeliling(sisi));
        console.log("=======================\n");
    }

    //Pemanggilan Fungsi
    tampilkanPersegi(7);
    tampilkanPersegi(23);