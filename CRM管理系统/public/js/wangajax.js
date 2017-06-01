

//   添加正则
var but,
    but2,
    but3,
    but4,
    but5;

var num = null;
// 名字
$("#namelc").blur(function(){
    var reg = /^[\u4e00-\u9fa5]+$/;
    but = reg.test($("#namelc").val());
    if(but){
        $(this).css({borderColor:"green"})
        $(".zqm").css({display:"none"})

    }else{
        $(this).css({borderColor:"red"})
        $(".zqm").css({display:"block"})
    }
})
//科目
$("#sskm").blur(function(){
    var reg = /^[\u4e00-\u9fa5]+$/;
    but2 = reg.test($("#sskm").val());
    if(but2){
        $(this).css({borderColor:"green"})
        $(".zqk").css({display:"none"})

    }else{
        $(this).css({borderColor:"red"})
        $(".zqk").css({display:"block"})
    }
})

//班级

$("#sdbj").blur(function(){
    var reg = /^[\u4e00-\u9fa5]+$/;
    but3 = reg.test($("#sdbj").val());
    if(but3){
        $(this).css({borderColor:"green"})
        $(".zqb").css({display:"none"})

    }else{
        $(this).css({borderColor:"red"})
        $(".zqb").css({display:"block"})
    }
})
//电话

$("#lxdh").blur(function(){
    var reg = /^1[34578]\d{9}$/;
    but4 = reg.test($("#lxdh").val());
    if(but4){
        $(this).css({borderColor:"green"})
        $(".zqd").css({display:"none"})

    }else{
        $(this).css({borderColor:"red"})
        $(".zqd").css({display:"block"})
    }
})
//改电话

$("#ghmm").blur(function(){
    var reg = /^1[34578]\d{9}$/;
    but5 = reg.test($("#ghmm").val());
    if(but5){
        $(this).css({borderColor:"green"})
        $(".zqg").css({display:"none"})

    }else{
        $(this).css({borderColor:"red"})
        $(".zqg").css({display:"block"})
    }
})



//添加教师
$("#tianjia").click(function(){

$("#tianj").slideDown();


    $("#quxiao").click(function(){

      $("#tianj").slideUp("slow");
        $('input').val('');

    })

})

//删除教师

$("#shang").click(function(){

    if(num==null){
        sansan();
    }else{
        $("#shana").slideDown();
        $("#sanchu").on("click",function(){

            if(num==null){
                alert("你还没有选择删除数据")
            }else{

                $.ajax({
                    type:"post",
                    url:"/sjDelete",
                    data:{shang:num},

                    success:function(data){
                        chaxun();
                        num=null;
                    }

                })

                sansan2();
                sansan3();

            }

        })

    }



    $("#quxi").click(function(){

        $("#shana").slideUp("slow");

    })

})

//修改老师信息

$("#xiuga").click(function(){


    if(num==null){
        xiuxiu();
    }else {
        $("#xiu").slideDown();
            $.ajax({
                type: "post",
                url: "/sjxiugai",
                data: {num:num},


                success: function (data) {

                    var str1 = '<div class="col-sm-6" id="jsxm"></div>'
                    var str2 = '<div class="col-sm-6" id="jsxb"></div>'
                    var str3 = '<div class="col-sm-6" id="jskm"></div>'

                    for (var i = 0; i < data.length; i++) {
                        var temp_id = data[i].id;
                        str1 += '<div class="col-sm-6" id="jsxm" id_tr =' + temp_id + '>' + data[i].教师姓名 + '</div>'
                        str2 += '<div class="col-sm-6" id="jsxb" id_tr =' + temp_id + '>' + data[i].性别 + '</div>'
                        str3 += '<div class="col-sm-6" id="jskm" id_tr =' + temp_id + '>' + data[i].所授科目 + '</div>'

                    }

                    $("#jsxm").html(str1);
                    $("#jsxb").html(str2);
                    $("#jskm").html(str3);


                    //chaxun();
                }
            })


        //修改
        $("#tianja").click(function () {
            if(but5==true){
                xiug();
            }else{
                xiuxiu2();
            }
        })

       function xiug() {
           xiuxiu3();
           xiuxiu4();
               $.ajax({
                   type: "post",
                   url: "/sjxiugai2",
                   data: {
                       num: num,
                       ghmm: $("#ghmm").val()
                   },


                   success: function (data) {
                       chaxun();
                   }
               })

           $('input').val('');

       }


        }
        $("#quxiaox").click(function () {

            $("#xiu").slideUp("slow");
            $('input').val('');

        })

})

//点击第一
$("#diyi").click(function(){
    /*$("#diyi").css({backgroundColor:"#0ad6c8"})*/
   /* $("#dier").css({backgroundColor:"#fff"})*/
    chaxun();

})

//点击第二
$("#dier").click(function(){
  /*  $("#dier").css({backgroundColor:"#0ad6c8"})*/
 /*   $("#diyi").css({backgroundColor:"#fff"})*/
    chaxun2();

})

chaxun();

//第一学校表表表
function chaxun(){
    $.ajax({
        type:"post",
        data:"",
        url:"/logPostSend",

        success:function(data){

            //console.log(data);

            var str_td = '<tr class="tr_wq"><th class="headerstudentinflc">教师姓名</th><th class="headersex">性别</th><th class="headerclass">所授科目</th><th class="headertel">所带班级</th><th class="headertel2">联系电话</th></tr>'

            for(var i = 0;i < data.length;i++){
                var temp_id = data[i].id;
                str_td += '<tr  class="trlc" id_tr =' + temp_id +'><td scope="row">'+ data[i].教师姓名+'</td> <td>'+ data[i].性别+'</td> <td>'+ data[i].所授科目+'</td> <td>'+ data[i].所带班级+'</td> <td>'+ data[i].联系电话+'</td> </tr>'

            }
            $("#biao").html(str_td);
            str_td='';
        }
    })
}

//第二学校表表表
function chaxun2(){
    $.ajax({
        type:"post",
        data:"",
        url:"/logPostSendb",

        success:function(data){

            //console.log(data);

            var str_td = '<tr class="tr_wq"><th class="headerstudentinflc">教师姓名</th><th class="headersex">性别</th><th class="headerclass">所授科目</th><th class="headertel">所带班级</th><th class="headertel2">联系电话</th></tr>'

            for(var i = 0;i < data.length;i++){
                var temp_id = data[i].id;
                str_td += '<tr  class="trlc" id_tr =' + temp_id +'><td scope="row">'+ data[i].教师姓名+'</td> <td>'+ data[i].性别+'</td> <td>'+ data[i].所授科目+'</td> <td>'+ data[i].所带班级+'</td> <td>'+ data[i].联系电话+'</td> </tr>'

            }
            $("#biao").html(str_td);
            str_td='';
        }
    })
}

//    添加老师页面

$("#tian").click(function(){
    if(but==true && but2==true && but3==true && but4==true){
        tianjia();
    }else{
        dada2();
    }
})


function tianjia(){

    var obj = {
       namelc:$("#namelc").val(),
        sskm:$("#sskm").val(),
        lxdh:$("#lxdh").val(),
        sdbj:$("#sdbj").val(),
        sex:$('input:radio:checked').attr("name1"),
        xuex:$('#classselect1 option:checked').attr('name1')
    }

    if(obj.namelc && obj.sskm && obj.lxdh && obj.sdbj && obj.sex){


        $.ajax({
            type:"post",
            data:obj,
            url:"/logPostSend2",

            success:function(data) {

                //console.log(data);

                if (data.length == 0) {
                    //alert("未输入");
                } else {
                    var str_tj = '<tr><th class="headerstudentinflc">教师姓名</th></tr>'
                    var str_tj2 = '<tr><th class="headerclass">所授科目</th></tr>'
                    var str_tj3 = '<tr><th class="headerclass">联系电话</th></tr>'
                    var str_tj4 = '<tr><th class="headerclass">所带班级</th></tr>'
                    var str_tj5 = '<tr><th class="headerclass">性别</th></tr>'

                    for (var i = 0; i < data.length; i++) {
                        str_tj += '<tr><th scope="row">' + data[i].教师姓名 + '</th></tr>'
                        str_tj2 += '<tr><th scope="row">' + data[i].所授科目 + '</th></tr>'
                        str_tj3 += '<tr><th scope="row">' + data[i].联系电话 + '</th></tr>'
                        str_tj4 += '<tr><th scope="row">' + data[i].所带班级 + '</th></tr>'
                        str_tj5 += '<tr><th scope="row">' + data[i].性别 + '</th></tr>'
                    }

                    $("#biao").html(str_tj,str_tj2,str_tj3,str_tj4,str_tj5);
                    tiann();
                    $('input').val('');


                }
                dada();
                chaxun();
            }


        })

    }else{
        dada3();
    }
}





//添加弹框
function dada(){
    $("#tktk").fadeIn("slow");

    setInterval(function(){
        $("#tktk").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function dada2(){
    $("#tktk2").fadeIn("slow");

    setInterval(function(){
        $("#tktk2").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function dada3(){
    $("#tktk3").fadeIn("slow");

    setInterval(function(){
        $("#tktk3").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function tiann(){
    $("#tianj").fadeOut("slow");
}

//删除弹框

function sansan(){
    $("#tktk4").fadeIn("slow");

    setInterval(function(){
        $("#tktk4").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function sansan2(){
    $("#tktk5").fadeIn("slow");

    setInterval(function(){
        $("#tktk5").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function sansan3(){
    $("#shana").fadeOut("slow");
}


//修改弹框

function xiuxiu(){
    $("#tktk6").fadeIn("slow");

    setInterval(function(){
        $("#tktk6").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function xiuxiu2(){
    $("#tktk7").fadeIn("slow");

    setInterval(function(){
        $("#tktk7").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function xiuxiu3(){
    $("#tktk8").fadeIn("slow");

    setInterval(function(){
        $("#tktk8").fadeOut("slow");
        //$("#tianj").fadeOut("slow");
    },1500);
}

function xiuxiu4(){
    $("#xiu").fadeOut("slow");
}

// 点击选中


$(document).on("click",".trlc",function(){

    num = $(this).attr("id_tr");

    $('.trlc').css({backgroundColor:"transparent"});

    $(this).css({backgroundColor:"#EEEEEE"});

    var num2 = $('.tbody > tr').length;

})


