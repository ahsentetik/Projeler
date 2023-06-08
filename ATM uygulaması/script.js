//Atm Uygulaması

let balance=5000;
let newLine = "\r\n";

let text = "1-Bakiye Görüntüleme" + newLine+
"2-Para çekme"+newLine+
"3-Para yatırma"+newLine+
"4-Çıkış"+newLine+
"Lütfen bir değer seçiniz:"

let choice = prompt(text);

switch(choice){
    case "1":
    alert("Bakiyeniz: " + balance);
    break;
    
    case "2":
        let withdrawnAmount = Number(prompt("Lütfen çekmek istediğiniz miktarı giriniz:"));

        if(withdrawnAmount<balance){
            balance=balance-withdrawnAmount;
            alert("Para çekme işleminiz başarıyla tamamlandı..." +newLine+"Bakiyede kalan para miktarı"+balance);
        }else{
            alert("Para çekme işleminiz başarısız lütfen bakiyeyi aşmayınız..." +newLine+"Bakiyeniz:" +balance+ newLine+
            "Çekilmek istenen tutar:" +withdrawnAmount);
        }
        break;

    case "3":
        let depositAmount = Number(prompt("Lütfen yatırmak istediğiniz miktarı giriniz:"));

        balance=balance+depositAmount;
        alert("Para yatırma işleminiz başarıyla tamamlanmıştır..."+newLine+
        "Bakiyedeki toplam para miktarı:" +balance);
    break;

    case "4":
        alert("Banka hesabından çıkış yapılmıştır....");
        break;
    
        default:
            alert("Lütfen 1-4 arasında sayı seçiniz!!!");

}