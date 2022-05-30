
let username = prompt("Adınızı giriniz.");

let xusername = document.querySelector("#myName");
let zaman = document.querySelector("#myClock");
xusername.innerHTML = username;



    setInterval(function() {
        var tarih = new Date();
        var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        var gun = (gunler[tarih.getDay()]);
        var saat = tarih.getHours();
        var dakika = tarih.getMinutes();
        var saniye = tarih.getSeconds();
        zaman.innerHTML = saat + ":" + dakika + ":" + saniye + " " + gun
    }, 1000);

