// vücut kitle indexi hesaplama

let weight = Number(prompt("Lütfen Kilonuzu kg olarak giriniz:"));
let height = Number(prompt("Lütfen boyunuzu m olarak giriniz:"));
let result = weight /(height*2);

if(result<18.5){
console.log("İdeal kilonun çok altındasınız :(" +result);
}else if(result>18.5 && result<=24.9){
console.log("İdeal kilonun altındasınız:(" + result);
}else if(result>25 && result<=29.9){
    console.log("İdeal kilodasınzı:)" +result);
}else if(result>30 && result<=39.9){
console.log("İdeal kilonun üstündesiniz:(" + result);
}else if(result>=40){
console.log("ideal kilonun çok üzerindesiniz" + result);
}


