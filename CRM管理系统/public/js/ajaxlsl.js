

//添加班级
var ban_ji;
//schoolone();
function addlsl_1(){

    var name1 = $("#put1").val();
      //a = $("#put2").val();//选中的value值
   var name2 = $("#put2 option:checked").text();//显示选中的值
    //console.log(typeof name2);
     c = $("#put3").val();//选中的value值
   var name3 = $("#put3 option:checked").text();//显示选中的值

    if(name2==="成都十二中"){
       ban_ji=2;
    }
    else if(name2==="成都外国语学校"){
       ban_ji=1;
    }
    var obj;
    obj={
        name1:name1,
        name2:name2,
        name3:name3,
        ban_ji:ban_ji
    }
    $.ajax({
        type:"post",
        url:"/addlsl_1",
        data:obj,
        seccess:function(data){
            schoolone();
        }

    });
    //console.log(obj);
    schoolone();
}

//成都外国语学校
schoolone();
function schoolone(){
    $.ajax({
        type:"post",
        url:"/schoolone",
        success:function(dataone){
            /*console.log(dataone)*/
            var html = ' <tr class="tr"> <th class="headerstudentinflc">班级名称</th><th class="headersex">开班时间</th><th class="headerclass">班级人数</th><th class="headertel">带班老师</th></tr>';
            for(var i = 0;i<dataone.length;i++){
                var tdone = dataone[i].班级名称,
                    tddata = dataone[i].开班时间,
                    tdtwo =tddata.split('T')[0],
                    tdthree = dataone[i].班级人数,
                    tdfour = dataone[i].带班老师,
                    name=dataone[i].id;
                html +='<tr name="'+name+'" class="tr_lsl"><td>'+tdone+'</td><td>'+tdtwo+'</td><td>'+tdthree+'</td><td>'+tdfour+'</td></tr>'
            }
            /*console.log(html)*/
            $("#banjitable_lsl").html(html);
        }
    });

}
//成都第十二中学
function schooltwo(){
        $.ajax({
        type:"post",
        url:"/schooltwo",
        success:function(dataone){
            //console.log(schooltwo)
            //var temp_id = data[i].id;
            var html = ' <tr > <th class="headerstudentinflc">班级名称</th><th class="headersex">开班时间</th><th class="headerclass">班级人数</th><th class="headertel">带班老师</th></tr>';
            for(var i = 0;i<dataone.length;i++){
                var tdone = dataone[i].班级名称,
                    tddata = dataone[i].开班时间,
                    tdtwo =tddata.split('T')[0],
                    tdthree = dataone[i].班级人数,
                    tdfour = dataone[i].带班老师,
                    name=dataone[i].id;
                html +='<tr name="'+name+'"class="tr_lsl"><td>'+tdone+'</td><td>'+tdtwo+'</td><td>'+tdthree+'</td><td>'+tdfour+'</td></tr>'
            }
            /*console.log(html)*/
            $("#banjitable_lsl").html(html);
        }
    });
}





//删除班级

var num;
$(document).on("click","tr",function(){
    //alert();
    /* num = $(this).attr("tr");*/
    $('tr').css({backgroundColor:"transparent"});
    $(this).css({backgroundColor:"#FFCE44"});
     num=$(this).attr("name")
});


//alert();
$("#shanchu").on("click",function(){
//alert();
    if(num==null){
        //alert("你还没有选择删除数据")
    }else{
        $.ajax({
            type:"post",
            url:"/shanchu",
            data:{name:num},
            success:function(data){
                //console.log(data)
                schoolone();
            }
        });
        //console.log("abc");
    }

});





