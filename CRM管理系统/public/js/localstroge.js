/**
 * Created by Administrator on 2017/4/5.
 */
$(function(){

 $("#btu").click(function(){
        var user=$("#Username").val();
        var password=$("#Password1").val();

        setlocalStorage({minute:10},'user',user)
        setlocalStorage({minute:10},'password',password)
    })

    run()
    function setlocalStorage(data,user,password){
        if(data.day==undefined&&data.hour==undefined&&data.minute==undefined&&data.second==undefined){
            //console.log("必须有值")
        }else{
            var d=0,h=0,m= 0,s=0;
            if(data.day!=undefined){
                d=data.day
            }
            if(data.hour!=undefined){
                h=data.hour
            }
            if(data.minute!=undefined){
                m=data.minute;
            }
            if(data.second!=undefined){
                s=data.second
            }
        }
        var date=new Date();
        var ddt= date.getTime()+( (d*24*60*60*1000) + (h*60*60*1000) + (m*60*1000) + (s*1000) );
        localStorage.bcsjc=ddt;
        localStorage.setItem(user,password)

    }
    function dataout(mydate){
        var date=new Date(),
            ddt= date.getTime();
        //当localStorage.bcsjc不存在的时候的判断，创建它
        if(localStorage.bcsjc == undefined || localStorage.bcsjc == 'undefined'){
            localStorage.bcsjc = 0;
        }
        if( parseInt(localStorage.bcsjc) >ddt){
            $("#Username").val(localStorage.user);
            $("#Password1").val(localStorage.password);
        }else{

            localStorage.removeItem(mydate)
            //这里可以删除全部，用clear来清除
        }
    }
    function run(){
        dataout("user");
        dataout("password");
    }
})
