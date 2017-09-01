/**
 * Created by 506_stu03 on 2016/10/12.
 */
$(function () {
    function changeImg() {
        var index = 0;
        var stop=false;
        var $page = $(".num li");
        var $img = $(".box li ");
        $page.eq(index).css("opacity","0.4");
        $page.mouseover(function () {
            stop=true;
            $(this).css("opacity","0.4").siblings().css("opacity","1");
            index = $page.index($(this));
            $(".box ").animate({
                marginLeft:-320*index+"px"},200);
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
                $(".box").animate({
                    marginLeft:-320*index+"px"},0)
            }
            $page.eq(index).css("opacity","0.4").siblings().css("opacity","1");
            $(".box").animate({
                marginLeft:-320*index+"px"},500)
        }
        setInterval(img,3000);
    }
    changeImg();
    header();
    content();
})
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
    $(".header1 ul li").eq(2).css({"border-bottom":"2px solid #fa5c6c"}).find("a").css("color","#fa5c6c");
    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
        $(".header1 ul li").eq(2).css({"border-bottom":"2px solid #fa5c6c"});
    })
}
function content() {
    $("#book_1").children("dl:first").children("dt").hide().next().show();
    $("#book_2").children("dl:first").children("dt").hide().next().show();
    $("#book_3").children("dl:first").children("dt").hide().next().show();
    $("#book_1 dl dt").mouseover(function () {
        $("#book_1 dl dt").show();
        $("#book_1 dl dd").hide();
        $(this).hide().next().show();
        // $(".dl dl").eq(0).next().css("display","none");
        // $(".dl dl dt").eq(0).next().css("display","block");
        //$(".dl").children("dl:first").children("dt").hide().next().show();
    })
    $("#book_2 dl dt").mouseover(function () {
        $("#book_2 dl dt").show();
        $("#book_2 dl dd").hide();
        $(this).hide().next().show();
    });
    $("#book_3 dl dt").mouseover(function () {
        $("#book_3 dl dt").show();
        $("#book_3 dl dd").hide();
        $(this).hide().next().show();
    });
    $(".body3 .body3fotter a").mouseover(function () {
        $(".body3 .body3fotter").css({"background":"#4B4B4B","opacity":"0.7"}).find("a").css("color","#fff");
    }).mouseout(function () {
        $(".body3 .body3fotter").css("background","#F5F5F5").find("a").css("color","#4B4B4B");
    })
    $(".body6 .body3fotter a").mouseover(function () {
        $(".body6 .body3fotter").css({"background":"#4B4B4B","opacity":"0.7"}).find("a").css("color","#fff");
    }).mouseout(function () {
        $(".body6 .body3fotter").css("background","#F5F5F5").find("a").css("color","#4B4B4B");
    })
    $(".body7 .body3fotter a").mouseover(function () {
        $(".body7 .body3fotter").css({"background":"#4B4B4B","opacity":"0.7"}).find("a").css("color","#fff");
    }).mouseout(function () {
        $(".body7 .body3fotter").css("background","#F5F5F5").find("a").css("color","#4B4B4B");
    })
}