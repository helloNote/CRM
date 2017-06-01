/**
 * Created by Administrator on 2017/4/5.
 */
$(".addinf").css({display:"none"});
//添加页面

//查询信息页面
//$("#studentInf").click(function(){
//    $(".seeinf").show();
//});




$(".Determineadd").click(function(){
    $(".seeinf").hide('slow');
})
//添加回访记录
$(".Addreturnrecord").click(function(){
    $(".addRecord").slideDown();
    //console.log(654654)
});
//$(".Determineadd").click(function(){
//    $(".addRecord").hide();
//});


$("#recorddays").blur(function(){
    //console.log($("#recorddays").val())
})

