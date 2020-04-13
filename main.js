$(function () {

  setTimeout(function () {
    $('.chatBtn').removeClass('fa-comments-o').addClass('fa-times')
    $('.chatBox01').addClass('on')
    $('.phone').addClass('on')
  }, 500)

  $('.startBtn').on('click', function () {
    $('.chatBox01').removeClass('on')
    $('.chatBox02').addClass('on')
  })

  $('.back').on('click',function(){
    $('.chatBox02').removeClass('on')
    $('.chatBox01').addClass('on')
  })

  var $li = $('.box div');
  $($li.eq(0).show()).siblings().hide()
  $('.tabBox li').eq(0).addClass('on')

  $('.tabBox li').on('click',function (e) {
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on');
    $($(this).find('a').attr('href')).show().siblings().hide();
  });
  
  var $li = $('.talk div');
  $($li.eq(0).show()).siblings().hide()
 

  $('.phoneBtn li').on('click',function (e) {
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on');
    $($(this).find('a').attr('href')).fadeIn().siblings().fadeOut();

    if($('.phoneBtn li').eq(1).hasClass('on')){
      $('.bg02').attr('style','background-image:url("./img/302.jpg")')
    }else if($('.phoneBtn li').eq(2).hasClass('on')){
      $('.bg02').attr('style','background-image:url("./img/8420.jpg")')
    }else if($('.phoneBtn li').eq(0).hasClass('on')){
      $('.bg02').attr('style','background-image:url("./img/8420.jpg")')
    }else if($('.phoneBtn li').eq(3).hasClass('on')){
      $('.bg02').attr('style','background-image:url("./img/8420.jpg")')
    }else if($('.phoneBtn li').eq(4).hasClass('on')){
      $('.bg02').attr('style','background-image:url("./img/8420.jpg")')
    }
  });



  $(".tabBox").mCustomScrollbar({
    axis:"x",
    advanced:{
      autoExpandHorizontalScroll:true
    }
  });


})