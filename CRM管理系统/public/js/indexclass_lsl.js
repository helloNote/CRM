
function fun1(){
    //console.log(1)
    //班级名称
    var puttt = document.getElementById("put1");

    var as = puttt.value;
    //班级名称只能是汉字
    var reg = /^[\u4e00-\u9fa5]*$/;
       put11 = reg.test(as);
    if(put11){
        puttt.style.borderColor = "green";
    }else{
        puttt.style.borderColor = "red";
    }

}



