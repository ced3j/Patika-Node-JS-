function circleArea(r) {    // pi * r * r
    console.log(r * r * Math.PI);
}

function circleCircumference(r) {    // 2 * r * pi
    console.log(2 * r * Math.PI);
}


module.exports = {
    circleArea,
    circleCircumference
}

/*

module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.


*/