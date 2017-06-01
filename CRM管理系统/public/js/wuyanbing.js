//这是所有弹出框的js函数
$(function() {
    //这是alert的提示函数
    function xx_lx(x){
        $(".alert_lx").fadeIn();
        $(".txt_lx").text(x);
        setTimeout(function(){
            $(".alert_lx").fadeOut(500);
        },1000);
    }
    //这是正则判断的时候
    function yansepanduan_wyb(a){
        a.on("focus",function(){
            $(this).css({border:"1px solid green"});
        })
        a.on("blur",function(){
            var b = $(this).val();
            if(b==""){
                $(this).css({border:"1px solid red"});
            }
            else{
                $(this).css({border:"1px solid green"});
            }
        })
    }
    yansepanduan_wyb($("#textname_wyb"));
    yansepanduan_wyb($("#textstudy_wyb"));
    yansepanduan_wyb($("#textsreet_wyb"));
    yansepanduan_wyb($("#textphone_wyb"));
    //这是显示隐藏的部分
    $("#table_1_wyb>tr").on("click", function () {
        $("this").css({color: "#fff"});
        console.log("kyiasd")
    })
    $('#btnyingcang_1').on("click", function () {
        $('#div_yingcang_wyb_1').slideUp();
    })
    $("#showyingcang1_wyb").on("click", function () {
        $('#div_yingcang_wyb_1').slideDown();

    })
    $("#div_yingcang_wyb_2").on("click", function () {
        $("#div_yingcang_wyb_2").slideUp()
    })
    $("#showyingcang2_wyb").on("click", function () {
        $("#div_yingcang_wyb_2").slideDown()
        //$('#showyingcang2_wyb').css({zindex:10000});
    })
    $("#btndeletyincang_wyb_3").on("click", function () {
        $("#div_yingcang_wyb_3").slideUp()
    })
    $("#showyingcang3_wyb").on("click", function () {
        $("#div_yingcang_wyb_3").slideDown()

    })
    $("#btnyingcang_4").on("click", function () {
        $("#div_yingcang_wyb_4").slideUp()
    })
    $("#btnyingcang_41").on("click", function () {
        $("#div_yingcang_wyb_4").slideUp()
    })
    $("#showyingcang4_wyb").on("click", function () {
        $("#div_yingcang_wyb_4").slideDown()

    })
    $("#showguanliyincang_wyb_1").on("click", function () {
        $("#div_yingcang_wyb_guanli_1").slideDown();
    })
    $("#btnyincang_5").on("click", function () {
        $("#div_yingcang_wyb_guanli_1").slideUp();
    })
    $("#btnyincang_6").on("click", function () {
        $("#div_yingcang_wyb_guanli_2").slideUp();
    })
    $("#showguanliyincang_wyb_2").on("click", function () {
        $("#div_yingcang_wyb_guanli_2").slideDown();
        $
    })
    $("#showbumengyanliyincang_wyb_2").on("click", function () {
        $("#div_yingcang_wyb_3").slideDown();
    })
    //这是下拉列表的函数
    var e;
    $("#ul_first_wyb>li").on("click",function(){
        var h = $(this).children("a")[0].innerText;
         $("#but_first_wyb").text(h);
        var gg = $("#but_first_wyb")[0].innerText;
        e=gg;
        //console.log(h);
    })
    //这是查找的函数
    $(document).on("click","#anneixingchazhao_wyb",function(){
        //console.log(e);
        var k =  $("#input_first_wyb").val();
        //console.log(k);
        if(e==undefined){
            xx_lx("请选择查询类型");
        }else if(e=="所有员工"){
            var obj = {
                e:k,
            }
            $.ajax({
                type:"post",
                url:"/mohuchaxun1",
                data:obj,
                success:function(gat){
                    //console.log(gat);
                    if(gat=="查询错误"){
                        xx_lx(gat);
                    }else if(gat=="")
                    {
                        xx_lx("查无此人");
                    }
                    else{
                        var html;

                        for (var i = 0; i < gat.length; i++) {
                            var da=gat[i].出生日期;
                            var year=da.split('T')[0];
                            while(year.indexOf('-') >= 0)
                                year = year.replace('-','/');
                            html += '<tr class="Trwyb"   data11 ="flose" ><td class="nei1">' + gat[i].姓名 + '</td><td class="nei2">' + gat[i].性别 + '</td><td class="nei3">' + year + '</td><td class="nei4">' + gat[i].文化程度 + '</td><td class="nei5">' + gat[i].联系方式 + '</td><td class="nei6">' + gat[i].所在部门 + '</td><td class="nei7">' + gat[i].工作职位 + '</td></tr>'
                            $("#table_1_wyb").html(html);
                            x = $("#table_1_wyb>tr");
                        }
                    }
                }
            })
        }
        else if(e=="所属部门"){
            //console.log(3);
            var obj = {
                shuoshubumen:k,
            }
            $.ajax({
                type:"post",
                url:"/shuoshubumen",
                data:obj,
                success:function(data){
                    //console.log(data);
                    if(data==""||data=="查询错误"){
                        xx_lx("查询错误");
                    }
                    else{
                        var html;
                        for (var i = 0; i < data.length; i++) {
                            var da=data[i].出生日期;
                            var year=da.split('T')[0];
                            while(year.indexOf('-') >= 0)
                                year = year.replace('-','/');
                            html += '<tr class="Trwyb"   data11 ="flose" ><td class="nei1">' + data[i].姓名 + '</td><td class="nei2">' + data[i].性别 + '</td><td class="nei3">' + year + '</td><td class="nei4">' + data[i].文化程度 + '</td><td class="nei5">' + data[i].联系方式 + '</td><td class="nei6">' + data[i].所在部门 + '</td><td class="nei7">' + data[i].工作职位 + '</td></tr>'
                            $("#table_1_wyb").html(html);
                            x = $("#table_1_wyb>tr");
                        }
                    }
                }
            })
        }
        else if(e=="文化程度"){
            //console.log("文化程度");
            var obj = {
                wenhuachengdu:k,
            }
            $.ajax({
                type:"post",
                url:"/wenhuachengdu",
                data:obj,
                success:function(data){
                    //console.log(data);
                    if(data==""||data=="查询错误"){
                        xx_lx("查询错误");
                    }
                    else{
                        var html;
                        for (var i = 0; i < data.length; i++) {
                            var da=data[i].出生日期;
                            var year=da.split('T')[0];
                            while(year.indexOf('-') >= 0)
                                year = year.replace('-','/');
                            html += '<tr class="Trwyb"   data11 ="flose" ><td class="nei1">' + data[i].姓名 + '</td><td class="nei2">' + data[i].性别 + '</td><td class="nei3">' + data[i].出生日期 + '</td><td class="nei4">' + data[i].文化程度 + '</td><td class="nei5">' + data[i].联系方式 + '</td><td class="nei6">' + data[i].所在部门 + '</td><td class="nei7">' + data[i].工作职位 + '</td></tr>'
                            $("#table_1_wyb").html(html);
                            x = $("#table_1_wyb>tr");
                        }
                    }
                }
            })
        }
        else if(e=="工作职位"){
            //console.log("工作职位");
            var obj = {
                gongzuozhiwei:k,
            }
            $.ajax({
                type:"post",
                url:"/gongzuozhiwei",
                data:obj,
                success:function(data){
                    //console.log(data);
                    if(data==""||data=="查询错误"){
                        xx_lx("查询错误");
                    }
                    else{
                        var html;
                        for (var i = 0; i < data.length; i++) {
                            var da=data[i].出生日期;
                            var year=da.split('T')[0];
                            while(year.indexOf('-') >= 0)
                                year = year.replace('-','/');
                            html += '<tr class="Trwyb"   data11 ="flose" ><td class="nei1">' + data[i].姓名 + '</td><td class="nei2">' + data[i].性别 + '</td><td class="nei3">' + year + '</td><td class="nei4">' + data[i].文化程度 + '</td><td class="nei5">' + data[i].联系方式 + '</td><td class="nei6">' + data[i].所在部门 + '</td><td class="nei7">' + data[i].工作职位 + '</td></tr>'
                            $("#table_1_wyb").html(html);
                            x = $("#table_1_wyb>tr");
                        }
                    }
                }
            })
        }
    })
    //这是按时间查找的函数
    $("#anshijianchazhao_wyb").on("click",function(){
        var textimestart_wyb =$("#textimestart_wyb").val();
        var textimeend_wyb =$("#textimeend_wyb").val();
        //console.log(textimestart_wyb);
        //console.log(textimeend_wyb);

        if(textimeend_wyb>textimestart_wyb){
            //console.log("yes");
            var odj = {
                textimestart_wyb:textimestart_wyb,
                textimeend_wyb:textimeend_wyb,
            }
            $.ajax({
                type:"post",
                url:"/anshijianchazhao",
                data:odj,
                success:function(data){
                    //console.log(data);
                    var html;
                    for (var i = 0; i < data.length; i++) {
                        var da=data[i].出生日期;
                        var year=da.split('T')[0];
                        while(year.indexOf('-') >= 0)
                            year = year.replace('-','/');
                        html += '<tr class="Trwyb"   data11 ="flose" ><td class="nei1">' + data[i].姓名 + '</td><td class="nei2">' + data[i].性别 + '</td><td class="nei3">' + year + '</td><td class="nei4">' + data[i].文化程度 + '</td><td class="nei5">' + data[i].联系方式 + '</td><td class="nei6">' + data[i].所在部门 + '</td><td class="nei7">' + data[i].工作职位 + '</td></tr>'
                        $("#table_1_wyb").html(html);
                        x = $("#table_1_wyb>tr");
                    }

                }
            })
        }else{
            //console.log("no");
            xx_lx("时间选择有错");
        }




        //$.ajax({
        //    type:"post",
        //    url:"/anshijianchazhao",
        //    data:"",
        //    success:function(data){
        //        console.log(data);
        //    }
        //})
    })
    //查看全部
    $("#chankanquanbu_wyb_1").on("click",function(){
        shuaxinyemian();
    })
    $("#chankanquanbu_wyb_2").on("click",function(){
        shuaxinyemian();
    })
    //开始就发送Ajax的函数和参数
    //console.log(123);
    var obj = {
        right: 'right',
    }
    var domegat;
    var x;
    function shuaxinyemian(){
        $.ajax({
            type: "post",
            url: "/right",
            data: obj,
            success: function (gat) {
                //console.log(gat.length);
                domegat = gat;
                var html;
                var y;
                for (var i = 0; i < gat.length; i++) {
                    var da=gat[i].出生日期;
                    var year=da.split('T')[0];
                    while(year.indexOf('-') >= 0)
                        year = year.replace('-','/');

                    html += '<tr class="Trwyb"   data11 ="flose" ><td class="nei1">' + gat[i].姓名 + '</td><td class="nei2">' + gat[i].性别 + '</td><td class="nei3">' + year + '</td><td class="nei4">' + gat[i].文化程度 + '</td><td class="nei5">' + gat[i].联系方式 + '</td><td class="nei6">' + gat[i].所在部门 + '</td><td class="nei7">' + gat[i].工作职位 + '</td></tr>'
                    $("#table_1_wyb").html(html);
                    $("#table_1_wyb>tr>td").css({width:"10%"})
                    x = $("#table_1_wyb>tr");

                }


            }
        })
    }
    shuaxinyemian();

//这是查看员工信息的函数
    var name1;
    //$(document).on("mouseover", ".Trwyb", function (){
    //    $(".Trwyb").css({backgroundColor: "#fff"});
    //    $(this).css({backgroundColor: "#FFA500"});
    //
    //})


    $(document).on("click", ".Trwyb", function () {

        var gat = domegat;
        //console.log(x);
        $(".Trwyb").css({backgroundColor: ""});
        $(".Trwyb").attr("data11", "flose");
        $(this).attr("data11", "true");
        $(this).css({backgroundColor: "#FFA500"});
        var attry = $(this).attr("data11")
        var name = $(this).children("td")[0].innerText;
        //console.log(name);
        var h = 0;
        for (var i = 0; i < gat.length; i++) {
            if (name == gat[i].姓名&&attry=="true") {
                h++;
                if (h == 1) {
                    //console.log(gat[i]);
                    name1 = {
                        name1: gat[i].id
                    }
                }
                //这是添加在查看运功信息里面的
                $("#textname_wyb_span").html(gat[i].姓名);

                $("#texttime_wyb").html(gat[i].出生日期);
                $("#textstudy_wyb_span").html(gat[i].所属专业);
                $("#textsreet_wyb_span").html(gat[i].家庭住址);
                $("#label_spanbumen").html(gat[i].所在部门);
                $("#label_spansex").html(gat[i].性别);
                $("#label_spanwenhua").html(gat[i].文化程度);
                $("#textphone_wyb_span").html(gat[i].联系方式);
                $("#label_span_zhengzhi").html(gat[i].政治面貌);
                $("#label_span_job").html(gat[i].工作职位);


                //这是添加在修改员工信息里面的
                $("#textname_wyb_4").val(gat[i].姓名);
                var da2=gat[i].出生日期;
                var year2=da2.split('T')[0];
                while(year2.indexOf('-') >= 0)
                    year2 = year2.replace('-','/');
                $("#texttime_wyb_5").val(year2);
                $("#textstudy_wyb_6").val(gat[i].所属专业);
                $("#textsreet_wyb_7").val(gat[i].家庭住址);
                //$("#label_spanbumen").html(gat[i].所在部门);
                $("#span_sex_8").html(gat[i].性别);
                $("#span_study_9").html(gat[i].文化程度);
                $("#textphone_wyb_2").val(gat[i].联系方式);
                //$("#zhengshimiamao_10").checked(gat[i].政治面貌);
                //$("#label_span_job").html(gat[i].工作职位);

            }
        }
    })

//这是删除员工的函数
    var gat1name;
    $(document).on("click", "#quedingshanchuyuangong_wyb", function () {
        var gat1 = gat1name;
        $('#table_1_wyb> tr').each(function(i){
            //console.log($(this).attr("data11"));
        })
        $("#div_yingcang_wyb_3").hide();
        $.ajax({
            type: "post",
            url: "/shanchuyuangong",
            data: name1,
            success: function (data) {
                //console.log("删除成功！")
                //console.log(data);
                xx_lx("删除成功！");

                shuaxinyemian();
            }
        })
    })
    //这是添加员工的函数
    $(document).on("click","#tianjiayuangongxinxi_wyb",function(){
        $('#div_yingcang_wyb_1').fadeOut();
        var texttime_wyb = $("#texttime_wyb").val();
        var textname_wyb = $("#textname_wyb").val();
        var textstudy_wyb = $("#textstudy_wyb").val();
        var textsreet_wyb = $("#textsreet_wyb").val();
        var textphone_wyb = $("#textphone_wyb").val();
        var select_wyb_1 = $("#select_wyb_1 option:checked").text();//显示选中的值
        var select_wyb_2 = $("#select_wyb_2 option:checked").text();
        var select_wyb_3 = $("#select_wyb_3 option:checked").text();
        var select_wyb_4 = $("#select_wyb_4 option:checked").text();
        var sex_wyb_1 = $('input:radio:checked').attr("name1");
        var ruzhitime_wyb_1 = $("#texttime1_wyb").val();
        //console.log(texttime_wyb,textname_wyb,textstudy_wyb,textsreet_wyb,textphone_wyb,select_wyb_1,select_wyb_2,select_wyb_3,select_wyb_4,sex_wyb_1,ruzhitime_wyb_1);
        if(texttime_wyb!=""&&textname_wyb!=""&&textstudy_wyb!=""&&textsreet_wyb!=""&&textphone_wyb!=""){
            var Ygsj = {
                texttime_wyb:texttime_wyb,
                textname_wyb:textname_wyb,
                textstudy_wyb:textstudy_wyb,
                textsreet_wyb:textsreet_wyb,
                textphone_wyb:textphone_wyb,
                select_wyb_1:select_wyb_1,
                select_wyb_2:select_wyb_2,
                select_wyb_3:select_wyb_3,
                select_wyb_4:select_wyb_4,
                sex_wyb_1:sex_wyb_1,
                ruzhitime_wyb_1:ruzhitime_wyb_1
            }
            $.ajax({
                type:"post",
                url:"/tianjiaxinyuangong",
                data:Ygsj,
                success:function(gat1){
                    //console.log(gat1);
                    //console.log("添加成功");
                    xx_lx("添加成功")
                    $("#texttime_wyb").val("");
                    $("#textname_wyb").val("");
                    $("#textstudy_wyb").val("");
                    $("#textsreet_wyb").val("");
                    $("#textphone_wyb").val("");
                    $("#texttime1_wyb").val("");

                    shuaxinyemian();
                }
            })
        }
    })
    //修改员工的函数
    $(document).on("click","#btnyingcang_4",function(){
        var texttime_wyb = $("#texttime_wyb_5").val();
        var textname_wyb = $("#textname_wyb_4").val();
        var textstudy_wyb = $("#textstudy_wyb_6").val();
        var textsreet_wyb = $("#textsreet_wyb_7").val();
        var textphone_wyb = $("#textphone_wyb_2").val();
        var span_study_9 = $("#span_study_9").text();
        var select_wyb_1 = $("#select_wyb_suozaibumen option:checked").text();//显示选中的值
        var select_wyb_2 = $("#select_wyb_job option:checked").text();
        var select_wyb_3 = $("#zhengshimiamao_10 option:checked").text();
        //var select_wyb_4 = $("#select_wyb_4 option:checked").text();
        var sex_wyb_1 = $("#span_sex_8").text();
        //console.log(textname_wyb,sex_wyb_1,texttime_wyb,span_study_9,textphone_wyb,textstudy_wyb,textsreet_wyb,select_wyb_3,select_wyb_1,select_wyb_2);
        var Ygsj1 = {
            name2:textname_wyb,
            textphone_wyb:textphone_wyb,
            select_wyb_1:select_wyb_1,
            select_wyb_2:select_wyb_2,
            select_wyb_3:select_wyb_3,
        }
        $.ajax({
            type:"post",
            url:"/xiugaiyungongshuju",
            data:Ygsj1,
            success:function(gat1){
                //console.log(gat1);
                //console.log("修改成功");
                xx_lx("修改成功");
                //console.log(123456);
                var date=new Date();
                var year=date.getFullYear();
                var month=date.getMonth()+1;
                var day=date.getDate();
                namevalues = textname_wyb;
                var namelsl=123456+'修改了'+ namevalues +'的信息';
                //console.log(year+"/"+month+"/"+day);
                var nowtime =year+"/"+month+"/"+day;
                $.ajax({
                    type:"post",
                    url:"/rizineiro123",
                    //data:'',
                    data:{
                        nowtime:nowtime,
                        studentname:namelsl
                    },
                    success:function(data){
                        //console.log(data)
                    }
                });
                shuaxinyemian();
            }
        })
    })
})




    //删除员工的函数

    //var t =0;
    //$(document).on("click","#quedingshanchuyuangong_wyb",function(){
    //    $("#div_yingcang_wyb_3").hide()
    //    t++;
    //    if(t==1){
    //        $.ajax({
    //            type:"post",
    //            url:"/shanchuyuangong",
    //            data:name1,
    //            success:function(data){
    //                console.log("删除成功！")
    //                console.log(data);
    //            }
    //        })
    //    }
    //    $.ajax({
    //        type:"post",
    //        url:"/right",
    //        data:obj,
    //        success:function(gat1){
    //            console.log(gat1.length);
    //            console.log(gat1);
    //            var html1;
    //            for(var i = 0; i<gat1.length;i++){
    //                html1 += '<tr class="Trwyb1"><td class="nei1">'+gat1[i].姓名+'</td><td class="nei2">'+gat1[i].性别+'</td><td class="nei3">'+gat1[i].出生日期+'</td><td class="nei4">'+gat1[i].文化程度+'</td><td class="nei5">'+gat1[i].联系方式+'</td><td class="nei6">'+gat1[i].所在部门+'</td><td class="nei7">'+gat1[i].工作职位+'</td></tr>'
    //                $("#table_1_wyb").html(html1);
    //            }
    //        }
    //    })
    //})
//这是添加员工的函数
//   var gat1;
//    $("#tianjiayuangongxinxi_wyb").on("click",function(){
//        $('#div_yingcang_wyb_1').hide();
//        var texttime_wyb = $("#texttime_wyb").val();
//        var textname_wyb = $("#textname_wyb").val();
//        var textstudy_wyb = $("#textstudy_wyb").val();
//        var textsreet_wyb = $("#textsreet_wyb").val();
//        var textphone_wyb = $("#textphone_wyb").val();
//        var select_wyb_1 = $("#select_wyb_1 option:checked").text();//显示选中的值
//        var select_wyb_2 = $("#select_wyb_2 option:checked").text();
//        var select_wyb_3 = $("#select_wyb_3 option:checked").text();
//        var select_wyb_4 = $("#select_wyb_4 option:checked").text();
//        var sex_wyb_1 = $('input:radio:checked').attr("name1");
//        var ruzhitime_wyb_1 = $("#texttime1_wyb").val();
//        console.log(texttime_wyb,textname_wyb,textstudy_wyb,textsreet_wyb,textphone_wyb,select_wyb_1,select_wyb_2,select_wyb_3,select_wyb_4,sex_wyb_1,ruzhitime_wyb_1);
//        if(texttime_wyb!=""&&textname_wyb!=""&&textstudy_wyb!=""&&textsreet_wyb!=""&&textphone_wyb!=""){
//            var Ygsj = {
//                texttime_wyb:texttime_wyb,
//                textname_wyb:textname_wyb,
//                textstudy_wyb:textstudy_wyb,
//                textsreet_wyb:textsreet_wyb,
//                textphone_wyb:textphone_wyb,
//                select_wyb_1:select_wyb_1,
//                select_wyb_2:select_wyb_2,
//                select_wyb_3:select_wyb_3,
//                select_wyb_4:select_wyb_4,
//                sex_wyb_1:sex_wyb_1,
//                ruzhitime_wyb_1:ruzhitime_wyb_1
//            }
//            $.ajax({
//                type:"post",
//                url:"/tianjiaxinyuangong",
//                data:Ygsj,
//                success:function(gat1){
//                    console.log(gat1);
//                    console.log("添加成功");
//
//                }
//            })
//
//            $.ajax({
//                type:"post",
//                url:"/right",
//                data:obj,
//                success:function(gat1){
//                    console.log(gat1.length);
//                    console.log(gat1);
//                    var html1;
//                    for(var i = 0; i<gat1.length;i++){
//                        html1 += '<tr class="Trwyb1" data_info = "flose"><td class="nei1">'+gat1[i].姓名+'</td><td class="nei2">'+gat1[i].性别+'</td><td class="nei3">'+gat1[i].出生日期+'</td><td class="nei4">'+gat1[i].文化程度+'</td><td class="nei5">'+gat1[i].联系方式+'</td><td class="nei6">'+gat1[i].所在部门+'</td><td class="nei7">'+gat1[i].工作职位+'</td></tr>'
//                        $("#table_1_wyb").html(html1);
//                    }
//                    $(".Trwyb1").on("click",function(){
//                        console.log("这是添加后的函数");
//                        console.log($('.table_1_wyb > tr').eq(i));
//                        $(".Trwyb1").css({backgroundColor:"transparent"});
//                        $(".Trwyb1").attr("data_info","flose");
//                        $(this).attr("data_info","true");
//                        $(this).css({backgroundColor:"#fff"});
//                        console.log($(this).children("td")[0].innerText);
//                        var name = $(this).children("td")[0].innerText;
//                        var g = 0;
//                        for(var i = 0 ;i<gat1.length;i++){
//                            if(name == gat1[i].姓名){
//                                g++;
//                                if(g==1){
//                                    console.log(gat1[i]);
//                                    var name1 = {
//                                        name1:gat1[i].姓名
//                                }
//                                }
//                                //这是删除员工的函数
//
//                                //这是修改员工信息并且添加的函数
//                                $("#btnyingcang_4").on("click",function(){
//                                })
//                                //这是查看员工信息的函数
//                                $("#textname_wyb_span").html(gat1[i].姓名);
//                                $("#texttime_wyb").html(gat1[i].出生日期);
//                                $("#textstudy_wyb_span").html(gat1[i].所属专业);
//                                $("#textsreet_wyb_span").html(gat1[i].家庭住址);
//                                $("#label_spanbumen").html(gat1[i].所在部门);
//                                $("#label_spansex").html(gat1[i].性别);
//                                $("#label_spanwenhua").html(gat1[i].文化程度);
//                                $("#textphone_wyb_span").html(gat1[i].联系方式);
//                                $("#label_span_zhengzhi").html(gat1[i].政治面貌);
//                                $("#label_span_job").html(gat1[i].工作职位);
//
//                            }
//                        }
//                    })
//                }
//            })
//        }else{
//            alert("信息不全，请重新输入！");
//        }
//    })
//})






