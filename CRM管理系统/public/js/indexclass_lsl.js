
function fun1(){
    //console.log(1)
    //�༶����
    var puttt = document.getElementById("put1");

    var as = puttt.value;
    //�༶����ֻ���Ǻ���
    var reg = /^[\u4e00-\u9fa5]*$/;
       put11 = reg.test(as);
    if(put11){
        puttt.style.borderColor = "green";
    }else{
        puttt.style.borderColor = "red";
    }

}



