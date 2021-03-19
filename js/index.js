
$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: false, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 5, // 보여질슬라이드수 
    slidesToScroll: 1, // 이동슬라이드수
    arrows: false,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})



// $('.section').on('mousewheel', function(e, delta){
//     if (delta > 0) {
//        var prev = $(this).prev().offset().top
//        if ( $(this).hasClass('on')) {
//           $('html').stop().animate({scrollTop:0}, 500, 'linear')    
//        } else { 
//           $('html').stop().animate({scrollTop:prev}, 500, 'linear')
//        }
//     } else if (delta < 0) {
//         var next = $(this).next().offset().top
//         $('html').stop().animate({scrollTop:next}, 500, 'linear')
//     }
// })


// slide_group1 모달창 나오게 하기
var slnum
$('.slide_group1 > div img').on('click', function () {
    // e.preventDefault()
    slnum = $(this).parent().index()
    // console.log(polist[slnum].Title)
    var src = $(this).attr('data-src')
    var alt = $(this).attr('alt')
    var txt1 = $(this).attr('data-text1')
    var txt2 = $(this).attr('data-text2')
    var txt3 = $(this).attr('data-text3')
    var txt4 = $(this).attr('data-text4')
    var href = $(this).attr('data-link')
    $('body').append('<div class="outbox"><div class="inbox"></div></div>')
    $('.inbox').css({position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'})
        .append(`<img src="${src}" alt="${alt}"><div class="popup"><h3>${txt1}</h3><p>${txt2}</p><p>${txt3}</p><p><a href="${href}" target="_blank">${txt4}</a></p></div>`)
        .append('<button class="close"><i class="fas fa-times"></i></button>')
    $('.inbox img').css({border: '7px solid #fff'})
    $('.popup').css({background: '#fff', height: '280px', width: '460px'})
    $('.popup h3').css({fontSize: '22px', paddingBottom: '26px', fontWeight: 'bold',
                        paddingLeft: '20px', paddingTop: '20px'})
    $('.popup p').eq(0).css({paddingBottom: '26px', lineHeight: '1.5', wordBreak: 'keep-all',
                             paddingRight: '20px', paddingLeft: '20px',})
     $('.popup p').eq(1).css({fontSize: '15px', paddingBottom: '26px',
                             paddingRight: '20px', paddingLeft: '20px', lineHeight: '1.5'})
    $('.popup p').eq(2).css({ textAlign: 'center', paddingTop: '10px'})
    $('.popup p').eq(2).find('a').css({background: '#333', color: '#fff', paddingLeft: '20px',
                                       padding: '5px 10px', borderRadius: '5px',
                                       paddingRight: '20px',})
})


$('body').on('click', '.inbox .close, .outbox', function () {
    $('.outbox').remove()
})

$('body').on('click', '.inbox', function (e) {
    e.stopPropagation()
})


// 내려가면 gotop버튼 생기게 하기
// $(window).on('scroll', function(){
//     var sct = $(this).scrollTop()
//     if ( sct>=50 && !$('#header').hasClass('on') ) {
//         $('#header').addClass('on')
//         $('.gotop').addClass('on')
//     } else if ( sct<50 && $('#header').hasClass('on') ) {
//         $('#header').removeClass('on')
//         $('.gotop').removeClass('on')
//     }
// })


// gotop버튼 클릭시 부드럽게 위로 스크롤시키기
// $('.gotop').on('click', function(e){
//     e.preventDefault()
//     $('html').animate({
//         scrollTop:0
//     }, 500)
// })





// 책 애니메이션 구현
// $('.book > div').on('click',function(){
//     $(this).parent().addClass('on')
//     $(this).addClass('on')
// })
var divInd=0;
$('.book > div').on('click',function(){
    divInd = $(this).index()
    console.log(divInd)
    $(this).parent().addClass('on')
    if (!$(this).hasClass('on')){
        $(this)
        .removeClass('off')
        .addClass('on')
    } else {
        $(this)
        .addClass('off')
        .removeClass('on')
    }
})


function kim(num){
    if ( (num==0 || num==2 || num==4 || num==6 || num==8 || num==10) && $('.book > div').eq(num/2).hasClass('on')) { 
        if ( $('.book > div').eq(5).hasClass('on') ) {
            setTimeout(function(){lee(5)}, 0)    
            setTimeout(function(){lee(4)}, 300)    
            setTimeout(function(){lee(3)}, 600)    
            setTimeout(function(){lee(2)}, 900)    
            setTimeout(function(){lee(1)}, 1200)    
            setTimeout(function(){lee(0)}, 1500)   
            return false 
        } else if ( $('.book > div').eq(4).hasClass('on') ) {
            setTimeout(function(){lee(4)}, 0)    
            setTimeout(function(){lee(3)}, 300)    
            setTimeout(function(){lee(2)}, 600)    
            setTimeout(function(){lee(1)}, 900)    
            setTimeout(function(){lee(0)}, 1200)
            return false
        } else if ( $('.book > div').eq(3).hasClass('on') ) {
            setTimeout(function(){lee(3)}, 0)    
            setTimeout(function(){lee(2)}, 300)    
            setTimeout(function(){lee(1)}, 600)    
            setTimeout(function(){lee(0)}, 900)
            return false
        } else if ( $('.book > div').eq(2).hasClass('on') ) {
            setTimeout(function(){lee(2)}, 0)    
            setTimeout(function(){lee(1)}, 300)    
            setTimeout(function(){lee(0)}, 600)
            return false
        } else if ( $('.book > div').eq(1).hasClass('on') ) {
            setTimeout(function(){lee(1)}, 0)    
            setTimeout(function(){lee(0)}, 300)    
            return false
        }
    } 
    if ( num==1 && $('.book > div').eq(num).hasClass('on')) { 
        if ( $('.book > div').eq(5).hasClass('on') ) {
            setTimeout(function(){lee(5)}, 0)
            setTimeout(function(){lee(4)}, 300)
            setTimeout(function(){lee(3)}, 600)
            setTimeout(function(){lee(2)}, 900)
            setTimeout(function(){lee(1)}, 1200)
            return false
        }

    }

}

function lee(j){
    if (!$('.book > div').eq(j).hasClass('on')){
        $('.book > div').eq(j)
        .removeClass('off')
        .addClass('on')
    } else {
        $('.book > div').eq(j)
        .removeClass('on')
        .addClass('off')
    }
}


// 페이지 클릭하면
$('ul li').on('click', function(){
    var lieq = $(this).index()
    kim(lieq, divInd)
    console.log(lieq)
    // if ( lieq==0 && $('.book > div').eq(0).hasClass('on')) {
    //     if ( $('.book > div').eq(5).hasClass('on') ) {
    //         setTimeout(function(){kim(5)}, 0)
    //         setTimeout(function(){kim(4)}, 300)
    //         setTimeout(function(){kim(3)}, 600)
    //         setTimeout(function(){kim(2)}, 900)
    //         setTimeout(function(){kim(1)}, 1200)
    //         setTimeout(function(){kim(0)}, 1500)
    //         return false
    //     }
    //     if ( $('.book > div').eq(4).hasClass('on') ) {
    //         setTimeout(function(){kim(4)}, 0)
    //         setTimeout(function(){kim(3)}, 300)
    //         setTimeout(function(){kim(2)}, 600)
    //         setTimeout(function(){kim(1)}, 900)
    //         setTimeout(function(){kim(0)}, 1200)
    //         return false
    //     }
    //     if ( $('.book > div').eq(3).hasClass('on') ) {
    //         setTimeout(function(){kim(3)}, 0)
    //         setTimeout(function(){kim(2)}, 300)
    //         setTimeout(function(){kim(1)}, 600)
    //         setTimeout(function(){kim(0)}, 900)
    //         return false
    //     }
    //     if ( $('.book > div').eq(2).hasClass('on') ) {
    //         setTimeout(function(){kim(2)}, 0)
    //         setTimeout(function(){kim(1)}, 300)
    //         setTimeout(function(){kim(0)}, 600)
    //         return false
    //     }
    //     if ( $('.book > div').eq(1).hasClass('on') ) {
    //         setTimeout(function(){kim(1)}, 0)
    //         setTimeout(function(){kim(0)}, 300)
    //         return false
    //     }
    //     if ( $('.book > div').eq(0).hasClass('on') ) {
    //         setTimeout(function(){kim(0)}, 0)
    //         return false
    //     }

    // }
    // if (lieq==1 && $('.book > div').eq(0).hasClass('on') ) {
    //     if ( $('.book > div').eq(5).hasClass('on') ) {
    //         setTimeout(function(){kim(5)}, 0)
    //         setTimeout(function(){kim(4)}, 300)
    //         setTimeout(function(){kim(3)}, 600)
    //         setTimeout(function(){kim(2)}, 900)
    //         setTimeout(function(){kim(1)}, 1200)
    //         return false
    //     }
    //     if ( $('.book > div').eq(4).hasClass('on') ) {
    //         setTimeout(function(){kim(4)}, 0)
    //         setTimeout(function(){kim(3)}, 300)
    //         setTimeout(function(){kim(2)}, 600)
    //         setTimeout(function(){kim(1)}, 900)
    //         return false
    //     }
    //     if ( $('.book > div').eq(3).hasClass('on') ) {
    //         setTimeout(function(){kim(3)}, 0)
    //         setTimeout(function(){kim(2)}, 300)
    //         setTimeout(function(){kim(1)}, 600)
    //         return false
    //     }
    //     if ( $('.book > div').eq(2).hasClass('on') ) {
    //         setTimeout(function(){kim(2)}, 0)
    //         setTimeout(function(){kim(1)}, 300)
    //         return false
    //     }
    //     if ( $('.book > div').eq(1).hasClass('on') ) {
    //         setTimeout(function(){kim(1)}, 0)
    //         return false
    //     }
    // }

})




// skill 그래프





//loading
$(window).on('load', function(){
    setTimeout(function(){
        $('.loading').fadeOut(500)
    }, 1000000)
})

