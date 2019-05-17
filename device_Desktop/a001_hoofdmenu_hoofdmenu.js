if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og99488.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99488",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape80599.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 61\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 30.5)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 30.5)\">\n		<text font-family=\"Verdana\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.62\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.66978e-13px; width: 1366px; height: 61px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80599",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.6697754290362354e-13,1366,61]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":61},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80868.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image80597.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj80597Img\" src=\"images/zk_online_RGB.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 134px; height: 43px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 19px; top: 18px; width: 134px; height: 43px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj80597",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zk_logo"
	},
	objData:	{"a":[0,288,0,[19,18,134,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":18,"width":134,"height":43}}
};
shape77710.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1368 691\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(684 345.5)\" style=\"\">\n	<path d=\"M 0 0 L 1367 0 L 1367 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683.5, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(684 345.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 77.5px; width: 1368px; height: 691px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj77710",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.5000000000001137,77.50000000000017,1368,691]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80854.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100174.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_3559\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3559&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1202px; top: 10px; width: 150px; height: 58px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33056,0,[1202,10.000000000000018,150,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape100164.png","imgDataOver":"images/desktop_shape100164.png","imgDataDown":"images/desktop_shape100164.png","imgDataDisabled":"images/desktop_shape100164_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3559\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3559&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3561\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3561&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3563\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3563&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3565\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3565&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text77990.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 403px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 393px; min-height: 38px;\"><p leglh=\"1.276\" style=\"margin-left:0px;text-indent:0px;line-height:1.276;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:20pt; font-family:\'Titillium Web\'; color:#0068bd; \"><strong>Klantinformatie &amp; privacy</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 482px; top: 15px; width: 403px; height: 48px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj77990",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[482,15,403,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":15,"width":403,"height":48},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape77769.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1219 575\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(609.5 287.5)\" style=\"\">\n	<path d=\"M 5.74 0 L 1212.26 0 A 5.74 5.74 0 0 1 1218 5.74 L 1218 568.26 A 5.74 5.74 0 0 1 1212.26 574 L 5.74 574 A 5.74 5.74 0 0 1 0 568.26 L 0 5.74 A 5.74 5.74 0 0 1 5.74 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-609, -287) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(609.5 287.5) matrix(-1 0 0 1 0 0)  matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(177,224,226); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#B1E0E2\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 71.5px; top: 151.5px; width: 1219px; height: 575px; z-index: 9; transform: scaleY(-1) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1) ScaleX(-1); -webkit-transform:ScaleY(-1) ScaleX(-1); -o-transform:ScaleY(-1) ScaleX(-1); -ms-transform:ScaleY(-1) ScaleX(-1); filter:flipv fliph; -ms-filter:flipv fliph",
	cssClasses:	"",
	htmlId:		"tobj77769",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[71.49999999999989,151.50000000000017,1219,575]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":72,"y":152,"width":1219,"height":575},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape77769.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og99432.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99432",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99435.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99435",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99436.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99436",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99437.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99437",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99316.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 937 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(468.5 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 933 1\" style=\"stroke: rgb(253, 229, 209); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(253, 229, 209); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-466.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(468.5 9)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 213px; top: 439px; width: 937px; height: 5px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[213,439.0000000000001,937,5]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":215,"y":441,"width":937,"height":5},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99316.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99295.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99295Img\" src=\"images/Menu_koffie.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 42px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 345px; top: 411px; width: 42px; height: 57px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj99295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_koffie"
	},
	objData:	{"a":[0,288,0,[345,411,42,57]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":411,"width":42,"height":57}}
};
image99294.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99294Img\" src=\"images/Menu_boterham.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 56px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 655px; top: 413px; width: 55px; height: 56px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj99294",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_boterham"
	},
	objData:	{"a":[0,288,0,[655,413,55,56]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":655,"y":413,"width":55,"height":56}}
};
image99293.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99293Img\" src=\"images/Menu_fris.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 50px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 968px; top: 415px; width: 44px; height: 50px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj99293",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_fris"
	},
	objData:	{"a":[0,288,0,[968,415,44,50]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":968,"y":415,"width":44,"height":50}}
};
og99337.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99337",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99347.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 149 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(74.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_3567\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3567&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(74.5 21.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 138px; top: 559px; width: 149px; height: 43px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[138,559,149,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":138,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3567\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3567&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3569\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3569&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3571\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3571&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3573\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3573&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image78015.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj78015Img\" src=\"images/Group%201732.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 104px; height: 104px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 631px; top: 100px; width: 104px; height: 104px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj78015",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Clock 09:16"
	},
	objData:	{"a":[0,256,0,[631,100,104,104]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
image99302.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99302Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 179px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 123px; top: 415px; width: 179px; height: 53px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj99302",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[123,415,179,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":123,"y":415,"width":179,"height":53}}
};
text99317.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 62px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Goedemorgen! </span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Meriam belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 595px; top: 219px; width: 177px; height: 62px; z-index: 17;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Meriam Belt"
	},
	objData:	{"a":[0,0,0,[595,219,177,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99377.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99377",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image82441.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj82441Img\" src=\"images/menu1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 381px; width: 118px; height: 118px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj82441",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu1"
	},
	objData:	{"a":[0,288,0,[153,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":381,"width":118,"height":118}}
};
text78989.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Meriam</strong></span><span style=\" font-size:12pt; font-family:\'Titillium Web\'; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 157px; top: 512px; width: 111px; height: 34px; z-index: 19;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj78989",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 1"
	},
	objData:	{"a":[0,32,0,[157,512,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":157,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99338.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99338",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99352.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 149 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(74.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_3575\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3575&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(74.5 21.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 450px; top: 559px; width: 149px; height: 43px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[450,559,149,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":450,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3575\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3575&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3577\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3577&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3579\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3579&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3581\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3581&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99333.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99333Img\" src=\"images/Group%201803.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 104px; height: 104px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 631px; top: 100px; width: 104px; height: 104px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj99333",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Clock: 10:56"
	},
	objData:	{"a":[0,256,0,[631,100,104,104]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
image99304.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99304Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 179px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 435px; top: 415px; width: 179px; height: 53px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj99304",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[435,415,179,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":415,"width":179,"height":53}}
};
text99321.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 62px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span><b><span style=\"background-color: transparent; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:14pt;\">10:56&nbsp;uur</span></b></span></p>\n\n<p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:14pt; background-color: transparent;\">Edwin belt...</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 595px; top: 219px; width: 177px; height: 62px; z-index: 23;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99321",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Edwin Belt"
	},
	objData:	{"a":[0,0,0,[595,219,177,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99344.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99344",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99280.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99280Img\" src=\"images/menu2.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 464px; top: 381px; width: 118px; height: 118px; z-index: 24;",
	cssClasses:	"",
	htmlId:		"tobj99280",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu2"
	},
	objData:	{"a":[0,256,0,[464,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118}}
};
text99291.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Edwin</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 468px; top: 513px; width: 111px; height: 34px; z-index: 25;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99291",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 2"
	},
	objData:	{"a":[0,0,0,[468,513,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":468,"y":513,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99346.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99346",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99345.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 118 118\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(59 59)\" style=\"\">\n	<path d=\"M 0 59 A 59 59 0 1 1 118 59 A 59 59 0 1 1 0 59 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-59, -59) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(59 59)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 464px; top: 381px; width: 118px; height: 118px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[464,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99340.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99340Img\" src=\"images/menu2.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 464px; top: 381px; width: 118px; height: 118px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj99340",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu2"
	},
	objData:	{"a":[0,288,0,[464,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118}}
};
text99339.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Edwin</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 468px; top: 513px; width: 111px; height: 34px; z-index: 28;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 2"
	},
	objData:	{"a":[0,32,0,[468,513,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":468,"y":513,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99363.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99363",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99364.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 149 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(74.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_3583\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3583&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(74.5 21.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 761px; top: 559px; width: 149px; height: 43px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[761,559,149,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":761,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3583\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3583&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3585\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3585&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3587\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3587&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3589\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3589&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99308.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99308Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 179px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 747px; top: 415px; width: 179px; height: 53px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj99308",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[747,415,179,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":747,"y":415,"width":179,"height":53}}
};
image99358.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99358Img\" src=\"images/Menu%20clock%201318.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 104px; height: 104px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 631px; top: 100px; width: 104px; height: 104px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj99358",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu clock 1318"
	},
	objData:	{"a":[0,256,0,[631,100,104,104]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
text99325.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 62px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">13:18 uur</span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Marja belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 595px; top: 219px; width: 177px; height: 62px; z-index: 32;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99325",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Marja Belt"
	},
	objData:	{"a":[0,0,0,[595,219,177,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99357.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99357",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text99292.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Marja</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 779px; top: 511px; width: 111px; height: 34px; z-index: 33;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99292",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 3"
	},
	objData:	{"a":[0,0,0,[779,511,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":511,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image99285.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99285Img\" src=\"images/menu3.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 775px; top: 381px; width: 118px; height: 118px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj99285",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu3"
	},
	objData:	{"a":[0,256,0,[775,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118}}
};
og99378.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99378",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99384.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 118 118\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(59 59)\" style=\"\">\n	<path d=\"M 0 59 A 59 59 0 1 1 118 59 A 59 59 0 1 1 0 59 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-59, -59) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(59 59)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 775px; top: 381px; width: 118px; height: 118px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99384",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[775,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99379.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Marja</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 779px; top: 511px; width: 111px; height: 34px; z-index: 36;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99379",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 3"
	},
	objData:	{"a":[0,32,0,[779,511,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":511,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image99380.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99380Img\" src=\"images/menu3.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 775px; top: 381px; width: 118px; height: 118px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj99380",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu3"
	},
	objData:	{"a":[0,288,0,[775,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118}}
};
og99376.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99376",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99312.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99312Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 179px; height: 53px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1057px; top: 415px; width: 179px; height: 53px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj99312",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[1057,415,179,53]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1057,"y":415,"width":179,"height":53}}
};
image99371.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99371Img\" src=\"images/Menu%20clock%201631.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 104px; height: 104px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 631px; top: 100px; width: 104px; height: 104px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj99371",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu clock 1631"
	},
	objData:	{"a":[0,256,0,[631,100,104,104]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
textbutton99369.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 149 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(74.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_3591\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3591&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(74.5 21.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 1071px; top: 559px; width: 149px; height: 43px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[1071,559,149,43]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1071,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3591\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3591&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3593\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3593&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3595\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3595&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(74.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3597\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"149\" height=\"43\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 149 0 L 149 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3597&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-74.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(74.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99329.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 177px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 177px; min-height: 62px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">16:31&nbsp;uur</span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Zeger belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 595px; top: 219px; width: 177px; height: 62px; z-index: 41;",
	cssClasses:	"menu-beltxt",
	htmlId:		"tobj99329",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Zeger Belt"
	},
	objData:	{"a":[0,0,0,[595,219,177,62]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99388.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99388",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image78257.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj78257Img\" src=\"images/menu4.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 1086px; top: 380px; width: 118px; height: 118px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj78257",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu4"
	},
	objData:	{"a":[0,256,0,[1086,380,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":380,"width":118,"height":118}}
};
text79055.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Zeger</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 1089px; top: 512px; width: 111px; height: 34px; z-index: 43;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj79055",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 4"
	},
	objData:	{"a":[0,0,0,[1089,512,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1089,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99389.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99389",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99395.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 118 118\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(59 59)\" style=\"\">\n	<path d=\"M 0 59 A 59 59 0 1 1 118 59 A 59 59 0 1 1 0 59 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-59, -59) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(59 59)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1086px; top: 381px; width: 118px; height: 118px; z-index: 44; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99395",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[1086,381,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99390.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99390Img\" src=\"images/menu4.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 118px; height: 118px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 1086px; top: 380px; width: 118px; height: 118px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj99390",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu4"
	},
	objData:	{"a":[0,288,0,[1086,380,118,118]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":380,"width":118,"height":118}}
};
text99391.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 34px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Zeger</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 1089px; top: 512px; width: 111px; height: 34px; z-index: 46;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99391",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 4"
	},
	objData:	{"a":[0,32,0,[1089,512,111,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1089,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99198.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99198",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape99194.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 47; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99194",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape99193.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 736 504\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(368 252)\" style=\"\">\n	<path d=\"M 6 0 L 730 0 A 6 6 0 0 1 736 6 L 736 498 A 6 6 0 0 1 730 504 L 6 504 A 6 6 0 0 1 0 498 L 0 6 A 6 6 0 0 1 6 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(243, 121, 3); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-368, -252) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(368 252)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 315px; top: 172px; width: 736px; height: 504px; z-index: 48; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99193",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Orange bg"
	},
	objData:	{"a":[0,0,0,[314.99999999999994,172.00000000000009,736,504]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99193.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99199.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99199Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 76px; height: 76px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 477px; width: 76px; height: 76px; z-index: 49;",
	cssClasses:	"",
	htmlId:		"tobj99199",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[383,477,76,76]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":383,"y":477,"width":76,"height":76}}
};
image99201.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99201Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 58px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 892px; top: 218px; width: 58px; height: 58px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj99201",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[892,218,58,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":892,"y":218,"width":58,"height":58}}
};
image99205.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99205Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 519px; top: 331px; width: 44px; height: 44px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj99205",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[519,331,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":519,"y":331,"width":44,"height":44}}
};
image99209.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99209Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 758px; top: 512px; width: 44px; height: 44px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj99209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[758,512,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":758,"y":512,"width":44,"height":44}}
};
image99213.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99213Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 58px; height: 58px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 396px; top: 232px; width: 58px; height: 58px; z-index: 53;",
	cssClasses:	"",
	htmlId:		"tobj99213",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[396,232,58,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":396,"y":232,"width":58,"height":58}}
};
image99217.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99217Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 61px; height: 61px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 898px; top: 573px; width: 61px; height: 61px; z-index: 54;",
	cssClasses:	"",
	htmlId:		"tobj99217",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[898,573,61,61]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":898,"y":573,"width":61,"height":61}}
};
image99221.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99221Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 529px; top: 585px; width: 44px; height: 44px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj99221",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[529,585,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":529,"y":585,"width":44,"height":44}}
};
image99233.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99233Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 670px; top: 417px; width: 44px; height: 44px; z-index: 56;",
	cssClasses:	"",
	htmlId:		"tobj99233",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[670,417,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":670,"y":417,"width":44,"height":44}}
};
image99237.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99237Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 38px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 421px; top: 386px; width: 38px; height: 38px; z-index: 57;",
	cssClasses:	"",
	htmlId:		"tobj99237",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[421,386,38,38]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":386,"width":38,"height":38}}
};
image99239.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99239Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 538px; top: 474px; width: 28px; height: 28px; z-index: 58;",
	cssClasses:	"",
	htmlId:		"tobj99239",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[538,474,28,28]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":474,"width":28,"height":28}}
};
image99243.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99243Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 38px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 829px; top: 463px; width: 38px; height: 38px; z-index: 59;",
	cssClasses:	"",
	htmlId:		"tobj99243",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[829,463,38,38]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":829,"y":463,"width":38,"height":38}}
};
image99247.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99247Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 38px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 838px; top: 295px; width: 38px; height: 38px; z-index: 60;",
	cssClasses:	"",
	htmlId:		"tobj99247",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[838,295,38,38]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":838,"y":295,"width":38,"height":38}}
};
image99251.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99251Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 24px; height: 24px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 528px; top: 245px; width: 24px; height: 24px; z-index: 61;",
	cssClasses:	"",
	htmlId:		"tobj99251",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[528,245,24,24]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":528,"y":245,"width":24,"height":24}}
};
image99255.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99255Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 373px; top: 606px; width: 23px; height: 23px; z-index: 62;",
	cssClasses:	"",
	htmlId:		"tobj99255",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[373,606,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":373,"y":606,"width":23,"height":23}}
};
image99275.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99275Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 18px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 517px; width: 18px; height: 18px; z-index: 63;",
	cssClasses:	"",
	htmlId:		"tobj99275",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[510,517,18,18]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":510,"y":517,"width":18,"height":18}}
};
image99271.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99271Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 364px; top: 312px; width: 23px; height: 23px; z-index: 64;",
	cssClasses:	"",
	htmlId:		"tobj99271",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[364,312,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":364,"y":312,"width":23,"height":23}}
};
image99259.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99259Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 961px; top: 529px; width: 23px; height: 23px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj99259",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[961,529,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":529,"width":23,"height":23}}
};
image99267.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99267Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 968px; top: 316px; width: 23px; height: 23px; z-index: 66;",
	cssClasses:	"",
	htmlId:		"tobj99267",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[968,316,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":968,"y":316,"width":23,"height":23}}
};
image99263.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99263Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 792px; top: 613px; width: 23px; height: 23px; z-index: 67;",
	cssClasses:	"",
	htmlId:		"tobj99263",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[792,613,23,23]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":792,"y":613,"width":23,"height":23}}
};
image99229.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99229Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 949px; top: 402px; width: 44px; height: 44px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj99229",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[949,402,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":949,"y":402,"width":44,"height":44}}
};
image99225.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj99225Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 710px; top: 232px; width: 44px; height: 44px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj99225",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[710,232,44,44]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":710,"y":232,"width":44,"height":44}}
};
textbutton100188.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 109 48\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(54.5 24)\" style=\"\">\n	<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_3599\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"109\" height=\"48\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3599&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(54.5 24)\">\n		<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-52.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 632px; top: 573px; width: 109px; height: 48px; z-index: 70; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[632,573,109,48]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":632,"y":573,"width":109,"height":48},"imgDataNormal":"images/desktop_shape100188.png","imgDataOver":"images/desktop_shape100188_over.png","imgDataDown":"images/desktop_shape100188.png","imgDataDisabled":"images/desktop_shape100188_disabled.png","svgDataNormal":"<g transform=\"translate(54.5 24)\" style=\"\">\n\t<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3599\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"109\" height=\"48\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3599&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(54.5 24)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-52.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(54.5 24)\" style=\"\">\n\t<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3601\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"109\" height=\"48\" xlink:href=\"images/Btn_start_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3601&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(54.5 24)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-52.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(54.5 24)\" style=\"\">\n\t<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3603\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"109\" height=\"48\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3603&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(54.5 24)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-52.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(54.5 24)\" style=\"\">\n\t<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_3605\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"109\" height=\"48\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 109 0 L 109 48 L 0 48 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_3605&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-54.5, -24) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(54.5 24)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-52.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text82851.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 472px; min-height: 192px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 472px; min-height: 192px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Als klantadviseur werk je de hele dag door met klantinformatie. In elk gesprek dat je voert, speelt informatie en privacy een rol. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">&nbsp;</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Om hiermee te oefenen, doorloop je in deze module een aantal situaties die je kunt tegenkomen tijdens een werkdag. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">&nbsp;</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Succes!</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 449px; top: 363px; width: 472px; height: 192px; z-index: 71;",
	cssClasses:	"popup-body-white",
	htmlId:		"tobj82851",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[449,363,472,192]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":363,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text82852.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 293px; min-height: 101px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 293px; min-height: 101px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Tijd om aan het werk te gaan!</span></strong><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 539px; top: 242px; width: 293px; height: 101px; z-index: 72;",
	cssClasses:	"popup-title-white",
	htmlId:		"tobj82852",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[539,242,293,101]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":242,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	3
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/zk_online_RGB.png","images/Group%201732.png","images/Group%201803.png","images/Group%201711b.png","images/Group%201711.png","images/Path%20488.png","images/Path%20447.png","images/menu1.png","images/menu2.png","images/menu3.png","images/menu4.png","images/Menu_koffie.png","images/Menu_boterham.png","images/Menu_fris.png","images/Menu_bellen.png","images/Menu%20clock%201318.png","images/Menu%20clock%201631.png","images/Button_sluit_groot.png","images/Btn_start.png","images/Btn_start_hover.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
