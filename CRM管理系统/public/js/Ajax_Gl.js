//------------------------------------------------------Gl学校管理------------------------------------------
// 警告框
function xx_Gl(x){
    $(".alert_Gl").fadeIn();
    $(".txt_Gl").text(x)
    setTimeout(function(){
        $(".alert_Gl").fadeOut(500);
    },1500);
}





var sname; //学校名
//学校活动列表(主页面)
$(function(){
    var nei1 = $(".nei1").val();
    var nei2 = $(".nei2").val();
    var nei3 = $(".nei3").val();
    var nei4 = $(".nei4").val();
    var obj;

    obj = {
        nei1:nei1,
        nei2:nei2,
        nei3:nei3,
        nei4:nei4
    }

    $.ajax({
        type:"post",
        data:obj,
        url:"/liebiao1",
        success:function(gat){
            console.log(gat);
            var html ;


            for(var i = 0;i < gat.length ;i++){
                var str=gat[i].录入时间;
                var year=str.split('T')[0];
                while(year.indexOf('-') >= 0)
                    year = year.replace('-','/');

                html += '<tr class="Tr1" datall = "flose"><td class="nei1">'+gat[i].学校名称+'</td><td class="nei2">'+gat[i].校长+'</td><td class="nei3">'+year+'</td><td class="nei4">'+gat[i].状态+'</td></tr>'
            }
            $(".showTable1").html(html);
        }
    })
})
var id_shu //数据库列表id
$(document).on("click",".Tr1",function(){
    $(".Tr1").css({backgroundColor:""});
    $(".Tr1").attr("datall","flose");
    $(this).attr("datall","true");
    $(this).css({backgroundColor:'orange'});
    sname=$(this).children("td")[0].innerText;
    console.log(sname);
})



//查看活动信息页面 查看活动信息按钮
$(function(){
    $("#an1").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl7();
        }
//查看活动信息页面列表
        function ajaxscl7(){
            var obj,s_name;
            s_name=sname;
            obj = {
                s_name:s_name
            }
            $.ajax({
                type:"post",
                data:obj,
                url:"/liebiao2",
                success:function(gat){
                    console.log(gat);
                    console.log(123);
                    if(gat!=""){
                        $(".showTable2").fadeIn();
                        var html ;
                        for(var i = 0;i < gat.length ;i++){
                            var str=gat[i].时间;
                            var year=str.split('T')[0];
                            while(year.indexOf('-') >= 0)
                                year = year.replace('-','/');

                            html += '<tr><td class="nei5" style="width: 16.6%" >'+gat[i].活动名称+'</td><td class="nei6" style="width: 16.6%">'+year+'</td><td class="nei7" style="width: 16.6%" >'+gat[i].地点+'</td><td class="nei8" style="width: 16.6%">'+gat[i].主题+'</td><td class="nei9" style="width: 16.6%">'+gat[i].负责部门+'</td><td class="nei10" style="width: 16.6%">'+gat[i].负责人+'</td></tr>'
                        }
                        $(".showTable2").html(html);
                        html = '';
                    }else{
                        $(".showTable2").fadeOut();
                    }

                }
            });
        }

    })
})

//查看活动反馈页面列表
$(function(){
    $("#an3").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl8();
        }
        function ajaxscl8(){
            var obj,s_name;
            s_name=sname;
            obj = {
                s_name:s_name
            }
            $.ajax({
                type:"post",
                data:obj,
                url:"/liebiao3",
                success:function(gat){
                    console.log(gat);
                    var html ;
                    for(var i = 0;i < gat.length ;i++){
                        html += '<tr><td class="nei11" style="width: 25%">'+gat[i].采访人+'</td><td class="nei12" style="width: 25%">'+gat[i].被采访人+'</td><td class="nei13" style="width: 25%">'+gat[i].身份+'</td><td class="nei14" style="width: 25%">'+gat[i].反馈内容+'</td></tr>'
                    }

                    $(".showTable3").html(html);
                    html = '';
                }
            });
        }

    })
})




//添加活动反馈页面 添加按钮
$(function(){
    $("#add2").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl9();
        }
    })
    function ajaxscl9(){
        if($("#h1").val()!=""&&$("#h2").val()!=""&&$("#h3").val()!=""&&$("#h4").val()!=""&&$("#h5").val()!=""){
            var obj ={
                caifang:$("#h1").val(),
                beicaifang:$("#h2").val(),
                shengfen:$("#h3").val(),
                neirong:$("#h4").val(),
                xuem:$("#h5").val()
            };
            $.ajax({
                type:"post",
                url:"/tianjia1",
                data:obj,
                success:function(gat){
                    //console.log(gat);
                    $("#h1").val("") ;
                    $("#h2").val("") ;
                    $("#h3").val("") ;
                    $("#h4").val("") ;
                    $("#h5").val("") ;
                }
            })

            $('.Gl').siblings('.kk4').fadeOut();
        }else{
            xx_Gl("请仔细完善你的信息！！！")
        }

    }
})



//添加活动页面 添加按钮
$(function(){
    $("#add1").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl10();


        }
    })
    function ajaxscl10(){
        if($("#j1").val()!="" && $("#j2").val()!="" && $("#j3").val()!="" && $("#j4").val()!="" && $("#j5").val()!="" && $("#j6").val()!="" && $("#j7").val()!=""){
            var obj ={
                huodongm:$("#j1").val(),
                huodongs:$("#j2").val(),
                huodongd:$("#j3").val(),
                zuti:$("#j4").val(),
                fuzeb:$("#j5").val(),
                fuzer:$("#j6").val(),
                xunm:$("#j7").val()
            };
            $.ajax({
                type:"post",
                url:"/tianjia2",
                data:obj,
                success:function(gat){
                    //console.log(gat);
                    $("#j1").val("");
                    $("#j2").val("");
                    $("#j3").val("");
                    $("#j4").val("");
                    $("#j5").val("");
                    $("#j6").val("");
                    $("#j7").val("");
                }
            })
            //传输到信息一览
            var j4 =  $("#j4").val();

            var date=new Date();
            var year=date.getFullYear();
            var month=date.getMonth()+1;
            var day=date.getDate();
            //console.log(year+"/"+month+"/"+day);
            var nowtime =year+"/"+month+"/"+day;
            var obj2={
                j4:j4,
                nowtime:nowtime
            }

            $.ajax({
                type:"post",
                url:"/chuanshuxin1",
                data:obj2,
                success:function(gat){
                    //console.log(gat);
                }
            })

            $('.Gl').siblings('.kk1').fadeOut();
        }else{
            xx_Gl("请仔细完善你的信息！！！")
        }

    }

})



//学校管理列表(次页面)
//录入新学校 添加按钮
$(function(){
    $("#add3").on("click",function(){
            ajaxscl11();
    })
    function ajaxscl11(){
        if($("#w1").val()!="" && $("#w2").val()!="" && $("#w3").val()!="" && $("#w4").val()!="" && $("#w5").val()!="" && $("#w6").val()!="" && $("#w7").val()!="" && $("#w8").val()!="" && $("#w9").val()!="" && $("#w10").val()!=""){
            var obj ={
                w1:$("#w1").val(),
                w2:$("#w2").val(),
                w3:$("#w3").val(),
                w4:$("#w4").val(),
                w5:$("#w5").val(),
                w6:$("#w6").val(),
                w7:$("#w7").val(),
                w8:$("#w8").val(),
                w9:$("#w9").val(),
                w10:$("#w10").val()
            };
            $.ajax({
                type:"post",
                url:"/tianjia3",
                data:obj,
                success:function(gat){
                    //console.log(gat);
                    if(gat=="数据添加失败"){
                        xx_Gl("学校已存在！！")
                    }else{
                        xx_Gl("学校信息成功录入")
                        //录入学校信息之后 重新加载列表
                        $(function(){
                            var nei1 = $(".nei1").val();
                            var nei2 = $(".nei2").val();
                            var nei3 = $(".nei3").val();
                            var nei4 = $(".nei4").val();
                            var obj;

                            obj = {
                                nei1:nei1,
                                nei2:nei2,
                                nei3:nei3,
                                nei4:nei4
                            }
                            $.ajax({
                                type:"post",
                                data:obj,
                                url:"/liebiao1",
                                success:function(gat){
                                    //console.log(gat);
                                    var html ;
                                    var str=gat[0].录入时间;
                                    var year=str.split('T')[0];
                                    while(year.indexOf('-') >= 0)
                                        year = year.replace('-','/');
                                    for(var i = 0;i < gat.length ;i++){
                                        html += '<tr class="Tr1" ><td class="nei1">'+gat[i].学校名称+'</td><td class="nei2">'+gat[i].校长+'</td><td class="nei3">'+year+'</td><td class="nei4">'+gat[i].状态+'</td></tr>'
                                    }
                                    $(".showTable1").html(html);
                                    $(".nei1").on("click",function(){
                                        sname=$(this).text();
                                        //console.log(sname);
                                    })
                                }
                            });
                        })

                            $("#w1").val(""),
                            $("#w2").val(""),
                            $("#w3").val(""),
                            $("#w4").val(""),
                            $("#w5").val(""),
                            $("#w6").val(""),
                            $("#w7").val(""),
                            $("#w8").val(""),
                            $("#w9").val(""),
                            $("#w10").val("")
                    }

                }

            })
            $('.Gl').siblings('.kk').fadeOut();
        }else{
            xx_Gl("请仔细完善你的信息！！！")
        }
    }
})

//点击查看学校信息 按钮
$(function(){

    $("#an2Gl").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl3();
            ajaxscl4();
        }
    })
    //查看学校信息 页面 信息
    function ajaxscl3(){
        var obj,s_name;
        s_name=sname;
        obj = {
            s_name:s_name
        }
        $.ajax({
            type:"post",
            data:obj,
            url:"/yemian1",
            success:function(data){
                //console.log(data);
                var str=data[0].申请项目时间;
                var year=str.split('T')[0];
                while(year.indexOf('-') >= 0)
                    year = year.replace('-','/');
                var str1=data[0].立刻批准时间;
                var year1=str1.split('T')[0];
                while(year1.indexOf('-') >= 0)
                    year1 = year1.replace('-','/');
                var str2=data[0].立刻批准时间;
                var year2=str2.split('T')[0];
                while(year2.indexOf('-') >= 0)
                    year2 = year2.replace('-','/');

                $("#p1Gl").text(data[0].学校名称);
                $("#p2Gl").text(data[0].联系电话);
                $("#p3Gl").text(data[0].老师人数);
                $("#p4Gl").text(data[0].负责人);
                $("#p5Gl").text(year);
                $("#p6Gl").text(data[0].所属城市);
                $("#p7Gl").text(data[0].校长);
                $("#p8Gl").text(data[0].负责部门);
                $("#p9Gl").text(data[0].状态);
                $("#p10Gl").text(year1);
                $("#p11Gl").text(data[0].学校地址);
                $("#p12Gl").text(data[0].学生人数);
                $("#p13Gl").text(data[0].说明);
                $("#p14Gl").text(year2);
                $("#p15Gl").text(data[0].审核意见);
                //console.log(data[0].学校名称)
            }
        });
    }

//查看学校信息页面      沟通列表
    function ajaxscl4(){
        var obj,s_name;
        s_name=sname;

        obj = {
            s_name:s_name
        }
        $.ajax({
            type:"post",
            data:obj,
            url:"/liebiao4",
            success:function(gat){
                //console.log(gat);

                var html ;
                for(var i = 0;i < gat.length ;i++){
                    var str=gat[i].日期;
                    var year=str.split('T')[0];
                    while(year.indexOf('-') >= 0)
                        year = year.replace('-','/');
                    html += '<tr><td class="ne1">'+year+'</td><td class="ne2">'+gat[i].校方联系人+'</td><td class="ne3">'+gat[i].职务+'</td><td class="ne4">'+gat[i].沟通人+'</td><td class="ne5">'+gat[i].沟通内容+'</td></tr>'
                }
                $(".showTable4").html(html);
                html = '';
            }
        });
    }
})
//添加沟通记录页面  添加按钮
$(function(){
    $("#add4").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl()
        }else{
            ajaxscl12();
        }
    })
    function ajaxscl12(){
        if($("#p16Gl").val()!="" && $("#p17Gl").val()!="" && $("#p18Gl").val()!="" && $("#p19Gl").val()!="" && $("#p20Gl").val()!="" && $("#h4").val()!=""){
            var obj ={
                p16Gl:$("#p16Gl").val(),
                p17Gl:$("#p17Gl").val(),
                p18Gl:$("#p18Gl").val(),
                p19Gl:$("#p19Gl").val(),
                p20Gl:$("#p20Gl").val(),
                h4:$("#h4").val()
            };
            $.ajax({
                type:"post",
                url:"/tianjia4",
                data:obj,
                success:function(gat){
                    //console.log(gat);
                    $("#p16Gl").val(""),
                        $("#p17Gl").val(""),
                        $("#p18Gl").val(""),
                        $("#p19Gl").val(""),
                        $("#p20Gl").val(""),
                        $("#h4").val("")
                    $(function(){
                        var obj,s_name;
                        s_name=sname;

                        obj = {
                            s_name:s_name
                        }
                        $.ajax({
                            type:"post",
                            data:obj,
                            url:"/liebiao4",
                            success:function(gat){
                                //console.log(gat);
                                var html ;
                                for(var i = 0;i < gat.length ;i++){
                                    html += '<tr><td class="ne1">'+gat[i].日期+'</td><td class="ne2">'+gat[i].校方联系人+'</td><td class="ne3">'+gat[i].职务+'</td><td class="ne4">'+gat[i].沟通人+'</td><td class="ne5">'+gat[i].沟通内容+'</td></tr>'
                                }
                                $(".showTable4").html(html);
                                html = '';
                            }
                        });
                    })

                }
            })

            $('.Gl').siblings('.ky2').fadeOut();
        }else{
            xx_Gl("请仔细完善你的信息！！！")
        }
    }
})



//点击审核按钮
$(function(){
    $("#an5-Gl").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl5();
        }
    })
//审核页面 信息
    function ajaxscl5() {
        var obj, s_name;
        s_name = sname;
        obj = {
            s_name: s_name
        }
        $.ajax({
            type: "post",
            data: obj,
            url: "/yemian2",
            success: function (gat) {
                //console.log(gat);
                var str=gat[0].申请项目时间;
                var year=str.split('T')[0];
                while(year.indexOf('-') >= 0)
                    year = year.replace('-','/');
                var str1=gat[0].申请项目时间;
                var year1=str1.split('T')[0];
                while(year1.indexOf('-') >= 0)
                    year1 = year1.replace('-','/');
                var str2=gat[0].申请项目时间;
                var year2=str2.split('T')[0];
                while(year2.indexOf('-') >= 0)
                    year2 = year2.replace('-','/');
                $("#u1Gl").text(gat[0].学校名称);
                $("#u2Gl").text(gat[0].联系电话);
                $("#u3Gl").text(gat[0].老师人数);
                $("#u4Gl").text(gat[0].负责人);
                $("#u5Gl").text(year);
                $("#u6Gl").text(gat[0].所属城市);
                $("#u7Gl").text(gat[0].校长);
                $("#u8Gl").text(gat[0].负责部门);
                $("#u9Gl").text(gat[0].状态);
                $("#u10Gl").text(year1);
                $("#u11Gl").text(gat[0].学校地址);
                $("#u12Gl").text(gat[0].学生人数);
                $("#u13Gl").text(gat[0].说明);
                $("#u14Gl").text(year2);
                $("#u15Gl").text(gat[0].审核意见);
            }
        });
    }
})



//修改学校信息 页面
//1.第一时间所看到的
$(function(){
    $("#an3-Gl").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl12();
        }
    })
    function ajaxscl12() {
                var obj, s_name;
                s_name = sname;
                obj = {
                    s_name: s_name
                }
            $.ajax({
                type: "post",
                data: obj,
                url: "/yemian3",
                success: function (gat) {
                    //console.log(gat);
                    var str=gat[0].申请项目时间;
                    var year=str.split('T')[0];
                    while(year.indexOf('-') >= 0)
                        year = year.replace('-','/');
                    var str1=gat[0].立刻批准时间;
                    var year1=str1.split('T')[0];
                    while(year1.indexOf('-') >= 0)
                        year1 = year1.replace('-','/');
                    var str2=gat[0].录入时间;
                    var year2=str2.split('T')[0];
                    while(year2.indexOf('-') >= 0)
                        year2 = year2.replace('-','/');
                    $("#o1Gl").val(gat[0].学校名称);
                    $("#o2Gl").val(gat[0].联系电话);
                    $("#o3Gl").val(gat[0].老师人数);
                    $("#o4Gl").val(gat[0].负责人);
                    $("#o5Gl").val(year);
                    $("#o6Gl").val(gat[0].所属城市);
                    $("#o7Gl").val(gat[0].校长);
                    $("#o8Gl").val(gat[0].负责部门);
                    $("#o9Gl").val(gat[0].状态);
                    $("#o10Gl").val(year1);
                    $("#o11Gl").val(gat[0].学校地址);
                    $("#o12Gl").val(gat[0].学生人数);
                    $("#o13Gl").val(gat[0].说明);
                    $("#o14Gl").val(year2);
                    $("#o15Gl").val(gat[0].审核意见);
                }
            })

    }
})
//修改学校信息 页面
//2.点击确认按钮之后
$(function(){
    $("#close4-Gl").on("click",function(){
        ajaxscl13();
    })
    function ajaxscl13(){
        if ($("#o1Gl").val()!="" && $("#o2Gl").val()!="" && $("#o3Gl").val()!="" && $("#o4Gl").val()!="" && $("#o5Gl").val()!="" && $("#o6Gl").val()!="" && $("#o7Gl").val()!="" && $("#o8Gl").val()!="" && $("#o9Gl").val()!="" && $("#o10Gl").val()!="" && $("#o11Gl").val()!="" && $("#o12Gl").val()!="" && $("#o13Gl").val()!="" && $("#o14Gl").val()!="" && $("#o15Gl").val()!=""){
                var  s_name;
                s_name = sname;

                var o1Gl = $("#o1Gl").val();
                var o2Gl = $("#o2Gl").val();
                var o3Gl = $("#o3Gl").val();
                var o4Gl = $("#o4Gl").val();
                var o5Gl = $("#o5Gl").val();
                var o6Gl = $("#o6Gl").val();
                var o7Gl = $("#o7Gl").val();
                var o8Gl = $("#o8Gl").val();
                var o9Gl = $("#o9Gl").val();
                var o10Gl = $("#o10Gl").val();
                var o11Gl = $("#o11Gl").val();
                var o12Gl = $("#o12Gl").val();
                var o13Gl = $("#o13Gl").val();
                var o14Gl = $("#o14Gl").val();
                var o15Gl = $("#o15Gl").val();
                //console.log(o1Gl);


                $.ajax({
                    type:"post",
                    data: {
                        s_name: s_name,
                        o1Gl:o1Gl,
                        o2Gl:o2Gl,
                        o3Gl:o3Gl,
                        o4Gl:o4Gl,
                        o5Gl:o5Gl,
                        o6Gl:o6Gl,
                        o7Gl:o7Gl,
                        o8Gl:o8Gl,
                        o9Gl:o9Gl,
                        o10Gl:o10Gl,
                        o11Gl:o11Gl,
                        o12Gl:o12Gl,
                        o13Gl:o13Gl,
                        o14Gl:o14Gl,
                        o15Gl:o15Gl
                    },
                    url:"/yemian5",
                    success:function(gat){
                        //console.log(gat);
                        //修改学校信息之后 重新加载列表
                        $(function(){
                            var nei1 = $(".nei1").val();
                            var nei2 = $(".nei2").val();
                            var nei3 = $(".nei3").val();
                            var nei4 = $(".nei4").val();
                            var obj;

                            obj = {
                                nei1:nei1,
                                nei2:nei2,
                                nei3:nei3,
                                nei4:nei4
                            }
                            $.ajax({
                                type:"post",
                                data:obj,
                                url:"/liebiao1",
                                success:function(gat){
                                    //console.log(gat);
                                    var html ;
                                    var str=gat[0].录入时间;
                                    var year=str.split('T')[0];
                                    while(year.indexOf('-') >= 0)
                                        year = year.replace('-','/');
                                    for(var i = 0;i < gat.length ;i++){
                                        html += '<tr class="Tr1" ><td class="nei1">'+gat[i].学校名称+'</td><td class="nei2">'+gat[i].校长+'</td><td class="nei3">'+year+'</td><td class="nei4">'+gat[i].状态+'</td></tr>'
                                    }
                                    $(".showTable1").html(html);
                                    $(".nei1").on("click",function(){
                                        sname=$(this).text();
                                        //console.log(sname);
                                    })
                                }
                            });
                            xx_Gl("学校信息修改成功！！！")
                            $('.Gl').siblings('.ky3').fadeOut();
                        })
                    }
                });
        }else{
            xx_Gl("请仔细完善你的信息！！！")
        }
    }





})


//点击申请立项按钮
$(function(){
    $("#an4-Gl").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl6();
        }
//申请立项页面
        function ajaxscl6() {
            var obj, s_name;
            s_name = sname;
            obj = {
                s_name: s_name
            }
            $.ajax({
                type: "post",
                data: obj,
                url: "/yemian4",
                success: function (gat) {
                    //console.log(gat);
                    $(".mingc").text(s_name);
                }
            })
        }
    })
})
//审核页面 批准立项按钮
$(function(){
    $("#close6-Gl").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl14();
        }
        function ajaxscl14(){
            var u15Gl=$("#u15Gl").val;
            var  obj,s_name;
            s_name = sname;
            obj = {
                s_name: s_name,
                u15Gl:u15Gl
            }
            $.ajax({
                type: "post",
                data: obj,
                url: "/yemian6",
                success: function (gat) {
                    //console.log(gat);
                    $(function(){
                        var obj, s_name;
                        s_name = sname;
                        obj = {
                            s_name: s_name
                        }
                        $.ajax({
                            type: "post",
                            data: obj,
                            url: "/yemian2",
                            success: function (gat) {
                                //console.log(gat);
                                $("#u1Gl").text(gat[0].学校名称);
                                $("#u2Gl").text(gat[0].联系电话);
                                $("#u3Gl").text(gat[0].老师人数);
                                $("#u4Gl").text(gat[0].负责人);
                                $("#u5Gl").text(gat[0].申请项目时间);
                                $("#u6Gl").text(gat[0].所属城市);
                                $("#u7Gl").text(gat[0].校长);
                                $("#u8Gl").text(gat[0].负责部门);
                                $("#u9Gl").text(gat[0].状态);
                                $("#u10Gl").text(gat[0].立刻批准时间);
                                $("#u11Gl").text(gat[0].学校地址);
                                $("#u12Gl").text(gat[0].学生人数);
                                $("#u13Gl").text(gat[0].说明);
                                $("#u14Gl").text(gat[0].录入时间);
                                $("#u15Gl").text(gat[0].审核意见);
                            }
                        });

                    })
                    $(function(){
                        var nei1 = $(".nei1").val();
                        var nei2 = $(".nei2").val();
                        var nei3 = $(".nei3").val();
                        var nei4 = $(".nei4").val();
                        var obj;

                        obj = {
                            nei1:nei1,
                            nei2:nei2,
                            nei3:nei3,
                            nei4:nei4
                        }
                        $.ajax({
                            type:"post",
                            data:obj,
                            url:"/liebiao1",
                            success:function(gat){
                                //console.log(gat);
                                var html ;
                                for(var i = 0;i < gat.length ;i++){
                                    html += '<tr class="Tr1" ><td class="nei1">'+gat[i].学校名称+'</td><td class="nei2">'+gat[i].校长+'</td><td class="nei3">'+gat[i].录入时间+'</td><td class="nei4">'+gat[i].状态+'</td></tr>'
                                }
                                $(".showTable1").html(html);
                                $(".nei1").on("click",function(){
                                    sname=$(this).text();
                                    //console.log(sname);
                                })
                            }
                        });
                    })

                }
            })
            xx_Gl("批准已立项.")
            $('.Gl').siblings('.ky5').fadeOut();
        }
    })
})

//审核页面 驳回立项按钮
$(function(){
    $("#close7-Gl").on("click",function(){
        if(sname==undefined&&sname==null){
            xx_Gl("请点击选中学校")
        }else{
            ajaxscl15();
        }
        function ajaxscl15(){
            var u15Gl=$("#u15Gl").val;
            var  obj,s_name;
            s_name = sname;
            obj = {
                s_name: s_name,
                u15Gl:u15Gl
            }
            $.ajax({
                type: "post",
                data: obj,
                url: "/yemian7",
                success: function (gat) {
                    //console.log(gat);
                    $(function(){
                        var obj, s_name;
                        s_name = sname;
                        obj = {
                            s_name: s_name
                        }
                        $.ajax({
                            type: "post",
                            data: obj,
                            url: "/yemian2",
                            success: function (gat) {
                                //console.log(gat);
                                var str=gat[0].申请项目时间;
                                var year=str.split('T')[0];
                                while(year.indexOf('-') >= 0)
                                    year = year.replace('-','/');
                                var str1=gat[0].立刻批准时间;
                                var year1=str1.split('T')[0];
                                while(year1.indexOf('-') >= 0)
                                    year1 = year1.replace('-','/');
                                var str2=gat[0].录入时间;
                                var year2=str2.split('T')[0];
                                while(year2.indexOf('-') >= 0)
                                    year2 = year2.replace('-','/');
                                $("#u1Gl").text(gat[0].学校名称);
                                $("#u2Gl").text(gat[0].联系电话);
                                $("#u3Gl").text(gat[0].老师人数);
                                $("#u4Gl").text(gat[0].负责人);
                                $("#u5Gl").text(year);
                                $("#u6Gl").text(gat[0].所属城市);
                                $("#u7Gl").text(gat[0].校长);
                                $("#u8Gl").text(gat[0].负责部门);
                                $("#u9Gl").text(gat[0].状态);
                                $("#u10Gl").text(year1);
                                $("#u11Gl").text(gat[0].学校地址);
                                $("#u12Gl").text(gat[0].学生人数);
                                $("#u13Gl").text(gat[0].说明);
                                $("#u14Gl").text(year2);
                                $("#u15Gl").text(gat[0].审核意见);
                            }
                        });

                    })
                    $(function(){
                        var nei1 = $(".nei1").val();
                        var nei2 = $(".nei2").val();
                        var nei3 = $(".nei3").val();
                        var nei4 = $(".nei4").val();
                        var obj;

                        obj = {
                            nei1:nei1,
                            nei2:nei2,
                            nei3:nei3,
                            nei4:nei4
                        }
                        $.ajax({
                            type:"post",
                            data:obj,
                            url:"/liebiao1",
                            success:function(gat){
                                //console.log(gat);
                                var html ;
                                var str=gat[0].录入时间;
                                var year=str.split('T')[0];
                                while(year.indexOf('-') >= 0)
                                    year = year.replace('-','/');
                                for(var i = 0;i < gat.length ;i++){
                                    html += '<tr class="Tr1" ><td class="nei1">'+gat[i].学校名称+'</td><td class="nei2">'+gat[i].校长+'</td><td class="nei3">'+year+'</td><td class="nei4">'+gat[i].状态+'</td></tr>'
                                }
                                $(".showTable1").html(html);
                                $(".nei1").on("click",function(){
                                    sname=$(this).text();
                                    //console.log(sname);
                                })
                            }
                        });
                    })

                }
            })
            xx_Gl("立项已驳回.")
            $('.Gl').siblings('.ky5').fadeOut();
        }
    })
})





//--------------------------------------------------Gl学校管理---结束-----------------
