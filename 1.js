const palindrom = (str) => {
    if(str.length <= 1){
        console.log('Inputan Salah');
        return false;
    }
    
    let lower = str.toLowerCase();
    let split = lower.split('');
    let reverse = split.reverse();
    let join = reverse.join('');

    if(join == lower){
        console.log('PALINDROM');
        return true;
    }else{
        console.log('BUKAN PALINDROM');
        return false;
    }
}

palindrom('Malam');

// algoritma
// 1. Mulai
// 2. Masukan Input Text
// 3. Lalu Kecilkan Huruf Di inputan tadi
// 4. Sehabis itu dipisahkan setiap Huruf
// 5. Lalu balik perhuruf dan satukan lagi
// 6. jika hasil tadi sama dengan inputan awal maka cetak "Palindrome", jika tidak maka cetak "Bukan Palindrome"
// 7. Selesai