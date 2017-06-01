/**
 * Created by Administrator on 2017/4/6.
 */
//这是加载界面的时候发送的Ajax
function xx_lx1(x){
    $(".alert_lx_wyb").fadeIn();
    $(".txt_lx_wyb").text(x);
    setTimeout(function(){
        $(".alert_lx_wyb").fadeOut(500);
    },1000);
}
$(function(){
    var zhiwei;
    //这是获得职位的数据库
    $("#btnyincang_wyb").on("click",function(){
        $("#div_yingcang_wyb_guanli_2").fadeOut();
    })
    $("#showguanliyincang_wyb_2").on("click",function(){
        $("#div_yingcang_wyb_guanli_2").fadeIn();
    })

    function zhiweijiemianshuaxin(){
        $.ajax({
            type:"post",
            url:"/xiugaizhiwei",
            data:'',
            success:function(gat){
                //console.log(gat);
                zhiwei = gat
                var html;
                for(var i = 0; i<gat.length;i++){

                    var k1 =  gat[i].查询权限;
                    var k2 =  gat[i].考核权限;
                    var k3 =  gat[i].销售统计分析权限;
                    var k4 =  gat[i].权限管理;
                    var k5 =  gat[i].后台管理;
                    //console.log(k1)
                    //console.log(k2)
                    //console.log(k3)
                    //console.log(k4)
                    //console.log(k5)
                    if(k1=="f"){
                        k1="否";
                    }else{
                        k1="是";
                    }
                    if(k2=="f"){
                        k2="否";
                    }else{
                        k2="是";
                    }
                    if(k3=="f"){
                        k3="否";
                    }else{
                        k3="是";
                    }
                     if(k4=="f"){
                        k4="否";
                    }else{
                         k4="是";
                     }
                     if(k5=="f"){
                        k5="否";
                    }else{
                         k5="是";
                     }
                    html += '<tr class="zhiwei1"><td  data11="flase" >'+gat[i].职位名称+'</td><td class="zhiwei2">'+gat[i].职位描述+'</td><td class="zhiwei3">'+k1+'</td><td class="zhiwei4">'+k2+'</td><td class="zhiwei5">'+k3+'</td><td class="zhiwei6">'+k4+'</td><td class="zhiwei7">'+k5+'</td></tr>'
                    $("#table_zhiweiguanli").html(html);
                }
            }
        })
    }
    zhiweijiemianshuaxin();
//这是添加部门管理信息的函数
    $(document).on("click","#tianjiazhiweiguanli",function(){
        //console.log(123);
        $("#div_yingcang_wyb_guanli_1").fadeOut();
        var tet_guanli_wyb_1 = $("#tet_guanli_wyb_1").val();
        var tet_guanli_wyb_2 = $("#tet_guanli_wyb_2").val();
        //console.log(tet_guanli_wyb_1,tet_guanli_wyb_2);
         var a = $(".input1").is(":checked");
         var a1 = $(".input2").is(":checked");
         var a2 = $(".input3").is(":checked");
         var a3 = $(".input4").is(":checked");
         var a4 = $(".input5").is(":checked");
        //console.log(a);
        //console.log(a1);
        //console.log(a2);
        //console.log(a3);
        //console.log(a4);
        var tianjiazhiwe = {
            tet_guanli_wyb_1:tet_guanli_wyb_1,
            tet_guanli_wyb_2:tet_guanli_wyb_2,
            chunxunquanxan:a,
            kaohequanxian:a1,
            xiaoshoutongji:a2,
            quanxianguanli:a3,
            houtaiguanli:a4,

        }
        if(tet_guanli_wyb_1==""||tet_guanli_wyb_2==""){

        }else{
            $.ajax({
                type:"post",
                url:"/tianjiazhiwei_wyb",
                data:tianjiazhiwe,
                success:function(data){
                    //console.log(data);
                    zhiweijiemianshuaxin();
                    xx_lx1("添加成功")
                    $("#tet_guanli_wyb_1").val("")
                    $("#tet_guanli_wyb_2").val("")
                }
            })
        }

    })
    //这是查看职位信息的函数并且把职位信息加入到修改职位信息权限里面
    $(document).on("click", ".zhiwei1", function () {
        var gat1 = zhiwei;
        //console.log(123);
        $(".zhiwei1").css({backgroundColor: ""});
        $(".zhiwei1").attr("data11", "flose");
        $(this).attr("data11", "true");
        $(this).css({backgroundColor: "#ddd"});
        var attry = $(this).attr("data11")
        var name = $(this).children("td")[0].innerText;
        //console.log(name);
        var h = 0;
        for (var i = 0; i < gat1.length; i++) {
            if (name == gat1[i].职位名称&&attry=="true") {
                h++;
                $("#tet_guanli_wyb_3").val(gat1[i].职位名称);
                $("#tet_guanli_wyb_4").text(gat1[i].职位描述);
                if (h == 1) {
                    //console.log(gat1[i]);
                    name1 = {
                        name1: gat1[i].id
                    }
                }
            }
        }
        //这是修改职位信息的函数
        $(document).on("click","#tianjiazhiweiguanli_wyb",function(){
            $("#div_yingcang_wyb_guanli_2").fadeOut();
            var a = $(".input6").is(":checked");
            var a1 = $(".input7").is(":checked");
            var a2 = $(".input8").is(":checked");
            var a3 = $(".input9").is(":checked");
            var a4 = $(".input10").is(":checked");
            var tet_guanli_wyb_3= $("#tet_guanli_wyb_3").val();
            var tianjiazhiwe = {
                tet_guanli_wyb_3:tet_guanli_wyb_3,
                chunxunquanxan:a,
                kaohequanxian:a1,
                xiaoshoutongji:a2,
                quanxianguanli:a3,
                houtaiguanli:a4,
            }
            $.ajax({
                type:"post",
                url:"/xiugaizhiweixinxi",
                data:tianjiazhiwe,
                success:function(data){
                    //console.log(data);
                    zhiweijiemianshuaxin();
                    xx_lx1("修改成功")
                }
            })
        })
    })
})




