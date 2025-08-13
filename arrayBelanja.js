console.log(`======== Rincian Belanja Sepatu ========`);
let sepatu= [
    { nama: "New Balance NB530", harga : 390000 },
    { nama: "Nike Vomero 5", harga : 350000 },
    { nama: "Adidas Samba", harga : 180000 },
    { nama: "Onitsuka Tiger Mexico", harga : 420000 },
];


//Hitung Total
let total = 0;
for (let item of sepatu){
    console.log(`${item.nama} - Rp. ${item.harga}`);
    total += item.harga
}

console.log(`Total Belanja: Rp. ${total}`);

// Diskon Pembelian
let diskonPersen = 0;
if(total <250000){
    diskonPersen = 0;
}else if(total <=499999){
     diskonPersen = 5;
}else if(total <=799999){
     diskonPersen = 10;
}else if(total >=800000){
     diskonPersen = 15;
}
let potongan = total * (diskonPersen / 100);
let totalBayar = total - potongan;

console.log(`Diskon: ${diskonPersen}%`);
console.log(`Total Bayar: Rp. ${totalBayar}`);

//Hitung kembalian
let uangDiberikan = 1200000;
console.log(`Kembalikan: Rp. ${uangDiberikan - totalBayar}`);