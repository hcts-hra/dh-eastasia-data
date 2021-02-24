function refreshExportLink() {
    var exportLink = $("#exportWin");
    if (exportLink.length == 0)
        return;

    var list = Cookie.getCookie("rs");
    var exportCount = list.split("|").length - 2;
    if (exportCount > 0) {
        exportLink.html((isSimpleLanguage() ? "已导出" : "已導出") + exportCount + "条");
        exportLink.css("display","block");
        return;
    }
    exportLink.html("");
    exportLink.css("display","none");
}
//已導出
function isSimpleLanguage() {
    var language = Cookie.getCookie("PreferredCulture");
    return language == "" || language == "zh-CN";        
}

function exportClick(control, cookieDomain) {
    //var text = $(control).text();

    var hasExportReocrd = Cookie.getCookie("rs");
    var hasExportCount = hasExportReocrd.split("|").length - 2;
    if (hasExportCount > 49) {
        alert("一次只允许导出50条数据!");
        return false;
    }
    addExport(control, cookieDomain);
    return true;
}

function delExport(control, cookieDomain) {
    var jqControl = $(control);
    var list = Cookie.getCookie("rs");
    var id = jqControl.attr("id") + "|";

    list = list.replace(id, "");

    if (list == "")
        list = "|";
    Cookie.setCookie("rs", list, cookieDomain);
}

function review(jqControl, text) {
    jqControl.before("<span class='export_all'>" + text + "</span>");
    jqControl.hide();
    if (jqControl.attr("href") == "#")
        jqControl.attr("href", "Export/Export.aspx");
    jqControl.attr("target", "exportWin");
    refreshExportLink();
}

function setTextStyle(jqControl) {
    jqControl.attr("style", "text-decoration:none;color:#7777cc;cursor:text");
}

function addExport(control, cookieDomain) {
    var jqControl = $(control);
    delExport(control, cookieDomain);
    var id = jqControl.attr("id");
    var list = Cookie.getCookie("rs");
    list += id + "|";
    list = list.replace('undefined', "|");
    Cookie.setCookie("rs", list, cookieDomain);
    review(jqControl, "√ " + (isSimpleLanguage() ? "已导出" : "已導出"));
}
var lastExportList = "|";
function outterExportElementFresh() {
    var list = Cookie.getCookie("rs");
    if (lastExportList == list)
        return;

    refreshExportLink();
    $(".exportLink").each(function() {
        var link = $(this);
        var id = link.attr("id") + "|";
        if (list.indexOf(id) == -1 && isHidden(this)) {
            link.show();
            link.prev().remove();
            return true;
        }
        if (list.indexOf(id) != -1 && !isHidden(this)) {
            link.before("<span class='export_all'>√ " + (isSimpleLanguage() ? "已导出" : "已導出") + "</span>");
            link.hide();
        }

    });

    lastExportList = list;
}

function isHidden(domObj) {
    return domObj.style.display == "none";
}

function autoExportElementFresh() {
    autoSelect();
    refreshExportLink();
}

function autoSelect() {
    autoSetText("rs", "√ " + (isSimpleLanguage() ? "已导出" : "已導出"), "");
}

function autoSetText(cookieName, text, idPrefix) {
    var list = Cookie.getCookie(cookieName).split("|");
    for (var i = 0; i < list.length; ++i) {
        if (list[i] == "") continue;
        if (document.getElementById(idPrefix + list[i])) {
            var jqControl = $(document.getElementById(idPrefix + list[i]));
            jqControl.before("<span>" + text + "</span>");
            jqControl.hide();
        }
    }
}