/**
 * Created by 506_stu03 on 2016/11/7.
 */
//账号部分
$(function(){
    $("#reg_acount").click(function(){
        $(".r").show();     //注册页面显示
    })

    $("#login").click(function(){
        $(".f").show();    //手机登录页面显示
    })
    //
    // $("#login1").click(function(){
    //     $(".f").show();    //手机登录页面显示
    // })

    //login
    $("#log").click(function(){
        $(".r").show();     //注册页面显示
        $(".f").hide();     //手机登录页面隐藏
    })


    //login
    $("#return").click(function(){
        $(".f").hide();     //关闭登录页面
        $(".r").hide();     //关闭注册页面
        $("#login_mess").val("");
        $("#login_regs").val("手机号码登录");
        $("#login_password").val("");
        $("#register_mess").val("");
        $("#register_regs").val("手机号码登录");
        $("#reg_pwd").val("");
        if($("#login_password").val("")){
            $('#login_showPwd').show();
            $('#login_password').hide();
        }
        if($("#reg_pwd").val("")){
            $('#showPwd').show();
            $('#reg_pwd').hide();
        }

    })

    $(".admin").focus(function(){
        if($(this).val().trim() == "手机号码登录"){
            $(this).val("");
        }
    });
    $(".admin").blur(function(){
        if($(this).val() == ""){
            $(this).val("手机号码登录");
        }
    });
// 密码部分
    $('#login_showPwd').focus(function(){
        var text_value=$(this).val();
        if(text_value == this.defaultValue){
            $('#login_showPwd').hide();
            $('#login_password').show().focus();
        }
    });
    $('#login_password').blur(function(){
        var text_value = $(this).val();
        if(text_value==""){
            $('#login_showPwd').show();
            $('#login_password').hide();
        }
    });
});
function checkLogin(){
    var login_regs = $("#login_regs").val();
    var login_mess = $("#login_mess").val();
    var login_password=$("#login_password").val();
    var regmobile=/^admin$|^1\d{10}$/;
    var regpwd=/^admin$|^[a-zA-z0-9]{4,11}$/;


    if(login_regs=="手机号码登录"||login_regs=="") {
        $("#login_mess").val("请输入手机号码！");
      return false;
    }
    if(regmobile.test(login_regs)==false){
        $("#login_mess").val("手机号码格式不正确！");
        return false;
    }

    if(login_password=="登录密码"||login_password==""){
        $("#login_mess").val("请输入密码！");
        return false;
    }
    if(regpwd.test(login_password)==false) {
        $("#login_mess").val("密码错误！密码由英文字母和数字组成的4-10个字符！");
        return false;
    }
    return true;
}
function validate_login(){
    var login_ajax = $("#login_regs").val();
    var login_mess = $("#login_mess").val();
    var login_password=$("#login_password").val();
    var regmobile=/^admin$|^1\d{10}$/;
    var regpwd=/^admin$|^[a-zA-z0-9]{4,11}$/;

    if(login_ajax=="手机号码登录"||login_ajax=="") {
        $("#login_mess").val("请输入手机号码！");
       return false;
    }
    if(regmobile.test(login_ajax)==false){
        $("#login_mess").val("手机号码格式不正确！");
        return false;
    }
    if(login_password=="登录密码"||login_password==""){
        $("#login_mess").val("请输入密码！");
        return false;
    }

    if(regpwd.test(login_password)==false) {
        $("#login_mess").val("密码错误！密码由英文字母和数字组成的4-10个字符！");
        return false;
    }
    $("#login_mess").val("");
return true;

}
function validate_loginPwd(){
    var login_ajax = $("#login_regs").val();
    var login_mess = $("#login_mess").val();
    var login_password=$("#login_password").val();
    var regmobile=/^admin$|^1\d{10}$/;
    var regpwd=/^admin$|^[a-zA-z0-9]{4,11}$/;

    if(login_ajax=="手机号码登录"||login_ajax=="") {
        $("#login_mess").val("请输入手机号码！");
        return false;
    }

    if(regmobile.test(login_ajax)==false){
        $("#login_mess").val("手机号码格式不正确！");
        return false;
    }

    if(login_password=="登录密码"||login_password==""){
        $("#login_mess").val("请输入密码！");
        return false;
    }

    if(regpwd.test(login_password)==false) {
        $("#login_mess").val("密码错误！密码由英文字母和数字组成的4-10个字符！");
        return false;
    }

    $("#login_mess").val("");
return true;
}
