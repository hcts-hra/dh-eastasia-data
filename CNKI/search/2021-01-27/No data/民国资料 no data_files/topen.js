﻿document.write("<script >var lang='en-US'<\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/jquery-1.11.3.min.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/jquery.cookie.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/jquery.md5.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/json2-min.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/topLogin.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/jquery.placeholder.min.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/resources/login.en-US.js' ><\/script>");
document.write("<script src='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Scripts/resources/resource.js' ><\/script>");
function IncludeCss(path) { var a = document.createElement('link'); a.href = path; a.rel = 'stylesheet'; var head = document.getElementsByTagName('head')[0]; head.appendChild(a); }
IncludeCss('https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/Content/TopLogin.css');
document.write(" <div class='ecp_top-nav'>     <div class='ecp_tn-header'>         <div class='ecp_tn-nav'>             <div class='ecp_tn-title'>                  <a id='Ecp_header_Mobile' class='ecp_tn-tab' target='_blank' href='https://m-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/mcnkidown/index.html'><i>Mobile App</i></a>                 <a id='Ecp_header_english' class='ecp_tn-tab' target='_blank' href='https://oversea-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de'><i>English</i></a>                 <!--<a id='Ecp_header_Map' class='ecp_tn-tab' target='_blank' href=''><i>Site Map</i></a>-->                 <a id='Ecp_header_Help' class='ecp_tn-tab' target='_blank' href='https://oversea-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/index/en/en-manual.html'><i>Help Center</i></a>             </div>         </div>         <div class='tn-person-r'>             <div id='Ecp_top_login_div2' class='ecp_tn-title ecp_tn-title-login'>                 <!--登录-->                 <div id='Ecp_top_login'>                     <a class='ecp_tn-tab' href='javascript:void(0);'>                         <i>Login<span class='ecp_tn-arrow'></span></i>                     </a>                 </div>                 <!--弹框-->                 <div id='Ecp_top_login_layer' class='tn-topmenulist tn-topmenulist-b Ecp_top_login_layer-my'>                     <div class='outlogin_layerbox_bylx outlogin_layerbox_bylx_anrrow top_login_layer2-my' node-type='box'>                         <div>                             <a id='Ecp_top_login_closeLayer' class='layerbox_close' href='javascript:void(0);'>×</a>                         </div>                         <div class='layerbox_left'>                             <div class='ecp_titletips'></div>                             <p id='Ecp_errorMsg' class='login_error_tips' style='display:none;'></p>                             <ul class='loginformlist'>                                 <li class='ndrelativewrap'>                                     <input id='Ecp_TextBoxUserName' class='styles' type='text' name='Ecp_TextBoxUserName' placeholder='Please enter username/email /phone number' tabindex='1' maxlength='64'>                                     <a class='register_lnk' href='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/Register/CommonRegister.aspx?lang=en-US' target='_blank'>Register a new account</a>                                 </li>                                 <li>                                     <input id='Ecp_TextBoxPwd' class='styles' type='password' name='Ecp_TextBoxPwd' placeholder='Please enter  password' tabindex='2' maxlength='20' autocomplete='off' autocapitalize='off' onkeydown='return Ecp_EnterSubmit(event,this,Ecp_Button1,true);' />                                     <a class='forget_Pwd' href='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/reset/password_reset.html' target='_blank'>Forget the password</a>                                 </li>                                 <!--验证码-->                                 <li id='Ecp_CheckCodeLayer' class='loginform_yzm' style='display:none;'>                                     <input id='Ecp_CheckCode' placeholder='Verification Code' class='styles' tabindex='3' maxlength='6' autocomplete='off' autocapitalize='off' type='text' onkeydown='return Ecp_EnterSubmit(event, this, Ecp_Button1);'>                                     <img id='Ecp_CheckCodeImg' src='' class='ecp_yzm' alt='Click for another one'><a id='Ecp_CheckLink' href='javascript:;' class='reload-code' title='Click for another one'>Click for another one</a>                                 </li>                                 <li class='ecp_btn_wrap'>                                     <a id='Ecp_Button1' class='ecp_login_btn' href='javascript:void(0);' tabindex='4'>Login</a>                                     <a id='Ecp_Button2' class='ecp_login_btn' href='javascript:void(0);' tabindex='5'>IP Login</a>                                     <label class='rmb_login' title='Users will automatically login the system next time. You are recommended to use this function on your PC for the account security..'>                                         <input class='auto_checkbox' id='rememberMe' type='checkbox' name='rememberMe' autocomplete='off' />                                         <span>Automatic login</span>                                     </label>                                 </li>                             </ul>                          </div>                     </div>                 </div>                 <!--退出-->                 <div id='Ecp_top_logout' class='ecp_tn-title' style='display:none;'>                     <span class='tn-greeting'>Welcome</span>                     <a id='Ecp_top_logout_showLayer' class='ecp_tn-tab ecp_tn-tab-user' href='javascript:void(0);'>                         <i><em title='' id='Ecp_loginShowName'></em><span class='ecp_tn-arrow'></span></i>                     </a>                     <div id='Ecp_top_logout_layer' class='tn-topmenulist tn-topmenulist-a tn-topmenulist-a-user' style='display:none;'>                         <ul class='tn-text-list'>                             <li><a id='Ecp_MycnkiLink' href='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/mycnki' title='My CNKI' target='_blank'>My CNKI</a></li>                             <li><a id='Ecp_top_logoutClick' href='javascript:void(0);' title='Logout'>Logout</a></li>                         </ul>                     </div>                 </div>             </div>             <!--其他-->             <div class='ecp_tn-title' id='Ecp_header_Register'>                 <a class='ecp_tn-tab' target='_blank' href='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/Register/CommonRegister.aspx?lang=en-US'><i>Register</i></a>             </div>             <div class='ecp_tn-title' id='Ecp_header_mycnki'  style='display:none;'>                 <a class='ecp_tn-tab' target='_blank' href='https://my-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de'><i>My CNKI<em class='icon-new'></em></i></a>             </div>             <div class='ecp_tn-title' id='Ecp_header_ChargeCenter'>                 <a class='ecp_tn-tab' target='_blank' href='https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/mycnki/MyCNKI.htm'><i>Recharge Center</i></a>             </div>             <div class='ecp_tn-title' id='Ecp_header_BuyCard'>                 <a class='ecp_tn-tab' target='_blank' href='https://oversea-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/index/personal_service/en/index-en.html'><i>Purchase CNKI Card</i></a>             </div>         </div>     </div>     <input type='hidden' id='Ecp_LoginUserName' />     <input type='hidden' id='Ecp_LoginUid' />     <p style='display:none' id='Ecp_ReturnMsg'></p> </div> <!--海外--> <div id='Ecp_top_login_oversea' class='login-modal' style='display:none;'>     <div class='login-l pull-left' style='width:483px;'>         <div class='ecpover-mask'></div>         <div class='ecpover-modal'>             <div class='ecpover-modal-hd'>Reminder<a onclick='Ecp_LoginResult();' class='close'></a></div>             <div id='ecpover_select' class='ecpover-modal-bd'>                 <p>Your lP is beyond the licensed area of the mainland China.<br />There are <i id='ecp_over_i'>j</i> chances of emergency service available in this year, each will last for <i>7</i> days.<!--您今年还可启用<i id='ecp_over_i'>j</i>次应急服务，每次<i>7</i>天。--><br /><i>Are you sure you want to use it?</i></p>                 <div class='btns'><a onclick='Ecp_LoginResult();' class='btn btn-cancel'>Cancel</a><a id='ecpover_open' class='btn'>Access</a></div>                 <div class='ecpover-tip'>Users outside mainland China please visit<a href='https://oversea-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de' target='_blank'><i> oversea.cnki.net</i> ></a></div>             </div>             <div id='ecpover_close' class='ecpover-modal-bd' style='display:none;'>                 <p id='ecpover_p_close'>Your lP is beyond the licensed area of the mainland China.<br />Login failed, your chances of emergency services in this year have run out.</p>                 <div class='btns'><a onclick='Ecp_LoginResult();' class='btn'>Close</a></div>                 <div class='ecpover-tip'>Users outside mainland China please visit<a href='https://oversea-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de' target='_blank'><i> oversea.cnki.net</i> ></a></div>             </div>         </div>     </div> </div> <!--海外--> <script>var Ecp_topLoginUrl = 'https://o-1cnki-1net-10097d65e0390.erf.sbb.spk-berlin.de/TopLoginI18N/'; var Ecp_PageStyle = 'header'; var Ecp_Style = '1'; var Ecp_CookieDomain = 'cnki.net'; var Ecp_isAuotIpLogin = '1'</script>");
