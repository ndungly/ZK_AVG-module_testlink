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
shape80613.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 480 21\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 10.5)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 21 L 0 21 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -10.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 10.5)\">\n		<text font-family=\"Verdana\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.31\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.1724e-13px; width: 480px; height: 21px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80613",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.1723955140041653e-13,480,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":61},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80868.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image80611.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj80611Img\" src=\"images/zk_online_RGB.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 47px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 7px; top: 18px; width: 47px; height: 15px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj80611",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zk_logo"
	},
	objData:	{"a":[0,288,0,[7,18,47,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":18,"width":134,"height":43}}
};
shape79824.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 481 243\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240.5 121.5)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 242 L 0 242 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -121) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240.5 121.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"8.016666466250001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.53\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 77.5px; width: 481px; height: 243px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj79824",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.5000000000000568,77.50000000000011,481,243]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80854.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100182.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_99498_79587_4289\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4289&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 10)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 422px; top: 10px; width: 53px; height: 20px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100182",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('zk_avg.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[422,10.000000000000014,53,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape100164.png","imgDataOver":"images/desktop_shape100164.png","imgDataDown":"images/desktop_shape100164.png","imgDataDisabled":"images/desktop_shape100164_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4289\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4289&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4291\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4291&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4293\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4293&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4295\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4295&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100180.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 44 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(22 10)\" style=\"\">\n	<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_99498_79587_4297\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"20\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4297&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(22 10)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 375px; top: 10px; width: 44px; height: 20px; z-index: 8; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100180",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button menu",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_hoofdmenu_hoofdmenu.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[375,10.00000000000001,44,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape100180.png","imgDataOver":"images/desktop_shape100180.png","imgDataDown":"images/desktop_shape100180.png","imgDataDisabled":"images/desktop_shape100180_disabled.png","svgDataNormal":"<g transform=\"translate(22 10)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4297\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"20\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4297&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(22 10)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4299\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"20\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4299&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(22 10)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4301\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"20\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4301&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(22 10)\" style=\"\">\n\t<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4303\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"44\" height=\"20\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 44 0 L 44 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4303&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-22, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(22 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape79821.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 401 211\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(200.5 105.5)\" style=\"\">\n	<path d=\"M 2.1 0 L 397.9 0 A 2.1 2.1 0 0 1 400 2.1 L 400 207.9 A 2.1 2.1 0 0 1 397.9 210 L 2.1 210 A 2.1 2.1 0 0 1 0 207.9 L 0 2.1 A 2.1 2.1 0 0 1 2.1 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-200, -105) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(200.5 105.5) matrix(-1 0 0 1 0 0)  matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"8.0199997995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(177,224,226); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.53\" fill=\"#B1E0E2\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 39.5px; top: 121.5px; width: 401px; height: 211px; z-index: 9; transform: scaleY(-1) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1) ScaleX(-1); -webkit-transform:ScaleY(-1) ScaleX(-1); -o-transform:ScaleY(-1) ScaleX(-1); -ms-transform:ScaleY(-1) ScaleX(-1); filter:flipv fliph; -ms-filter:flipv fliph",
	cssClasses:	"",
	htmlId:		"tobj79821",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[39.49999999999994,121.50000000000009,401,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":114,"y":122,"width":1139,"height":598},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape79821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99477.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 12 12\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(6 6)\" style=\"\">\n	<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_99498_79587_4305\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4305&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7 7)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 13px; top: 396px; width: 12px; height: 12px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99477",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_1_intro_casus.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[12.999999999999996,396,12,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":396,"width":34,"height":34},"imgDataNormal":"images/desktop_shape99477.png","imgDataOver":"images/desktop_shape99477_over.png","imgDataDown":"images/desktop_shape99477.png","imgDataDisabled":"images/desktop_shape99477_disabled.png","svgDataNormal":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4305\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4305&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4307\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4307&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4309\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4309&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4311\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4311&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99475.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 12 12\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(6 6)\" style=\"\">\n	<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_99498_79587_4313\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4313&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(7 7)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 455px; top: 396px; width: 12px; height: 12px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99475",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_1_chat_vraag.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[455,396,12,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":396,"width":34,"height":34},"imgDataNormal":"images/desktop_shape99475.png","imgDataOver":"images/desktop_shape99475_over.png","imgDataDown":"images/desktop_shape99475.png","imgDataDisabled":"images/desktop_shape99475_disabled.png","svgDataNormal":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4313\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4313&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4315\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4315&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4317\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4317&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(6 6)\" style=\"\">\n\t<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_79587_4319\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"12\" height=\"12\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 12 0 L 12 12 L 0 12 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_79587_4319&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-6, -6) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(7 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99407.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 142px; min-height: 27px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 132px; min-height: 17px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:16pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Klantinformatie &amp; privacy</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 169px; top: 7px; width: 142px; height: 27px; z-index: 12;",
	cssClasses:	"header-module-title",
	htmlId:		"tobj99407",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module title"
	},
	objData:	{"a":[0,32,0,[169,7,142,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":7,"width":403,"height":77},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text99411.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 139px; min-height: 15px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 139px; min-height: 15px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Meriam belt...</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 170px; top: 43px; width: 139px; height: 15px; z-index: 13;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj99411",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[170,43,139,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
qu99501.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu99501",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	8,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarCorrectAns_1418
	},
	objData:	{"a":[0,32,0,[]]}
};
text99502.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 40px; min-height: 7px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 40px; min-height: 7px;\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: -190px; top: 219px; width: 40px; height: 7px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj99502",
	bInsAnc:	0,
	fieldsetId:	'fset99501',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-190,219,40,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-190,"y":219,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text99503.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 35px; min-height: 7px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 35px; min-height: 7px;\"><label for=\"rad99504\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: -161px; top: 249px; width: 35px; height: 7px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj99503",
	bInsAnc:	0,
	fieldsetId:	'fset99501',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-161,249,35,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-161,"y":249,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio99504.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad99504\" name=\"rad99501\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\" value=\"Choice One\" onclick=\"VarCorrectAns_1418.set(this.value);qu99501.questionUpdated();\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: -190px; top: 249px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj99504",
	bInsAnc:	0,
	fieldsetId:	'fset99501',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-190,249,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-190,"y":249,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
qu99505.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu99505",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	8,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_1426
	},
	objData:	{"a":[0,32,0,[]]}
};
text99506.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 40px; min-height: 7px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 40px; min-height: 7px;\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: -202px; top: 412px; width: 40px; height: 7px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj99506",
	bInsAnc:	0,
	fieldsetId:	'fset99505',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-202,412,40,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-202,"y":412,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text99507.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 35px; min-height: 7px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 35px; min-height: 7px;\"><label for=\"rad99508\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: -173px; top: 442px; width: 35px; height: 7px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj99507",
	bInsAnc:	0,
	fieldsetId:	'fset99505',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-173,442,35,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-173,"y":442,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio99508.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad99508\" name=\"rad99505\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\" value=\"Choice One\" onclick=\"VarQuestion_1426.set(this.value);qu99505.questionUpdated();\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: -202px; top: 442px; width: 19px; height: 19px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj99508",
	bInsAnc:	0,
	fieldsetId:	'fset99505',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-202,442,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-202,"y":442,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
og99509.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99509",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99515.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99515",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text99527.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 285px; min-height: 14px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 285px; min-height: 14px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:13pt; font-family:pt sans; color:rgb(0, 40, 87)\">Welke vragen stel je Meriam om te checken of ze inderdaad de dochter is van mevrouw Waas?&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 238px; width: 285px; height: 14px; z-index: 20;",
	cssClasses:	"page-body",
	htmlId:		"tobj99527",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[61,238,285,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":238,"width":810,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text99609.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 156px; min-height: 18px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 156px; min-height: 18px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; font-family: &quot;Titillium Web SemiBold&quot;, &quot;Titillium Web SemiBold&quot;;\"><span style=\"color: rgb(0, 40, 87);\">9.16 uur: Meriam belt</span><span style=\"color: rgb(0, 0, 0);\"> </span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 165px; width: 156px; height: 18px; z-index: 21;",
	cssClasses:	"page-title",
	htmlId:		"tobj99609",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title1"
	},
	objData:	{"a":[0,32,0,[61,165,156,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":165,"width":444,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99528.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99528",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99534.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99534",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text99535.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 335px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 325px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat is de postcode en het huisnummer van mevrouw Waas?</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 84px; top: 317px; width: 335px; height: 68px; z-index: 22; cursor: pointer;",
	cssClasses:	"vink_A",
	htmlId:		"tobj99535",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_A",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text99535.eatOnUp==true ){
        text99535.eatOnUp=false;
        return;
    }
    if(!VarQuestion_1426.contains('A'))VarQuestion_1426.add('A'); else VarQuestion_1426.sub('A'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ if( text99535.eatOnUp==true ){
        text99535.eatOnUp=false;
        return;
    }
    runJS99537();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_A',actItem:function(){ if( text99535.eatOnUp==true ){
        text99535.eatOnUp=false;
        return;
    }
    if(VarQuestion_1426.contains('A'))image99539.changeContents( "images/Checkbox_checked.png" ); else image99539.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[84,317,335,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":317,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image99539.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99539Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 18px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 321px; width: 18px; height: 18px; z-index: 23; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj99539",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_1426.contains('A'))VarQuestion_1426.add('A'); else VarQuestion_1426.sub('A'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ runJS99541();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_A',actItem:function(){ if(VarQuestion_1426.contains('A'))image99539.changeContents( "images/Checkbox_checked.png" ); else image99539.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[61,321,18,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":321,"width":51,"height":50}}
};
text99543.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 335px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 325px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat zijn uw voorletters en achternaam?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 84px; top: 380px; width: 335px; height: 68px; z-index: 24; cursor: pointer;",
	cssClasses:	"vink_B",
	htmlId:		"tobj99543",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_B",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text99543.eatOnUp==true ){
        text99543.eatOnUp=false;
        return;
    }
    if(!VarQuestion_1426.contains('B'))VarQuestion_1426.add('B'); else VarQuestion_1426.sub('B'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ if( text99543.eatOnUp==true ){
        text99543.eatOnUp=false;
        return;
    }
    runJS99545();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_B',actItem:function(){ if( text99543.eatOnUp==true ){
        text99543.eatOnUp=false;
        return;
    }
    if(VarQuestion_1426.contains('B'))image99547.changeContents( "images/Checkbox_checked.png" ); else image99547.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[84,380,335,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":380,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image99547.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99547Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 18px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 384px; width: 18px; height: 18px; z-index: 25; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj99547",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_1426.contains('B'))VarQuestion_1426.add('B'); else VarQuestion_1426.sub('B'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ runJS99549();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_B',actItem:function(){ if(VarQuestion_1426.contains('B'))image99547.changeContents( "images/Checkbox_checked.png" ); else image99547.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[61,384,18,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":384,"width":51,"height":50}}
};
text99551.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 335px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 325px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat is het relatienummer van mevrouw Waas?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 84px; top: 444px; width: 335px; height: 68px; z-index: 26; cursor: pointer;",
	cssClasses:	"vink_C",
	htmlId:		"tobj99551",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_C",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text99551.eatOnUp==true ){
        text99551.eatOnUp=false;
        return;
    }
    if(!VarQuestion_1426.contains('C'))VarQuestion_1426.add('C'); else VarQuestion_1426.sub('C'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ if( text99551.eatOnUp==true ){
        text99551.eatOnUp=false;
        return;
    }
    runJS99553();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_C',actItem:function(){ if( text99551.eatOnUp==true ){
        text99551.eatOnUp=false;
        return;
    }
    if(VarQuestion_1426.contains('C'))image99555.changeContents( "images/Checkbox_checked.png" ); else image99555.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[84,444,335,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":444,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image99555.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99555Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 18px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 448px; width: 18px; height: 18px; z-index: 27; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj99555",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_1426.contains('C'))VarQuestion_1426.add('C'); else VarQuestion_1426.sub('C'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ runJS99557();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_C',actItem:function(){ if(VarQuestion_1426.contains('C'))image99555.changeContents( "images/Checkbox_checked.png" ); else image99555.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[61,448,18,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":448,"width":51,"height":50}}
};
text99559.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 335px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 325px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat is de geboortedatum van mevrouw Waas?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 84px; top: 507px; width: 335px; height: 68px; z-index: 28; cursor: pointer;",
	cssClasses:	"vink_D",
	htmlId:		"tobj99559",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_D",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text99559.eatOnUp==true ){
        text99559.eatOnUp=false;
        return;
    }
    if(!VarQuestion_1426.contains('D'))VarQuestion_1426.add('D'); else VarQuestion_1426.sub('D'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_D',actItem:function(){ if( text99559.eatOnUp==true ){
        text99559.eatOnUp=false;
        return;
    }
    runJS99561();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_D',actItem:function(){ if( text99559.eatOnUp==true ){
        text99559.eatOnUp=false;
        return;
    }
    if(VarQuestion_1426.contains('D'))image99563.changeContents( "images/Checkbox_checked.png" ); else image99563.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[84,507,335,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":507,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image99563.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99563Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 18px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 511px; width: 18px; height: 18px; z-index: 29; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj99563",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_1426.contains('D'))VarQuestion_1426.add('D'); else VarQuestion_1426.sub('D'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_D',actItem:function(){ runJS99565();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_D',actItem:function(){ if(VarQuestion_1426.contains('D'))image99563.changeContents( "images/Checkbox_checked.png" ); else image99563.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[61,511,18,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":511,"width":51,"height":50}}
};
text99567.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 335px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 325px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat is het BSN nummer van mevrouw Waas?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 84px; top: 570px; width: 335px; height: 68px; z-index: 30; cursor: pointer;",
	cssClasses:	"vink_E",
	htmlId:		"tobj99567",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_E",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text99567.eatOnUp==true ){
        text99567.eatOnUp=false;
        return;
    }
    if(!VarQuestion_1426.contains('E'))VarQuestion_1426.add('E'); else VarQuestion_1426.sub('E'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_E',actItem:function(){ if( text99567.eatOnUp==true ){
        text99567.eatOnUp=false;
        return;
    }
    runJS99569();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_E',actItem:function(){ if( text99567.eatOnUp==true ){
        text99567.eatOnUp=false;
        return;
    }
    if(VarQuestion_1426.contains('E'))image99571.changeContents( "images/Checkbox_checked.png" ); else image99571.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[84,570,335,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":570,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image99571.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99571Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 18px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 61px; top: 574px; width: 18px; height: 18px; z-index: 31; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj99571",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_1426.contains('E'))VarQuestion_1426.add('E'); else VarQuestion_1426.sub('E'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_E',actItem:function(){ runJS99573();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_E',actItem:function(){ if(VarQuestion_1426.contains('E'))image99571.changeContents( "images/Checkbox_checked.png" ); else image99571.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[61,574,18,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":574,"width":51,"height":50}}
};
og99575.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99575",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99576.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99576Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 414px; top: 332px; width: 11px; height: 11px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj99576",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-1"
	},
	objData:	{"a":[0,256,0,[414,332,11,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":332,"width":30,"height":30}}
};
image99577.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99577Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 414px; top: 395px; width: 11px; height: 11px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj99577",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-2"
	},
	objData:	{"a":[0,256,0,[414,395,11,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":395,"width":30,"height":30}}
};
image99578.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99578Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 414px; top: 458px; width: 11px; height: 11px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj99578",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-3"
	},
	objData:	{"a":[0,256,0,[414,458,11,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":458,"width":30,"height":30}}
};
image99579.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99579Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 414px; top: 521px; width: 11px; height: 11px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj99579",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-4"
	},
	objData:	{"a":[0,256,0,[414,521,11,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":521,"width":30,"height":30}}
};
image99580.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99580Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 414px; top: 584px; width: 11px; height: 11px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj99580",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-5"
	},
	objData:	{"a":[0,256,0,[414,584,11,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":584,"width":30,"height":30}}
};
textbutton99581.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 14\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 7)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_99498_4321\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"14\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4321&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 7)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 223px; top: 647px; width: 34px; height: 14px; z-index: 37; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99581",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og99528.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowNext',actItem:function(){ textbutton99475.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDisable',actItem:function(){ shape99594.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarC1.add('_02'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowFBpopup',actItem:function(){ og99637.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowCorrectFB',actItem:function(){ if(VarQuestion_1426.contains('A')&&VarQuestion_1426.contains('B')&&VarQuestion_1426.contains('D'))og99668.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowWrongFB',actItem:function(){ if(!VarQuestion_1426.contains('A')||!VarQuestion_1426.contains('B')||!VarQuestion_1426.contains('D'))og99669.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHideCheck',actItem:function(){ textbutton99581.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[223,647,34,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":647,"width":97,"height":39},"imgDataNormal":"images/desktop_shape99581.png","imgDataOver":"images/desktop_shape99581_over.png","imgDataDown":"images/desktop_shape99581.png","imgDataDisabled":"images/desktop_shape99581_disabled.png","svgDataNormal":"<g transform=\"translate(17 7)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4321\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"14\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4321&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 7)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4323\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"14\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4323&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 7)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4325\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"14\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4325&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 7)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4327\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"14\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4327&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 7)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape99594.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 388 181\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(194 90.5)\" style=\"\">\n	<path d=\"M 0 0 L 388 0 L 388 181 L 0 181 L 0 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-194, -90.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(194 90.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 47px; top: 128px; width: 388px; height: 181px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99594",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable pane"
	},
	objData:	{"a":[0,0,0,[46.99999999999997,128.00000000000006,388,181]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":128,"width":1103,"height":514},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99594.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og99637.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99637",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape99638.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 480 242\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 121)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 242 L 0 242 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -121) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 121)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -2.84217e-14px; top: 78px; width: 480px; height: 242px; z-index: 39; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99638",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-2.842170943040401e-14,78.00000000000006,480,242]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape99639.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 259 177\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(129.5 88.5)\" style=\"\">\n	<path d=\"M 2.11 0 L 256.89 0 A 2.11 2.11 0 0 1 259 2.11 L 259 174.89 A 2.11 2.11 0 0 1 256.89 177 L 2.11 177 A 2.11 2.11 0 0 1 0 174.89 L 0 2.11 A 2.11 2.11 0 0 1 2.11 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-129.5, -88.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(129.5 88.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 111px; top: 172px; width: 259px; height: 177px; z-index: 40; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99639",
	bInsAnc:	0,
	cwObj:		{
		"name":	"White bg"
	},
	objData:	{"a":[0,0,0,[110.99999999999997,172.00000000000003,259,177]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99639.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99687.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99687Img\" src=\"images/Kruisje6176.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 351px; top: 198px; width: 8px; height: 8px; z-index: 41;",
	cssClasses:	"",
	htmlId:		"tobj99687",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[351,198,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":999,"y":198,"width":22,"height":22}}
};
shape99688.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 26 22\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(13 11)\" style=\"\">\n	<path d=\"M 0 0 L 26 0 L 26 22 L 0 22 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-13, -11) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(13 11)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 342px; top: 178px; width: 26px; height: 22px; z-index: 42; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99688",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og99637.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og99669.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og99668.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[342,178,26,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":974,"y":178,"width":73,"height":63},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99688.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99675.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 35 14\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17.5 7)\" style=\"\">\n	<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_99498_4329\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"14\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4329&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17.5 7)\">\n		<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-15.5\" y=\"2.31\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 223px; top: 560px; width: 35px; height: 14px; z-index: 47; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99675",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_1_chat_vraag.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[223,560,35,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":634,"y":560,"width":101,"height":40},"imgDataNormal":"images/desktop_shape99675.png","imgDataOver":"images/desktop_shape99675_over.png","imgDataDown":"images/desktop_shape99675.png","imgDataDisabled":"images/desktop_shape99675_disabled.png","svgDataNormal":"<g transform=\"translate(17.5 7)\" style=\"\">\n\t<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4329\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"14\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4329&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17.5 7)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-15.5\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17.5 7)\" style=\"\">\n\t<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4331\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"14\" xlink:href=\"images/Button_verder_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4331&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17.5 7)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-15.5\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17.5 7)\" style=\"\">\n\t<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4333\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"14\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4333&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17.5 7)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-15.5\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17.5 7)\" style=\"\">\n\t<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_99498_4335\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"14\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 35 0 L 35 14 L 0 14 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_99498_4335&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17.5, -7) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17.5 7)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-15.5\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og99668.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99668",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text99671.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 166px; min-height: 67px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 166px; min-height: 67px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Als iemand voor een ander belt en zelf niet is meeverzekerd op de polis, vraag je naar de postcode, het huisnummer en de geboortedatum van de verzekerde. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">​</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Ook vraag je de voorletter en achternaam van degene die belt. Deze naam noteer je in het notitieveld in Mikado. Vraag nooit naar het BSN nummer om iemand te identificeren.</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(0, 40, 87);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 158px; top: 336px; width: 166px; height: 67px; z-index: 43;",
	cssClasses:	"body-txt",
	htmlId:		"tobj99671",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[158,336,166,67]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":336,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text99670.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 103px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 103px; min-height: 35px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Klopt!</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 189px; top: 251px; width: 103px; height: 35px; z-index: 44;",
	cssClasses:	"popup-title",
	htmlId:		"tobj99670",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[189,251,103,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":251,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99669.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99669",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text99680.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 166px; min-height: 67px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 166px; min-height: 67px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Als iemand voor een ander belt en zelf niet is meeverzekerd op de polis, vraag je naar de postcode, het huisnummer en de geboortedatum van de verzekerde. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">​</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Ook vraag je de voorletter en achternaam van degene die belt. Deze naam noteer je in het notitieveld in Mikado. Vraag nooit naar het BSN nummer om iemand te identificeren.</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(0, 40, 87);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 158px; top: 336px; width: 166px; height: 67px; z-index: 45;",
	cssClasses:	"body-txt",
	htmlId:		"tobj99680",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[158,336,166,67]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":336,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text99679.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 103px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 103px; min-height: 35px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Niet helemaal!</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 189px; top: 251px; width: 103px; height: 35px; z-index: 46;",
	cssClasses:	"popup-title",
	htmlId:		"tobj99679",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[189,251,103,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":251,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	9
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/zk_online_RGB.png","images/Button_check_groot.png","images/Button_check_groot_hover.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/dragdrop-correct-dark.png","images/Checkbox_unchecked.png","images/Checkbox_checked.png","images/Button_verder.png","images/Button_verder_hover.png","images/Kruisje6176.png","images/Button_menu_groot.png","images/Button_sluit_groot.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 794px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
