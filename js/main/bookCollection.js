/**
 * Created by 506_stu03 on 2016/11/28.
 */
$(function () {
    header();
    $(".del").click(function () {
        $(this).parents('dl').remove();
        var num=$(".list").children('dl').size();
        $(".bookNum").html("我的书架("+num+")");
    })
    var num=$(".list").children('dl').size();
    $(".bookNum").html("我的书架("+num+")");
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