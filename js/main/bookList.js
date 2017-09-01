/**
 * Created by 506_stu03 on 2016/11/28.
 */
$(function(){
    $(".book_type dl dd:not(.boy_book),.book_type dl dd:not(.girl_book),.book_type dl dd:not(.personal_book)").mouseover(function(){
        $(this).addClass("mouse_color");
    }).mouseout(function(){
        $(this).removeClass("mouse_color");
    });
    $(".book_content tr:even").css("background","#f3f3f3");
    $(".book_content_bottom p:not(.pageNo_color)").mouseover (function(){
        $(this).css("background","#e7e7e7")
    }).mouseout(function(){
        $(this).css("background","#fefefe")
    });

    header();

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

    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
        $(".header_top").css({"border-bottom":"2px solid #fa5c6c"});
    })
    $(".text").focus(function(){
        $(this).css("border","1px solid #D90000");
    }).blur(function(){
        $(this).css("border","1px solid #D90000");
    })
}
