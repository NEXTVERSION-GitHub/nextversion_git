$(window).on("load", function(){
    //HTMLも画像も読み込んだらここに書いたことを実行します。

    $(".price-more").css("opacity","1");

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
    })
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