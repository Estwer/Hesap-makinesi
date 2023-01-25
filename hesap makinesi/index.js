//BUTONLARA VE SONUCA DEGISKEN VERİP ULAŞIYORUZ
let sonuc = document.querySelector(".sonuc")
let sayilar = document.querySelectorAll(".sayilar")
let operator = document.querySelectorAll(".operator")
let silme = document.querySelector(".AC")
let esittir = document.querySelector(".esit")

// SAYILARIN EKRANA YAZILMASI
sayilar.forEach(function(element){
    element.onclick = function(e){
        if(sonuc.value == 0){
            sonuc.value = "";
        }
        sonuc.value += this.textContent;
    };
});

// SONUÇTAKİ SAYININ 0 DÖNMESİ
silme.onclick = function(element){
    sonuc.value = "0";  
};

// OPERATORLERIN EKRANA YAZILMASI
operator.forEach(function(element){
    element.onclick = function(e){
        sonuc.value += this.textContent;
    };
});

// İŞLEMLERİN SONUCUNU EŞİTTİRLE BULMA
esittir.onclick = function(element){
    sonuc.value = eval(sonuc.value);
};