var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
/*节点轮播*/
var ggnrbox=$(".ggnrbox");
var as=$(".ggnrbox>a");
var h=as.height();
function move(){
    ggnrbox.animate({top:-h},500,function(){
        $(".ggnrbox>a:first").appendTo(ggnrbox);
        ggnrbox.css({top:0})
    })
}
setInterval(move,2000);


$(".fhdb").click(function(){
    var tops=$(window).scrollTop();
    var navtop={st:tops};
    $(navtop).animate({st:1},{
        speed:1000,
        step:function(){
            $(window).scrollTop(navtop.st)
        }
    })
})