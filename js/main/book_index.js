/**
 * Created by 506_stu03 on 2016/10/17.
 */
$(document).ready(function() {
    $(".center1 ul li").mouseover(function () {
        $(this).css({"background":"#f1f1f1"})
    }).mouseout(function () {
        $(this).css({"background":"#fafafa"})
    })
    $(".book_boy_list").mouseover(function () {
        $(this).css({"background":"#f1f1f1"});
    }).mouseout(function () {
        $(this).css({"background":"#fafafa"})
    })
    changeImg();
    header();
    chat();
});
function changeImg() {
    var index = 0;
    var stop=false;
    var $page = $(".box_text li");
    var $img = $(".box li ");
    var $left = $(".box_left");
    var $right = $(".box_right");
    $page.eq(index).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
    $left.hide();
    $right.hide();
    $(".box").mouseover(function () {
        stop=true;
        $left.show().addClass("mark");
        $right.show().addClass("mark");
    }).mouseout(function () {
        stop=false;
        $left.hide();
        $right.hide();
    })
    $left.click(function () {
        stop=true;
        index--;
        if(index<0){
            index=3;
            $page.eq(index).stop(true,true).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
            $(".box").animate({marginLeft:-735*index+"px"},0);
            return;
        }
        $page.eq(index).stop(true,true).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
        $(".box").animate({marginLeft: -735 * index + "px"}, 400);
    }).mouseover(function () {
        stop=true;
        $left.show();
        $right.show();
        $left.css("opacity","0.7");
    }).mouseout(function () {
        stop=false;
        $left.css("opacity","0.4");
    })
    $right.click(function () {
        stop=true;
        index++;
        if(index>3){
            index=0;
            $page.eq(index).stop(true,true).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
            $(".box").animate({marginLeft:-735*index+"px"},0);
            return;
        }
        $page.eq(index).stop(true,true).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
        $(".box").animate({
            marginLeft: -735 * index + "px"}, 500);
    }).mouseover(function () {
        stop=true;
        $left.show();
        $right.show();
        $right.css("opacity","0.7");
    }).mouseout(function () {
        stop=false;
        $right.css("opacity","0.4");
    })
    $page.mouseover(function () {
        stop=true;
        $(this).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
        index = $page.index($(this));
        $(".box").animate({
            marginLeft: -735 * index + "px"}, 500);
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
            $(".box").animate({marginLeft:-735*index+"px"},0);
        }
        $page.eq(index).stop(true,true).css({"border":"1px solid #858585","opacity":"1"}).siblings().css({"border":"1px solid #151515","opacity":"0.7"});
        $(".box").animate({marginLeft:-735*index+"px"},400);
    }
    setInterval(img,3000);
}
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
    $(".header1 ul li").eq(0).css({"border-bottom":"2px solid #fa5c6c"}).find("a").css("color","#fa5c6c");
    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
        $(".header1 ul li").eq(0).css({"border-bottom":"2px solid #fa5c6c"});
    })
}
function chat() {
    $("#book_girl dl dd").hide();
    $("#book_girl dl:first dt").hide().next().show();

    $("#book_girl dl dt").mouseover(function () {
        $("#book_girl dl dt").show();
        $("#book_girl dl dd").hide();
        $(this).hide().next().show();
    })

    $("#book_boy dl dd").hide();
    $("#book_boy dl:first dt").hide().next().show();

    $("#book_boy dl dt").mouseover(function () {
        $("#book_boy dl dt").show();
        $("#book_boy dl dd").hide();
        $(this).hide().next().show();
    })

    $(".book_list dl dd").mouseover(function () {
        $(this).css({"background":"#f1f1f1"})
    }).mouseout(function () {
        $(this).css({"background":"#fafafa"})
    })
    $(".book_list li").mouseover(function () {
        $(this).find('a').css("color","#D90000");
    }).mouseout(function () {
        $(this).find('a').css("color","#808080");
    })
}

