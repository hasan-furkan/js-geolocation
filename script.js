 /*

			Tarayıcıdan konum bilgisi alma fonksiyonu

			*/
            function konumSorgula() {
                document.getElementById(
                  "durum_mesaj"
                ).innerHTML = `Konum sorgulanıyor...`;
                navigator.geolocation.getCurrentPosition(oldu, olmadi);
              }
        
              /*
        
                    Tarayıcıdan konum sorgulama başarılı ise çağırdığımız fonksiyon
        
                    */
        
              function oldu(pos) {
                document.getElementById("enlem").innerHTML = pos.coords.latitude;
                document.getElementById("boylam").innerHTML = pos.coords.longitude;
                document.getElementById(
                  "dogruluk"
                ).innerHTML = `${pos.coords.accuracy} metre`;
        
                document.getElementById(
                  "durum_mesaj"
                ).innerHTML = `Konum sonucu bulundu`;
        
                // ÖRNEK
                // https://www.google.com/maps?output=embed&q=40.989491199999996,29.104537600000004
                mapembed = `https://www.google.com/maps?output=embed&z=15&q=${pos.coords.latitude},${pos.coords.longitude}`;
                console.log(mapembed);
        
                document.getElementById("harita").setAttribute("src", mapembed);
        
                console.log(pos);
              }
        
              /*
        
                    Tarayıcıdan konum sorgulama başarısız ise çağırdığımız fonksiyon
        
                    */
        
              function olmadi(hata) {
                document.getElementById("durum_mesaj").innerHTML = `
        <strong>Hata Kodu</strong> ${hata.code} <br>
        <strong>Hata mesajı</strong> ${hata.message}
        `;
        
                console.log(hata);
              }
        
              //console.log(navigator);