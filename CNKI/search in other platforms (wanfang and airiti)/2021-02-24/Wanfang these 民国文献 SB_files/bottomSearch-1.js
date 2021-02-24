function bottomSearch(event, f) {
    var query = $.trim($("#queryBox2").val());
    if (typeof (extraQueryForBottom) == "function") {
        query += extraQueryForBottom();
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
    window.location.href = "?q=" + encodeURIComponent(query) + from;
    return false;
}