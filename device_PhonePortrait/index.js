if (window.VarCurrentView) VarCurrentView.set('PhonePortrait');
function init_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og99488.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99488",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image80614.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj80614Img\" src=\"images/desktop_crop80614.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 480px; height: 270px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 480px; height: 270px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj80614",
	bInsAnc:	0,
	cwObj:		{
		"name":	"titelpagina"
	},
	objData:	{"a":[0,288,0,[0,0,480,270]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768}}
};
shape81861.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 480 270\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 135)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 270 L 0 270 L 0 0 Z\" style=\"stroke: rgb(153, 153, 153); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:0.6;filter:alpha(opacity=60); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -135) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 135)\">\n		<text font-family=\"Titillium Web\" font-size=\"7.9999998\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,104,189); fill-rule: nonzero; opacity:0.6;filter:alpha(opacity=60);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#0068BD\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -2.84217e-14px; top: 5.68434e-14px; width: 480px; height: 270px; z-index: 5; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj81861",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Transparant rectangle"
	},
	objData:	{"a":[0,32,0,[-2.842170943040401e-14,5.684341886080802e-14,480,270]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":768},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape81861.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.6;\">"}
};
text81674.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 394px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 394px; min-height: 54px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:72pt; font-family:\'Titillium Web\'; color:#0068bd; \"><strong>Klantinformatie &amp; privacy</strong></span><span style=\" font-size:18pt; font-family:\'Arial\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 43px; top: 227px; width: 394px; height: 54px; z-index: 6;",
	cssClasses:	"module-title",
	htmlId:		"tobj81674",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title1"
	},
	objData:	{"a":[0,32,0,[43,227,394,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":123,"y":227,"width":1121,"height":154},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text81767.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 394px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 394px; min-height: 27px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:36pt; font-family:\'Titillium Web\'; color:#0068bd; \"><strong>Mag ik de klantvraag beantwoorden?</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42px; top: 368px; width: 394px; height: 27px; z-index: 7;",
	cssClasses:	"module-subtitle",
	htmlId:		"tobj81767",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Subtitle1"
	},
	objData:	{"a":[0,32,0,[42,368,394,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":119,"y":368,"width":1121,"height":77},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image82043.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj82043Img\" src=\"images/Group%20900.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 77px; height: 27px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 157px; top: 537px; width: 77px; height: 27px; z-index: 8; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj82043",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Start",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Nextpage',actItem:function(){ trivExitPage('a001_introductie_introvideo.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[157,537,77,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":448,"y":537,"width":219,"height":77}}
};
image82052.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj82052Img\" src=\"images/Group%20902.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 77px; height: 27px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 248px; top: 537px; width: 77px; height: 27px; z-index: 9; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj82052",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Sluiten",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Closepage',actItem:function(){ {cleanupTitle('zk_avg.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[248,537,77,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":705,"y":537,"width":220,"height":77}}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	23
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/Group%20900.png","images/Group%20902.png","images/titelpagina.jpg"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
