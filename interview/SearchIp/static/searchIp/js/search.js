/**
 * Created by Rainy on 2016/6/23.
 */

/******************水平垂直居中***********************/
// $(window).resize(function(){
//    $(".content").css({
//        position:'absolute',
//        left:($(window).width()-$(".content").outerWidth())/2,
//        top:($(window).height()-$(".content").outerHeight())/2
//    });
// });
// $(function () {                 //当页面载入时调用
//    $(window).resize();
// });
 $(window).resize(function(){
    $(".history").css({
        position:'absolute',
        left:($(window).width()-$(".history").outerWidth())/2,
        top:18
    });
 });
 $(function () {                 //当页面载入时调用
    $(window).resize();
 });
/**********************搜索ip**************************/
$(function () {
    $("#ip").bind('input propertychange', function() {
        var ip = $(this).val();
        var myIp = $("#myIp").text();
        var myAddress = $("#myAddress").text();
        if(isIP(ip)&&isIP2(ip)) {
            $.post('/getIp/', {'ip': ip,'myIp': myIp,'myAddress':myAddress}, function (ret) {
                if ($(".tb2").children().is("tr")) {   //如果有上次查询的数据，则删除，显示新的数据
                    $(".tb2").children().remove();
                }
                $(".tb2").append(
                    "<tr>" +
                    "<td>" + myIp + "</td>" +
                    "<td>" + myAddress + "</td>" +
                    "<td>" + ret.ip + "</td>" +
                    "<td>" + ret.location + "</td>" +
                    "</tr>");
                $(".search-tb").css({display: "table"});
                
                //添加历史记录
                if($(".tb1").children().length==10){
                    $(".tb1").children().last().remove()
                }
                $(".tb1").prepend(
                    "<tr>" +
                    "<td>" + ret.userip + "</td>" +
                    "<td>" + ret.useraddress + "</td>" +
                    "<td>" + ret.ip + "</td>" +
                    "<td>" + ret.location + "</td>" +
                    "</tr>");
            },"json");
        }
    });
});

/**********************ip有效性检测**************************/
function isIP(ip)
{
    var reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
    if (reSpaceCheck.test(ip))
    {
        ip.match(reSpaceCheck);
        if (RegExp.$1<=255&&RegExp.$1>=0
          &&RegExp.$2<=255&&RegExp.$2>=0
          &&RegExp.$3<=255&&RegExp.$3>=0
          &&RegExp.$4<=255&&RegExp.$4>=0)
        {
            return true;
        }else
        {
            return false;
        }
    }else
    {
        return false;
    }
}
function isIP2(ip)
{
    var re =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return re.test(ip);
}