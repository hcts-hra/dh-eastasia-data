//依赖jquery
function getLoginResource(name) {
    //var lang = getUrlParam('lang');
    switch (lang) {
        case "zh-CN":
            resource = zhCN;
            break;
        case "zh-TW":
            resource = zhTW;
            break;
        case "en-US":
            resource = enUS;
            break;
        default:
            resource = zhCN;
            break;
    }
    return resource[name];
}

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}