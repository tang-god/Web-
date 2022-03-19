//js功能实现文档


/*函数的定义与使用
window.onload=function(){
    alert("欢迎光临js的世界！");
}
function getTitle(){
    var a=1;
    var BIG=1;
    while(a<=5)
    {
        document.write("<h",a,">这是\'标题\'的文字</h",a,">");
        a++;
    }
} 
*/

/*【数学乘法表】的实现
<script  > 
        //第一个for控制行
        for(var a=1;a<10;a++){
            //控制行内有几个元素
             for(var b=1;b<=a;b++){
                document.write(b+"*"+a+"="+a*b)
                document.write(" ")
                }
                document.write("<br/>")
        }
    </script> 
*/

/*获取今天日期
  var weekdays=["日","一","二","三","四","五","六"]
    //创建一个时间对象
    var today = new Date;
    var year = today.getFullYear();
    var mouth =today.getMonth()+1;
    var day = today.getDate();
    document.write("今天是"+year+"年"+mouth+"月"+day+"日"+"星期"+weekdays[today.getDay()]+"\n");
    
*/