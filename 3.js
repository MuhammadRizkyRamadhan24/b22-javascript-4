function angka(param){
    const array = param.toString().split('0')
    const length = param.toString().split('0').length
    const newArray = []
    for(let i = 0; i < length; i++){
      const newVar = array[i].split('').sort().join('')
      newArray.push(newVar)
    }
    console.log(parseInt(newArray.join('')))
}
  
angka(5956560159466056)

//algoritma
// 1.Mulai
// 2.Masukan Angka 
// 3.Lalu ubah Angka menjadi String
// 4.lalu buat variable newArray yang berisi array kosong
// 4.Kemudian Split variable berdasarkan '0'
// 5.Setelah mendapatkan hasil split kita hitung length array dari hasil split
// 6.lakukan looping berdasarkan hasil split
// 7.didalam looping kita menghasilkan variable baru
// 8.lalu variable baru tersebut kita split berdasarkan ''
// 9.setelah displit lalu kita sort untuk mengurutkan
// 10.lalu kita join untuk menggbungkan
// 11.sehabis itu kita push hasil tadi ke variable newArray
// 12.Lalu variable newArray kita gabungkan dengan join()
// 13.ubah kembali menjadi angka dengan parseInt
// 14.lalu tampilkan
// 15.Selesai