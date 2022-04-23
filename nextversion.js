$(window).on("load", function(){
    //HTMLを読み込んだらここに書いたことを実行します。
    $('.loading').fadeOut();
    $('.header-btn a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-220;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
    });
    $('.header-left a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-220;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
    });

    $("#top-text-one").delay(500).fadeIn(1000);
    $("#top-text-two").delay(1500).fadeIn(1000);
    $("#top-text-three").delay(2500).fadeIn(1000);
    $("#top-text-four").delay(3500).fadeIn(1000);
    $("#top-text-five").delay(5500).fadeIn(1000);

    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            } else{
                $(this).css('opacity','0');
                $(this).css('transform','translateY(100px)');
            }

        });
        $(".fadein-beside").each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            } else{
                $(this).css('opacity','0');
                $(this).css('transform','translateX(90px)');
            }
            if (window.matchMedia('(max-width: 520px)').matches) {
                //スマホ処理
                if (scroll > targetElement - windowHeight + 200){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateX(0)');
                } else{
                    $(this).css('opacity','0');
                    $(this).css('transform','translateX(0)');
                }
            } else if (window.matchMedia('(min-width:960px)').matches) {
                //PC処理
                if (scroll > targetElement - windowHeight + 200){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateX(0)');
                } else{
                    $(this).css('opacity','0');
                    $(this).css('transform','translateX(90px)');
                }
            }
        });
    });

    
    
    $("ul.header-menu li").addClass(".active");
    $("ul.header-menu li").click(function(){
        if($(this).hasClass(".active")){
            $(".header-menu-sub:not(:animated)", this).slideDown();
            $("main").css("background-color","rgba(0,0,0,0.4)");
            $("main").css("filter","brightness(0.4)");
            $(this).removeClass(".active")
        }
        else{
            $(".header-menu-sub:not(:animated)", this).slideUp();
            $("main").css("background-color","rgba(0,0,0,0)");
            $("main").css("filter","brightness(1)");
            $(this).addClass(".active")
        }
        
    })
    
});

