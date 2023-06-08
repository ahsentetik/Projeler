//TYT Hesaplama

let turkishTrueNum , turkishFalseNum = 0;
let mathTrueNum , mathFalseNum = 0;
let socialTrueNum , socialFalseNum=0;
let scienceTrueNum,scienceFalseNum=0
let StudentName;
let schoolScore;
let totalScore=0;
let newLine="\r\n"

let message = "TYT hesaplama uygulamasına hoşgeldiniz!!!"+newLine+
"1-Puanını Hesapla"+newLine+
"2-Çıkış yap";
let choice = prompt(message);

switch(choice){
    case "1":

        StudentName= prompt("Lütfen isminizi giriniz:");

    
        schoolScore = Number(prompt("Lütfen okul puanınızı giriniz:"))
        
    
        turkishTrueNum = Number(prompt("Lütfen Türkçe doğru sayınızı giriniz:"));
        turkishFalseNum= Number(prompt("Lütfen Türkçe yanlış sayınızı giriniz:"));
   
        mathTrueNum = Number(prompt("Lütfen Matamatik doğru sayınızı giriniz:"));
        mathFalseNum= Number(prompt("Lütfen Matamatik yanlış sayınızı giriniz:"));
   
        socialTrueNum=Number(prompt("Lütfen Sosyal Bilgiler doğru sayınızı giriniz:"));
        socialFalseNum=Number(prompt("Lütfen sosyal Bilgiler yanlış sayınızı giriniz:"));
    

        scienceTrueNum=Number(prompt("Lütfen Fen Bilgisi doğru sayınızı giriniz:"));
        scienceFalseNum=Number(prompt("Lütfen Fen Bilgisi yanlış sayınızı giriniz:"));
    

        let totalTrueNum = (turkishTrueNum+mathTrueNum+socialTrueNum+scienceTrueNum);
        let totalFalseNum=(turkishFalseNum+mathFalseNum+socialFalseNum+scienceFalseNum);
        let totalNum=(totalTrueNum -(totalFalseNum/4));
        totalScore = (totalNum*4) + 100 + schoolScore ;

        alert(StudentName +" adlı öğrencinin Tyt puanı "+totalScore);
        break;
        
        case "2":
            alert("Uygulamadan çıkış yapıldı...");
            break;

        
    
    
        default:
            alert("Lütfen geçerli bir giriş yapınız!!!");
            break;
        
        
        

}