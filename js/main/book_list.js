/**
 * Created by 506_stu03 on 2016/10/17.
 */
$(function () {
    header();
    moveBook();
})
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
    $(".header1 ul li").eq(1).css({"border-bottom":"2px solid #fa5c6c"}).find("a").css("color","#fa5c6c");
    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
        $(".header1 ul li").eq(1).css({"border-bottom":"2px solid #fa5c6c"});
    })
}
    function moveBook(){
        var marginTop=0;
        var stop=false;
        setInterval(function(){
            if(stop) return;
            $("#express").children("li:first").animate({marginTop:marginTop--},0,function(){
                var $first=$(this);
                if(!$first.is(":animated")){   //不是正在执行动画的时候执行的代码
                    if((-marginTop)>$first.height()){
                        $first.css({"margin-top":"0"}).appendTo($("#express"));
                        marginTop=0;
                    }
                }
            });
        },50);
        $("#express").mouseover(function(){
            stop=true;
        }).mouseout(function(){
            stop=false;
        });
    }
    // var marginTop=0;
    // var flag=false;
    // $("#express").mouseover(function () {
    //     flag=true;
    // }).mouseout(function () {
    //     flag=false;
    // })
    // setInterval(function(){
    //     if(stop){
    //         return;
    //     }
    //     $("#express").children("li").first().animate({"margin-top":marginTop--},0,function(){
    //         var $first=$(this);
    //         if(!$first.is(":animated")){
    //             if((-marginTop)>$first.height()){
    //                 $first.css({"margin-top":"0"}).appendTo($("#express"));
    //                 marginTop=0;
    //             }
    //         }
    //     })
    // },50)
    
