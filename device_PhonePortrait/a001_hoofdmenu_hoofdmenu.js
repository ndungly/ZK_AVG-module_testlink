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
shape80599.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 480 21\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 10.5)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 21 L 0 21 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -10.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 10.5)\">\n		<text font-family=\"Verdana\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.31\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 5.86198e-14px; width: 480px; height: 21px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80599",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,5.861977570020827e-14,480,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":61},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80868.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image80597.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj80597Img\" src=\"images/zk_online_RGB.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 47px; height: 15px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 7px; top: 18px; width: 47px; height: 15px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj80597",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zk_logo"
	},
	objData:	{"a":[0,288,0,[7,18,47,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":18,"width":134,"height":43}}
};
shape77710.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 481 243\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240.5 121.5)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 242 L 0 242 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -121) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240.5 121.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"8.016666466250001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.53\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 77.5px; width: 481px; height: 243px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj77710",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.5000000000000284,77.50000000000006,481,243]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80854.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100174.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 53 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26.5 10)\" style=\"\">\n	<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_12227\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12227&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26.5 10)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 422px; top: 10px; width: 53px; height: 20px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100174",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('zk_avg.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[422,10.000000000000007,53,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape100164.png","imgDataOver":"images/desktop_shape100164.png","imgDataDown":"images/desktop_shape100164.png","imgDataDisabled":"images/desktop_shape100164_disabled.png","svgDataNormal":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12227\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12227&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12229\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12229&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12231\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12231&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26.5 10)\" style=\"\">\n\t<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12233\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"53\" height=\"20\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 53 0 L 53 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12233&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26.5, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26.5 10)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-10.6666664\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-3.36\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text77990.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 142px; min-height: 17px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 132px; min-height: 7px;\"><p leglh=\"1.276\" style=\"margin-left:0px;text-indent:0px;line-height:1.276;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:20pt; font-family:\'Titillium Web\'; color:#0068bd; \"><strong>Klantinformatie &amp; privacy</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 169px; top: 15px; width: 142px; height: 17px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj77990",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[169,15,142,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":15,"width":403,"height":48},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape77769.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 429 203\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(214.5 101.5)\" style=\"\">\n	<path d=\"M 2.02 0 L 425.98 0 A 2.02 2.02 0 0 1 428 2.02 L 428 199.98 A 2.02 2.02 0 0 1 425.98 202 L 2.02 202 A 2.02 2.02 0 0 1 0 199.98 L 0 2.02 A 2.02 2.02 0 0 1 2.02 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-214, -101) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(214.5 101.5) matrix(-1 0 0 1 0 0)  matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"8.018691388317757\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(177,224,226); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.53\" fill=\"#B1E0E2\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 24.5px; top: 151.5px; width: 429px; height: 203px; z-index: 9; transform: scaleY(-1) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1) ScaleX(-1); -webkit-transform:ScaleY(-1) ScaleX(-1); -o-transform:ScaleY(-1) ScaleX(-1); -ms-transform:ScaleY(-1) ScaleX(-1); filter:flipv fliph; -ms-filter:flipv fliph",
	cssClasses:	"",
	htmlId:		"tobj77769",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[24.49999999999997,151.50000000000006,429,203]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":72,"y":152,"width":1219,"height":575},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape77769.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og99432.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99432",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99435.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99435",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99436.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99436",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99437.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99437",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99316.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 332 4\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(166 2)\" style=\"\">\n	<path d=\"M 0 0 L 328 0\" style=\"stroke: rgb(253, 229, 209); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(253, 229, 209); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-164, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(166 9)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.447154235365854\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.98\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 74px; top: 439px; width: 332px; height: 4px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[74,439.00000000000006,332,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":215,"y":441,"width":937,"height":5},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99316.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99295.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99295Img\" src=\"images/Menu_koffie.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 20px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 121px; top: 411px; width: 15px; height: 20px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj99295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_koffie"
	},
	objData:	{"a":[0,288,0,[121,411,15,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":411,"width":42,"height":57}}
};
image99294.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99294Img\" src=\"images/Menu_boterham.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 19px; height: 20px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 230px; top: 413px; width: 19px; height: 20px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj99294",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_boterham"
	},
	objData:	{"a":[0,288,0,[230,413,19,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":655,"y":413,"width":55,"height":56}}
};
image99293.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99293Img\" src=\"images/Menu_fris.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 18px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 340px; top: 415px; width: 15px; height: 18px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj99293",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_fris"
	},
	objData:	{"a":[0,288,0,[340,415,15,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":968,"y":415,"width":44,"height":50}}
};
og99337.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99337",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99347.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 15\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 7.5)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_12235\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12235&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 48px; top: 559px; width: 52px; height: 15px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99347",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Opnemen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Nextpage',actItem:function(){ trivExitPage('a001_cases_case_1_intro_casus.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[48,559,52,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":138,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12235\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12235&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12237\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12237&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12239\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12239&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12241\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12241&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image78015.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj78015Img\" src=\"images/Group%201732.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 37px; height: 37px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 222px; top: 100px; width: 37px; height: 37px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj78015",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Clock 09:16"
	},
	objData:	{"a":[0,256,0,[222,100,37,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
image99302.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99302Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 43px; top: 415px; width: 63px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj99302",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[43,415,63,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":123,"y":415,"width":179,"height":53}}
};
text99317.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 62px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 62px; min-height: 22px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Goedemorgen! </span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Meriam belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 209px; top: 219px; width: 62px; height: 22px; z-index: 17;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Meriam Belt"
	},
	objData:	{"a":[0,0,0,[209,219,62,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99377.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99377",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image82441.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj82441Img\" src=\"images/menu1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 54px; top: 381px; width: 41px; height: 41px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj82441",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu1"
	},
	objData:	{"a":[0,288,0,[54,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":381,"width":118,"height":118}}
};
text78989.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Meriam</strong></span><span style=\" font-size:12pt; font-family:\'Titillium Web\'; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 55px; top: 512px; width: 39px; height: 12px; z-index: 19;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj78989",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 1"
	},
	objData:	{"a":[0,32,0,[55,512,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":157,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99338.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99338",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99352.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 15\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 7.5)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_12243\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12243&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 158px; top: 559px; width: 52px; height: 15px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99352",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Opnemen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Nextpage',actItem:function(){ trivExitPage('a001_cases_case_2_intro_casus.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[158,559,52,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":450,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12243\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12243&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12245\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12245&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12247\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12247&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12249\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12249&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99333.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99333Img\" src=\"images/Group%201803.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 37px; height: 37px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 222px; top: 100px; width: 37px; height: 37px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj99333",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Clock: 10:56"
	},
	objData:	{"a":[0,256,0,[222,100,37,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
image99304.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99304Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 153px; top: 415px; width: 63px; height: 19px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj99304",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[153,415,63,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":415,"width":179,"height":53}}
};
text99321.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 62px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 62px; min-height: 22px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span><b><span style=\"background-color: transparent; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:14pt;\">10:56&nbsp;uur</span></b></span></p>\n\n<p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:14pt; background-color: transparent;\">Edwin belt...</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 209px; top: 219px; width: 62px; height: 22px; z-index: 23;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99321",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Edwin Belt"
	},
	objData:	{"a":[0,0,0,[209,219,62,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99344.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99344",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99280.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99280Img\" src=\"images/menu2.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 163px; top: 381px; width: 41px; height: 41px; z-index: 24;",
	cssClasses:	"",
	htmlId:		"tobj99280",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu2"
	},
	objData:	{"a":[0,256,0,[163,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118}}
};
text99291.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Edwin</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 164px; top: 513px; width: 39px; height: 12px; z-index: 25;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99291",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 2"
	},
	objData:	{"a":[0,0,0,[164,513,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":468,"y":513,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99346.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99346",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99345.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 41 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20.5 20.5)\" style=\"\">\n	<path d=\"M 0 20.5 A 20.5 20.5 0 1 1 41 20.5 A 20.5 20.5 0 1 1 0 20.5 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20.5, -20.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20.5 20.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 163px; top: 381px; width: 41px; height: 41px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[163,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99340.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99340Img\" src=\"images/menu2.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 163px; top: 381px; width: 41px; height: 41px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj99340",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu2"
	},
	objData:	{"a":[0,288,0,[163,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118}}
};
text99339.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Edwin</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 164px; top: 513px; width: 39px; height: 12px; z-index: 28;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 2"
	},
	objData:	{"a":[0,32,0,[164,513,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":468,"y":513,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99363.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99363",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99364.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 15\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 7.5)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_12251\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12251&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 267px; top: 559px; width: 52px; height: 15px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99364",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Opnemen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Nextpage',actItem:function(){ trivExitPage('a001_cases_case_3_intro_casus.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[267,559,52,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":761,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12251\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12251&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12253\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12253&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12255\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12255&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12257\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12257&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99308.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99308Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 262px; top: 415px; width: 63px; height: 19px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj99308",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[262,415,63,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":747,"y":415,"width":179,"height":53}}
};
image99358.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99358Img\" src=\"images/Menu%20clock%201318.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 37px; height: 37px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 222px; top: 100px; width: 37px; height: 37px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj99358",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu clock 1318"
	},
	objData:	{"a":[0,256,0,[222,100,37,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
text99325.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 62px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 62px; min-height: 22px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">13:18 uur</span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Marja belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 209px; top: 219px; width: 62px; height: 22px; z-index: 32;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99325",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Marja Belt"
	},
	objData:	{"a":[0,0,0,[209,219,62,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99357.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99357",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text99292.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Marja</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 274px; top: 511px; width: 39px; height: 12px; z-index: 33;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99292",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 3"
	},
	objData:	{"a":[0,0,0,[274,511,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":511,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image99285.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99285Img\" src=\"images/menu3.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 272px; top: 381px; width: 41px; height: 41px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj99285",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu3"
	},
	objData:	{"a":[0,256,0,[272,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118}}
};
og99378.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99378",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99384.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 41 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20.5 20.5)\" style=\"\">\n	<path d=\"M 0 20.5 A 20.5 20.5 0 1 1 41 20.5 A 20.5 20.5 0 1 1 0 20.5 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20.5, -20.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20.5 20.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 272px; top: 381px; width: 41px; height: 41px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99384",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[272,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99379.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Marja</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 274px; top: 511px; width: 39px; height: 12px; z-index: 36;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99379",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 3"
	},
	objData:	{"a":[0,32,0,[274,511,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":511,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image99380.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99380Img\" src=\"images/menu3.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 272px; top: 381px; width: 41px; height: 41px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj99380",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu3"
	},
	objData:	{"a":[0,288,0,[272,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118}}
};
og99376.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99376",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99312.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99312Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 371px; top: 415px; width: 63px; height: 19px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj99312",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[371,415,63,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1057,"y":415,"width":179,"height":53}}
};
image99371.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99371Img\" src=\"images/Menu%20clock%201631.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 37px; height: 37px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 222px; top: 100px; width: 37px; height: 37px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj99371",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu clock 1631"
	},
	objData:	{"a":[0,256,0,[222,100,37,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
textbutton99369.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 52 15\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(26 7.5)\" style=\"\">\n	<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_12259\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12259&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(26 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 376px; top: 559px; width: 52px; height: 15px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99369",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Opnemen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'Nextpage',actItem:function(){ trivExitPage('a001_cases_case_4_intro_casus.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[376,559,52,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1071,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12259\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12259&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12261\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12261&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12263\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12263&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(26 7.5)\" style=\"\">\n\t<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12265\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"52\" height=\"15\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 52 0 L 52 15 L 0 15 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12265&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-26, -7.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(26 7.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99329.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 62px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 62px; min-height: 22px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">16:31&nbsp;uur</span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Zeger belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 209px; top: 219px; width: 62px; height: 22px; z-index: 41;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99329",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Zeger Belt"
	},
	objData:	{"a":[0,0,0,[209,219,62,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99388.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99388",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image78257.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj78257Img\" src=\"images/menu4.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 382px; top: 380px; width: 41px; height: 41px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj78257",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu4"
	},
	objData:	{"a":[0,256,0,[382,380,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":380,"width":118,"height":118}}
};
text79055.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Zeger</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 512px; width: 39px; height: 12px; z-index: 43;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj79055",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 4"
	},
	objData:	{"a":[0,0,0,[383,512,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1089,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99389.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99389",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99395.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 41 41\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(20.5 20.5)\" style=\"\">\n	<path d=\"M 0 20.5 A 20.5 20.5 0 1 1 41 20.5 A 20.5 20.5 0 1 1 0 20.5 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20.5, -20.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20.5 20.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 382px; top: 381px; width: 41px; height: 41px; z-index: 44; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99395",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[382,381,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99390.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99390Img\" src=\"images/menu4.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 382px; top: 380px; width: 41px; height: 41px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj99390",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu4"
	},
	objData:	{"a":[0,288,0,[382,380,41,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":380,"width":118,"height":118}}
};
text99391.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 39px; min-height: 12px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 39px; min-height: 12px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Zeger</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 383px; top: 512px; width: 39px; height: 12px; z-index: 46;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99391",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 4"
	},
	objData:	{"a":[0,32,0,[383,512,39,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1089,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99198.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99198",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape99194.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 480 242\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240 121)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 242 L 0 242 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -121) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240 121)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -2.84217e-14px; top: 78px; width: 480px; height: 242px; z-index: 47; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99194",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-2.842170943040401e-14,78.00000000000006,480,242]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape99193.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 259 177\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(129.5 88.5)\" style=\"\">\n	<path d=\"M 2.11 0 L 256.89 0 A 2.11 2.11 0 0 1 259 2.11 L 259 174.89 A 2.11 2.11 0 0 1 256.89 177 L 2.11 177 A 2.11 2.11 0 0 1 0 174.89 L 0 2.11 A 2.11 2.11 0 0 1 2.11 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(243, 121, 3); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-129.5, -88.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(129.5 88.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"9.3333331\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.94\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 111px; top: 172px; width: 259px; height: 177px; z-index: 48; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99193",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Orange bg"
	},
	objData:	{"a":[0,0,0,[110.99999999999997,172.00000000000003,259,177]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99193.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99199.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99199Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 27px; height: 27px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 135px; top: 477px; width: 27px; height: 27px; z-index: 49;",
	cssClasses:	"",
	htmlId:		"tobj99199",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[135,477,27,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":383,"y":477,"width":76,"height":76}}
};
image99201.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99201Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 313px; top: 218px; width: 20px; height: 20px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj99201",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[313,218,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":892,"y":218,"width":58,"height":58}}
};
image99205.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99205Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 182px; top: 331px; width: 15px; height: 15px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj99205",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[182,331,15,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":519,"y":331,"width":44,"height":44}}
};
image99209.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99209Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 266px; top: 512px; width: 15px; height: 15px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj99209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[266,512,15,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":758,"y":512,"width":44,"height":44}}
};
image99213.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99213Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 139px; top: 232px; width: 20px; height: 20px; z-index: 53;",
	cssClasses:	"",
	htmlId:		"tobj99213",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[139,232,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":396,"y":232,"width":58,"height":58}}
};
image99217.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99217Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 316px; top: 573px; width: 21px; height: 21px; z-index: 54;",
	cssClasses:	"",
	htmlId:		"tobj99217",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[316,573,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":898,"y":573,"width":61,"height":61}}
};
image99221.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99221Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 186px; top: 585px; width: 15px; height: 15px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj99221",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[186,585,15,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":529,"y":585,"width":44,"height":44}}
};
image99233.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99233Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 235px; top: 417px; width: 15px; height: 15px; z-index: 56;",
	cssClasses:	"",
	htmlId:		"tobj99233",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[235,417,15,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":670,"y":417,"width":44,"height":44}}
};
image99237.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99237Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 148px; top: 386px; width: 13px; height: 13px; z-index: 57;",
	cssClasses:	"",
	htmlId:		"tobj99237",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[148,386,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":386,"width":38,"height":38}}
};
image99239.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99239Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 10px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 189px; top: 474px; width: 10px; height: 10px; z-index: 58;",
	cssClasses:	"",
	htmlId:		"tobj99239",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[189,474,10,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":474,"width":28,"height":28}}
};
image99243.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99243Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 291px; top: 463px; width: 13px; height: 13px; z-index: 59;",
	cssClasses:	"",
	htmlId:		"tobj99243",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[291,463,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":829,"y":463,"width":38,"height":38}}
};
image99247.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99247Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 294px; top: 295px; width: 13px; height: 13px; z-index: 60;",
	cssClasses:	"",
	htmlId:		"tobj99247",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[294,295,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":838,"y":295,"width":38,"height":38}}
};
image99251.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99251Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 186px; top: 245px; width: 8px; height: 8px; z-index: 61;",
	cssClasses:	"",
	htmlId:		"tobj99251",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[186,245,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":528,"y":245,"width":24,"height":24}}
};
image99255.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99255Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 131px; top: 606px; width: 8px; height: 8px; z-index: 62;",
	cssClasses:	"",
	htmlId:		"tobj99255",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[131,606,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":373,"y":606,"width":23,"height":23}}
};
image99275.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99275Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 6px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 179px; top: 517px; width: 6px; height: 6px; z-index: 63;",
	cssClasses:	"",
	htmlId:		"tobj99275",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[179,517,6,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":510,"y":517,"width":18,"height":18}}
};
image99271.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99271Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 128px; top: 312px; width: 8px; height: 8px; z-index: 64;",
	cssClasses:	"",
	htmlId:		"tobj99271",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[128,312,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":364,"y":312,"width":23,"height":23}}
};
image99259.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99259Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 338px; top: 529px; width: 8px; height: 8px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj99259",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[338,529,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":529,"width":23,"height":23}}
};
image99267.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99267Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 340px; top: 316px; width: 8px; height: 8px; z-index: 66;",
	cssClasses:	"",
	htmlId:		"tobj99267",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[340,316,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":968,"y":316,"width":23,"height":23}}
};
image99263.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99263Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 8px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 278px; top: 613px; width: 8px; height: 8px; z-index: 67;",
	cssClasses:	"",
	htmlId:		"tobj99263",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[278,613,8,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":792,"y":613,"width":23,"height":23}}
};
image99229.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99229Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 333px; top: 402px; width: 15px; height: 15px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj99229",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[333,402,15,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":949,"y":402,"width":44,"height":44}}
};
image99225.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj99225Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 249px; top: 232px; width: 15px; height: 15px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj99225",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[249,232,15,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":710,"y":232,"width":44,"height":44}}
};
textbutton100188.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 38 17\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(19 8.5)\" style=\"\">\n	<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_12267\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"17\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12267&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(19 8.5)\">\n		<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-17\" y=\"2.31\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 222px; top: 573px; width: 38px; height: 17px; z-index: 72; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100188",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn start",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarMenuVisited.set('1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og99198.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[222,573,38,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":632,"y":573,"width":109,"height":48},"imgDataNormal":"images/desktop_shape100188.png","imgDataOver":"images/desktop_shape100188_over.png","imgDataDown":"images/desktop_shape100188.png","imgDataDisabled":"images/desktop_shape100188_disabled.png","svgDataNormal":"<g transform=\"translate(19 8.5)\" style=\"\">\n\t<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12267\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"17\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12267&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(19 8.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-17\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(19 8.5)\" style=\"\">\n\t<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12269\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"17\" xlink:href=\"images/Btn_start_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12269&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(19 8.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-17\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(19 8.5)\" style=\"\">\n\t<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12271\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"17\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12271&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(19 8.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-17\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(19 8.5)\" style=\"\">\n\t<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_12273\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"17\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 38 0 L 38 17 L 0 17 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_12273&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-19, -8.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(19 8.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"7.3333331500000005\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-17\" y=\"2.31\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text82851.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 166px; min-height: 67px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 166px; min-height: 67px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Als klantadviseur werk je de hele dag door met klantinformatie. In elk gesprek dat je voert, speelt informatie en privacy een rol. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">&nbsp;</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Om hiermee te oefenen, doorloop je in deze module een aantal situaties die je kunt tegenkomen tijdens een werkdag. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">&nbsp;</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Succes!</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 158px; top: 363px; width: 166px; height: 67px; z-index: 70;",
	cssClasses:	"popup-body-white",
	htmlId:		"tobj82851",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[158,363,166,67]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":363,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text82852.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 103px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 103px; min-height: 35px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Tijd om aan het werk te gaan!</span></strong><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 189px; top: 242px; width: 103px; height: 35px; z-index: 71;",
	cssClasses:	"popup-title-white",
	htmlId:		"tobj82852",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[189,242,103,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":242,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	23
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/zk_online_RGB.png","images/Group%201732.png","images/Group%201803.png","images/Group%201711b.png","images/Group%201711.png","images/Path%20488.png","images/Path%20447.png","images/menu1.png","images/menu2.png","images/menu3.png","images/menu4.png","images/Menu_koffie.png","images/Menu_boterham.png","images/Menu_fris.png","images/Menu_bellen.png","images/Menu%20clock%201318.png","images/Menu%20clock%201631.png","images/Button_sluit_groot.png","images/Btn_start.png","images/Btn_start_hover.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
