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