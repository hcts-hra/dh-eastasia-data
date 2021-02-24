function changedb(control, selClass, searchTip) {
    var dbid = $(control).parent().attr("id").substring(3);
    watermark(searchTip);

    $("#top_search ul li a").each(function() {
        $(this).parent().removeClass().addClass("tab" + $(this).text().length);
    });    
    $(control).parent().removeClass().addClass("button" + $(control).text().length);

    var advSearchUrl = "PaperAdvancedSearch";
    currentDatabase = dbid;
    switch (dbid) {
        case "WF_QK":
            advSearchUrl = "PeriodicalAdvancedSearch.aspx";
            break;
        case "WF_XW":
            advSearchUrl = "ThesisAdvancedSearch.aspx";
            break;
        case "WF_HY":
            advSearchUrl = "ConferenceAdvancedSearch.aspx";
            break;
        case "NSTL":
            advSearchUrl = "NSTLAdvancedSearch.aspx";
            break;
        case "Researcher":
            advSearchUrl = "ScholarAdvancedSearch.aspx";
            $("#AdvancedSearch").attr("href", CommunityDomain + advSearchUrl);
            TwoButton(dbid);
            return;
        default:
            advSearchUrl = dbid + "AdvancedSearch.aspx";
            break;
    }
    $("#AdvancedSearch").attr("href", SDomain + advSearchUrl);
    TwoButton(dbid);
}
function watermark(tip) {
    if ($("#queryBox").get(0).className.indexOf($.watermark.options.className) != -1) {
        lastSearchTip = tip;
        $("#queryBox").watermark(tip);
    }
}
function search(event, f, target) {
    var query = $.trim($("#queryBox").val());
    //S站点底部检索条代码已经分离出来，
    if (event.target && event.target.id == "searchButton2") {
        query = $.trim($("#queryBox2").val());
    }
    //D站点顶部检索需要此代码
    if (typeof (extraQuery) == "function") {
        query += extraQuery();
    }

    if (query == "") {
        alert('请输入检索词！');
        return false;
    }

    if (query.indexOf(" ") != -1) {
        var standcode = /^(标准编号|c|code|stancode|编号)(:|：)(.+)$/gi
        if (standcode.test(query)) {
            query = query.replace(standcode, '$1$2\"$3\"');
        }
    }
    var from = typeof (f) == "string" ? ("&f=" + f) : "";

    if (currentDatabase == "WF_QK" && event.target && event.target.id == "searchMagazine") {
        window.location.href = SDomain + "Journal.aspx?q=" + encodeURIComponent(query) + from;
        return false;
    }
    if (currentDatabase == "WF_HY" && event.target && event.target.id == "searchMagazine") {
        window.location.href = SDomain + "Meeting.aspx?q=" + encodeURIComponent(query) + from;
        return false;
    }
    if (currentDatabase == "LocalChronicleItem" && event.target && event.target.id == "searchMagazine") {
        window.location.href = SDomain + "LocalChronicle.aspx?q=" + encodeURIComponent(query) + from;
        return false;
    }

    if (currentDatabase == "WF_QK" || currentDatabase == "WF_XW" || currentDatabase == "WF_HY" || currentDatabase == "NSTL") {
        if (currentDatabase == "NSTL")
            currentDatabase = "(NSTL_QK OR NSTL_HY)";
        query = query + " DBID:" + currentDatabase;
        currentDatabase = "Paper";
    }
    if (currentDatabase == "Researcher") {
        window.location.href = CommunityDomain + "Scholar.aspx?q=" + encodeURIComponent(query) + from;
        return false;
    }

    if (typeof (target) == "undefined") {
        window.location.href = SDomain + currentDatabase + ".aspx?q=" + encodeURIComponent(query) + from;
    }
    else {
        if ($("#searchForm").length == 0) {
            appendForm(SDomain + currentDatabase + ".aspx", target,query, f);            
        }
        $("#searchForm").submit();
    }
    return false;
}

function appendForm(action, target, query, f) {
    var form = document.createElement('form');
    form.id = "searchForm";
    form.action = action;
    form.target = target;
    
    var queryBox = document.createElement('input');
    queryBox.type = "hidden";
    queryBox.name = "q";
    queryBox.value = query;
    form.appendChild(queryBox);

    if (typeof (f) == "string") {
        var field = document.createElement('input');
        field.type = "hidden"
        field.name = "f";
        field.value = f;
        form.appendChild(field);
    }    
    document.body.appendChild(form);
}

function TwoButton(dataBase) {
    if (dataBase == "WF_QK") {
        $("#queryBox").parent().removeClass("searchbox1").addClass("searchbox2");
        $("#searchButton").attr("value", "检索论文");
        $("#searchButton").get(0).className = "qk_btn";
        $("#searchMagazine").attr("value", "检索刊名");
        $("#searchMagazine").show();
        return;
    }
    if (dataBase == "WF_HY") {
        $("#queryBox").parent().removeClass("searchbox1").addClass("searchbox2");
        $("#searchButton").attr("value", "检索论文");
        $("#searchButton").get(0).className = "qk_btn";
        $("#searchMagazine").attr("value", "检索会议");
        $("#searchMagazine").show();
        return;
    }
    if (dataBase == "LocalChronicleItem") {
        $("#queryBox").parent().removeClass("searchbox1").addClass("searchbox2");
        $("#searchButton").attr("value", "检索条目");
        $("#searchButton").get(0).className = "qk_btn";
        $("#searchMagazine").attr("value", "检索志书");
        $("#searchMagazine").show();
        return;
    }

    $("#queryBox").parent().removeClass("searchbox2").addClass("searchbox1");
    $("#searchMagazine").hide();
    $("#searchButton").attr("value", "检 索");
    $("#searchButton").get(0).className = "top_btn";
}

function exportFloat() {
    var scrolls = $(document).scrollTop();
    var exportPanel = $(".export_li");
    if (scrolls > 30) {
        exportPanel.css("top", "3px");
        return;
    }
    exportPanel.css("top", "30px");
}

function exportInit() {    
    $(window).scroll(exportFloat);
    window.setInterval(outterExportElementFresh, 1500);
}

$(function () {
    $('<div class="newico"></div>').appendTo("#li_Researcher");
})

