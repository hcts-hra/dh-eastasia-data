<html>
<head>
<script src="../../vendor/jquery-1.11.3.min.js"></script>
<script language="javascript">

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
//         var c = ca[i].trim();
		var c = myTrim(ca[i]);
         if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
     return "";
 } 
 
function CheckCookie()
{

	var URL = getCookie("HHCALLINGURL");
	if (URL.indexOf('hh_3B') != -1) {
		URL = URL.replace ('hh_3B', ';');
	}
	
	if ( URL != "" ) {
		window.location.href = URL;	
	}
	else
	{	
		window.location.href = "/haninfo/nocookies.html";
	}
}

function deleteHANCookies(){
    var date = new Date();

    var settings = {};
    settings.url = "/deletecookies/delete"  +"&t="+date.getTime();
    settings.contentType = "text/plain;charset=utf-8";
    //settings.charset = 'UTF-8';
    settings.headers = {'Charset' : 'UTF-8'};
    settings.method = 'GET';
    settings.success= function(result, status, jqXHR){
        if (jqXHR.status ==200){
			CheckCookie();
        }
    };
    $.ajax(settings);
}

 if (document.cookie.split(';').length > 50){
        deleteHANCookies()
    }
	else{
		CheckCookie();
	}


</script>
</head>
<body>
	<noscript>
		Bitte aktivieren Sie Javascript und Session-Cookies<br>
		Please activate Java Script and Session Cookies.
	</noscript>
</body>
</html>