function divideAndSort(param){
    const array = param.toString().split('0')
    const length = param.toString().split('0').length
    const newArray = []
    for(let i = 0; i < length; i++){
      const newVar = array[i].split('').sort().join('')
      newArray.push(newVar)
    }
    console.log(parseInt(newArray.join('')))
}
  
divideAndSort(5956560159466056)

//algoritma
// 1.Mulai
// 2.Masukan Input (Int)
// 3.Lalu ubah (Int) menjadi (String) menggunakan toString()
// 4.Kemudian Split Inputan berdasarkan '0'
// 5.Setelah mendapatkan hasil split kita hitung length array dari hasil split
// 6.lalu buat variable newArray yang berisi array kosong
// 7.lakukan looping berdasarkan length array
// 8.didalam looping kita menghasilkan variable baru
// 9.lalu variable baru tersebut kita split berdasarkan ''
// 10.setelah displit lalu kita sort untuk mengurutkan
// 11.lalu kita join untuk menggabungkan
// 12.sehabis itu kita push hasil tadi ke variable newArray
// 13.Lalu variable newArray kita gabungkan dengan join()
// 14.ubah kembali menjadi angka dengan parseInt
// 15.lalu tampilkan
// 16.Selesai