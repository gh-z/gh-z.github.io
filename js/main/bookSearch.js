/**
 * Created by 506_stu03 on 2016/11/28.
 */
$(function () {
    header();
    $(".bookList").mouseover(function(){
        $(this).addClass("bookList_color");
    }).mouseout(function(){
        $(this).removeClass("bookList_color");
    })
})
function header() {
    
    $("#parent").mouseenter(function () {
        $(".parent_ul").slideDown(300);
    }).mouseleave(function () {
        $(".parent_ul").slideUp(300);
    })
    $(".header1 ul li").mouseover(function () {
        $(this).css("border-bottom","2px solid #fa5c6c");
    }).mouseout(function () {
        $(this).css("border-bottom","2px solid #a38f98");
    })
}