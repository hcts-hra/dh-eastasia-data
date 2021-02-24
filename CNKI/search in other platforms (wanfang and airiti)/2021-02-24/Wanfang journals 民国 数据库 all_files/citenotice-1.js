function citeClick(control, loginUrl, citeUrl) {
    var hasCiteReocrd = Cookie.getCookie("citenotice");
    var hasCiteCount = hasCiteReocrd.split("|").length - 2;
    if (hasCiteCount > 49) {
        alert("一次只允许添加50条数据!");
        return;
    }
    addCite2Cookie(control);
    return addNotice(loginUrl, citeUrl);
}

function addCite2Cookie(control) {
    var id = control.id.substring(5);
    var citenotice = Cookie.getCookie("citenotice");

    citenotice += id + "|";
    Cookie.setCookie("citenotice", citenotice);
    setCiteFlag(control.id);
}

function addbackshow(IsSuccess, ArticleCount, ErrorCode) {
    if (IsSuccess) {
        //添加成功，清空
        Cookie.setCookie("citenotice", "|");
    } else {
        if (ErrorCode == -1)
            window.location.href = LoginUrl;
        else if (ErrorCode == -2)
            alert("添加没有成功，请重试。");
    }
}

var LoginUrl = "";
function addNotice(loginUrl, citeUrl) {
    LoginUrl = loginUrl;
    var ids = Cookie.getCookie("citenotice");

    if (checkLogin()) {
        clearCiteFlag();
        var data = joinAID(ids);
        if (data.length > 0)
            WebService(citeUrl, data, addbackshow);
        else {
            alert("您好，目前我们仅提供中文期刊和学位论文的引用通知服务，请选择相应文献");
            return false;
        }
        return true;
    } else {        
        window.location.href = LoginUrl;
        return false;
    }
}

function setCiteFlag(controlId) {
    Cookie.setCookie("add2Cite", controlId);
}
function clearCiteFlag() {
    Cookie.setCookie("add2Cite", "");
}

function joinAID(ids) {
    var array = ids.split('|');
    var data = new Array();
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (CheckResource(array[i]))
            data[j++] = array[i];
    }
    return data;
}

function CheckResource(id) {
    if (id != null && id != "") {
        if (id.indexOf("Periodical_") == -1 && id.indexOf("Thesis_") == -1)//&& id.indexOf("Conference_") == -1)
            return false;
        else
            return true;
    }
    return false;
}

function checkLogin() {    
    return GetUserID()!="";
}

function WebService(citeUrl, data, callback) {

    if (data != null) {
        var pars = "";
        $(data).each(function(i) {
            pars += "&articleIDList=" + data[i];
        });

    }
    data = GetUserID() + pars;
    $.ajax({
        data: data,
        url: citeUrl,
        type: "GET",
        dataType: "jsonp",
        processData: false,
        success: function(returndata) {
            IsSuccess = returndata.IsSuccess;
            ArticleCount = returndata.ArticleCount;
            ErrorCode = returndata.ErrorCode;
            callback(IsSuccess, ArticleCount, ErrorCode);
        },
        error: function(xml, status, errorThrown) {
            //alert(status)
            if (status == 'error') {
                try {
                    alert(xml.responseText)
                }
                catch (e) { }
            }
            else {
                alert(xml)
            }
        }
    });
}

function GetUserID() {
    var cookie = Cookie.getCookie(wfCookieName);
    var AccountIds = eval('(' + cookie + ')').Context.AccountIds;
    for (var i = 0; i < AccountIds.length; i++) {
        if (AccountIds[i].indexOf("Person.")==0)
            return "userID=" + eval('(' + cookie + ')').Context.AccountIds[i].substring("Person.".length);
    }
    return "";
}
    