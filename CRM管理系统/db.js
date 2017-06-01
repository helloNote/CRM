/**
 * Created by Administrator on 2017/4/5.
 */
var mysql=require("mysql")
var mysql_lx;
var MainMysql;
var mysql_lsl;
var MianMysql;

exports.open_db=function(){
    mysql_lx=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    })
    MainMysql=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    })
    mysql_lsl=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    })
    MianMysql = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"

    })

}
/*================================查询数据库的用户和密码==============================================*/
/*=================先查询用户存在不，如果存在就核对密码和账号，不存在就注册========================*/
exports.jieshouxinhao=function(req,res,user,password){
    var sql1=" SELECT * FROM admin WHERE user=? ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[user],function(err,data){
        if(err){
            console.log(err)
        }else{
            if(data==""){
                res.send("用户不存在")
            }else{
                checked1(req,res,user,password)
            }

        }
    })
};
function checked1(req,res,user,password){
   var sql=" SELECT user,password FROM admin WHERE user=? and password=? ";
    var checked=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checked.query(sql,[user,password],function(err,data){
        if(data){
            res.send(data)
        }else{
            console.log("用户或密码不正确")
        }
    })

}
/*=================================添加用户密码==========================================================*/
exports.addtable=function(req,res,user,password){
    var sql1=" SELECT * FROM admin WHERE user=? ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[user],function(err,data){
        if(err){
            console.log(err)
        }else{
            if(data==""){

                addtabel_lx(req,res,user,password)
            }else{

                res.send("用户已经存在")
            }

        }
    })
};
function addtabel_lx(req,res,user,password){
    var sql="insert into admin (user,password) VALUE (?,?)";
    var add_lx=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    add_lx.query(sql,[user,password],function(err,data){
        if(err){
            console.log(err)
        }else{
            res.send("添加成功")
        }
    })

}



/*==========================system===================================*/
//日志一览
exports.rizineiro = function(page,res){
    var sql = "SELECT * from information limit ? , 4 ";
    MainMysql.query(sql,[page],function(error,data){
        if(error){
            res.send("数据查询失败");
        }else{
            res.send(data);
            res.end();
        }
    })

};
//信息一览
exports.xinxiyilan = function(page,res){
    var sql = "SELECT * from announcement limit ? , 4 ";
    MainMysql.query(sql,[page],function(error,data){
        if(error){
            res.send("数据查询失败");
        }else{
            res.send(data);
        }
    })

};
/*=======================class=================================*/
//添加
exports.addlsl_1 = function(name1,name2,name3,ban_ji,res){
    var sql="insert into class (班级名称,所属学校,带班老师,ban_ji) VALUES (?,?,?,?)";
    mysql_lsl.query(sql,[name1,name2,name3,ban_ji],function(err,data){
        if(err){
            console.log(err)
        }else{
            res.send(data);
           /* console.log("添加成功")*/
        }
    })
};

//成都外国语学校查询
exports.schoolone = function(req,res){
    var sql = "SELECT * from class where ban_ji =1";

    mysql_lsl.query(sql,[],function(error,data){
        if(error){
            res.send("数据查询失败");
            console.log(error);
        }else{
            res.send(data);
            res.end();
            //console.log(data);
        }
    })

};
//成都十二中
exports.schooltwo = function(req,res){
    var sql = "SELECT * from class where ban_ji =2";

    mysql_lsl.query(sql,[],function(error,data){
        if(error){
            res.send("数据查询失败");
            console.log(error);
        }else{
            res.send(data);
            res.end();
            //console.log(data);
        }
    })

};
//删除
//删除学生信息
exports.shanchu=function(lsl_id,res){
    var sql = "DELETE from class WHERE id=?;";
    mysql_lsl.query(sql,[lsl_id],function(error,data){
        //console.log(data);
        if(error){
            console.log(error);
            res.send("数据删除失败");
        }else{
            console.log("数据删除成功");
            res.send("数据删除成功");
        }
    })
};
/*===================school========================================*/
//学校活动列表(主页面)
//查询数据库中的 所有信息
exports.select_logPostSend_table = select_logPostSend_fun;

function select_logPostSend_fun(nei1,nei2,nei3,nei4,res){
    var sql = "SELECT school.学校名称,school.校长,school.录入时间,school.状态 from school;"
    MianMysql.query(sql,[nei1,nei2,nei3,nei4],function(error,data){
        console.log([nei1,nei2,nei3,nei4]);
        if(error){
            console.log(error);
        }else{
            /*console.log(data);*/
            res.json(data);
        }
    });
}

/*console.log("第二步结束")*/

//查看活动信息页面列表
//查询数据库中的 所有信息
exports.select_logPostSend_table2 = select_logPostSend_fun2;

function select_logPostSend_fun2(s_name,res){
    var sql = "select * from activity where 学校名称 = ?;"
    MianMysql.query(sql,[s_name],function(error,data){
        console.log([s_name]);
        if(error){
            console.log(error);
        }else{
       /*     console.log(data);*/
            res.json(data);
        }
    });
}
/*console.log("第二步结束")*/
//查看活动反馈页面列表
//查询数据库中的 所有信息
exports.select_logPostSend_table3 = select_logPostSend_fun3;

function select_logPostSend_fun3(s_name,res){
    var sql = "select * from feedback where 学校名称 = ?;"
    MianMysql.query(sql,[s_name],function(error,data){
        console.log([s_name]);
        if(error){
            console.log(error);
        }else{
          /*  console.log(data);*/
            res.json(data);
        }
    });
}
/*console.log("第二步结束")*/



//添加活动反馈页面 添加
exports.add_table = function(caifang,beicaifang,shengfen,neirong,xuem,res){
    var sql = "insert into feedback (采访人,被采访人,身份,反馈内容,学校名称) values (?,?,?,?,?);"
    //执行mysql的语句的方法
    //1.sql -spl语句
    //2.[...]对应的传参
    //3.function -完成sql后需要执行的函数
    //sex = parseInt(sex);//bit类型转换
    MianMysql.query(sql,[caifang,beicaifang,shengfen,neirong,xuem,res], function (error,data) {
        if(error){
            console.log(error);
            res.send("数据添加失败");
        }else{
           /* console.log("增加一条语句 成功");
            console.log(data);*/
            res.send("数据添加成功");
        }

    })
}
/*console.log("第二步结束")*/



//添加活动页面 添加按钮
exports.add_table2 = function(huodongm,huodongs,huodongd,zuti,fuzeb,fuzer,xunm,res){
    var sql = "insert into activity (活动名称,时间,地点,主题,负责部门,负责人,学校名称) values (?,?,?,?,?,?,?);"
    //执行mysql的语句的方法
    //1.sql -spl语句
    //2.[...]对应的传参
    //3.function -完成sql后需要执行的函数
    //sex = parseInt(sex);//bit类型转换
    MianMysql.query(sql,[huodongm,huodongs,huodongd,zuti,fuzeb,fuzer,xunm], function (error,data) {
        if(error){
            console.log(error);
            res.send("数据添加失败");
        }else{
         /*   console.log("增加一条语句 成功");
            console.log(data);*/
            res.send("数据添加成功");
        }

    })
}
/*console.log("第二步结束")*/
//添加活动页面 添加按钮 传输到信息一览
exports.add_table5 = function(j4,nowtime,res){
    var sql = "insert into announcement (信息内容,日期) values (?,?);"
    //执行mysql的语句的方法
    //1.sql -spl语句
    //2.[...]对应的传参
    //3.function -完成sql后需要执行的函数
    //sex = parseInt(sex);//bit类型转换
    MianMysql.query(sql,[j4,nowtime], function (error,data) {
        if(error){
            console.log(error);
            res.send("数据添加失败");
        }else{
            /*   console.log("增加一条语句 成功");
             console.log(data);*/
            res.send("数据添加成功");
        }

    })
}





//学校管理列表(次页面)
//录入新学校 添加按钮
exports.add_table3 = function(w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,res){
    var sql = "insert into school (学校名称,学校地址,联系电话,老师人数,负责部门,负责人,所属城市,校长,学生人数,说明) values (?,?,?,?,?,?,?,?,?,?);"
    //执行mysql的语句的方法
    //1.sql -spl语句
    //2.[...]对应的传参
    //3.function -完成sql后需要执行的函数
    //sex = parseInt(sex);//bit类型转换
    MianMysql.query(sql,[w1,w2,w3,w4,w5,w6,w7,w8,w9,w10], function (error,data) {
        if(error){
            console.log(error);
            res.send("数据添加失败");
        }else{
         /*   console.log("增加一条语句 成功");
            console.log(data);*/
            res.send("数据添加成功");
        }

    })
}
/*console.log("第二步结束")*/

////查看学校信息 页面 信息
exports.select_yemian1 = select_yemian1_fun1;
/*console.log("这阿斯达的阿达达")*/
function select_yemian1_fun1(s_name,res){
    var sql = "select * from school where 学校名称 = ?;"
   /* console.log("这阿斯达的阿达达")*/
    MianMysql.query(sql,[s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
          /*  console.log(data);*/
            res.json(data);
        }
    });
}
//查看学校信息页面      沟通列表
exports.select_logPostSend_table4 = select_logPostSend_fun4;

function select_logPostSend_fun4(s_name,res){
    var sql = "select * from record where 学校名称 = ?;";
    MianMysql.query(sql,[s_name],function(error,data){
        console.log([s_name]);
        if(error){
            console.log(error);
        }else{
           /* console.log(data);*/
            res.json(data);
        }
    });
}

//添加沟通记录页面  添加按钮
exports.add_table4 = function(p16Gl,p17Gl,p18Gl,p19Gl,p20Gl,h4,res){
    var sql = "insert into record (日期,校方联系人,职务,沟通人,学校名称,沟通内容) values (?,?,?,?,?,?);"
    //执行mysql的语句的方法
    //1.sql -spl语句
    //2.[...]对应的传参
    //3.function -完成sql后需要执行的函数
    //sex = parseInt(sex);//bit类型转换
    MianMysql.query(sql,[p16Gl,p17Gl,p18Gl,p19Gl,p20Gl,h4], function (error,data) {
        if(error){
            console.log(error);
            res.send("数据添加失败");
        }else{
          /*  console.log("增加一条语句 成功");
            console.log(data);*/
            res.send("数据添加成功");
        }

    })
}

//修改学校信息 页面
//1.先显示学校信息
exports.select_yemian3 = select_yemian1_fun3;

function select_yemian1_fun3(s_name,res){
    var sql = "select * from school where 学校名称 = ? ;"
    MianMysql.query(sql,[s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
            /*console.log(data);*/
            res.json(data);
        }
    });
}
//修改学校信息 页面
//2.点击确认按钮之后
exports.select_yemian5 = select_yemian1_fun5;
function select_yemian1_fun5(o1Gl,o2Gl,o3Gl,o4Gl,o5Gl,o6Gl,o7Gl,o8Gl,o9Gl,o10Gl,o11Gl,o12Gl,o13Gl,o14Gl,o15Gl,s_name,res){
    var sql = "update school set  学校名称=?,联系电话=?,老师人数=?,负责人=?,申请项目时间=?,所属城市=?,校长=?,负责部门=?,状态=?,立刻批准时间=?,学校地址=?,学生人数=?,说明=?,录入时间=?,审核意见 =? where 学校名称=?;"
    MianMysql.query(sql,[o1Gl,o2Gl,o3Gl,o4Gl,o5Gl,o6Gl,o7Gl,o8Gl,o9Gl,o10Gl,o11Gl,o12Gl,o13Gl,o14Gl,o15Gl,s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
           /* console.log(data);*/
            res.json(data);
        }
    });
}

//申请立项页面
exports.select_yemian4 = select_yemian1_fun4;

function select_yemian1_fun4(s_name,res){
    var sql = "select * from school where 学校名称 = ? ;"
    MianMysql.query(sql,[s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
         /*   console.log(data);*/
            res.json(data);
        }
    });
}



//审核页面 信息
exports.select_yemian2 = select_yemian1_fun2;

function select_yemian1_fun2(s_name,res){
    var sql = "select * from school where 学校名称 = ? ;"
    MianMysql.query(sql,[s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
           /* console.log(data);*/
            res.json(data);
        }
    });
}
//审核页面 批准立项按钮
exports.select_yemian6 = select_yemian1_fun6;
function select_yemian1_fun6(s_name,res){
    var sql = "update school set 审核意见 ='审核通过' where 学校名称=?;"
    MianMysql.query(sql,[s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
            /*console.log(data);*/
            res.json(data);
        }
    });
}
//审核页面 驳回立项按钮
exports.select_yemian7 = select_yemian1_fun7;
function select_yemian1_fun7(s_name,res){
    var sql = "update school set 审核意见 ='待审' where 学校名称=?;"
    MianMysql.query(sql,[s_name],function(error,data){
        if(error){
            console.log(error);
        }else{
            /*console.log(data);*/
            res.json(data);
        }
    });
}


//关闭数据库（第三步）
exports.guanbiend_db = function(){
    MianMysql.end();
}

/*===========================user==========================================*/

//老师表
exports.logPostSend_table = logPostSend_fun;

function logPostSend_fun(req,res){
    var sql = "SELECT * FROM teacher where school_id=1"
    MianMysql.query(sql,[],function(error,data){
        if(error){
            console.log(error);
        }else{

            res.send(data);
          /*  console.log(data);*/
        }
    });
}
//二
exports.logPostSend_tableb = logPostSend_funb;

function logPostSend_funb(req,res){
    var sql = "SELECT * FROM teacher where school_id=2"
    MianMysql.query(sql,[],function(error,data){
        if(error){
            console.log(error);
        }else{

            res.send(data);
            //console.log(data);
        }
    });
}

//  添加数据
exports.logPostSend_table2 = logPostSend_fun2;

function logPostSend_fun2(namelc,sskm,lxdh,sdbj,sex,xuex,res){
    var sql = "INSERT INTO teacher (教师姓名,所授科目,联系电话,所带班级,性别,school_id) VALUE (?,?,?,?,?,?);"
    MianMysql.query(sql,[namelc,sskm,lxdh,sdbj,sex,xuex],function(error,data){
        if(error){
            console.log(error);
        }else{
            res.send(data);
           /* console.log(data);*/
        }
    });
}

//删除数据

exports.logPostSend_table3 = logPostSend_fun3;

function logPostSend_fun3(shang,res){
    var sql = "DELETE from teacher WHERE id=?;";
    MianMysql.query(sql,[shang],function(error,data){
        if(error){
            console.log(error);
        }else{

            res.send(data);
           /* console.log(data);*/
        }
    });
}
//查看修改数据
exports.logPostSend_table4 = logPostSend_fun4;

function logPostSend_fun4(num,res){
    var sql = "SELECT * FROM teacher where id=?;";
    MianMysql.query(sql,[num],function(error,data){
        if(error){
            console.log(error);
        }else{

            res.send(data);

        }
    });
}
//改
exports.logPostSend_table5 = logPostSend_fun5;
function logPostSend_fun5(ghmm,num,res){
    var sql = "UPDATE teacher set 联系电话=? WHERE id =?";

    MianMysql.query(sql,[ghmm,num],function(error,data){
        console.log(ghmm)
        if(error){
            console.log(error);
        }else{
            res.send(data);

        }
    });
}
/*====================stundent==============================*/
//显示学生数据
exports.select_table1=function(req,res){
    var sql = "SELECT * from student limit 0,8";
    MianMysql.query(sql,[],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
            //console.log("数据查询成功");
            res.send(data);
        }
    })
};
//显示学校数据
exports.select_table2=function(req,res){
    var sql = "SELECT * from school;";
    MianMysql.query(sql,[],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
            //console.log("数据查询成功");
            res.send(data);
        }
    })
};
//第一所学校学生信息上一页
exports.select_table3=function(page,res){
    var sql = "SELECT id,姓名,性别,所属班级,联系电话 from student limit ?,8;";
    MianMysql.query(sql,[page],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            res.send(data);
        }
    })
};
//添加学生信息
exports.select_table5=function(namelc,sexlc,datelc,address,classselect,tell,father,fathertell,mother,mothertell,remarks,s_id,res){
    var sql = "insert into student (姓名,性别,出生日期,家庭住址,所属班级,联系电话,父亲,父亲电话,母亲,母亲电话,备注,school_st_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
    MianMysql.query(sql,[namelc,sexlc,datelc,address,classselect,tell,father,fathertell,mother,mothertell,remarks,s_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据添加失败");
        }else{
            //console.log(data);
           /* console.log("数据添加成功");*/
            res.send(data);
        }
    })
};


////显示总页数
exports.select_table4=function(req,res){
    var sql = "SELECT id,姓名,性别,所属班级,联系电话 from student";
    MianMysql.query(sql,[],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
            //console.log("数据查询成功");
            res.send(data);
        }
    })
};

//删除学生信息

exports.select_table6=function(lc_id,res){
    var sql = "DELETE from student WHERE id=?;";
    MianMysql.query(sql,[lc_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据删除失败");
        }else{
            //console.log(data);
            /*console.log("数据删除成功");*/
            res.send("数据删除成功");
        }
    })
};

//查看学生信息

exports.select_table7=function(lc_id,res){
    var sql = "select * from student where id=? ;";
    MianMysql.query(sql,[lc_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
           /* console.log("数据查询成功");*/
            res.send(data);
        }
    })
};
//查看回访记录
exports.select_table9=function(lc_id,res){
    var sql = "select * from returnrecord where s_id=? ;";
    MianMysql.query(sql,[lc_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
          /*  console.log("数据查询成功");*/
            res.send(data);
        }
    })
};

//添加回访记录
exports.select_table8=function(recorddays,Personpeople,Returnpeople,Returntheme,textareaTheme,lc_id,res){
    var sql = "INSERT INTO returnrecord (回访时间,负责人,回访人,回访主题,回访内容,s_id) VALUES (?,?,?,?,?,?)";
    MianMysql.query(sql,[recorddays,Personpeople,Returnpeople,Returntheme,textareaTheme,lc_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据添加失败");
        }else{
            //console.log(data);
           /* console.log("数据添加成功");*/
            res.send("数据添加成功");
        }
    })
};

//修改学生信息
exports.select_table10=function(modifyclass,modifytel,modifyfathertel,modifymothertel,Modifydate,Modifyhost,Modifyfathername,Modifymothername,modifyRemarks,lc_id,res){
    console.log(modifymothertel);
    var sql = "update student set 所属班级=?,联系电话=?,父亲电话=?,母亲电话=?,出生日期=?,家庭住址=?,父亲=?,母亲=?,备注=? where id=?;";
    MianMysql.query(sql,[modifyclass,modifytel,modifyfathertel,modifymothertel,Modifydate,Modifyhost,Modifyfathername,Modifymothername,modifyRemarks,lc_id],function(error,data){
        console.log(Modifydate);
        if(error){
            //console.log(error);
            res.send("数据添加失败");
        }else{
            //console.log(data);
            /*console.log("数据添加成功");*/
            res.send("数据添加成功");
        }
    })
};


//模糊查询
//姓名
exports.select_table11=function(queryNeir,s_id,res){
    var sql = "select * from student where 姓名 like ? and school_st_id=?";
    MianMysql.query(sql,[queryNeir,s_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
            //console.log("数据查询成功");
            res.send(data);
        }
    })
};
//班级
exports.select_table12=function(queryNeir,s_id,res){
    var sql = "select * from student where 所属班级 like ? and school_st_id=?";
    MianMysql.query(sql,[queryNeir,s_id],function(error,data){
        //console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
          /*  console.log(data);
            console.log("数据查询成功");*/
            res.send(data);
        }
    })
};
//电话号码
exports.select_table13=function(queryNeir,s_id,res){
    var sql = "select * from student where 联系电话 = ? and school_st_id=?";
    MianMysql.query(sql,[queryNeir,s_id],function(error,data){
        console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
          /*  console.log(data);
            console.log("数据查询成功");*/
            res.send(data);
        }
    })
};
//点击学校名称，显示对应学生名单
exports.select_table14=function(s_id,page,res){
    var sql = "SELECT * from student where school_st_id=? limit ?,8;";
    MianMysql.query(sql,[s_id,page],function(error,data){
        console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            /*console.log(data);
            console.log("数据查询成功");*/
            res.send(data);
        }
    })
};
//点击学校名称，显示对应学生名单
exports.select_table15=function(s_id,res){
    var sql = "SELECT * from student where school_st_id=?;";
    MianMysql.query(sql,[s_id],function(error,data){
        console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
           /* console.log(data);
            console.log("数据查询成功");*/
            res.send(data);
        }
    })

};
//====================================================新增====================================
//显示对应学校的班级
exports.select_table16=function(s_id,res){
    var sql = "SELECT 班级名称 from class where class.ban_ji=?;";
    MianMysql.query(sql,[s_id],function(error,data){
        console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
            //console.log("数据查询成功");
            res.send(data);
        }
    })

};
//学生一览的日志
exports.rizineiro123=function(nowtime,studentname,res){
    var sql = "insert into information (日期,日志内容) VALUES (?,?);";
    MianMysql.query(sql,[nowtime,studentname],function(error,data){
        console.log(data);
        if(error){
            //console.log(error);
            res.send("数据查询失败");
        }else{
            //console.log(data);
            //console.log("数据查询成功");
            res.send(data);
        }
    })

};
//====================================================新增====================================
/*======================ziliao==================================*/
//吴颜冰的db
//右边点击事件还有就是在页面加载的时候获得数据库
exports.right=function(req,res){
    var sql1=" SELECT * FROM staff ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[],function(err,data){
        if(err){
            console.log(err)
        }else{
           /* console.log(data);*/
            res.send(data);
        }
    })
    checking.end();
};
//这是在修改职位界面的时候加载的数据库
exports.xiugaizhiwei = function(req,res){
    var sql1=" SELECT * FROM post ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[],function(err,data){
        if(err){
            console.log(err)
        }else{
            /*console.log(data);*/
            res.send(data);
        }
    })
    checking.end();
};
//这是界面加载部门管理的数据库
exports.bumenguanli = function(req,res){
    var sql1=" SELECT * FROM section ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[],function(err,data){
        if(err){
            console.log(err)
        }else{
            res.send(data);
        }
    })
    checking.end();
};
exports.shanchuyuangong = function(name1,res){
    var sql1="DELETE from staff where id = ?";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[name1],function(err,data){
        if(err){
            console.log(err)
        }else{
            res.send("删除成功！")
        }
    })
    checking.end();
};
//这是确定删除部门信息的函数
exports.quedingshachubumenxinxi = function(quedingshachubumenxinxi,res){
    //var sql1="DELETE from section where 部门名称 = ?";
    var sql1='DELETE from section where 部门名称 = ?;';
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[quedingshachubumenxinxi],function(err,data){
     /*   console.log(quedingshachubumenxinxi);*/
        if(err){
            console.log(err)
        }else{
           /* console.log("删除成功！213")*/
            res.send("删除成功！")
        }
    })
    checking.end();
};
exports.tianjiaxinyuangong = function(textname_wyb,sex_wyb_1,texttime_wyb,select_wyb_2,textstudy_wyb,textphone_wyb,textsreet_wyb,select_wyb_3,select_wyb_1,select_wyb_4,ruzhitime_wyb_1,res){
    var sql1=" INSERT INTO staff (姓名,性别,出生日期,文化程度,所属专业,联系方式,家庭住址,政治面貌,所在部门,工作职位,入职日期) VALUES (?,?,?,?,?,?,?,?,?,?,? )"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[textname_wyb,sex_wyb_1,texttime_wyb,select_wyb_2,textstudy_wyb,textphone_wyb,textsreet_wyb,select_wyb_3,select_wyb_1,select_wyb_4,ruzhitime_wyb_1],function(err,data){
        if(err){
            console.log(err);
            console.log("添加错误");
        }else{
          /*  console.log(data);*/
            res.send(data);
       /*     console.log("成功！")*/
        }
    })
    checking.end();
};
exports.xiugaiyungongshuju = function(select_wyb_1,select_wyb_2,select_wyb_3,textphone_wyb,name2,res){
    var sql1="update staff set 所在部门 = ?,工作职位 =?,政治面貌 = ?,联系方式 = ? where 姓名=?"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[select_wyb_1,select_wyb_2,select_wyb_3,textphone_wyb,name2,],function(err,data){
        if(err){
            console.log(err);
            console.log("修改错误");
        }else{
        /*    console.log(data);*/
            res.send(data);
           /* console.log("修改成功")*/
        }
    })
    checking.end();
};
exports.xiugaizhiweixinxi = function(chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli,tet_guanli_wyb_1,res){
    var sql1="update post set 查询权限 = ?,考核权限 =?,销售统计分析 = ?,权限管理 = ?,后台管理=? where 职位名称=?"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli,tet_guanli_wyb_1],function(err,data){
        if(err){
            console.log(err);
            console.log("修改错误");
        }else{
      /*      console.log(data);*/
            res.send(data);
          /*  console.log("修改成功")*/
        }
    })
    checking.end();
};
exports.xiugaibumenxinxi = function(a,b,res){
    var sql1="update section set 部门主管 = ? where 部门名称=?"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[a,b],function(err,data){
        if(err){
            console.log(err);
            console.log("修改错误");
        }else{
          /*  console.log(data);*/
            res.send(data);
           /* console.log("修改成功")*/
        }
    })
    checking.end();
};
exports.tianjiazhiwei_wyb = function(tet_guanli_wyb_1,tet_guanli_wyb_2,chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli,res){
    var sql1=" INSERT INTO post (职位名称,职位描述,查询权限,考核权限,销售统计分析,权限管理,后台管理) VALUES (?,?,?,?,?,?,?)"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[tet_guanli_wyb_1,tet_guanli_wyb_2,chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli],function(err,data){
        if(err){
            console.log(err);
            console.log("添加错误");
        }else{
            /*console.log(data);*/
            res.send(data);
           /* console.log("成功！")*/
        }
    })
    checking.end();
};
exports.tianjiazhiwei_wyb = function(tet_guanli_wyb_1,tet_guanli_wyb_2,chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli,res){
    var sql1=" INSERT INTO post (职位名称,职位描述,查询权限,考核权限,销售统计分析,权限管理,后台管理) VALUES (?,?,?,?,?,?,?)"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[tet_guanli_wyb_1,tet_guanli_wyb_2,chunxunquanxan,kaohequanxian,xiaoshoutongji,quanxianguanli,houtaiguanli],function(err,data){
        if(err){
            console.log(err);
            console.log("添加错误");
        }else{
           /* console.log(data);*/
            res.send(data);
          /*  console.log("成功！")*/
        }
    })
    checking.end();
};
exports.tianjiabumenxinxi = function(bumenname_wyb,bumentime_wyb,textarea_wyb_1,select_bumenzhuguan,res){
    var sql1=" INSERT INTO section (部门名称,部门主管,成立时间,部门描述) VALUES (?,?,?,?)"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[bumenname_wyb,bumentime_wyb,textarea_wyb_1,select_bumenzhuguan],function(err,data){
        if(err){
            console.log(err);
            console.log("添加错误");
        }else{
          /*  console.log(data);*/
            res.send(data);
         /*   console.log("成功！")*/
        }
    })
    checking.end();
};
exports.mohuchaxun1 = function(e,e,e,e,e,res){
    var sql1="select * from staff  where 姓名  like ? or 性别 like ? or 所在部门 like ? or 工作职位 like ? or 文化程度 like ?"
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[e,e,e,e,e],function(err,data){
        if(err){
            console.log(err);
            console.log("查询错误");
            res.send("查询错误");
        }else{
         /*   console.log(data);*/
            res.send(data);
         /*   console.log("查询成功");*/
        }
    })
    checking.end();
};
exports.shuoshubumen = function(e,res){
    var sql1="select * from staff  where 所在部门 like ? ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[e],function(err,data){
        if(err){
            console.log(err);
            console.log("查询错误");
            res.send("查询错误");
        }else{
         /*   console.log(e);
            console.log(data);*/
            res.send(data);
            /*console.log("查询成功");*/
        }
    })
    checking.end();
};
exports.wenhuachengdu = function(e,res){
    var sql1="select * from staff  where 文化程度 like ? ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[e],function(err,data){
        if(err){
            console.log(err);
            console.log("查询错误");
            res.send("查询错误");
        }else{
        /*    console.log(e);
            console.log(data);*/
            res.send(data);
           /* console.log("查询成功");*/
        }
    })
    checking.end();
};
exports.anshijianchazhao = function(textimestart_wyb,textimeend_wyb,res){
    var sql1="select * from staff  where 入职日期>? and 入职日期<? "
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[textimestart_wyb,textimeend_wyb],function(err,data){
        if(err){
            console.log(err);
            console.log("查询错误");
            res.send("查询错误");
        }else{
        /*    console.log(data);*/
            res.send(data);
        /*    console.log("查询成功");*/
        }
    })
    checking.end();
};

exports.gongzuozhiwei = function(e,res){
    var sql1="select * from staff  where 工作职位 like ? ";
    var checking=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    });
    checking.query(sql1,[e],function(err,data){
        if(err){
            console.log(err);
            console.log("查询错误");
            res.send("查询错误");
        }else{
          /*  console.log(e);
            console.log(data);*/
            res.send(data);
          /*  console.log("查询成功");*/
        }
    })
    checking.end();
};




exports.close_db=function(){
    mysql_lx.end();
    MainMysql.end();
    MianMysql.end();
};




