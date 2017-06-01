/**
 * Created by Administrator on 2017/4/6.
 */
$(function(){
    function xx_lx1_1(x){
        $(".alert_lx_wyb_1").fadeIn();
        $(".txt_lx_wyb_1").text(x);
        setTimeout(function(){
            $(".alert_lx_wyb_1").fadeOut(500);
        },1000);
    }
    //这是界面刷新就发送的Ajax
    var bumen;
    function bumenjiamianguanli(){
        $.ajax({
            type:"post",
            url:"/bumenguanli",
            data:'',
            success:function(gat){
                //console.log(gat);
                bumen = gat;
                var html;
                for(var i = 0; i<gat.length;i++){
                    var da=gat[i].成立时间;
                    var year=da.split('T')[0];
                    while(year.indexOf('-') >= 0)
                        year = year.replace('-','/');
                    html += '<tr class="tr_bumen" data11="flase"><td class="bumen1">'+gat[i].部门名称+'</td><td class="bumen2">'+gat[i].部门主管+'</td><td class="bumen3">'+year+'</td><td class="bumen4">'+gat[i].部门描述+'</td></tr>'
                    $("#bumenguanli_wyb").html(html);
                }
            }
        })
    }
    bumenjiamianguanli();
    //这是添加函数发送的ajax
    $(document).on("click","#tianjiabumenxinxi_wyb",function(){
        $("#div_yingcang_wyb_guanli_2").fadeOut();
        var bumenname_wyb = $("#bumenname_wyb").val();
        var bumentime_wyb = $("#bumentime_wyb").val();
        var textarea_wyb_1 = $("#textarea_wyb_1").val();
        var select_bumenzhuguan = $("#select_bumenzhuguan_wyb option:checked").text();
        //console.log(bumenname_wyb);
        //console.log(bumentime_wyb);
        //console.log(textarea_wyb_1);
        //console.log(select_bumenzhuguan);
        var ohj = {
            bumenname_wyb:bumenname_wyb,
            bumentime_wyb:bumentime_wyb,
            textarea_wyb_1:textarea_wyb_1,
            select_bumenzhuguan:select_bumenzhuguan,

        }
        if(bumenname_wyb==""||bumentime_wyb==""||select_bumenzhuguan==""){

        }else{
            $.ajax({
                type:"post",
                url:"/tianjiabumenxinxi",
                data:ohj,
                success:function(data){
                    //console.log(data);
                    bumenjiamianguanli();
                    xx_lx1_1("添加成功")
                    $("#bumenname_wyb").val("")
                    $("#textarea_wyb_1").val("");
                }
            })
        }

    })
    $("#btnyincang_6_1").on("click",function(){
        $("#div_yingcang_wyb_guanli_2_1").fadeOut();
    })
    $("#xiugaibumenxinxi").on("click",function(){
        $("#div_yingcang_wyb_guanli_2_1").fadeIn();
    })
    //这是点击tr的时候添加的
    $(document).on("click",".tr_bumen",function(){
        var gat2 = bumen;
        //console.log(123);
        $(".tr_bumen").css({backgroundColor: ""});
        $(".tr_bumen").attr("data11", "flose");
        $(this).attr("data11", "true");
        $(this).css({backgroundColor: "#ddd"});
        var attry = $(this).attr("data11")
        var name = $(this).children("td")[0].innerText;
        //console.log(name);
        var h = 0;
        for (var i = 0; i < gat2.length; i++) {
            if (name == gat2[i].部门名称&&attry=="true") {
                h++;
                //console.log(gat2[i].成立时间);
                $("#bumenname_wyb_1").val(gat2[i].部门名称);


                var da4=gat2[i].成立时间;
                var year4=da4.split('T')[0];
                $("#bumentime_wyb_1").val(year4);
                $("#textarea_wyb_1_1").val(gat2[i].部门描述);
                if (h == 1) {
                    //console.log(gat2[i]);
                    name1 = {
                        name1: gat2[i].id
                    }
                }
            }
        }
    })
    //这是点击修改的时候的函数
    $(document).on("click","#tianjiabumenxinxi_wyb_1",function(){
        $("#div_yingcang_wyb_guanli_2_1").fadeOut();
        var a = $("#select_bumenzhuguan_wyb_1 option:checked").text();
        var b = $("#bumenname_wyb_1").val();
        //console.log(a);
        var a = {
           a:a,
            b:b,
        }
        $.ajax({
            type:"post",
            url:"/xiugaibumenxinxi",
            data:a,
            success:function(data){
                //console.log(data);
                bumenjiamianguanli();
                xx_lx1_1("修改成功")
            }
        })
    })
    //这是删除部门的函数

    $(document).on("click","#quedingshachubumenxinxi",function(){
        $("#div_yingcang_wyb_3").fadeOut();
        var b = $("#bumenname_wyb_1").val();
        //console.log(b);
        var quedingshachubumenxinxi = {
            quedingshachubumenxinxi:b,
        }
            $.ajax({
                type: "post",
                url: "/quedingshachubumenxinxi",
                data: quedingshachubumenxinxi,
                success: function (data) {
                    //console.log("删除成功！")
                    //console.log(data);
                    bumenjiamianguanli();
                    xx_lx1_1("删除成功")
                }
            })
    })
})
