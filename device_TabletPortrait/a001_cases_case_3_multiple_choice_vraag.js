if (window.VarCurrentView) VarCurrentView.set('TabletPortrait');
function init_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og99488.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99488",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape80613.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 17.5)\">\n		<text font-family=\"Verdana\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"3.7\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.247e-12px; width: 785px; height: 35px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80613",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.2470025012589758e-12,785,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":61},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80868.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image80611.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj80611Img\" src=\"images/zk_online_RGB.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 77px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 11px; top: 18px; width: 77px; height: 25px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj80611",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zk_logo"
	},
	objData:	{"a":[0,288,0,[11,18,77,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":18,"width":134,"height":43}}
};
shape79824.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 787 398\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(393.5 199)\" style=\"\">\n	<path d=\"M 0 0 L 786 0 L 786 397 L 0 397 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-393, -198.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(393.5 199)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.81628466687023\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 77.5px; width: 787px; height: 398px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj79824",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.500000000000739,77.50000000000111,787,398]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80854.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100182.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 86 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(43 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100587_79587_11899\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11899&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(43 16.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 691px; top: 10px; width: 86px; height: 33px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33056,0,[690.9999999999999,10.000000000000139,86,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape100164.png","imgDataOver":"images/desktop_shape100164.png","imgDataDown":"images/desktop_shape100164.png","imgDataDisabled":"images/desktop_shape100164_disabled.png","svgDataNormal":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11899\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11899&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11901\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11901&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11903\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11903&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11905\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11905&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100180.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 72 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100587_79587_11907\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"33\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11907&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36 16.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 613px; top: 10px; width: 72px; height: 33px; z-index: 8; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33056,0,[612.9999999999999,10.000000000000092,72,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape100180.png","imgDataOver":"images/desktop_shape100180.png","imgDataDown":"images/desktop_shape100180.png","imgDataDisabled":"images/desktop_shape100180_disabled.png","svgDataNormal":"<g transform=\"translate(36 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11907\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"33\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11907&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11909\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"33\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11909&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11911\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"33\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11911&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11913\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"33\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11913&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape79821.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 655 344\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(327.5 172)\" style=\"\">\n	<path d=\"M 3.43 0 L 650.57 0 A 3.43 3.43 0 0 1 654 3.43 L 654 339.57 A 3.43 3.43 0 0 1 650.57 343 L 3.43 343 A 3.43 3.43 0 0 1 0 339.57 L 0 3.43 A 3.43 3.43 0 0 1 3.43 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-327, -171.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(327.5 172) matrix(-1 0 0 1 0 0)  matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"12.81957154495413\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(177,224,226); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#B1E0E2\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 65.5px; top: 121.5px; width: 655px; height: 344px; z-index: 9; transform: scaleY(-1) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1) ScaleX(-1); -webkit-transform:ScaleY(-1) ScaleX(-1); -o-transform:ScaleY(-1) ScaleX(-1); -ms-transform:ScaleY(-1) ScaleX(-1); filter:flipv fliph; -ms-filter:flipv fliph",
	cssClasses:	"",
	htmlId:		"tobj79821",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[65.49999999999926,121.50000000000111,655,344]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":114,"y":122,"width":1139,"height":598},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape79821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99477.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 20 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(10 10)\" style=\"\">\n	<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100587_79587_11915\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11915&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(10 10)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 22px; top: 396px; width: 20px; height: 20px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99477",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_3_chat_vraag.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[21.99999999999998,396,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":396,"width":34,"height":34},"imgDataNormal":"images/desktop_shape99477.png","imgDataOver":"images/desktop_shape99477_over.png","imgDataDown":"images/desktop_shape99477.png","imgDataDisabled":"images/desktop_shape99477_disabled.png","svgDataNormal":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11915\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11915&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11917\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11917&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11919\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11919&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11921\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11921&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99475.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 20 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(10 10)\" style=\"\">\n	<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100587_79587_11923\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11923&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(10 10)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 744px; top: 396px; width: 20px; height: 20px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99475",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_3_pop_up.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[744,396,20,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":396,"width":34,"height":34},"imgDataNormal":"images/desktop_shape99475.png","imgDataOver":"images/desktop_shape99475_over.png","imgDataDown":"images/desktop_shape99475.png","imgDataDisabled":"images/desktop_shape99475_disabled.png","svgDataNormal":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11923\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11923&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11925\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11925&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11927\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11927&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(10 10)\" style=\"\">\n\t<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_79587_11929\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"20\" height=\"20\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 20 0 L 20 20 L 0 20 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_79587_11929&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-10, -10) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(10 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99407.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 232px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 222px; min-height: 34px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:16pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Klantinformatie &amp; privacy</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 277px; top: 7px; width: 232px; height: 44px; z-index: 12;",
	cssClasses:	"header-module-title",
	htmlId:		"tobj99407",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module title"
	},
	objData:	{"a":[0,32,0,[277,7,232,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":7,"width":403,"height":77},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text99419.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 228px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 228px; min-height: 25px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Marja belt...</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 278px; top: 43px; width: 228px; height: 25px; z-index: 13;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj99419",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[278,43,228,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
qu100590.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu100590",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	0,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_100590
	},
	objData:	{"a":[0,32,0,[]]}
};
text100591.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 113px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 113px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 100px; width: 113px; height: 20px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj100591",
	bInsAnc:	0,
	fieldsetId:	'fset100590',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,100,113,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-166,"y":175,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100592.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 100px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 100px; min-height: 20px;\"><label for=\"rad100593\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 130px; width: 100px; height: 20px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj100592",
	bInsAnc:	0,
	fieldsetId:	'fset100590',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[79,130,100,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-137,"y":205,"width":100,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio100593.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad100593\" name=\"rad100590\" value=\"Choice One\" onclick=\"VarQuestion_100590.set(this.value);qu100590.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 130px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj100593",
	bInsAnc:	0,
	fieldsetId:	'fset100590',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[50,130,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-166,"y":205,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
qu100594.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu100594",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	0,
				"doImmFeedback":	0,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0043\\u0068\\u006F\\u0069\\u0063\\u0065\\u0020\\u004F\\u006E\\u0065"],
				"correctFeedbackFunc":	0,
				"incorrectFeedbackFunc":	0,
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarCorrectAns_100594
	},
	objData:	{"a":[0,32,0,[]]}
};
text100595.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 113px; min-height: 20px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 113px; min-height: 20px;\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 100px; width: 113px; height: 20px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj100595",
	bInsAnc:	0,
	fieldsetId:	'fset100594',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[50,100,113,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-182,"y":409,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100596.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 100px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 100px; min-height: 20px;\"><label for=\"rad100597\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 130px; width: 100px; height: 20px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj100596",
	bInsAnc:	0,
	fieldsetId:	'fset100594',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[79,130,100,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-153,"y":439,"width":100,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio100597.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad100597\" name=\"rad100594\" value=\"Choice One\" onclick=\"VarCorrectAns_100594.set(this.value);qu100594.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 130px; width: 19px; height: 19px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj100597",
	bInsAnc:	0,
	fieldsetId:	'fset100594',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[50,130,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-182,"y":439,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text100598.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 111px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 111px; min-height: 20px;\"><label for=\"rad100599\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:Arial,sans-serif;color:#000000;font-size:12pt;\">Choice Three</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 160px; width: 111px; height: 20px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj100598",
	bInsAnc:	0,
	fieldsetId:	'fset100594',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[79,160,111,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-153,"y":469,"width":111,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio100599.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad100599\" name=\"rad100594\" value=\"Choice Three\" onclick=\"VarCorrectAns_100594.set(this.value);qu100594.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 160px; width: 19px; height: 19px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj100599",
	bInsAnc:	0,
	fieldsetId:	'fset100594',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[50,160,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-182,"y":469,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
og100600.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100600",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og100605.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100605",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og100610.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100610",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text100614.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 255px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 255px; min-height: 30px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\"><span style=\"color: rgb(0, 40, 87);\">13.18 uur: Marja belt</span><span style=\"color: rgb(0, 0, 0);\"> </span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 100px; top: 165px; width: 255px; height: 30px; z-index: 22;",
	cssClasses:	"page-title",
	htmlId:		"tobj100614",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title1"
	},
	objData:	{"a":[0,32,0,[100,165,255,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":165,"width":444,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100615.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 249px; min-height: 87px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 249px; min-height: 87px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:13pt; font-family:pt sans; color:rgb(0, 40, 87)\">Jij wijzigt de verzekering van de zoon van Marja. Zij wil ook het e-mailadres van haar zoon doorgeven. Mag je het e-mailadres wijzigen? Gebruik de AVG beslisboom.&nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 100px; top: 238px; width: 249px; height: 87px; z-index: 23;",
	cssClasses:	"page-body",
	htmlId:		"tobj100615",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[100,238,249,87]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":238,"width":434,"height":152},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100617.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 83px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 73px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 145px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid; text-align: center;\"><span style=\"color: rgb(0, 40, 87); font-family: Arial, sans-serif; font-size:12pt;\">​<span style=\"font-family: &quot;PT Sans&quot;, sans-serif;\">Ja</span></span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 100px; top: 358px; width: 83px; height: 68px; z-index: 24; cursor: pointer;",
	cssClasses:	"MPC_A",
	htmlId:		"tobj100617",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Antwoord_ Ja",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ if( text100617.eatOnUp==true ){
        text100617.eatOnUp=false;
        return;
    }
    runJS100618();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_B',actItem:function(){ if( text100617.eatOnUp==true ){
        text100617.eatOnUp=false;
        return;
    }
    runJS100619();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100617.eatOnUp==true ){
        text100617.eatOnUp=false;
        return;
    }
    VarQuestion_100590.set('A'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ if( text100617.eatOnUp==true ){
        text100617.eatOnUp=false;
        return;
    }
    {og100600.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:1001,delay:0,name:'OnMClkShow',actItem:function(){ textbutton99475.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:1001,delay:0,name:'OnMClkShow',actItem:function(){ shape100640.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100617.eatOnUp==true ){
        text100617.eatOnUp=false;
        return;
    }
    VarC3.add('_04'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if( text100617.eatOnUp==true ){
        text100617.eatOnUp=false;
        return;
    }
    if(VarQuestion_100590.equals('' +  VarCorrectAns_100594.getValueForDisplay() + ''))og100641.show(); else og100651.show(); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[100,358,83,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":358,"width":145,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text100626.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 83px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 73px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px 4px; width: 145px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid; text-align: center;\"><span style=\"color: rgb(0, 40, 87); font-family: Arial, sans-serif; font-size:12pt;\">​<span style=\"font-family: &quot;PT Sans&quot;, sans-serif;\">Nee</span></span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 197px; top: 358px; width: 83px; height: 68px; z-index: 25; cursor: pointer;",
	cssClasses:	"MPC_B",
	htmlId:		"tobj100626",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Antwoord_ Nee",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ if( text100626.eatOnUp==true ){
        text100626.eatOnUp=false;
        return;
    }
    runJS100627();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnselect_A',actItem:function(){ if( text100626.eatOnUp==true ){
        text100626.eatOnUp=false;
        return;
    }
    runJS100628();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100626.eatOnUp==true ){
        text100626.eatOnUp=false;
        return;
    }
    VarQuestion_100590.set('B'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ if( text100626.eatOnUp==true ){
        text100626.eatOnUp=false;
        return;
    }
    {og100600.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:1001,delay:0,name:'OnMClkShow',actItem:function(){ textbutton99475.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:1001,delay:0,name:'OnMClkShow',actItem:function(){ shape100640.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100626.eatOnUp==true ){
        text100626.eatOnUp=false;
        return;
    }
    VarC3.add('_04'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if( text100626.eatOnUp==true ){
        text100626.eatOnUp=false;
        return;
    }
    if(VarQuestion_100590.equals('' +  VarCorrectAns_99993.getValueForDisplay() + ''))og100641.show(); else og100651.show(); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[197,358,83,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":343,"y":358,"width":145,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
og100635.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100635",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image100636.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj100636Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 174px; top: 373px; width: 17px; height: 17px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj100636",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-1"
	},
	objData:	{"a":[0,256,0,[174,373,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":303,"y":373,"width":30,"height":30}}
};
image100637.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj100637Img\" src=\"images/dragdrop-wrong-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 174px; top: 373px; width: 17px; height: 17px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj100637",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-wrong-dark-1"
	},
	objData:	{"a":[0,256,0,[174,373,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":303,"y":373,"width":30,"height":30}}
};
image100638.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj100638Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 272px; top: 373px; width: 17px; height: 17px; z-index: 28;",
	cssClasses:	"",
	htmlId:		"tobj100638",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-2"
	},
	objData:	{"a":[0,256,0,[272,373,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":473,"y":373,"width":30,"height":30}}
};
image100639.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj100639Img\" src=\"images/dragdrop-wrong-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 272px; top: 373px; width: 17px; height: 17px; z-index: 29;",
	cssClasses:	"",
	htmlId:		"tobj100639",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-wrong-dark-2"
	},
	objData:	{"a":[0,256,0,[272,373,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":473,"y":373,"width":30,"height":30}}
};
shape100640.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 284 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(142 34)\" style=\"\">\n	<path d=\"M 0 0 L 284 0 L 284 68 L 0 68 L 0 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -34) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(142 34)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 417px; top: 307px; width: 284px; height: 68px; z-index: 30; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100640",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable pane"
	},
	objData:	{"a":[0,0,0,[417,307.00000000000006,284,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":726,"y":307,"width":494,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape100034.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og100641.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100641",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape100642.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 397\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 198.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 397 L 0 397 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -198.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 198.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -5.68434e-14px; top: 78px; width: 785px; height: 397px; z-index: 31; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100642",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-5.684341886080802e-14,78.00000000000009,785,397]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape100643.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 423 290\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(211.5 145)\" style=\"\">\n	<path d=\"M 3.45 0 L 419.55 0 A 3.45 3.45 0 0 1 423 3.45 L 423 286.55 A 3.45 3.45 0 0 1 419.55 290 L 3.45 290 A 3.45 3.45 0 0 1 0 286.55 L 0 3.45 A 3.45 3.45 0 0 1 3.45 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-211.5, -145) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(211.5 145)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 181px; top: 172px; width: 423px; height: 290px; z-index: 32; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100643",
	bInsAnc:	0,
	cwObj:		{
		"name":	"White bg"
	},
	objData:	{"a":[0,0,0,[180.99999999999997,172.00000000000006,423,290]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99639.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text100644.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 290px; min-height: 60px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 290px; min-height: 60px;\"><p style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:12pt; font-family:titillium web; color:rgb(0, 40, 87)\">Je mag deze wijziging niet doorvoeren. Je kunt Marja adviseren om haar zoon dit te laten regelen in Mijn Zilveren Kruis</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 247px; top: 391px; width: 290px; height: 60px; z-index: 33;",
	cssClasses:	"feedback-body",
	htmlId:		"tobj100644",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[247,391,290,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":391,"width":505,"height":104},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100645.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 303px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 303px; min-height: 25px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 1.25;\"><strong><span style=\"font-size:18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">Inderdaad!</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 247px; top: 323px; width: 303px; height: 25px; z-index: 34;",
	cssClasses:	"feedback-title",
	htmlId:		"tobj100645",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[247,323,303,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":323,"width":528,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image100646.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj100646Img\" src=\"images/Kruisje6176.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 574px; top: 198px; width: 13px; height: 13px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj100646",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[574,198,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":999,"y":198,"width":22,"height":22}}
};
shape100647.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 42 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(21 18)\" style=\"\">\n	<path d=\"M 0 0 L 42 0 L 42 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-21, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(21 18)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 560px; top: 178px; width: 42px; height: 36px; z-index: 36; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100647",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og100641.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[560,178,42,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":974,"y":178,"width":73,"height":63},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99688.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100649.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(29 11.5)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100587_12147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12147&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 11.5)\">\n		<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 364px; top: 537px; width: 58px; height: 23px; z-index: 37; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100649",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_3_pop_up.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[364,537,58,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":634,"y":537,"width":101,"height":40},"imgDataNormal":"images/desktop_shape99675.png","imgDataOver":"images/desktop_shape99675_over.png","imgDataDown":"images/desktop_shape99675.png","imgDataDisabled":"images/desktop_shape99675_disabled.png","svgDataNormal":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12147&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12149\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12149&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12151\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12151&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12153\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12153&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og100651.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100651",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape100652.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 397\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 198.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 397 L 0 397 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -198.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 198.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -5.68434e-14px; top: 78px; width: 785px; height: 397px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100652",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-5.684341886080802e-14,78.00000000000009,785,397]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape100653.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 423 290\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(211.5 145)\" style=\"\">\n	<path d=\"M 3.45 0 L 419.55 0 A 3.45 3.45 0 0 1 423 3.45 L 423 286.55 A 3.45 3.45 0 0 1 419.55 290 L 3.45 290 A 3.45 3.45 0 0 1 0 286.55 L 0 3.45 A 3.45 3.45 0 0 1 3.45 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-211.5, -145) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(211.5 145)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 181px; top: 172px; width: 423px; height: 290px; z-index: 39; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100653",
	bInsAnc:	0,
	cwObj:		{
		"name":	"White bg"
	},
	objData:	{"a":[0,0,0,[180.99999999999997,172.00000000000006,423,290]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99639.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text100655.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 303px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 303px; min-height: 25px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; line-height: 1.25;\"><strong><span style=\"font-size:18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif;\">Dit klopt niet.</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 254px; top: 254px; width: 303px; height: 25px; z-index: 40;",
	cssClasses:	"feedback-title",
	htmlId:		"tobj100655",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[254,254,303,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":442,"y":254,"width":528,"height":43},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100931.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 278px; min-height: 144px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 278px; min-height: 144px;\"><ol style=\"padding-left: 29px; padding-inline-start: 29px;\">\n	<li leglh=\"1.691\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px; font-size:12pt;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Wie belt er &gt;&nbsp;iemand anders</span></li>\n	<li leglh=\"1.691\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px; font-size:12pt;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Welke situatie is van toepassing &gt;&nbsp;is niet gemachtigd en wil persoonlijke informatie</span></li>\n	<li leglh=\"1.691\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px; font-size:12pt;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Wie heb je aan de lijn &gt; ouder - kind relatie</span></li>\n	<li leglh=\"1.691\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px; font-size:12pt;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Waar gaat de vraag over &gt;&nbsp;persoonlijk&nbsp;</span></li>\n	<li leglh=\"1.691\" style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px; font-size:12pt;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Wel uitvoeren &gt;&nbsp;zorgverzekering opzeggen</span></li>\n</ol>\n\n<p style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">​</span></p>\n\n<p style=\"margin-left: 0px; text-indent: 0px; line-height: 1.62; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;titillium web&quot;, sans-serif; font-size:12pt;\">Je kunt Marja adviseren om haar zoon dit te laten regelen in Mijn Zilveren Kruis.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 248px; top: 318px; width: 278px; height: 144px; z-index: 41;",
	cssClasses:	"feedback-body",
	htmlId:		"tobj100931",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[248,318,278,144]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":432,"y":318,"width":483,"height":250},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image100656.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj100656Img\" src=\"images/Kruisje6176.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 574px; top: 198px; width: 13px; height: 13px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj100656",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[574,198,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":999,"y":198,"width":22,"height":22}}
};
shape100657.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 42 36\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(21 18)\" style=\"\">\n	<path d=\"M 0 0 L 42 0 L 42 36 L 0 36 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-21, -18) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(21 18)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 560px; top: 178px; width: 42px; height: 36px; z-index: 43; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100657",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og100651.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[560,178,42,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":974,"y":178,"width":73,"height":63},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99688.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100659.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 58 23\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(29 11.5)\" style=\"\">\n	<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100587_12155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12155&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(29 11.5)\">\n		<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 364px; top: 571px; width: 58px; height: 23px; z-index: 44; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100659",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_3_pop_up.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[364,571,58,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":634,"y":571,"width":101,"height":40},"imgDataNormal":"images/desktop_shape99675.png","imgDataOver":"images/desktop_shape99675_over.png","imgDataDown":"images/desktop_shape99675.png","imgDataDisabled":"images/desktop_shape99675_disabled.png","svgDataNormal":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12155&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12157\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12157&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12159\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12159&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(29 11.5)\" style=\"\">\n\t<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100587_12161\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"58\" height=\"23\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 58 0 L 58 23 L 0 23 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100587_12161&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-29, -11.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(29 11.5)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-27\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	23
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/zk_online_RGB.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/dragdrop-correct-dark.png","images/Button_verder.png","images/Button_verder_hover.png","images/Kruisje6176.png","images/dragdrop-wrong-dark.png","images/Button_menu_groot.png","images/Button_sluit_groot.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","",0,0,1];