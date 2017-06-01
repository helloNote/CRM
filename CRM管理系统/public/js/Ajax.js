
//日志一览
$(function(){
    rzyl();
})

function rzyl(){
    $.ajax({
        type:"post",
        url:"/rizineiro",
        //data:'',
        data:{page:$('#tablelsl').attr('datapage')},
        success:function(data){
           var html = '<tr><th class="active text-center">日志内容</th><th class="active text-center">日期</th></tr>';
            for(var i = 0;i<data.length;i++){
                var da=data[i].日期;
                var year=da.split('T')[0];
                while(year.indexOf('-') >= 0)
                    year = year.replace('-','/');
                html +=' <tr class="tr'+i+'"><td class="active con'+i+'">'+data[i].日志内容+ '</td><td class="active  log'+i+'">'+year+ '</td></tr>'
            }
            $("#tablelsl").html(html);
            html = '';
        }

    })

    //判断下一页

    $(".btn3").click(function(){
        //alert();
        //console.log(123);
        var page1=parseInt($("#tablelsl").attr("datapage"));
        /*console.log(page1);*/
        page1++;
        $.ajax({
            type:"post",
            url:"/rizineiro",
            data:{page:page1},
            success:function(data){
                if(data.length!=0) {
                    var html = '<tr><th class="active text-center" >日志内容</th><th class="active text-center " >日期</th></tr>';
                    for (var i = 0; i < data.length; i++) {
                        var da=data[i].日期;
                        var year=da.split('T')[0];
                        while(year.indexOf('-') >= 0)
                            year = year.replace('-','/');
                        html +=' <tr class="tr'+i+'"><td class="active con'+i+'">'+data[i].日志内容+ '</td><td class="active  log'+i+'">'+year+ '</td></tr>'
                    }
                    $("#tablelsl").html(html);
                    html = '';
                    var num = parseInt($("#tablelsl").attr('datapage')) + 1;
                    $('#tablelsl').attr('datapage', num);
                }
              /*  console.log(data);*/
            }
        })
    })


    //判断上一页
    $(".btn1").click(function(){
        //alert();
        //console.log(123);
        var page1=parseInt($("#tablelsl").attr("datapage"));
        //console.log(page1);
        page1--;
        if($('#tablelsl').attr('datapage') == 0){
            return;
        }
        $.ajax({
            type:"post",
            url:"/rizineiro",
            data:{page:page1},
            success:function(data){

                    var html = '<tr><th class="active text-center">日志内容</th><th class="active text-center">日期</th></tr>';
                    for (var i = 0; i < data.length; i++) {
                        var da=data[i].日期;
                        var year=da.split('T')[0];
                        while(year.indexOf('-') >= 0)
                            year = year.replace('-','/');
                        html +=' <tr class="tr'+i+'"><td class="active con'+i+'">'+data[i].日志内容+ '</td><td class="active  log'+i+'">'+year+ '</td></tr>'
            }
                    $("#tablelsl").html(html);
                    html = '';
                    var num = parseInt($("#tablelsl").attr('datapage')) - 1;
                    $('#tablelsl').attr('datapage', num);

            }
        })
    })

}



//信息一览
function xxyl(){
    $.ajax({
        type:"post",
        url:"/xinxiyilan",
        //data:'',
        data:{page:$('#tablelsl2').attr('datapage')},
        success:function(data){
            var html = '<tr><th class="active text-center">信息内容</th><th class="active text-center">日期</th></tr>';
            for(var i = 0;i<data.length;i++){
                var da=data[i].日期;
                var year=da.split('T')[0];
                while(year.indexOf('-') >= 0)
                    year = year.replace('-','/');
        /*
                var time=da.split('T')[1].split('.')[0];
                var gettime=year+" "+time;*/
                html +=' <tr class="tr'+i+'"><td class="active lsl'+i+'">'+data[i].信息内容+ '</td><td class="active  lx'+i+'">'+year+ '</td></tr>'
            }
            $("#tablelsl2").html(html);
            html = '';
        }

    })

   // 判断下一页

    $(".btn7").click(function(){
        //alert();
        //console.log(123);
        var page1=parseInt($("#tablelsl2").attr("datapage"));
        //console.log(page1);
        page1++;
        $.ajax({
            type:"post",
            url:"/xinxiyilan",
            data:{page:page1},
            success:function(data){
                if(data.length!=0) {

                    var html = '<tr><th class="active">信息内容</th><th class="active">日期</th></tr>';
                    for (var i = 0; i < data.length; i++) {
                        var da=data[i].日期;
                        var year=da.split('T')[0];
                        while(year.indexOf('-') >= 0)
                            year = year.replace('-','/');
                        html +=' <tr class="tr'+i+'"><td class="active lsl'+i+'">'+data[i].信息内容+ '</td><td class="active lx'+i+'">'+year+ '</td></tr>'
                    }
                    $("#tablelsl2").html(html);
                    html = '';
                    var num = parseInt($("#tablelsl2").attr('datapage')) + 1;
                    $('#tablelsl2').attr('datapage', num);
                }
            }
        })
    })


    //判断上一页
    $(".btn6").click(function(){
        //alert();
        //console.log(123);
        var page1=parseInt($("#tablelsl2").attr("datapage"));
        //console.log(page1);
        page1--;
        if($('#tablelsl2').attr('datapage') == 0){
            return;
        }
        $.ajax({
            type:"post",
            url:"/xinxiyilan",
            data:{page:page1},
            success:function(data){

                var html = '<tr><th class="active">信息内容</th><th class="active">日期</th></tr>';
                for (var i = 0; i < data.length; i++) {
                    var da=data[i].日期;
                    var year=da.split('T')[0];
                    while(year.indexOf('-') >= 0)
                        year = year.replace('-','/');
                    html +=' <tr class="tr'+i+'"><td class="active lsl'+i+'">'+data[i].信息内容+ '</td><td class="active  lx'+i+'">'+year+ '</td></tr>'
                }
                $("#tablelsl2").html(html);
                html = '';
                var num = parseInt($("#tablelsl2").attr('datapage')) - 1;
                $('#tablelsl2').attr('datapage', num);

            }
        })
    })

}




//判断查找
/*==========日志判断=========*/
function selectdata(){
    var text0,text1,text2,text3;
    var start=$("#start").val();
    var end=$("#end").val();
    var log0=$(".log0").text();
    var log1=$(".log1").text();
    var log2=$(".log2").text();
    var log3=$(".log3").text();

    text0=log0;
    text1=log1;
    text2=log2;
    text3=log3;

    var con0=$(".con0").text();
    var con1=$(".con1").text();
    var con2=$(".con2").text();
    var con3=$(".con3").text();
    while(start.indexOf('-') >= 0)
        start = start.replace('-','')
    while(end.indexOf('-') >= 0)
        end = end.replace('-','');
    while(log0.indexOf('/') >= 0)
        log0 = log0.replace('/','');
    while(log1.indexOf('/') >= 0)
        log1 = log1.replace('/','');
    while(log2.indexOf('/') >= 0)
        log2 = log2.replace('/','');
    while(log3.indexOf('/') >= 0)
        log3 = log3.replace('/','');

    var ary1=[log0,log1,log2,log3]
    var ary2=[con0,con1,con2,con3];
    var ary3=[text0,text1,text2,text3]
        var html='<tr><th  colspan="2">当前页的日志信息</th></tr>';
            for(var i=0;i<=3;i++){
            if(ary1[i]>=start&&ary1[i]<=end){
                html+= '<tr><td class="active">'+ary2[i]+'</td><td class="active">'+ary3[i]+'</td></tr>';
            }}
        $(".rizi_lx").html(html);
        html = '';

}
/*==========信息判断=========*/
function selectdata1(){
    var text0,text1,text2,text3;
    var start=$("#start1").val();
    var end=$("#end1").val();

    var log0=$(".lx0").text();
    var log1=$(".lx1").text();
    var log2=$(".lx2").text();
    var log3=$(".lx3").text();
    console.log(log0)
    console.log(start)
    console.log(end)
    text0=log0;
    text1=log1;
    text2=log2;
    text3=log3;

    var con0=$(".lsl0").text();

    var con1=$(".lsl1").text();
    var con2=$(".lsl2").text();
    var con3=$(".lsl3").text();
    while(start.indexOf('-') >= 0)
        start = start.replace('-','');
    while(end.indexOf('-') >= 0)
        end = end.replace('-','');
    while(log0.indexOf('/') >= 0)
        log0 = log0.replace('/','');
    while(log1.indexOf('/') >= 0)
        log1 = log1.replace('/','');
    while(log2.indexOf('/') >= 0)
        log2 = log2.replace('/','');
    while(log3.indexOf('/') >= 0)
        log3 = log3.replace('/','');

    var ary1=[log0,log1,log2,log3];
    var ary2=[con0,con1,con2,con3];
    var ary3=[text0,text1,text2,text3];
console.log(ary2[0])
    var html='<tr><th  colspan="2">当前页查找的信息</th></tr>';
    for(var i=0;i<=3;i++){
        if(ary1[i]>=start&&ary1[i]<=end){

            html+= '<tr><td class="active">'+ary2[i]+'</td><td class="active">'+ary3[i]+'</td></tr>';
            console.log(html)
        }}
    $(".info_lx").html(html);
    html = '';

}








