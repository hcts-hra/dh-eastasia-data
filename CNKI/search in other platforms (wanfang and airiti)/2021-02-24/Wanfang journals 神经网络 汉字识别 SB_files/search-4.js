//聚类控件使用
function HideMore(listItemName) {
    var clusterLi = $("p[name=" + listItemName + "]");
    var moreClusterLi = $("p[name=ismore" + listItemName + "]");
    if (clusterLi.length > 0) {
        moreClusterLi.hide();
    }
    if (moreClusterLi.length == 0 || clusterLi.length == 0)
        $("#btn" + listItemName).hide();
}

function showMoreClusterItem(listItemName) {
    var moreClusterLi = $("p[name=ismore" + listItemName + "]");

    var btn = $("#btn" + listItemName).get(0)
    if (btn != null && btn.className == "collapse") {
        moreClusterLi.hide();
        btn.className = "expand";
        $(btn).html("展开");
    }
    else {
        moreClusterLi.show();
        btn.className = "collapse";
        $(btn).html("收起");
    }
}

function showMoreDateClusterItem(listItemName) {
    var moreClusterLi = $("p[name=ismore" + listItemName + "]");
    var clusterLi = $("p[name=" + listItemName + "]");
    var btn = $("#btn" + listItemName).get(0)
    if (btn != null && btn.className == "collapse") {
        moreClusterLi.hide();
        clusterLi.show();
        btn.className = "expand";
        $(btn).html("展开");
    }
    else {
        moreClusterLi.show();
        clusterLi.hide();
        btn.className = "collapse";
        $(btn).html("收起");
    }
}
//缩小范围控件使用
function isValidYear(s) {
    var r, re;
    re = /19\d\d|20\d\d/g; //\d表示数字,表示匹配4个数字
    r = s.match(re);
    return (r == s) ? 1 : 0;
}

function datePairQuery(prefix, beginDateId, endDateId) {
    var beginDate = $("#" + beginDateId);
    var endDate = $("#" + endDateId);
    //有一个值，就表示冲掉原有的两个检索值
    if ((beginDate && beginDate.val() != "") || (endDate && endDate.val() != "")) {
        if (beginDate.val() != "" && !isValidYear(beginDate.val())) {
            alert("请输入正确的年份格式！");
            return null;
        }
        if (endDate.val() != "" && !isValidYear(endDate.val())) {
            alert("请输入正确的年份格式！");
            return null;
        }
        if (beginDate.val() != "" && endDate.val() != "" && beginDate.val() > endDate.val()) {//开始年和结束年
            alert("请输入正确的年份格式！");
            return null;
        }
        return " " + prefix + ":" + beginDate.val() + "-" + endDate.val() + " ";
    }
    if (beginDate && beginDate.attr("name") == "narrow_"
        && endDate && endDate.attr("name") == "narrow_") {
        return "";
    }
    return " " + prefix + ":" + $.trim(beginDate.attr("name").substring(7))
        + "-" + $.trim(endDate.attr("name").substring(7)) + " ";
}

function pairQuery(prefix, controlId, appendQuot) {
    var control = $("#" + controlId);
    if (control.length == 0) return "";
    if (control.attr("name") == undefined) return "";

    if (appendQuot == undefined) {
        if ($.trim(control.val()) != "") {
            return " " + prefix + ":\"" + $.trim(control.val()) + "\" ";
        }
        if ($.trim(control.val()) == "" && control.attr("name") != "narrow_") {
            return " " + prefix + ":\"" + $.trim(control.attr("name").substring(7)) + "\" ";
        }
    }
    if (appendQuot == false) {
        if ($.trim(control.val()) != "") {
            return " " + prefix + ":" + $.trim(control.val()) + " ";
        }
        if ($.trim(control.val()) == "" && control.attr("name") != "narrow_") {
            return " " + prefix + ":" + $.trim(control.attr("name").substring(7)) + " ";
        }
    }
    
    return "";
}
function narrowQuery(array) {
    var query = "";
    for (var i = 0; i < array.length; i += 2) {
        query += pairQuery(array[i], array[i + 1]);
    }
    return query;
}
function addWaterMark(array) {
    $.watermark.options.useNative = false;
    for (var i = 0; i < array.length; i += 2) {
        $("#" + array[i]).watermark(array[i+1]);
    }
}

function showRelatedVeinChart(Trend,Keywords) {
    if (Keywords.length < 1) {
        return;
    }
    var keyword = Keywords[0];
    var serviceUrl = Trend + "ThumbnailVein?callback=?";
    $.ajax({
        url: serviceUrl,
        data: { wd: keyword },
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            if (data) {
                makeChart(Trend,data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText + "," + jqXHR.responseXML + "," + jqXHR.readyState + "," + jqXHR.status);
        }
    });
}

function makeChart(Trend,veinData) {
    var listData = veinData.list;
    if (listData.length < 1) {
        return;
    }
    var xdic = [];
    var pointCount=listData.length;
    $.each(listData, function (index, item) {
        xdic.push(item[0]);
        listData[index][0] = index;
    });
    var tickSize = Math.ceil(pointCount / 3);
    var $relatedVeinChart = $("#relatedVeinChart").addClass("qkbrow_box");
    $('<p class="blue_p"></a><t>知识脉络分析</t></p>').appendTo($relatedVeinChart);
    var veinChart = $("<div  style='height:80px;cursor:pointer'></div>", this).appendTo($relatedVeinChart).click(function () {
        window.open(Trend + "vein/" + veinData.keyword);
    });
    var data = [{ curvedLines: { show: true, fit: true, lineWidth: 1 }, data: listData}];
    var xmin = listData[0][0];
    var xmax = listData[listData.length - 1][0];
    $.plot(veinChart, data, {
        series: {
            lines: { show: true, lineWidth: 2 },
            shadowSize: 0,
			points:{show:pointCount==1}
        },
        xaxis: { tickDecimals: 0, tickSize: tickSize, tickLength: 0, font: { size: 9 }, labelWidth: 25,
            tickFormatter: function (val, axis) {
                var label = xdic[val];
				if(label)return label;
				return "";
            }
        },
        yaxis: { font: { size: 9} },
        grid: {
            color: '#000',
            borderWidth: 1,
            borderColor: '#BBCCDD',
            markings: function (axes) {
                var markings = [];
                for (var x = xmin; x <= xmax; x += 2) {
                    markings.push({ xaxis: { from: x - 0.5, to: x + 0.5 }, yaxis: { from: axes.yaxis.min, to: axes.yaxis.max }, color: "#F3F3F3" });
                }
                return markings;
            },
            labelMargin: 5
        },
        selection: { mode: "xy" }
    });
}