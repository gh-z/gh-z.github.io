/**
 * Created by 506_stu03 on 2016/11/7.
 */
$(function(){
    //register
    $("#register").click(function(){
        $(".f").show();     //手机登录页面显示
        $(".r").hide();   //注册页面隐藏
    })
    //register
    $("#ret").click(function(){
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

    $(".reg").focus(function(){
        if($(this).val().trim() == "手机号码注册"){
            $(this).val("");
        }
    });
    $(".reg").blur(function(){
        if($(this).val() == ""){
            $(this).val("手机号码注册");
        }
    });
// 密码部分
    $('#showPwd').focus(function(){
        var text_value=$(this).val();
        if(text_value == this.defaultValue){
            $('#showPwd').hide();
            $('#reg_pwd').show().focus();
        }
    });
    $('#reg_pwd').blur(function(){
        var text_value = $(this).val();
        if(text_value==""){
            $('#showPwd').show();
            $('#reg_pwd').hide();
        }
    });
});
function checkRegister(){
    var register_regs = $("#register_regs").val();
    var register_mess = $("#register_mess").val();
    var reg_pwd = $("#reg_pwd").val();
    var regmobile=/^admin$|^1\d{10}$/;
    var regpwd=/^admin$|^[a-zA-z0-9]{4,11}$/;

    if(register_regs=="手机号码注册"||register_regs=="") {
        $("#register_mess").val("请输入手机号码！");
       return false;
    }
    if(regmobile.test(register_regs)==false){
        $("#register_mess").val("手机号码格式不正确！");
        return false;
    }
    if(reg_pwd=="请输入您的密码"||reg_pwd=="") {
        $("#register_mess").val("请输入密码！");
        return false;
    }
    if(regpwd.test(reg_pwd)==false) {
        $("#register_mess").val("密码错误！密码由英文字母和数字组成的4-10个字符！");
        return false;
    }
    return true;
}
function validate_register(){
    var register_ajax = $("#register_regs").val();
    var register_mess = $("#register_mess").val();
    var login_password = $("#reg_pwd").val();
    var regmobile=/^admin$|^1\d{10}$/;
    var regpwd=/^admin$|^[a-zA-z0-9]{4,11}$/;
    if(register_ajax=="手机号码注册"||register_ajax=="") {
        $("#register_mess").val("请输入手机号码！");
       return false;
    }
    if(regmobile.test(register_ajax)==false){
        $("#register_mess").val("手机号码格式不正确！");
        return false;
    }
    if(login_password=="请输入您的密码"||login_password=="") {
        $("#register_mess").val("请输入密码！");
        return false;
    }
    if(regpwd.test(login_password)==false) {
        $("#register_mess").val("密码错误！密码由英文字母和数字组成的4-10个字符！");
        return false;
    }
    return true;
}

function validate_registerPwd() {
    var register_ajax = $("#register_regs").val();
    var register_mess = $("#register_mess").val();
    var login_password = $("#reg_pwd").val();
    var regmobile=/^admin$|^1\d{10}$/;
    var regpwd=/^admin$|^[a-zA-z0-9]{4,11}$/;

    if(register_ajax=="手机号码注册"||register_ajax=="") {
        $("#register_mess").val("请输入手机号码！");
        return false;
    }
    if(regmobile.test(register_ajax)==false){
        $("#register_mess").val("手机号码格式不正确！");
        return false;
    }
    if(login_password=="请输入您的密码"||login_password=="") {
        $("#register_mess").val("请输入密码！");
       return false;
    }
    if(regpwd.test(login_password)==false) {
        $("#register_mess").val("密码错误！密码由英文字母和数字组成的4-10个字符！");
        return false;
    }
    return true;
}