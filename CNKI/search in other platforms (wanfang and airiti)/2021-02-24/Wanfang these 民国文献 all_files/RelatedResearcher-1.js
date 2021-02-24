function getCookie(str) {
    var tmp, reg = new RegExp("(^| )" + str + "=([^;]*)(;|$)", "gi");
    if (tmp = reg.exec(document.cookie)) return (tmp[2]);
    return null;
}
function isSimpleLanguage() {
    var language = getCookie("PreferredCulture");
    return language != "zh-TW";
}

function showRelatedResearchers(containerId, community, keywordsJson, isCache) {
    var jsonpCallback = 'jsonComplate';
    var reResearcherTitle = isSimpleLanguage() ? "相关学者" : "相關學者";
    var url = community + 'Services/RelatedResearcherList.ashx';
    if (isCache) {
        url = community + 'Services/RelatedResearcherListCache.ashx';
    }
    url += '?callback=' + jsonpCallback + '&keywords=' + encodeURIComponent(JSON.stringify(keywordsJson));
    window[jsonpCallback] = function (researcher) {
        if (researcher == null || researcher.length == 0)
            return;
        var container = $("#" + containerId);
        var ul = $("<ul class='stadyper'></ul>");
        $(researcher).each(function (item) {
            var url = researcher[item].ArticleId == '' ? '###' : (community + 'Locate.ashx?ArticleId=' + encodeURIComponent(researcher[item].ArticleId)
			   + '&Name=' + encodeURIComponent(researcher[item].Name));
            ul.append('<li><a target="_blank" href="' + url + '">' + researcher[item].Name + "</a></li>");
        });

        var json = keywordsJson;
        if (json.length > 0) {
            for (var i = 0; i < json.length; i++) {
                json[i] = json[i].replace(/"/g,'\\\"');
                json[i] = "\"" + json[i] + "\"";
            }
            var moreUrl = community + "Scholar.aspx?q=" + encodeURIComponent(json.join(' or '));
            container.html('<p class="blue_p"><a class="fieldset_mor"  href="' + moreUrl + '">更多>></a><t>' + reResearcherTitle + '</t></p>');
        }
        container.addClass("qkbrow_box").append(ul);
    }
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    head.appendChild(script);
    script.src = url;
}