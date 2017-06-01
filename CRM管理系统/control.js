/**
 * Created by Administrator on 2017/4/5.
 */
var db=require("./db.js");
/*==============查询数据库=========================*/
exports.sendadmin=function(req,res){
    var user=req.body.user;
    var password=req.body.password;

    db.open_db();
    db.jieshouxinhao(req,res,user,password);
    db.close_db()
};
/*==============添加用户和密码==============================*/
exports.registerpage=function(req,res){
    var user=req.body.user;
    var password=req.body.password;

    db.open_db();
    db.addtable(req,res,user,password);
    db.close_db()
};
/*====================system=================================*/
exports.rizineiro = function(req,res){
    var page = req.body.page;
    page = parseInt(page)*3;

    db.open_db();
    db.rizineiro(page,res);
        db.close_db();
};
exports.xinxiyilan = function(req,res){
    var page = req.body.page;
    page = parseInt(page)*3;

    db.open_db();
    db.xinxiyilan(page,res);
    db.close_db();
};
/*====================class======================================*/
//添加
exports.addlsl_1 = function(req,res){
    var name1=req.body.name1;
    var name2=req.body.name2;
    var name3=req.body.name3;
    var ban_ji=req.body.ban_ji;

    db.open_db();
    db.addlsl_1(name1,name2,name3,ban_ji,res);

    //db.close_db()
  /*  console.log("assa")*/
};
//查询
exports.schoolone = function(req,res){
    db.open_db();
    db.schoolone(req,res);
 /*   db.close_db();*/
};
exports.schooltwo = function(req,res){
    db.open_db();
    db.schooltwo(req,res);
    /*db.close_db();*/
};
//删除
exports.shanchu = function(req,res){
    var lsl_id=req.body.name;
   /* console.log(lsl_id);*/
    db.open_db();
    db.shanchu(lsl_id,res);

    /*db.close_db()*/
};
/*===============school=================================*/
//学校活动列表(主页面)
exports.liebiao1 =function(req,res){
    /*console.log("用户访问了");*/

    var     nei1 = req.body.nei1,
        nei2 = req.body.nei2,
        nei3 = req.body.nei3,
        nei4 = req.body.nei4;

    db.open_db();
    db.select_logPostSend_table(nei1,nei2,nei3,nei4,res);
    db.close_db();
}
//查看活动信息页面列表
exports.liebiao2 =function(req,res){
    /*console.log("用户访问了");*/
    var    s_name =req.body.s_name;
    db.open_db();
    db.select_logPostSend_table2(s_name,res);
    db.close_db();
}
//查看活动反馈页面列表
exports.liebiao3 =function(req,res){
   /* console.log("用户访问了");*/
    var    s_name =req.body.s_name;
    db.open_db();
    db.select_logPostSend_table3(s_name,res);
    db.close_db();
};
//添加活动反馈页面 添加
exports.tianjia1 =function(req,res){
    /*console.log("用户访问了");*/

    var caifang = req.body.caifang,
        beicaifang = req.body.beicaifang,
        shengfen = req.body.shengfen,
        neirong = req.body.neirong,
        xuem = req.body.xuem;


    db.open_db();
    db.add_table(caifang,beicaifang,shengfen,neirong,xuem,res);
    db.close_db();
}

//添加活动页面 添加按钮
exports.tianjia2 =function(req,res){
   /* console.log("用户访问了");*/
    var huodongm = req.body.huodongm,
        huodongs = req.body.huodongs,
        huodongd = req.body.huodongd,
        zuti     = req.body.zuti,
        fuzeb = req.body.fuzeb,
        fuzer = req.body.fuzer,
        xunm = req.body.xunm;


    db.open_db();
    db.add_table2(huodongm,huodongs,huodongd,zuti,fuzeb,fuzer,xunm,res);
    db.close_db();
}
//添加活动页面 添加按钮 传输到信息一览
exports.chuanshuxin1 =function(req,res){
    /*console.log("用户访问了");*/
    var j4 = req.body.j4;
    var nowtime = req.body.nowtime;

    db.open_db();
    db.add_table5(j4,nowtime,res);
    db.close_db();
}

//学校管理列表(次页面)
//录入新学校 添加按钮
exports.tianjia3 =function(req,res){
    /*console.log("用户访问了");*/
    var w1 = req.body.w1,
        w2 = req.body.w2,
        w3 = req.body.w3,
        w4 = req.body.w4,
        w5 = req.body.w5,
        w6 = req.body.w6,
        w7 = req.body.w7,
        w8 = req.body.w8,
        w9 = req.body.w9,
        w10 = req.body.w10

    db.open_db();
    db.add_table3(w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,res);
    db.close_db();
}

//查看学校信息 页面 信息
exports.yemian1 =function(req,res){

    var s_name =req.body.s_name;

    db.open_db();
    db.select_yemian1(s_name,res);
    db.close_db();
}

//查看学校信息页面      沟通列表
exports.liebiao4 =function(req,res){
  /*  console.log("用户访问了");*/

    var    s_name =req.body.s_name;

    db.open_db();
    db.select_logPostSend_table4(s_name,res);
    db.close_db();
}

//添加沟通记录页面  添加按钮
exports.tianjia4 =function(req,res){
    /*console.log("用户访问了");*/
    var p16Gl = req.body.p16Gl,
        p17Gl = req.body.p17Gl,
        p18Gl = req.body.p18Gl,
        p19Gl = req.body.p19Gl,
        p20Gl = req.body.p20Gl,
        h4 = req.body.h4


    db.open_db();
    db.add_table4(p16Gl,p17Gl,p18Gl,p19Gl,p20Gl,h4,res);
    db.close_db();
}


//审核页面 信息
exports.yemian2 =function(req,res){
    var s_name =req.body.s_name;

    db.open_db();
    db.select_yemian2(s_name,res);
    db.close_db();
}


//修改学校信息 页面
//1.第一时间所看到的
exports.yemian3 =function(req,res){
    var s_name =req.body.s_name;

    db.open_db();
    db.select_yemian3(s_name,res);
    db.close_db();
}
//修改学校信息 页面
//2.点击确认按钮之后
exports.yemian5 =function(req,res){
    var s_name =req.body.s_name;
    var o1Gl=req.body.o1Gl,
        o2Gl=req.body.o2Gl,
        o3Gl=req.body.o3Gl,
        o4Gl=req.body.o4Gl,
        o5Gl=req.body.o5Gl,
        o6Gl=req.body.o6Gl,
        o7Gl=req.body.o7Gl,
        o8Gl=req.body.o8Gl,
        o9Gl=req.body.o9Gl,
        o10Gl=req.body.o10Gl,
        o11Gl=req.body.o11Gl,
        o12Gl=req.body.o12Gl,
        o13Gl=req.body.o13Gl,
        o14Gl=req.body.o14Gl,
        o15Gl=req.body.o15Gl
    db.open_db();
    db.select_yemian5(o1Gl,o2Gl,o3Gl,o4Gl,o5Gl,o6Gl,o7Gl,o8Gl,o9Gl,o10Gl,o11Gl,o12Gl,o13Gl,o14Gl,o15Gl,s_name,res);
   db.close_db();
}


//申请立项页面
exports.yemian4 =function(req,res){
    var s_name =req.body.s_name;

    db.open_db();
    db.select_yemian4(s_name,res);
   db.close_db();
}
//审核页面 批准立项按钮
exports.yemian6 =function(req,res){
    var s_name =req.body.s_name;


    db.open_db();
    db.select_yemian6(s_name,res);
   db.close_db();
}
//审核页面 驳回立项按钮
exports.yemian7 =function(req,res){
    var s_name =req.body.s_name;


    db.open_db();
    db.select_yemian7(s_name,res);
   db.close_db();
}
/*====================user=================================*/
//     整个表单
exports.logPostSend = function(req,res){

    db.open_db();
    db.logPostSend_table(req,res);
    db.close_db()
}

exports.logPostSendb = function(req,res){

    db.open_db();
    db.logPostSend_tableb(req,res);
    db.close_db()
}


//      添加数据

exports.logPostSend2 = function(req,res){
    var namelc=req.body.namelc;
    var sskm=req.body.sskm;
    var lxdh=req.body.lxdh;
    var sdbj=req.body.sdbj;
    var sex=req.body.sex;
    var xuex=req.body.xuex;
    db.open_db();
    db.logPostSend_table2(namelc,sskm,lxdh,sdbj,sex,xuex,res);
    db.close_db()

}

//删除数据
exports.sjDelete = function(req,res){
    var shang=req.body.shang;
    db.open_db();
    db.logPostSend_table3(shang,res);
    db.close_db()
}
//修改数据
exports.sjxiugai = function(req,res){
    var num=req.body.num;
    db.open_db();
    db.logPostSend_table4(num,res);
    db.close_db()
}

exports.sjxiugai2 = function(req,res){
    var num=req.body.num;
    var ghmm=req.body.ghmm;
    db.open_db();
    db.logPostSend_table5(ghmm,num,res);
    db.close_db()
}
/*================================================*/
//学生信息
exports.AjaxInputText1=function(req,res){
    db.open_db();
    db.select_table1(req,res);
    db.close_db();
};

//学校信息
exports.AjaxInputText2=function(req,res){
    db.open_db();
    db.select_table2(req,res);
    db.close_db();
};
//学生信息上一页
exports.AjaxInputText3=function(req,res){
    var page=req.body.page1,
        s_id=req.body.s_id,
        school_st_id=req.body.school_st_id;
    page=parseInt(page-1)*8;
  /*  console.log('很多是空号覅噢hi佛hi噢放好')
    console.log(req.body)*/
    db.open_db();
    db.select_table3(page,s_id,school_st_id,res);
    db.close_db();
};
//总页数
exports.AjaxInputText4=function(req,res){
    db.open_db();
    db.select_table4(req,res);
    db.close_db();
};

//添加学生信息
exports.AjaxInputText5=function(req,res){
    //console.log(req.body);
    var namelc=req.body.namelc,
        sexlc=req.body.sexlc,
        datelc=req.body.datelc,
        classselect=req.body.classselect,
        address=req.body.address,
        tell=req.body.tell,
        father=req.body.father,
        fathertell= req.body.fathertell,
        mother=req.body.mother,
        mothertell=req.body.mothertell,
        remarks=req.body.remarks,
        s_id=req.body.s_id;
    db.open_db();
    db.select_table5(namelc,sexlc,datelc,address,classselect,tell,father,fathertell,mother,mothertell,remarks,s_id,res);
    db.close_db();
};

//删除学生信息
exports.AjaxInputText6=function(req,res){
    var lc_id=req.body.lc_id;
    db.open_db();
    db.select_table6(lc_id,res);

    //console.log("delete now");

    db.close_db();
}
//查看学生信息
exports.AjaxInputText7=function(req,res){
    var lc_id=req.body.lc_id;

    //console.log(lc_id);
    db.open_db();
    db.select_table7(lc_id,res);
    db.close_db();
}
//添加回访记录
exports.AjaxInputText8=function(req,res){
    var recorddays=req.body.recorddays,
        Personpeople=req.body.Personpeople,
        Returnpeople=req.body.Returnpeople,
        Returntheme=req.body.Returntheme,
        textareaTheme=req.body.textareaTheme,
        lc_id=req.body.lc_id;
    db.open_db();
    db.select_table8(recorddays,Personpeople,Returnpeople,Returntheme,textareaTheme,lc_id,res);
    db.close_db();
}
exports.AjaxInputText9=function(req,res){
    var lc_id=req.body.lc_id;
    db.open_db();
    db.select_table9(lc_id,res);
    db.close_db();
}
//修改学生信息
exports.AjaxInputText10=function(req,res){
    var lc_id=req.body.lc_id,
        modifyclass=req.body.modifyclass,
        modifytel=req.body.modifytel,
        modifyfathertel=req.body.modifyfathertel,
        modifymothertel=req.body.modifymothertel,
        Modifydate=req.body.Modifydate,
        Modifyhost=req.body.Modifyhost,
        Modifyfathername=req.body.Modifyfathername,
        Modifymothername=req.body.Modifymothername,
        modifyRemarks=req.body.modifyRemarks;
    console.log(req.body.modifymothertel);
    db.open_db();
    db.select_table10(modifyclass,modifytel,modifyfathertel,modifymothertel,Modifydate,Modifyhost,Modifyfathername,Modifymothername,modifyRemarks,lc_id,res);
    db.close_db();
}
//模糊查询
exports.AjaxInputText11=function(req,res){
    var queryNeir=req.body.queryNeir,
        s_id=req.body.s_id;
    db.open_db();
    db.select_table11(queryNeir,s_id,res);
    db.close_db();
}
exports.AjaxInputText12=function(req,res){
    var queryNeir=req.body.queryNeir,
        s_id=req.body.s_id;
    db.open_db();
    db.select_table12(queryNeir,s_id,res);
    db.close_db();
}
exports.AjaxInputText13=function(req,res){
    var queryNeir=req.body.queryNeir,
        s_id=req.body.s_id;
    //console.log(queryNeir);
    db.open_db();
    db.select_table13(queryNeir,s_id,res);
    db.close_db();
}
//点击学校名称，显示对应学生名单
exports.AjaxInputText14=function(req,res){
    var page=req.body.page1,
        s_id=req.body.s_id;
    page=parseInt(page-1)*8;
    /*console.log(req.body);*/
    db.open_db();
    db.select_table14(s_id,page,res);
    db.close_db();
}
//点击学校名称，显示对应学生名单页数
exports.AjaxInputText15=function(req,res){
    var s_id=req.body.s_id;
    db.open_db();
    db.select_table15(s_id,res);
    db.close_db();
}
//显示对应学校的班级
exports.AjaxInputText16=function(req,res){
    var s_id=req.body.s_id;
    db.open_db();
    db.select_table16(s_id,res);
    db.close_db();
}
//学生一览的日志
exports.rizineiro123=function(req,res){
    var nowtime=req.body.nowtime,
        studentname=req.body.studentname;
    db.open_db();
    db.rizineiro123(nowtime,studentname,res);
    db.close_db();
}
/*==============ziliao=================================*/
//吴颜冰的conrol
//右边点击按钮和界面加载员工管理的数据库
exports.right = function(req,res){
    var right = req.body.right;
    db.right(req,res,right);
}
//页面加载时候的职位数据库记载
exports.xiugaizhiwei = function(req,res){
    db.xiugaizhiwei(req,res);
}
//页面记载部门管理的时候的数据库
exports.bumenguanli = function(req,res){
    db.bumenguanli(req,res);
}
exports.tianjiaxinyuangong = function(req,res){
    var select_wyb_1 = req.body.select_wyb_1;
    var select_wyb_2 = req.body.select_wyb_2;
    var select_wyb_3 = req.body.select_wyb_3;
    var select_wyb_4 = req.body.select_wyb_4;
    var texttime_wyb = req.body.texttime_wyb;
    var textname_wyb = req.body.textname_wyb;
    var textstudy_wyb = req.body.textstudy_wyb;
    var textsreet_wyb = req.body.textsreet_wyb;
    var textphone_wyb = req.body.textphone_wyb;
    var sex_wyb_1  =req.body.sex_wyb_1;
    var ruzhitime_wyb_1 =req.body.ruzhitime_wyb_1;
    db.tianjiaxinyuangong(textname_wyb,sex_wyb_1,texttime_wyb,select_wyb_2,textstudy_wyb,textphone_wyb,textsreet_wyb,select_wyb_3,select_wyb_1,select_wyb_4,ruzhitime_wyb_1,res);
}
//这是修改用户数据的函数发送后台的数据
exports.xiugaiyungongshuju = function(req,res){
    var name2 = req.body.name2;
    var textphone_wyb = req.body.textphone_wyb;
    var select_wyb_1 = req.body.select_wyb_1;
    var select_wyb_2 = req.body.select_wyb_2;
    var select_wyb_3 = req.body.select_wyb_3;
    db.xiugaiyungongshuju(select_wyb_1,select_wyb_2,select_wyb_3,textphone_wyb,name2,res);
}
//这是删除员工数据时候的数据
exports.shanchuyuangong = function(req,res){
    var name1 = req.body.name1
    db.shanchuyuangong(name1,res);
}
//这是添加职位时候数据后台的传输

exports.tianjiazhiwei_wyb = function(req,res){
    var tet_guanli_wyb_1 = req.body.tet_guanli_wyb_1;
  /*  console.log(tet_guanli_wyb_1);*/
    var tet_guanli_wyb_2 = req.body.tet_guanli_wyb_2;
    var chunxunquanxan = req.body.chunxunquanxan;
    var kaohequanxian = req.body.kaohequanxian;
    var xiaoshoutongji = req.body.xiaoshoutongji;
    var quanxianguanli = req.body.quanxianguanli;
    var houtaiguanli = req.body.houtaiguanli;
    db.tianjiazhiwei_wyb(tet_guanli_wyb_1,tet_guanli_wyb_2,chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli,res);
}
//这是修改职位信息的函数发送的ajax
exports.xiugaizhiweixinxi = function(req,res){
    var tet_guanli_wyb_1 = req.body.tet_guanli_wyb_3;
    var chunxunquanxan = req.body.chunxunquanxan;
    var kaohequanxian = req.body.kaohequanxian;
    var xiaoshoutongji = req.body.xiaoshoutongji;
    var quanxianguanli = req.body.quanxianguanli;
    var houtaiguanli = req.body.houtaiguanli;
    db.xiugaizhiweixinxi(chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli,tet_guanli_wyb_1,res);
}
//这是修改部门信息的函数
exports.xiugaibumenxinxi = function(req,res){
    var a = req.body.a;
    var b = req.body.b;
    db.xiugaibumenxinxi(a,b,res);
}
//这是添加部门管理的时候的ajax
exports.tianjiabumenxinxi = function(req,res){
    var bumenname_wyb = req.body.bumenname_wyb;
    var bumentime_wyb = req.body.bumentime_wyb;
    var textarea_wyb_1 = req.body.textarea_wyb_1;
    var select_bumenzhuguan = req.body.select_bumenzhuguan;
    db.tianjiabumenxinxi(bumenname_wyb,select_bumenzhuguan,bumentime_wyb,textarea_wyb_1,res);
}
//这是删除部门信息的时候发送的ajax
exports.quedingshachubumenxinxi = function(req,res){
    var quedingshachubumenxinxi  = req.body.quedingshachubumenxinxi;
    db.quedingshachubumenxinxi(quedingshachubumenxinxi,res);
}

//这是模糊查询的时候的发送的ajax
exports.mohuchaxun1 = function(req,res){
    var e = req.body.e;
    e="%"+e+"%";
    db.mohuchaxun1(e,e,e,e,e,res);
}
//这是按时间查找的ajax
exports.anshijianchazhao = function(req,res){
    var textimestart_wyb = req.body.textimestart_wyb;
    var textimeend_wyb = req.body.textimeend_wyb;
    db.anshijianchazhao(textimestart_wyb,textimeend_wyb,res);
}
//这是发送所属部门的时候发送的函数
exports.shuoshubumen = function(req,res){
    var e = req.body.shuoshubumen;
    e="%"+e+"%";
    db.shuoshubumen(e,res);
}
exports.wenhuachengdu = function(req,res){
    var e = req.body.wenhuachengdu;
    e="%"+e+"%";
    db.wenhuachengdu(e,res);
}
exports.gongzuozhiwei = function(req,res){
    var e = req.body.gongzuozhiwei;
    e="%"+e+"%";
    db.gongzuozhiwei(e,res);
}


