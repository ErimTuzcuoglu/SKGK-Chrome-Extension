var guncelTarih = new Date();
var sinavTarihi = new Date(2017, 11, 23);

var tarihMs = sinavTarihi - guncelTarih;		//Milisaniye cinsinden iki tarihin farkı.

var minutesPerDay = 60 * 24;
function pad(number) {
    var result = "" + number;
    if (result.length < 2) {
        result = "0" + result;
    }

    return result;
}
//Milisaniyeyi gün,saat,dk cinsine çeviren fonksiyon.
function msToDaysHoursMinutes(millis) {
    var seconds = millis / 1000;
    var totalMinutes = seconds / 60;

    var days = totalMinutes / minutesPerDay;
    totalMinutes = totalMinutes -(minutesPerDay * Math.floor(days));
    var hours = totalMinutes / 60;
    totalMinutes = totalMinutes - (Math.floor(hours) * 60); 

    return Math.floor(days) + " gün, " + Math.floor(pad(hours)) + " saat, " + Math.floor(pad(totalMinutes)) + " dk kaldı.";
}


if (sinavTarihi == null){
	tarihMs = "Lütfen eklentinizin ayarlar kısmından sınav tarihi giriniz."
}else if (tarihMs > 0){
	tarihMs = msToDaysHoursMinutes(tarihMs);
}else if(tarihMs <= 0){
	tarihMs = "Sınavlarınız Bitmiştir.";
}


document.getElementById('tarih').textContent = tarihMs;