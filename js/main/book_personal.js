/**
 * Created by 506_stu03 on 2016/10/11.
 */
$(function () {
    function changeImg() {
        var index = 0;
        var stop = false;
        var $page = $(".num li");
        var $img = $(".picBox li ");
        // $(".num li").removeClass("numRemove");
        // $page.eq(index).css("background","red");
        $page.eq(index).css({"background": "#00BF00"});
        // $page.eq(index).addClass("numColor");
        $page.mouseover(function () {
            stop = true;
            // $(this).addClass("numColor").siblings().removeClass("numColor");
            $(this).css({"background": "#00BF00"}).siblings().css({"background": "#fff"});
            index = $page.index($(this));
            $(".picBox ").animate({
                marginLeft: -440 * index + "px"
            }, 500);
        }).mouseout(function () {
            stop = false;
        });
        function img() {
            if (stop) {
                return;
            }
            index++;
            if (index >= $img.length) {
                index = 0;
                $(".picBox").animate({
                    marginLeft: -440 * index + "px"
                }, 0)
            }
            $page.eq(index).css({"background": "#00BF00"}).siblings().css({"background": "#fff"});
            $(".picBox").animate({
                marginLeft: -440 * index + "px"
            }, 500)
        }

        setInterval(img, 3000);
    }
    header();
    changeImg();
    chat1(0);
    chat2(0);
    chat3(0);
})
function chat1(dl){
    if(dl==0){
        dl=1;
    }
    // $(".context").css("border-top","2px solid #00A600");
    // $(".turn li").addClass("change");
    for(var i=1;i<=4;i++){
        if(i==dl){
             $("#chat1_"+dl).addClass("on").find("a").css({"color":"#00A600"});
            $("#context1_"+dl).show(300);
        }else{
            $("#chat1_"+i).removeClass("on").find("a").css({"color":"#808080"});
            $("#context1_"+i).hide();
        }
    }
}
function chat2(dl){
    if(dl==0){
        dl=1;
    }
    $("#context2_2").hide();
    for(var i=1;i<=2;i++){
        if(i==dl){
            $("#chat2_"+dl).css("background","#00BF00").find("a").css({"color":"#fff"});
            $("#context2_"+dl).show();
        }else{
             $("#chat2_"+i).css("background","#f8f8f8").find("a").css({"color":"#009700"});
            $("#context2_"+i).hide();
        }
    }
}
function chat3(dl){
    if(dl==0){
        dl=1;
    }
    $("#context3_2").hide();
    for(var i=1;i<=2;i++){
        if(i==dl){
            $("#chat3_"+dl).css("background","#00BF00").find("a").css({"color":"#fff"});
            $("#context3_"+dl).show();
        }else{
            $("#chat3_"+i).css("background","#f8f8f8").find("a").css({"color":"#009700"});
            $("#context3_"+i).hide();
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
    $(".header1 ul li").eq(4).css({"border-bottom":"2px solid #fa5c6c"}).find("a").css("color","#fa5c6c");
    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
        $(".header1 ul li").eq(4).css({"border-bottom":"2px solid #fa5c6c"});
    })
}
//尾部