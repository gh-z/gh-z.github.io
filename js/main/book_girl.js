/**
 * Created by 506_stu03 on 2016/10/9.
 */
$(document).ready(function() {
    function turn(){
        var index = 0;
        $(".body1top ul li").eq(0).addClass("topTurn").find("a").css("color","#EA7500");
        $(".body1bottom ul ").eq(1).hide();
        $(".body1top ul li").mouseover(function () {
            $(this).addClass("topTurn").find("a").css("color","#EA7500");
            $(this).siblings().removeClass("topTurn").find("a").css("color","#000")
            index =  $(".body1top ul li").index($(this));
            $(".body1bottom ul ").eq(index).show().siblings().hide();
        })
    }
    function changeImg() {
        var index = 0;
        var stop=false;
        var $page = $(".body2bottom ul li");
        var $img = $(".body2top ul li ");
        // var $word=$(".word ul li")
        $page.eq(index).addClass("ulbj");
        $page.mouseover(function () {
            stop=true;
            $(this).addClass("ulbj").siblings().removeClass("ulbj");
            index = $page.index($(this));
            // if(index==1) {
            //     $(".box").animate({
            //         marginLeft: -513 * index + "px"
            //     }, 100);
            // }else{
                $(".box").animate({
                    marginLeft: -550 * index + "px"
                }, 400);
            // }
            //index=$(this).index();
            // $(".body2top ul").animate({
            //     marginLeft:-513*index+"px"},500,function () {
                // $(".body2top ul>li").eq(index);
                // $(".body2top ul").animate( {marginLeft:"0px"},600);
            //     }
            // );

            //$img.eq(index).slideDown(700).siblings().slideUp(1000);
            //$img.eq(index).stop(true,true).show().siblings().hide();

        }).mouseout(function () {
            stop=false;
        });
        function img() {
            if(stop){
                return;
            }
            index++;
            if (index >= $img.length) {
                index = 0;
                $(".body2top ul").animate({
                    marginLeft:-550*index+"px"},0);
            }
            $page.eq(index).stop(true,true).addClass("ulbj").siblings().removeClass("ulbj");
            $(".body2top ul").animate({
                    marginLeft:-550*index+"px"},400);
            // $img.eq(index).fadeIn().siblings().fadeOut();
        }
        setInterval(img,3000);

    }
    changeImg();
        turn();
    $("#context1_2").hide();
    $("#context2_2").hide();
    header();
});
function chat1(dl){
    for(var i=1;i<=2;i++){
        if(i==dl){
            $("#chat1_"+dl).css({"border-top":"2px #3535FF solid"}).find("a").css({"color":"#2D2DFF"});
            $("#context1_"+dl).show();
        }else{
            $("#chat1_"+i).css({"border":"none"}).find("a").css({"color":"#7F7F7F"});
            $("#context1_"+i).hide();
        }
    }
}
function chat2(dl) {
    for (var i = 1; i <= 2; i++) {
        if (i == dl) {
            $("#chat2_" + dl).css({"border-top": "3px #f00078 solid"}).find("a").css({"color": "#f00078"});
            $("#context2_" + dl).show();
        } else {
            $("#chat2_" + i).css({"border": "none"}).find("a").css({"color": "#7F7F7F"});
            $("#context2_" + i).hide();
        }
    }
}
//头部
function header() {
    $(".text").focus(function(){
        if($(".text").val()=="请输入关键字"){
            $(".text").val("");
        }
    })
    $(".text").blur(function(){
        if($(".text").val()==""){
            $(".text").val("请输入关键字");
        }
    })
    $("#parent").mouseenter(function () {
        $(".parent_ul").slideDown(300);
    }).mouseleave(function () {
        $(".parent_ul").slideUp(300);
    })
    $(".header1 ul li").eq(3).css({"border-bottom":"2px solid #fa5c6c"}).find("a").css("color","#fa5c6c");
    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
        $(".header1 ul li").eq(3).css({"border-bottom":"2px solid #fa5c6c"});
    })
}