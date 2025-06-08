$(function () {
    // İlk slider seçimi ve ayarlamalar
    const $slider = $('.slider');
    const $products = $('.slider .product');
    const itemWidth = $products.outerWidth(true); // Eleman genişliği + margin
    const totalItems = $products.length; // Toplam ürün sayısı
    const visibleItems = 1; // Aynı anda görünen ürün sayısı
    let currentIndex = 0; // Şu an gösterilen ürünün indexi

    // Dot (navigasyon noktaları) container'ı
    const $dotsContainer = $('.dots-container');

    // Her ürün için bir dot oluştur
    $products.each(function (i) {
        const $dot = $('<span class="dot"></span>');

        if (i === 0) $dot.addClass('active'); // İlk dot aktif olarak ayarlanır

        $dotsContainer.append($dot); // Dot'u container'a ekle
    });

    const $dots = $('.dot'); // Tüm dotları seç

    // Aktif dot'u güncelle
    function updateDots(index) {
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
    }

    // Slider'ı kaydır ve dot'u güncelle
    function slide() {
        $slider.css('transform', 'translateX(' + (-itemWidth * currentIndex) + 'px)');
        updateDots(currentIndex);
    }

    // Otomatik geçiş işlemi (4 saniyede bir)
    setInterval(() => {
        currentIndex++;
        if (currentIndex > totalItems - visibleItems) {
            currentIndex = 0; // Başa sar
        }
        slide();
    }, 4000);

    // Sağ butona tıklanırsa sonraki ürüne geç
    $('.next').click(function () {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            slide();
        }
    });

    // Sol butona tıklanırsa önceki ürüne geç
    $('.prev').click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            slide();
        }
    });

    // Dot'a tıklanırsa ilgili ürüne geç
    $dots.each(function (i) {
        $(this).click(function () {
            currentIndex = i;
            slide();
        });
    });
});



$(function () {
    // İkinci slider için seçimler ve ayarlamalar
    const $slider = $('.slider-1');
    const $products = $('.slider-1 .product-1');
    const itemWidth = $products.outerWidth(true);
    const totalItems = $products.length;
    const visibleItems = 1;
    let currentIndex = 0;

    // Dot container'ı
    const $dotsContainer = $('.dots-container-1');

    // Her ürün için, ürün görselinden bir dot oluştur
    $products.each(function (i) {
        const imgSrc = $(this).find('img').attr('src'); // Görsel URL'si
        const $dot = $('<span class="dot-1"></span>');

        if (i === 0) $dot.addClass('active-1'); // İlk dot aktif

        // Görseli dot içine yerleştir
        const $img = $('<img>').attr('src', imgSrc).css({
            width: '30px',
            height: '30px',
            objectFit: 'contain',
        });

        $dot.append($img);
        $dotsContainer.append($dot);
    });

    const $dots = $('.dot-1');

    // Aktif dot'u güncelle
    function updateDots(index) {
        $dots.removeClass('active-1');
        $dots.eq(index).addClass('active-1');
    }

    // Slider'ı kaydır ve dot'u güncelle
    function slide() {
        $slider.css('transform', 'translateX(' + (-itemWidth * currentIndex) + 'px)');
        updateDots(currentIndex);
    }

    // Otomatik geçiş (4 saniyede bir)
    setInterval(() => {
        currentIndex++;
        if (currentIndex > totalItems - visibleItems) {
            currentIndex = 0;
        }
        slide();
    }, 4000);

    // Sağ butonla sonraki slayta geç
    $('.next-1').click(function () {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            slide();
        }
    });

    // Sol butonla önceki slayta geç
    $('.prev-1').click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            slide();
        }
    });

    // Dot'a tıklama ile belirli slayta geçiş
    $dots.each(function (i) {
        $(this).click(function () {
            currentIndex = i;
            slide();
        });
    });
});