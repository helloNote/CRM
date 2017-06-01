/**
 * Created by Administrator on 2017/4/6.
 */
var tr_id = null;
var s_id = null;
var namevalues;
var username = localStorage.user;
//页面加载
lodlc();

//点击学校名称，显示对应学生名单
$(document).on('click','.schoolInf',function(){
    s_id=parseInt($(this).attr('s_id'));
    $('.Prompt').hide();
    //====================================================新增内容=================
    $.ajax({
        type:'post',
        url:'/classinf',
        data:{s_id:s_id},
        success:function(data){
            console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html+='<option>'+data[i].班级名称+'</option>';
            }
            $('#classselect').html(html);
            $('#modifyclass').html(html);
            html='';
        }
    })
    //====================================================新增内容=================
    sxschoollc(s_id);
    $('.overlc').css({visibility:'visible'})
    tr_id=null;
});

    //console.log($(this).attr('s_id'));
function  sxschoollc(s_id){
    var page=1;
    $.ajax({
        type:'post',
        url:'/schoolInf',
        data:{
            page1:page,
            s_id:s_id
        },
        success:function(data){
            console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html += tr_asdd(data,i);
            }
            $('.tbody').html(html);
            html='';
        }
    });
    $('.tbody').attr('datapage',1);
    $('.pageinplc').val(1);
    //总页数
    $.ajax({
        type:'post',
        url:'/PageschoolInf',
        data:{s_id:s_id},
        success:function(data){
            //console.log(data.length);
            var pagesum=Math.ceil(data.length/8);
            //console.log(pagesum);
            $('.pageSum').text(pagesum);
        }
    });
}




//学校一的学生分页



//上一页
$(".tp_Left").click(function(){
    //console.log(s_id);
    if(s_id!=null){
        var page=parseInt($(".tbody").attr("datapage"));
        page--;
        if(page<=0){
            //console.log(123)
            return;
        }
        $.ajax({
            type:'post',
            url:'/schoolInf',
            data:{
                page1:page,
                s_id:s_id
            },
            success:function(data){
                //console.log(data);
                var html='';
                for(var i=0;i<data.length;i++){
                    html += tr_asdd(data,i);
                }
                $('.tbody').html(html);
                html='';
                $('.tbody').attr('datapage',page);
                $('.pageinplc').val(page);
            }
        });
    }

});
//下一页
$(document).on('click','.tp_Right',function(){
    //var s_id=parseInt($('.trlc').attr('s_id'));
    //console.log(s_id);

    if(s_id!=null){
        var page=parseInt($(".tbody").attr("datapage"));
        page++;
        $.ajax({
            type:'post',
            url:'/schoolInf',
            data:{
                page1:page,
                s_id:s_id
            },
            success:function(data){
                //console.log(data);
                var html='';
                if(data.length!=0){
                    for(var i=0;i<data.length;i++){
                        html += tr_asdd(data,i);
                    }
                    $('.tbody').html(html);
                    html='';
                    $('.tbody').attr('datapage',page);
                    $('.pageinplc').val(page);
                }

            }
        });
    }

})



//跳转
    $(".tp_Jump").click(function(){
        //var s_id=parseInt($('.trlc').attr('s_id'));
        //console.log(s_id);
        //console.log(parseInt($('.pageSum').text()))
        if(s_id!=null){
            var page=parseInt($('.pageinplc').val());
            //console.log(typeof page);
            $.ajax({
                type:'post',
                url:'/tp_Left',
                data:{
                    page1:page,
                    s_id:s_id
                },
                success:function(data){
                    //console.log(data);
                    if(page>0&&page<=parseInt($('.pageSum').text())){
                        var html='';
                        for(var i=0;i<data.length;i++){
                            html += tr_asdd(data,i);
                        }
                        $('.tbody').html(html);
                        html='';
                        $('.pageinplc').val(page);
                        $('.tbody').attr('datapage',page);

                    }else{

                    }

                }
            })
        }

    });
$(document).on('click','#addStudent',function(){
    //console.log(s_id);
    if(s_id!=null){
        $(".addinf").slideDown();
    }
});
//添加学生信息
$(function(){
    var classselect,sexlc;
    //namelc,datelc,address,tell,father,mother,fathertell,mothertell;
    var inp1,inp2,inp3,inp4,inp5,inp6,inp7,inp8,inp9,inp10,inp11;
    //姓名判断
    $('#namelc').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#namelc').blur(function(){
        var namelc=$('#namelc').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp1=reg.test(namelc);
        if(inp1){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    //时间判断
    $('#datelc').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })

    $('#datelc').blur(function(){
        inp2=$('#datelc').val();
        if(inp2!=''){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({display:'none'});
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            //console.log('but');
        }
    })
    //性别判断====================================新增内容=============================
    $('#inlineRadio1').blur(function(){
        //console.log(1465465)
        $('#sexlc').css({color:'green',display:'none'});
    });
    $('#inlineRadio2').blur(function(){
        //console.log(1465465)
        $('#sexlc').css({color:'green',display:'none'});
    });
    //====
    //班级判断
    $('#classselect').focus(function(){
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#classselect').blur(function(){
        //classselect=$("#classselect option:checked").text();
        $(this).css({borderColor:'green'});
    });

    //家庭住址判断
    $('#address').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#address').blur(function(){
        var address=$('#address').val();
        var reg=/([^\x00-\xff]|[A-Za-z0-9_])+/;
        inp3=reg.test(address);
        if(inp3){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    //父亲判断

    $('#father').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#father').blur(function(){
        var father=$('#father').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp4=reg.test(father);
        if(inp4){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    //母亲判断
    $('#mother').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#mother').blur(function(){
        var mother=$('#mother').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp5=reg.test(mother);
        if(inp5){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    //联系电话判断
    $('#tell').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#tell').blur(function(){
        var tell=$('#tell').val();
        var reg=/^1[34578]\d{9}$/;
        inp6=reg.test(tell);
        if(inp6){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            //console.log('but');
        }
    });
    //父亲电话判断
    $('#fathertell').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#fathertell').blur(function(){
        var fathertell=$('#fathertell').val();
        var reg=/^1[34578]\d{9}$/;
        inp7=reg.test(fathertell);
        if(inp7){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    //母亲电话判断
    $('#mothertell').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#mothertell').blur(function(){
        var mothertell=$('#mothertell').val();
        var reg=/^1[34578]\d{9}$/;
        inp8=reg.test(mothertell);
        if(inp8){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            //console.log('but');
        }
    });
    //点击添加
    $('.AddInformation').click(function(){
        var remarks=$('#remarks').val();
        sexlc=$("input[type='radio']:checked").attr("nameval");
        classselect=$("#classselect option:checked").text();
        //console.log(classselect);
        if(inp1&&inp2&&inp3&&inp4&&inp5&&inp6&&inp7&&inp8&&sexlc&&classselect){
            $(".addinf").hide();
            var obj={
                namelc:$('#namelc').val(),datelc:$('#datelc').val(),classselect:classselect,address:$('#address').val(),
                tell:$('#tell').val(),father:$('#father').val(),fathertell:$('#fathertell').val(),mother:$('#mother').val(),mothertell:$('#mothertell').val(),
                remarks:remarks,sexlc:sexlc,s_id:s_id
            };
            var date=new Date();
            //console.log(date);
            var year=date.getFullYear();
            var month=date.getMonth()+1;
            var day=date.getDate();
            var namelsl=username+'添加了'+$('#namelc').val()+'的信息';
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
            $('#myAlertLc').fadeIn();
            $('.txt_Lc').text('添加成功')
            $.ajax({
                type:'post',
                url:'/AddInformation',
                data:obj,
                success:function(data){
                    sxschoollc(s_id);
                    $('input').val(undefined);
                    $('textarea').val(undefined);
                    $("input[type='radio']").removeAttr('checked');
                    $('select').css({borderColor:'#cccccc'});
                    $('input').css({borderColor:'#cccccc',color:'#555555'});
                    $('textarea').css({borderColor:'#cccccc'});
                    $('input').next('span').css({display:'none'});
                    $('#sexlc').css({display:'none'});
                    setTimeout(function(){
                        $('#myAlertLc').fadeOut(500);
                    },1000)
                }
            })
        }
        if($('#namelc').val()==''){
            $('#namelc').css({borderColor:'red'});
            $('#namelc').next('span').removeClass('glyphicon-ok');
            $('#namelc').next('span').addClass('glyphicon-remove');
            $('#namelc').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#datelc').val()==''){
            $('#datelc').css({borderColor:'red'});
            $('#datelc').next('span').removeClass('glyphicon-ok');
            $('#datelc').next('span').addClass('glyphicon-remove');
            $('#datelc').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#datelc').val()==''){
            $('#datelc').css({borderColor:'red'});
            $('#datelc').next('span').removeClass('glyphicon-ok');
            $('#datelc').next('span').addClass('glyphicon-remove');
            $('#datelc').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#address').val()==''){
            $('#address').css({borderColor:'red'});
            $('#address').next('span').removeClass('glyphicon-ok');
            $('#address').next('span').addClass('glyphicon-remove');
            $('#address').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#father').val()==''){
            $('#father').css({borderColor:'red'});
            $('#father').next('span').removeClass('glyphicon-ok');
            $('#father').next('span').addClass('glyphicon-remove');
            $('#father').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#mother').val()==''){
            $('#mother').css({borderColor:'red'});
            $('#mother').next('span').removeClass('glyphicon-ok');
            $('#mother').next('span').addClass('glyphicon-remove');
            $('#mother').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#tell').val()==''){
            $('#tell').css({borderColor:'red'});
            $('#tell').next('span').removeClass('glyphicon-ok');
            $('#tell').next('span').addClass('glyphicon-remove');
            $('#tell').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#fathertell').val()==''){
            $('#fathertell').css({borderColor:'red'});
            $('#fathertell').next('span').removeClass('glyphicon-ok');
            $('#fathertell').next('span').addClass('glyphicon-remove');
            $('#fathertell').next('span').css({color:'red',display:'inline-block'});
        }
        if($('#mothertell').val()==''){
            $('#mothertell').css({borderColor:'red'});
            $('#mothertell').next('span').removeClass('glyphicon-ok');
            $('#mothertell').next('span').addClass('glyphicon-remove');
            $('#mothertell').next('span').css({color:'red',display:'inline-block'});
        }
        if(sexlc==undefined){
            $('#sexlc').removeClass('glyphicon-ok');
            $('#sexlc').addClass('glyphicon-remove');
            $('#sexlc').css({color:'red',display:'inline-block'});
        }else{
            $('#sexlc').css({color:'green',display:'none'});
        }

    });

})

//动态添加节点方法
function tr_asdd(data,i){
    var html = "";
    var temp_id = data[i].id;
    html+='<tr class="trlc" id_tr =' + temp_id +' values= ' + data[i].姓名 + ' school_st_id='+data[i].school_st_id+'><td>'+data[i].姓名+'</td><td>'+data[i].性别+'</td><td>'+data[i].所属班级+'</td><td>'+data[i].联系电话+'</td></tr>'
    return html;
}
//节点点击方法
$(document).on('click','.trlc',function(){
    //console.log(123456)
    $('.trlc').css({backgroundColor: '#fff'})
    $(this).css({backgroundColor:'#dddddd'});
    tr_id=$(this).attr('id_tr');
    namevalues=$(this).attr('values');
})


//删除页面
$("#deleteStudent").click(function(){
    //console.log(tr_id);
    if(tr_id==null){

    }else{
        $(".deleteInf").slideDown();
    }

});
//删除
$('.deleteStudentInf').click(function(){
    var date=new Date();
    //console.log(date);
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var namelsl=username+'删除了'+ namevalues +'的信息';
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
    $('.txt_Lc').text('删除成功！');
    $('#myAlertLc').fadeIn();
    $.ajax({
        type:'post',
        url:'/tr_idDelete',
        data:{lc_id:tr_id},
        success:function(data){
            sxschoollc(s_id);
            tr_id=null;
            $(".deleteInf").hide();
            setTimeout(function(){
                $('#myAlertLc').fadeOut(500);
            },1000)
        }
    });



});


//查看
$('#studentInf').click(function(){
    if(tr_id!=null){
        var date=new Date();
        //console.log(date);
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDate();
        var namelsl=username+'查看了'+namevalues+'的信息';
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
        $(".seeinf").slideDown();
        sx_Inf();
        //tr_id=null;
        //console.log(tr_id);
    }

});
function sx_Inf(){
    $.ajax({
        type:'post',
        url:'/tr_studentInf',
        data:{
            lc_id:tr_id
        },
        success:function(data){
            //console.log(data);
            $(".name_student").text(data[0].姓名);
            $('.ress_student').text(data[0].家庭住址);
            $('.father_name').text(data[0].父亲);
            $('.mother_name').text(data[0].母亲);
            $('.sex_student').text(data[0].性别);
            $('.class_student').text(data[0].所属班级);
            $('.father_tell').text(data[0].父亲电话);
            $('.mother_tell').text(data[0].母亲电话);
            $('.birthday').text(data[0].出生日期.split('T')[0]);
            $('.student_tell').text(data[0].联系电话);
            if(data[0].备注==null){
                $('.remarksSee').text('');
            }else{
                $('.remarksSee').text(data[0].备注);
            }

        }
    });
    $.ajax({
        type:'post',
        url:'/returnrecord',
        data:{
            lc_id:tr_id
        },
        success:function(data){
            //console.log(data);
            if(data.length!=0){
                var html='';
                for(var i=0;i<data.length;i++){
                    var timelc=data[i].回访时间.split('T')[0];
                    html+='<tr><td class=" col-md-2">'+timelc+'</td><td class="col-md-2">'+data[i].负责人+'</td><td class="col-md-2">'+data[i].回访人+'</td><td class="col-md-3">'+data[i].回访主题+'</td><td class="col-md-3">'+data[i].回访内容+'</td></tr>'
                    $('.tbody_record').html(html);
                }
            }else{
                $('.tbody_record').html('');
            }

        }
    })
}
//添加回访记录
$(function(){
    var inp1,inp2,inp3,inp4;
    $('#recorddays').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#recorddays').blur(function(){
        inp1=$('#recorddays').val();
        if(inp1!=''){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({display:'none'});
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            //console.log('but');
        }
    })
    $('#Personpeople').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Personpeople').blur(function(){
        var Personpeople=$('#Personpeople').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp2=reg.test(Personpeople);
        if(inp2){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    $('#Returnpeople').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Returnpeople').blur(function(){
        var Returnpeople=$('#Returnpeople').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp3=reg.test(Returnpeople);
        if(inp3){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    $('#namelc').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Returntheme').blur(function(){
        var Returntheme=$('#Returntheme').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp4=reg.test(Returntheme);
        if(inp4){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            //console.log('but');
        }
    });
    $('#AddreturnrecordSjk').click(function(){
        //console.log(123)
        var obj={
            recorddays:$('#recorddays').val(),
            Personpeople:$('#Personpeople option:checked').text(),
            Returnpeople:$('#Returnpeople').val(),
            Returntheme:$('#Returntheme').val(),
            textareaTheme:$('#textareaTheme').val(),
            lc_id:tr_id
        }
        //console.log(obj);
        if(inp1&&inp2&&inp3&&inp4&&$('#textareaTheme').val()){
            $.ajax({
                type:'post',
                url:'/Addreturnrecord',
                data:obj,
                success:function(data){
                    $('.txt_Lc').text('添加成功！');
                    $('#myAlertLc').fadeIn();
                    $(".addRecord").hide();
                    setTimeout(function(){
                        $('#myAlertLc').fadeOut(500);
                    },1000)
                    $('input').val(undefined);
                    $('textarea').val(undefined);
                    $("input[type='radio']").removeAttr('checked');
                    $('select').css({borderColor:'#cccccc'});
                    $('input').css({borderColor:'#cccccc',color:'#555555'});
                    $('textarea').css({borderColor:'#cccccc'});
                    $(this).next('span').css({display:'none'});
                    sx_Inf();
                }
            })

            //console.log(1223)
        }else{
            //console.log(111)
        }

    })
})

//修改页面
$("#modifyStudent").click(function(){
    //console.log(tr_id);
    if(tr_id==null){

    }else{
        $(".ModifyInf").slideDown();
    }
});
//显示修改学生信息
$('#modifyStudent').click(function(){
    if(tr_id!=null){
        $.ajax({
            type: 'post',
            url: '/tr_studentInf',
            data: {
                lc_id: tr_id
            },
            success: function (data) {
                var timedata=data[0].出生日期.split('T')[0].split('-')
                //console.log(timedata[0]+'/'+timedata[1]+'/'+timedata[2]);
                $(".name_student").text(data[0].姓名);
                //console.log(data[0].出生日期.split('T')[0]);
                var data1 = data[0].出生日期.split('T')[0] + "";
                $('.sex_student').text(data[0].性别);
                $('#Modifydate').val(data1);
                $('#Modifyhost').val(data[0].家庭住址);
                $('#modifytel').val(data[0].联系电话);
                $('#modifyclass option:checked').text(data[0].所属班级);
                $('#Modifyfathername').val(data[0].父亲);
                $('#modifyfathertel').val(data[0].父亲电话);
                $('#Modifymothername').val(data[0].母亲);
                $('#modifymothertel').val(data[0].母亲电话);
                $('#modifyRemarks').val(data[0].备注);
            }
        });
    }


});
$(function(){
    var inp2,inp3,inp4,inp5,inp6,inp7,inp8;
    //时间判断
    $('#Modifydate').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Modifydate').blur(function(){
        inp2=$('#Modifydate').val();
        if(inp2!=''){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({display:'none'});
            $(this).next('span').attr('aria-hidden','true');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log('but');
        }
    })
//班级判断
    $('#modifyclass').focus(function(){
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#modifyclass').blur(function(){
        //classselect=$("#classselect option:checked").text();
        $(this).css({borderColor:'green'});
    });
//家庭住址判断
    $('#Modifyhost').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Modifyhost').blur(function(){
        var Modifyhost=$('#Modifyhost').val();
        var reg=/([^\x00-\xff]|[A-Za-z0-9_])+/;
        inp3=reg.test(Modifyhost);
        if(inp3){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            $(this).next('span').attr('aria-hidden','true');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log('but');
        }
    });
//父亲判断

    $('#Modifyfathername').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Modifyfathername').blur(function(){
        var Modifyfathername=$('#Modifyfathername').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp4=reg.test(Modifyfathername);
        if(inp4){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            $(this).next('span').attr('aria-hidden','true');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log('but');
        }
    });
//母亲判断
    $('#Modifymothername').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#Modifymothername').blur(function(){
        var Modifymothername=$('#Modifymothername').val();
        var reg=/^[\u4e00-\u9fa5]+$/;
        inp5=reg.test(Modifymothername);
        if(inp5){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            $(this).next('span').attr('aria-hidden','true');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log('but');
        }
    });
//联系电话判断
    $('#modifytel').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#modifytel').blur(function(){
        var modifytel=$('#modifytel').val();
        var reg=/^1[34578]\d{9}$/;
        inp6=reg.test(modifytel);
        if(inp6){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            $(this).next('span').attr('aria-hidden','true');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log($(this).next('span').attr('aria-hidden'));
        }
    });
//父亲电话判断
    $('#modifyfathertel').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#modifyfathertel').blur(function(){
        var modifyfathertel=$('#modifyfathertel').val();
        var reg=/^1[34578]\d{9}$/;
        inp7=reg.test(modifyfathertel);
        if(inp7){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            $(this).next('span').attr('aria-hidden','true');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').css({color:'red'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log('but');
        }
    });
//母亲电话判断
    $('#modifymothertel').focus(function(){
        $(this).next('span').css({display:'none'});
        $(this).css({borderColor:"#26FFF3"})
    })
    $('#modifymothertel').blur(function(){
        var modifymothertel=$('#modifymothertel').val();
        var reg=/^1[34578]\d{9}$/;
        inp8=reg.test(modifymothertel);
        if(inp8){
            $(this).css({borderColor:'green'});
            $(this).next('span').css({color:'green',display:'inline-block'});
            $(this).next('span').removeClass('glyphicon-remove');
            $(this).next('span').addClass('glyphicon-ok');
            $(this).next('span').attr('aria-hidden','true');
            //console.log('but');
        }else{
            $(this).css({borderColor:'red'});
            $(this).next('span').removeClass('glyphicon-ok');
            $(this).next('span').addClass('glyphicon-remove');
            $(this).next('span').css({color:'red',display:'inline-block'});
            $(this).next('span').attr('aria-hidden','false');
            //console.log('but');
        }
    });
//确认修改信息
    $('#ConfirmModification').click(function(){
        //console.log($('.seepadTop > div > span').eq(1).attr('aria-hidden'));
        var statr=$('.seepadTop > div > span');
        //console.log(statr);
        if(statr.eq(1).attr('aria-hidden')=='true'&&statr.eq(2).attr('aria-hidden')=='true'&&statr.eq(3).attr('aria-hidden')=='true'
        &&statr.eq(4).attr('aria-hidden')=='true'&&statr.eq(5).attr('aria-hidden')=='true'&&statr.eq(6).attr('aria-hidden')=='true'){
            var date=new Date();
            var year=date.getFullYear();
            var month=date.getMonth()+1;
            var day=date.getDate();
            var namelsl=username+'修改了'+ namevalues +'的信息';
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
            $(".ModifyInf").hide();
            $('.txt_Lc').text('修改成功！');
            $('#myAlertLc').fadeIn();
            //console.log($('#modifymothertel').val());
            $.ajax({
                type:'post',
                url:'/ModifyInf',
                data:{
                    lc_id:tr_id,
                    modifyclass:$('#modifyclass option:checked').text(),
                    modifytel:$('#modifytel').val(),
                    modifyfathertel:$('#modifyfathertel').val(),
                    modifymothertel:$('#modifymothertel').val(),
                    Modifydate:$('#Modifydate').val(),
                    Modifyhost:$('#Modifyhost').val(),
                    Modifyfathername:$('#Modifyfathername').val(),
                    Modifymothername:$('#Modifymothername').val(),
                    modifyRemarks:$('#modifyRemarks').val()
                },
                success:function(data){
                    //console.log(data);
                    $('input').next('span').css({display:'none'});
                    $('input').css({borderColor:'#cccccc',color:'#555555'});
                    $('select').css({borderColor:'#cccccc',color:'#555555'});
                    setTimeout(function(){
                        $('#myAlertLc').fadeOut(500);
                    },1000)
                    sxschoollc(s_id);
                    tr_id=null;
                }

            })
        }



    });
})

//模糊查询

$('.inflcsecondlc').click(function(){
    var options=$("#vagueVal option:checked").text();
    //console.log($('#QueryNeir').val()+'%');
    //console.log(options);
    if(options==='学生姓名'){
        $.ajax({
            type:'post',
            url:'/vagueValname',
            data:{
                queryNeir:'%'+$('#QueryNeir').val()+'%',
                s_id:s_id
            },
            success:function(data){
                //console.log(data);
                var html='';
                for(var i=0;i<data.length;i++){
                    html += tr_asdd(data,i);
                }
                $('.tbody').html(html);
                html='';
                $('.overlc').css({visibility:'hidden'})
            }
        })
    }
    if(options==='班级'){
        $.ajax({
            type:'post',
            url:'/vagueValclass',
            data:{
                queryNeir:$('#QueryNeir').val(),
                s_id:s_id
            },
            success:function(data){
                //console.log(data);
                var html='';
                for(var i=0;i<data.length;i++){
                    html += tr_asdd(data,i);
                }
                $('.tbody').html(html);
                html='';
                $('.overlc').css({visibility:'hidden'})

            }
        })
    }
    if(options==='电话号码'){
        //console.log(123456);
        $.ajax({
            type:'post',
            url:'/vagueValtell',
            data:{
                queryNeir:$('#QueryNeir').val(),
                s_id:s_id
            },
            success:function(data){
                //console.log(data);
                var html='';
                for(var i=0;i<data.length;i++){
                    html += tr_asdd(data,i);
                }
                $('.tbody').html(html);
                html='';
                $('.overlc').css({visibility:'hidden'})
            }
        })
    }
})




//页面加载刷新方法
function lodlc(){

    //学校名称
    $.ajax({
        type:'post',
        url:'/schoolJump',
        data:'',
        success:function(data){
            var html='';
            for(var i=0;i<data.length;i++){
                html+=  '<li ><span class="schoolInf" s_id='+data[i].id+'>'+data[i].学校名称+'</span></li>'
            }
            //console.log(html)
            $('.dropdown-menu').html(html);
            html='';
        }

    })
    var hml='<p>请点击左边对应学校</p>';
    $('.Prompt').html(hml);
};
//返回主界面
//$(document).on('click','.cancel')
$(".cancel").click(function(){

    $(".addinf").slideUp('slow');
    $(".seeinf").slideUp('slow');
    $(".deleteInf").slideUp('slow');
    $(".ModifyInf").slideUp('slow');
    //console.log(543432);
    $('input').next('span').css({display:'none'});
    $('input').css({borderColor:'#cccccc',color:'#555555'});
    $('select').css({borderColor:'#cccccc',color:'#555555'});
    $('#sexlc').css({display:"none"})
    $(this).next('span').attr('aria-hidden','true');
});
$('.cancel1').click(function(){
    $(".addRecord").slideUp('slow');
    $('input').next('span').css({display:'none'});
    $('input').css({borderColor:'#cccccc',color:'#555555'});
    $('select').css({borderColor:'#cccccc',color:'#555555'});
});
//=================================新增==========================
//添加回访记录
$(".Addreturnrecord").click(function(){
    $(".addRecord").slideDown();
    $('input').next('span').css({display:'none'});
    $('input').css({borderColor:'#cccccc',color:'#555555'});
    $('select').css({borderColor:'#cccccc',color:'#555555'});
    //console.log(654654);
});