if("https://www.google.com/"==document.referrer||"https://www.google.com.vn/"==document.referrer||document.referrer.includes("https://www.google.com")){var style=document.createElement("style");style.type="text/css",style.innerHTML='.shorten-m-btn {\n        display: -webkit-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex !important;\n        -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n        align-items: center !important;\n        padding: 7px !important;\n        border-radius: 7px !important;\n        border: 2px solid #31B204 !important;\n        background: #31B204 !important;\n        outline: none !important;\n        color: #fff !important;\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",\n          sans-serif;\n        font-weight: 600 !important;\n        font-size: 100% !important;\n        line-height: 1.15 !important;\n        white-space: nowrap !important;\n        cursor: pointer !important;\n        user-select: none !important;\n      }\n\n      .shorten-m-btn__image {\n        width: 24px !important;\n        height: 24px !important;\n        object-fit: contain !important;\n        margin-top: -4px !important;\n        margin-bottom: -4px !important;\n        margin-right: 10px !important;\n      }\n\n      .shorten-m-btn:hover:not(.show):not(.disabled) {\n        background: #2EA006 !important;\n      }\n      .shorten-m-btn:active:not(.show):not(.disabled) {\n        background: #2EA006 !important;\n      }\n      .shorten-m-btn.disabled {\n        opacity: 0.7 !important;\n        color: #fff !important;\n        background: #31B204 !important;\n      }\n      .shorten-m-btn.show {\n        user-select: auto !important;\n        color: #fff !important;\n      }',document.getElementsByTagName("head")[0].appendChild(style);let n=document.getElementById("shorten-m-btn");n.innerHTML='<img src="https://mienphitemplate.com/m.webp" alt="" class="shorten-m-btn__image"><span>LẤY MÃ</span>';let e=0,t=60,i=1e3,o=!1,r=!1,s="https://apiclient.manylink.vip/api/gen-code/";async function postData(n="",e={},t=""){return(await fetch(n,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json",rid:t},body:JSON.stringify(e)})).json()}async function optionData(n="",e=""){return await fetch(n,{method:"OPTIONS",cache:"no-cache",headers:{rid:e}})}n.onclick=function(a){if(!r&&!o){r=!0;var d=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(n=>(n^crypto.getRandomValues(new Uint8Array(1))[0]&15>>n/4).toString(16)));optionData(s+"ping",d),n.classList.add("disabled"),requestAnimationFrame((function r(a){if(e<=a&&(t-=1,n.innerHTML="Lấy mã sau: "+t+"s",e=a+i),t>0)requestAnimationFrame(r);else{var p,c,m,l="";screen.width&&(l+=(width=screen.width?screen.width:"")+" x "+(height=screen.height?screen.height:""));var w=navigator.appVersion,g=navigator.userAgent,h=navigator.appName,b=""+parseFloat(navigator.appVersion),f=parseInt(navigator.appVersion,10);-1!=(c=g.indexOf("Opera"))&&(h="Opera",b=g.substring(c+6),-1!=(c=g.indexOf("Version"))&&(b=g.substring(c+8))),-1!=(c=g.indexOf("OPR"))?(h="Opera",b=g.substring(c+4)):-1!=(c=g.indexOf("MSIE"))?(h="Microsoft Internet Explorer",b=g.substring(c+5)):-1!=(c=g.indexOf("Chrome"))?(h="Chrome",b=g.substring(c+7)):-1!=(c=g.indexOf("Safari"))?(h="Safari",b=g.substring(c+7),-1!=(c=g.indexOf("Version"))&&(b=g.substring(c+8))):-1!=(c=g.indexOf("Firefox"))?(h="Firefox",b=g.substring(c+8)):-1!=g.indexOf("Trident/")?(h="Microsoft Internet Explorer",b=g.substring(g.indexOf("rv:")+3)):(p=g.lastIndexOf(" ")+1)<(c=g.lastIndexOf("/"))&&(h=g.substring(p,c),b=g.substring(c+1),h.toLowerCase()==h.toUpperCase()&&(h=navigator.appName)),-1!=(m=b.indexOf(";"))&&(b=b.substring(0,m)),-1!=(m=b.indexOf(" "))&&(b=b.substring(0,m)),-1!=(m=b.indexOf(")"))&&(b=b.substring(0,m)),isNaN(f=parseInt(""+b,10))&&(b=""+parseFloat(navigator.appVersion),f=parseInt(navigator.appVersion,10));var u=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(w),x=!!navigator.cookieEnabled;void 0!==navigator.cookieEnabled||x||(document.cookie="testcookie",x=-1!=document.cookie.indexOf("testcookie"));var W="-",O=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var v in O){var S=O[v];if(S.r.test(g)){W=S.s;break}}var y="-";switch(/Windows/.test(W)&&(y=/Windows (.*)/.exec(W)[1],W="Windows"),W){case"Mac OS X":y=/Mac OS X (10[\.\_\d]+)/.exec(g)[1];break;case"Android":y=/Android ([\.\_\d]+)/.exec(g)[1];break;case"iOS":y=(y=/OS (\d+)_(\d+)_?(\d+)?/.exec(w))[1]+"."+y[2]+"."+(0|y[3])}let e={screen:l,browser_name:h,browser_version:b,browser_major_version:f.toString(),is_mobile:u,os_name:W,os_version:y,is_cookies:x,href:window.location.href,user_agent:navigator.userAgent,hostname:"https://"+window.location.hostname};postData(s+"get-code",e,d).then((e=>{n.innerHTML="Mã của bạn là: "+e.code,o=!0,n.classList.remove("disabled"),n.classList.add("show")}))}}))}}}