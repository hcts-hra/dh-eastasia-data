﻿window.behaviorlog=function(){};(function(d){window._paq=window._paq||[];_paq.push(["trackPageView"]);c();function c(){var j="//track-1cnki-1net-10097d65e06d7.erf.sbb.spk-berlin.de/tracking";_paq.push(["setTrackerUrl",j+""]);var k=document,l=k.createElement("script"),e=k.getElementsByTagName("script")[0];l.type="text/javascript";l.async=true;l.defer=true;l.src=j+"/scripts/piwik.js";e.parentNode.insertBefore(l,e)}if(d=="KNS"){try{$(document).on("click",".input-box .search-btn,.btn-search,.btn-result-search",function(){var e=$($(".search-classify-menu .active")[0]).text();var j=$(this).val();if(!j){j=$(this).text()}if(!e){e="一框检索"}if(!j){j="_检索"}_paq.push(["trackEvent",b(),e+j,i()])});$(document).on("click",".operat a.downloadlink,.downloadlink.icon-download,downloadlink icon-notlogged,icon-download",function(){var e=h(this);_paq.push(["trackEvent",e[0],"下载",i()+e[1]])});$(document).on("click",".icon-read,.icon-html,.icon-textlink,.icon-collect,.icon-quote,.icon-play",function(){var k,e,j;var l=h(this);if(l){e=l[0];k=l[1];j=$(this).attr("title")}else{k=$(this).parents("dd").children("h6").attr("name");if(k){e=$(this).parents("dd").children("h6").attr("dbcode");j=$(this).attr("title")}if(!j){j=$(this).text()}if(j&&j.length>10){j=j.substring(0,10)}}_paq.push(["trackEvent",e,j+"_操作",i()+k])});$(document).on("click","#batchOpsBox .bulkdownload>a,.dropdown-analysis-btns .export .secondUl>li a,.dropdown-analysis-btns #analysisLi .secondUl #anisys_select >a",function(){var e="";if(window.localStorage){e=window.localStorage.getItem("FileNameS")}_paq.push(["trackEvent",b(),$(this).text(),i()+e])});$(document).on("click",".dropdown-analysis-btns #analysisLi .secondUl #anisys_all >a",function(){var e=$("#sqlVal").val();_paq.push(["trackEvent",b(),$(this).text(),i()+e])});$(document).on("click",".order-group .order > li,.btn-subscribe.js-haslogin,.btn-search-his,#DivDisplayMode > li,#perPageDiv .sort-list>li a",function(){var e="";if($(this).parent().attr("id")=="DivDisplayMode"){e=$(this).attr("title")+"_显示模式"}else{if($(this).parent().parent().parent().attr("id")=="perPageDiv"){e=$(this).text()+"_每页数量"}else{e=$(this).text()+"_排序"}}_paq.push(["trackEvent",b(),e,i()])});$(document).on("click","dl>dt.tit,.btn-visual",function(){var e=$(this).parent().attr("class");if(e=="is-up-fold off"){e="fold"}else{e="unfold"}_paq.push(["trackEvent",b(),$(this).attr("groupitem")+$(this).find("b").first().text()+"_分组",i()+e])});$(document).on("click","dt.subtit a",function(){_paq.push(["trackEvent",b(),$(this).text()+"_"+$(this).parent().parent().find("dt").first().text()+"_分组",i()])});window.behaviorlog.YearScreen=function(j){var e=$(j).attr("title");_paq.push(["trackEvent",b(),e+"_可视化",i()])};window.behaviorlog.Screen=function(j){var e=$(j).parent().attr("groupitem")+"_可视化";_paq.push(["trackEvent",b(),e,i()])};$(document).on("click",".pages>a, #Page_Prev_top, #Page_next_top",function(){var e=$(this).text();if(e==">>"||e=="<<"){e=$(this).attr("id")}var j=$(this).attr("data-curpage");_paq.push(["trackEvent",b(),e+"_翻页",i()+j])})}catch(f){}}else{if(d=="KCMS"){try{$("document").on("click","#AttentionNo a.icon-follow",function(){var j=a("dbcode");var e=a("filename");if(location.pathname.indexOf(".html")&&!!e){j="CAPJ";e=location.pathname.substring(location.pathname.lastIndexOf("/")+1,location.pathname.indexOf(".html"))}_paq.push(["trackEvent",j,"关注",e])});$("document").on("click",".link a.icon-favor",function(){var j=a("dbcode");var e=a("filename");if(location.pathname.indexOf(".html")&&!!e){j="CAPJ";e=location.pathname.substring(location.pathname.lastIndexOf("/")+1,location.pathname.indexOf(".html"))}_paq.push(["trackEvent",j,"收藏",e])});$("document").on("click",".link .shareBoard ul a",function(){var j=a("dbcode");var e=a("filename");if(location.pathname.indexOf(".html")&&!!e){j="CAPJ";e=location.pathname.substring(location.pathname.lastIndexOf("/")+1,location.pathname.indexOf(".html"))}_paq.push(["trackEvent",j,"分享",e])});$("document").on("click","#DownLoadParts a:contains('整本下载'),#DownLoadParts a:contains('分页下载'),#DownLoadParts a:contains('分章下载'),#DownLoadParts a[name='cajDown'],#DownLoadParts a[name='pdfDown'],.wxToolbar .dllink a:contains('整本下载'),.wxToolbar .dllink a:contains('分页下载'),.wxToolbar .dllink a:contains('分章下载'),.wxToolbar .dllink a[name='cajDown'],.wxToolbar .dllink a[name='pdfDown']",function(){var k=a("dbcode");var j=a("filename");if(location.pathname.indexOf(".html")&&!!j){k="CAPJ";j=location.pathname.substring(location.pathname.lastIndexOf("/")+1,location.pathname.indexOf(".html"))}var e=$.trim($(this).text());_paq.push(["trackEvent",k,e,j])})}catch(f){}}}function a(j){var l=new RegExp("(^|&amp;)"+j+"=([^&amp;]*)(&amp;|$)");var k=new RegExp("(^|&)"+j+"=([^&]*)(&|$)");var e=window.location.search.substr(1).match(l);if(e==null){e=window.location.search.substr(1).match(k)}if(e!=null){return e[2]?decodeURIComponent(e[2]):""}return null}function h(j){try{var m;var l=$(j).parents("tr:eq(0)").find("td:first-child input").val();if(l){m=l.split("!")}else{l=$(j).parents("dd:eq(0)").find("div:first-child input").val();if(l){m=l.split("!")}}return m}catch(k){}}function b(){return $("#dbcode").val()}function i(){return g()+"|"}function g(){return new Date().getTime()}})("KNS");