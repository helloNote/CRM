/**
 * Created by Administrator on 2017/4/5.
 */
var express=require("express");
var app=express();
var port=8000;
var obj=require("./control.js")
app.listen(port,function(){
    console.log("启动成功")
});

app.use(express.static('public'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.post('/sendadmin',obj.sendadmin);
app.post('/registerpage',obj.registerpage);
/*==================system========================*/
app.post('/rizineiro',obj.rizineiro);
app.post('/xinxiyilan',obj.xinxiyilan);
/*====================class========================*/
app.post('/addlsl_1',obj.addlsl_1);
app.post('/schoolone',obj.schoolone);
app.post('/schooltwo',obj.schooltwo);
app.post('/shanchu',obj.shanchu);
/*=======================school============================*/
//学校活动列表(主页面)
app.post("/liebiao1",obj.liebiao1);
//查看活动信息页面列表
app.post("/liebiao2",obj.liebiao2);
//查看活动反馈页面列表
app.post("/liebiao3",obj.liebiao3);
//添加活动反馈页面 添加按
app.post("/tianjia1",obj.tianjia1);
//添加活动页面 添加按钮
app.post("/tianjia2",obj.tianjia2);
//添加活动页面 添加按钮 传输到信息一览
app.post("/chuanshuxin1",obj.chuanshuxin1);



//学校管理列表(次页面)
//录入新学校 添加按钮
app.post("/tianjia3",obj.tianjia3);
//查看学校信息页面      沟通列表
app.post("/liebiao4",obj.liebiao4);
//添加沟通记录页面  添加按钮
app.post("/tianjia4",obj.tianjia4);
//查看学校信息 页面 信息
app.post("/yemian1",obj.yemian1);
//审核页面 信息
app.post("/yemian2",obj.yemian2);

//修改学校信息 页面
//1.第一时间所看到的
app.post("/yemian3",obj.yemian3);
//修改学校信息 页面
//2.点击确认按钮之后
app.post("/yemian5",obj.yemian5);

//申请立项页面
app.post("/yemian4",obj.yemian4);
//审核页面 批准立项按钮
app.post("/yemian6",obj.yemian6);
//审核页面 驳回立项按钮
app.post("/yemian7",obj.yemian7);
/*====================user=======================*/
//表
app.post('/logPostSend',obj.logPostSend);
app.post('/logPostSendb',obj.logPostSendb);

//添加信息
app.post('/logPostSend2',obj.logPostSend2);

//删除信息
app.post('/sjDelete',obj.sjDelete);

//修改信息
app.post('/sjxiugai',obj.sjxiugai);

app.post('/sjxiugai2',obj.sjxiugai2);
/*==================student===============================*/
//页面刷新显示第一个学校学生信息
app.post('/PageJump',obj.AjaxInputText1);
//页面刷新显示学校
app.post('/schoolJump',obj.AjaxInputText2);
//上一页下一页
app.post('/tp_Left',obj.AjaxInputText14);
//总页数
app.post('/PageJumpsum',obj.AjaxInputText4);
//添加学生信息
app.post('/AddInformation',obj.AjaxInputText5);
//删除学生信息
app.post('/tr_idDelete',obj.AjaxInputText6);
//查看学生信息
app.post('/tr_studentInf',obj.AjaxInputText7);
//添加回访记录
app.post('/Addreturnrecord',obj.AjaxInputText8);
//查看回访记录
app.post('/returnrecord',obj.AjaxInputText9);
//修改学生信息
app.post('/ModifyInf',obj.AjaxInputText10);
//模糊查询
//名字
app.post('/vagueValname',obj.AjaxInputText11);
//班级
app.post('/vagueValclass',obj.AjaxInputText12);
//电话号码
app.post('/vagueValtell',obj.AjaxInputText13);
//点击学校加载学生名单
app.post('/schoolInf',obj.AjaxInputText14);
//点击学校加载学生名单页数
app.post('/PageschoolInf',obj.AjaxInputText15);
//显示对应学校的班级
app.post('/classinf',obj.AjaxInputText16);
//学生一览的日志查询
app.post('/rizineiro123',obj.rizineiro123);
/*-=================ziliao====================================*/
app.post('/shanchu',obj.shanchu);//吴颜冰app
app.post('/sendadmin',obj.sendadmin);
app.post('/registerpage',obj.registerpage);
//页面加载时候员工资料的数据库加载
app.post('/right',obj.right);
//职位加载时候的数据库
app.post('/xiugaizhiwei',obj.xiugaizhiwei);
//页面加载时候的部门管理数据库的加载
app.post('/bumenguanli',obj.bumenguanli);
//这是添加员工时候更改数据库的数据
app.post('/tianjiaxinyuangong',obj.tianjiaxinyuangong);
//这是删除员工的时候发送的ajax
app.post('/shanchuyuangong',obj.shanchuyuangong);
//这是修改员工数据的发送的
app.post('/xiugaiyungongshuju',obj.xiugaiyungongshuju);
//这是职位添加的时候发送的ajax
app.post('/tianjiazhiwei_wyb',obj.tianjiazhiwei_wyb);
//这是添加部门信息的时候发送的ajax
app.post('/tianjiabumenxinxi',obj.tianjiabumenxinxi);
//这是模糊查询的时候的发送的ajax
app.post('/mohuchaxun1',obj.mohuchaxun1);
//按时间查找的函数发送ajax
app.post('/anshijianchazhao',obj.anshijianchazhao);
//这是修改职位的信息的函数发送的ajax
app.post('/xiugaizhiweixinxi',obj.xiugaizhiweixinxi);
//这是修改部门信息的时候发送的ajax
app.post('/xiugaibumenxinxi',obj.xiugaibumenxinxi);
//这是删除部门信息的时候发送的ajax
app.post('/quedingshachubumenxinxi',obj.quedingshachubumenxinxi);
//这是所属部门的模糊查询
app.post('/shuoshubumen',obj.shuoshubumen);
//这是文化程度的模糊查询
app.post('/wenhuachengdu',obj.wenhuachengdu);
//这是工作职位的迷糊查询
app.post('/gongzuozhiwei',obj.gongzuozhiwei);






