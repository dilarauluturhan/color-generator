function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;

/*
Yukarıdaki kodlar RGB renk değerlerini kullanarak bir hexadecimal renk kodu döndüren bir JavaScript fonksiyonunu içerir.
Bir renk bileşenini onaltılık formata dönüştürmek için componentToHex fonk. kullandım.
rgbToHex fonk., üç renk bileşeninin değerlerini alır,
onaltılık formata dönüştürmek için componentToHex'i çağırır ve hexadecimal renk kodu döndürür.
mesela rgbToHex(255, 0, 0) çağrıldığında fonksiyon #ff0000 değerini döndürecek.
*/