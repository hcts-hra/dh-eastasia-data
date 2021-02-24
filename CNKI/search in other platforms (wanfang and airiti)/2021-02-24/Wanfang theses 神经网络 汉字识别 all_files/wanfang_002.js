// Cookie
var Cookie = new Object();

Cookie.setCookie = function(name, value, domain) {
    var str = name + "=" + escape(value);
    var date = new Date();
    var ms = 1200 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
    str += ";path=/"; 
    if(domain!=undefined)   
        str += ";domain=" + domain; //设置访问主机
    str += ";true"; 			//设置安全性
    document.cookie = str;
}
Cookie.getCookie = function(name) {
    var cookieArray = document.cookie.split("; "); //得到分割的cookie名值对
    var cookie = new Object();
    for (var i = 0; i < cookieArray.length; i++) {
        var arr = cookieArray[i].split("="); 			//将名和值分开
        if (arr[0] == name) return decodeURIComponent(arr[1]); //如果是指定的cookie，则返回它的值
    }
    return "";
}
Cookie.deleteCookie = function(name) {
    this.setCookie(name, "");
}