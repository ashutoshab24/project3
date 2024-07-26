$(function(){

    $(document).ready(function(){
        $('.slider').bxSlider({
            auto: true,            
            pause: 3000,
            nextText: '&#8250;',
            prevText: '&#8249;',
            // nextSelector: '.next',
            // prevSelector: '.previous', 
            pager: false
        });
    });
    $(".wrap-7 .bt").click(function(){
        $(".wrap-7 .bt").removeClass("active");
        $(this).addClass("active");
        
        if( $(this).text()=="Battery Images"){
            $(".wrap-7 .gallery-1 .col-6:nth-child(3),.wrap-7 .gallery-1 .col-6:nth-child(4),.wrap-7 .gallery-1 .col-6:nth-child(5).wrap-7 .gallery-1 .col-6:nth-child(6)").fadeToggle();
            $(".wrap-7 .gallery-1 .col-6:nth-child(1),.wrap-7 .gallery-1 .col-6:nth-child(2)").fadeToggle();
            $(".wrap-7 .gallery-2 .col-6:nth-child(2)").fadeOut();
            $(".wrap-7 .gallery-2 .col-6:nth-child(3),wrap-7 .gallery-2 .col-6:nth-child(4)").fadeIn();
        }
        else if( $(this).text()=="Spare Parts Images"){
            $(".wrap-7 .gallery-1 .col-6:nth-child(1),.wrap-7 .gallery-1 .col-6:nth-child(2),.wrap-7 .gallery-1 .col-6:nth-child(5).wrap-7 .gallery-1 .col-6:nth-child(6)").fadeToggle();
            $(".wrap-7 .gallery-1 .col-6:nth-child(3),.wrap-7 .gallery-1 .col-6:nth-child(4)").fadeToggle();
            $(".wrap-7 .gallery-2 .col-6:nth-child(3)").fadeOut();
            $(".wrap-7 .gallery-2 .col-6:nth-child(2),wrap-7 .gallery-2 .col-6:nth-child(4)").fadeIn();
        }
        else if( $(this).text()=="Charging Cable Images"){
            $(".wrap-7 .gallery-1 .col-6:nth-child(1),.wrap-7 .gallery-1 .col-6:nth-child(2),.wrap-7 .gallery-1 .col-6:nth-child(3).wrap-7 .gallery-1 .col-6:nth-child(4)").fadeToggle();
            $(".wrap-7 .gallery-1 .col-6:nth-child(5),.wrap-7 .gallery-1 .col-6:nth-child(6)").fadeToggle();
            $(".wrap-7 .gallery-2 .col-6:nth-child(4)").fadeOut();
            $(".wrap-7 .gallery-2 .col-6:nth-child(1),wrap-7 .gallery-2 .col-6:nth-child(3)").fadeIn();
        }
    });
    $(".btn").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        $("body .popup").append( $('.popupform').html() );
        $("body .popup input:first").focus();
    
        $(".popup, .close").click(function(){
            $(".popup, .overlay").remove();
        })
    });
    
    $(document).ready(function(){
            $('.reviews').bxSlider({
                auto: true,
                pause: 3000,
                // nextText: '&#8250;',
                // prevText: '&#8249;',
                // nextSelector: '.next',
                // prevSelector: '.previous', 
                pager: false
            });
        });
        $(".btn-mob").on("click",function(){
            $(".collapse").slideToggle();
        });
    })

    // <--------------------javascript-----------------/>
