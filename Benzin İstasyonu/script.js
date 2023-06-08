//Benzin istasyonu uygulaması
let dizel=24.53 , benzin = 22.25 , lpg = 11.1;
const newLine = "\r\n";

const fuelText= "1-Dizel" +newLine
+"2-Benzin"+newLine+ "3-LPG"+newLine+"Yakıt türünü seçiniz";

let fuelType = prompt(fuelText);
let fuelLiter = Number(prompt("Yakıt Litresini giriniz:"));
let balance = Number(prompt("Lütfen Bakiyenizi giriniz:"));
if(fuelType =="1"){
 //Dizel
let amountPaid = dizel*fuelLiter;
if(amountPaid<balance){
 balance=balance-amountPaid;
 alert("Yakıt ödemeniz başarılı."+newLine+"Kalan bakiye: "+balance);
}else{
    alert("Bakiyeniz yeterli değil."+newLine+
    "Ödenencek tutar:"+amountPaid+newLine+
    "Bakiye:"+balance+newLine+
    "Eksik miktar:"+(amountPaid-balance));
}
}else if(fuelType == "2"){
//Benzin
let amountPaid=benzin*fuelLiter;
if(amountPaid<balance){
    balance=balance-amountPaid;
    alert("Yakıt ödemeniz başarılı."+newLine+"Kalan bakiye:"+balance);
}else{
    alert("Bakiyeniz yeterli değil."+newLine+
    "Ödenecek tutar:"+amountPaid+newLine+
    "Bakiye:"+balance+newLine+
    "Eksik miktar:"+(amountPaid-balance));
}}else if(fuelType == "3"){
    //LPG
    let amoundPaid=lpg*fuelLiter;
    if(amoundPaid<balance){
        balance=balance-amoundPaid;
        alert("Yakıt ödemeniz başarılı."+newLine+"Kalan bakiye:"+balance);
    }else{
     alert("Bakiyeniz yeterli değil"+newLine+
     "Ödenecek Tutar:"+amountPaid+newLine+
     "Bakiye:"+balance+newLine+
     "Eksik Miktar:"+(amoundPaid-balance) );
    }
    
}






