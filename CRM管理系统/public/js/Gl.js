$(function(){
    $('span').click(function(){
        if($(this).siblings('li').hasClass('on')){
            $(this).siblings('li').slideUp(500).removeClass('on');
        }else{
            $(this).siblings('li').slideDown(500).addClass('on');
        }
    });

    $(".li").click(function(){
        if($('.showTable1').css({display:'none'})){
            $('.showTable1').show();
        }
    })

//点击学校管理主标题 跳转
    $('.G_l').click(function(){
        windows.location.href="index1-Gl.html";
    });
//添加录入新学校 按钮
    $('#an1-Gl').click(function(){
        if($('.Gl').siblings('.kk').css({display:'none'})){
            $('.Gl').siblings('.kk').fadeIn();
        }else{
            $('.Gl').siblings('.kk').fadeOut()
        }
    })
//录入新学校 页面 取消按钮
    $('#close1-Gl').click(function(){
        if($('.Gl').siblings('.kk').css({display:'block'})){
            $('.Gl').siblings('.kk').fadeOut()
        }else{
            $('.Gl').siblings('.kk').fadeIn()
        }
    })
//查看学校信息按钮
    $('#an2Gl').click(function(){
        if($('.Gl').siblings('.ky1').css({display:'none'})){
            $('.Gl').siblings('.ky1').fadeIn()
        }else{
            $('.Gl').siblings('.ky1').fadeOut()
        }
    })
//查看学校信息页面 确认按钮
    $('#close2-Gl').click(function(){
        if($('.Gl').siblings('.ky1').css({display:'block'})){
            $('.Gl').siblings('.ky1').fadeOut()
        }else{
            $('.Gl').siblings('.ky1').fadeIn()
        }
    })
//查看学校信息页面 添加沟通记录按钮
    $('#add1-Gl').click(function(){
        if($('.Gl').siblings('.ky2').css({display:'none'})){
            $('.Gl').siblings('.ky2').fadeIn()
        }else{
            $('.Gl').siblings('.ky2').fadeOut()
        }
    })
//添加沟通记录页面 取消按钮
    $('#close3-Gl').click(function(){
        if($('.Gl').siblings('.ky2').css({display:'block'})){
            $('.Gl').siblings('.ky2').fadeOut()
        }else{
            $('.Gl').siblings('.ky2').fadeIn()
        }
    })
// 修改学校信息 页面 取消按钮
    $('#close12-Gl').click(function(){
        if($('.Gl').siblings('.ky3').css({display:'block'})){
            $('.Gl').siblings('.ky3').fadeOut()
        }else{
            $('.Gl').siblings('.ky3').fadeIn()
        }
    })
//修改学校信息按钮
    $('#an3-Gl').click(function(){
        if($('.Gl').siblings('.ky3').css({display:'none'})){
            $('.Gl').siblings('.ky3').fadeIn()
        }else{
            $('.Gl').siblings('.ky3').fadeOut()
        }
    })
//申请立项按钮
    $('#an4-Gl').click(function(){
        if($('.Gl').siblings('.ky4').css({display:'none'})){
            $('.Gl').siblings('.ky4').fadeIn()
        }else{
            $('.Gl').siblings('.ky4').fadeOut()
        }
    })
    //申请立项页面 确认按钮
    $('#close5-Gl').click(function(){
        if($('.Gl').siblings('.ky4').css({display:'block'})){
            $('.Gl').siblings('.ky4').fadeOut()
        }else{
            $('.Gl').siblings('.ky4').fadeIn()
        }
    })
//审核按钮
    $('#an5-Gl').click(function(){
        if($('.Gl').siblings('.ky5').css({display:'none'})){
            $('.Gl').siblings('.ky5').fadeIn()
        }else{
            $('.Gl').siblings('.ky5').fadeOut()
        }
    })
//审核页面 取消按钮
    $('#close8-Gl').click(function(){
        if($('.Gl').siblings('.ky5').css({display:'block'})){
            $('.Gl').siblings('.ky5').fadeOut()
        }else{
            $('.Gl').siblings('.ky5').fadeIn()
        }
    })




//添加活动信息按钮
    $('#an1').click(function(){
        if($('.Gl').siblings('.kk2').css({display:'none'})){
            $('.Gl').siblings('.kk2').fadeIn()
        }else{
            $('.Gl').siblings('.kk2').fadeOut()
        }

    })
//查看活动信息按钮
    $('#an2').click(function(){
        if($('.Gl').siblings('.kk1').css({display:'none'})){
            $('.Gl').siblings('.kk1').fadeIn()
        }else{
            $('.Gl').siblings('.kk1').fadeOut()
        }

    })
//添加活动页面取消按钮
    $('#close1').click(function(){
        if($('.Gl').siblings('.kk1').css({display:'block'})){
            $('.Gl').siblings('.kk1').fadeOut()
        }else{
            $('.Gl').siblings('.kk1').fadeIn()
        }

    })
//查看活动信息页面取消按钮
    $('#close2').click(function(){
        if($('.Gl').siblings('.kk2').css({display:'block'})){
            $('.Gl').siblings('.kk2').fadeOut()
        }else{
            $('.Gl').siblings('.kk2').fadeIn()
        }
    })
//查看活动信息页面 查看活动反馈按钮
    $('#an3').click(function(){
        if($('.Gl').siblings('.kk3').css({display:'none'})){
            $('.Gl').siblings('.kk3').fadeIn()
        }else{
            $('.Gl').siblings('.kk3').fadeOut()
        }

    })
//        活动反馈页面 确认按钮
    $('#close3').click(function(){
        if($('.Gl').siblings('.kk3').css({display:'block'})){
            $('.Gl').siblings('.kk3').fadeOut()
        }else{
            $('.Gl').siblings('.kk3').fadeIn()
        }

    })
//查看活动信息页面 添加活动反馈按钮
    $('#an4').click(function(){
        if($('.Gl').siblings('.kk4').css({display:'none'})){
            $('.Gl').siblings('.kk4').fadeIn()
        }else{
            $('.Gl').siblings('.kk4').fadeOut()
        }

    })
// 添加活动反馈页面 取消按钮
    $('#close4').click(function(){
        if($('.Gl').siblings('.kk4').css({display:'block'})){
            $('.Gl').siblings('.kk4').fadeOut()
        }else{
            $('.Gl').siblings('.kk4').fadeIn()
        }

    })


});

