function rw(str){
    let regex = /^(.{1,} +.{1,})$/
    if(str.match(regex)){
        let split = str.split(' ');
        let reverse = split.reverse();
        let join = reverse.join(' ');

        console.log(join);
    }else{
        console.log('Input Salah');
        return false;
    }
}

rw('Saya belajar javascript');

// algoritma:
// 1. Mulai
// 2. inputkan kalimat minimal 2 kata
// 3. lalu inputan tersebut dipisahkan perkata
// 4. lalu dibalik perkata dan disatukan lagi
// 5. lalu cetak output dari proses tersebut
// 6. Selesai