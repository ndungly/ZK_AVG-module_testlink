if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og99488.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99488",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape80613.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 22.5)\">\n		<text font-family=\"Verdana\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.62\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 8.70415e-13px; width: 1009px; height: 45px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80613",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,8.704148513061227e-13,1009,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":61},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80868.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image80611.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj80611Img\" src=\"images/zk_online_RGB.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 99px; height: 32px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 14px; top: 13px; width: 99px; height: 32px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj80611",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zk_logo"
	},
	objData:	{"a":[0,288,0,[14,13,99,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":18,"width":134,"height":43}}
};
shape79824.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 1011 511\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(505.5 255.5)\" style=\"\">\n	<path d=\"M 0 0 L 1010 0 L 1010 510 L 0 510 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-505, -255) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(505.5 255.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.015841183762376\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 57.5px; width: 1011px; height: 511px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj79824",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.5000000000003979,57.500000000000796,1011,511]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80854.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100182.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 111 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(55.5 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100380_79587_11147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"111\" height=\"43\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11147&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(55.5 21.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 888px; top: 7px; width: 111px; height: 43px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33056,0,[888,7.0000000000000995,111,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape100164.png","imgDataOver":"images/desktop_shape100164.png","imgDataDown":"images/desktop_shape100164.png","imgDataDisabled":"images/desktop_shape100164_disabled.png","svgDataNormal":"<g transform=\"translate(55.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11147\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"111\" height=\"43\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11147&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(55.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(55.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11149\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"111\" height=\"43\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11149&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(55.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(55.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11151\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"111\" height=\"43\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11151&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(55.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(55.5 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11153\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"111\" height=\"43\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 111 0 L 111 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11153&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-55.5, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(55.5 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100180.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 92 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(46 21.5)\" style=\"\">\n	<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100380_79587_11155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"92\" height=\"43\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11155&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(46 21.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 787px; top: 7px; width: 92px; height: 43px; z-index: 8; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33056,0,[787,7.000000000000075,92,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1066,"y":10,"width":125,"height":58},"imgDataNormal":"images/desktop_shape100180.png","imgDataOver":"images/desktop_shape100180.png","imgDataDown":"images/desktop_shape100180.png","imgDataDisabled":"images/desktop_shape100180_disabled.png","svgDataNormal":"<g transform=\"translate(46 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11155\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"92\" height=\"43\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11155&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(46 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(46 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11157\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"92\" height=\"43\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11157&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(46 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(46 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11159\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"92\" height=\"43\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11159&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(46 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(46 21.5)\" style=\"\">\n\t<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11161\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"92\" height=\"43\" xlink:href=\"images/Button_menu_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 92 0 L 92 43 L 0 43 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11161&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-46, -21.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(46 21.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape79821.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 842 442\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(421 221)\" style=\"\">\n	<path d=\"M 4.41 0 L 836.59 0 A 4.41 4.41 0 0 1 841 4.41 L 841 436.59 A 4.41 4.41 0 0 1 836.59 441 L 4.41 441 A 4.41 4.41 0 0 1 0 436.59 L 0 4.41 A 4.41 4.41 0 0 1 4.41 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-420.5, -220.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(421 221) matrix(-1 0 0 1 0 0)  matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"16.01902456979786\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(177,224,226); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#B1E0E2\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 83.5px; top: 89.5px; width: 842px; height: 442px; z-index: 9; transform: scaleY(-1) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1) ScaleX(-1); -webkit-transform:ScaleY(-1) ScaleX(-1); -o-transform:ScaleY(-1) ScaleX(-1); -ms-transform:ScaleY(-1) ScaleX(-1); filter:flipv fliph; -ms-filter:flipv fliph",
	cssClasses:	"",
	htmlId:		"tobj79821",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[83.4999999999996,89.5000000000008,842,442]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":114,"y":122,"width":1139,"height":598},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape79821.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99477.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 25 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(12.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100380_79587_11163\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11163&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(12.5 12.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 28px; top: 293px; width: 25px; height: 25px; z-index: 10; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99477",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_2_intro_casus.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[27.999999999999975,293,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":396,"width":34,"height":34},"imgDataNormal":"images/desktop_shape99477.png","imgDataOver":"images/desktop_shape99477_over.png","imgDataDown":"images/desktop_shape99477.png","imgDataDisabled":"images/desktop_shape99477_disabled.png","svgDataNormal":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11163\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11163&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11165\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11165&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11167\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11167&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11169\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11169&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton99475.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 25 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(12.5 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100380_79587_11171\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11171&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(12.5 12.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 957px; top: 293px; width: 25px; height: 25px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99475",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_2_multiple_choice_vraag.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33024,0,[957,293,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":396,"width":34,"height":34},"imgDataNormal":"images/desktop_shape99475.png","imgDataOver":"images/desktop_shape99475_over.png","imgDataDown":"images/desktop_shape99475.png","imgDataDisabled":"images/desktop_shape99475_disabled.png","svgDataNormal":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11171\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11171&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11173\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11173&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11175\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11175&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(12.5 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_79587_11177\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"25\" height=\"25\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 25 0 L 25 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_79587_11177&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-12.5, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(12.5 12.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99407.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 298px; min-height: 57px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 288px; min-height: 47px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size:16pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Klantinformatie &amp; privacy</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 356px; top: 5px; width: 298px; height: 57px; z-index: 12;",
	cssClasses:	"header-module-title",
	htmlId:		"tobj99407",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module title"
	},
	objData:	{"a":[0,32,0,[356,5,298,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":7,"width":403,"height":77},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text99415.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 293px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 293px; min-height: 33px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Edwin belt...</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 358px; top: 32px; width: 293px; height: 33px; z-index: 13;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj99415",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[358,32,293,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":44},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
qu100383.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu100383",
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
				"varQuest":	VarCorrectAns_100383
	},
	objData:	{"a":[0,32,0,[]]}
};
text100384.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 83px; min-height: 15px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 83px; min-height: 15px;\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: -190px; top: 219px; width: 83px; height: 15px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj100384",
	bInsAnc:	0,
	fieldsetId:	'fset100383',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-190,219,83,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-190,"y":219,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100385.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 15px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 15px;\"><label for=\"rad100386\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: -161px; top: 249px; width: 73px; height: 15px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj100385",
	bInsAnc:	0,
	fieldsetId:	'fset100383',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-161,249,73,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-161,"y":249,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio100386.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad100386\" name=\"rad100383\" value=\"Choice One\" onclick=\"VarCorrectAns_100383.set(this.value);qu100383.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: -190px; top: 249px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj100386",
	bInsAnc:	0,
	fieldsetId:	'fset100383',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-190,249,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-190,"y":249,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
qu100387.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu100387",
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
				"varQuest":	VarQuestion_100387
	},
	objData:	{"a":[0,32,0,[]]}
};
text100388.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 83px; min-height: 15px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 83px; min-height: 15px;\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Question Text</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: -202px; top: 412px; width: 83px; height: 15px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj100388",
	bInsAnc:	0,
	fieldsetId:	'fset100387',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[-202,412,83,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-202,"y":412,"width":113,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100389.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 15px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 15px;\"><label for=\"rad100390\" style=\"cursor:\"><p align=\"left\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Choice One</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: -173px; top: 442px; width: 73px; height: 15px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj100389",
	bInsAnc:	0,
	fieldsetId:	'fset100387',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[-173,442,73,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-173,"y":442,"width":99,"height":20},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio100390.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad100390\" name=\"rad100387\" value=\"Choice One\" onclick=\"VarQuestion_100387.set(this.value);qu100387.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: -202px; top: 442px; width: 19px; height: 19px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj100390",
	bInsAnc:	0,
	fieldsetId:	'fset100387',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[-202,442,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":-202,"y":442,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
og100391.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100391",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og100397.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100397",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text100408.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 598px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 598px; min-height: 30px;\"><p style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"font-size:13pt; font-family:pt sans; color:rgb(0, 40, 87)\">Welke vragen stel je Edwin om te checken of hij inderdaad namens meneer Visser belt? &nbsp;</span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 176px; width: 598px; height: 30px; z-index: 20;",
	cssClasses:	"page-body",
	htmlId:		"tobj100408",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,32,0,[129,176,598,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":238,"width":810,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100409.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 328px; min-height: 38px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 328px; min-height: 38px;\"><p align=\"left\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:24pt; font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\"><span style=\"color: rgb(0, 40, 87);\">10.56&nbsp;uur: Edwin belt</span><span style=\"color: rgb(0, 0, 0);\"> </span></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 122px; width: 328px; height: 38px; z-index: 21;",
	cssClasses:	"page-title",
	htmlId:		"tobj100409",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title1"
	},
	objData:	{"a":[0,32,0,[129,122,328,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":165,"width":444,"height":52},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og100410.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100410",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og100416.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100416",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text100417.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 705px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 695px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Wat is de postcode en het huisnummer van meneer Visser?</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 177px; top: 234px; width: 705px; height: 68px; z-index: 22; cursor: pointer;",
	cssClasses:	"vink_A",
	htmlId:		"tobj100417",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_A",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100417.eatOnUp==true ){
        text100417.eatOnUp=false;
        return;
    }
    if(!VarQuestion_100387.contains('A'))VarQuestion_100387.add('A'); else VarQuestion_100387.sub('A'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ if( text100417.eatOnUp==true ){
        text100417.eatOnUp=false;
        return;
    }
    runJS100419();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_A',actItem:function(){ if( text100417.eatOnUp==true ){
        text100417.eatOnUp=false;
        return;
    }
    if(VarQuestion_100387.contains('A'))image100421.changeContents( "images/Checkbox_checked.png" ); else image100421.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[177,234,705,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":317,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image100421.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100421Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 37px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 237px; width: 38px; height: 37px; z-index: 23; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj100421",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_100387.contains('A'))VarQuestion_100387.add('A'); else VarQuestion_100387.sub('A'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_A',actItem:function(){ runJS100423();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_A',actItem:function(){ if(VarQuestion_100387.contains('A'))image100421.changeContents( "images/Checkbox_checked.png" ); else image100421.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[129,237,38,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":321,"width":51,"height":50}}
};
text100425.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 705px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 695px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat zijn uw voorletters en achternaam?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 177px; top: 281px; width: 705px; height: 68px; z-index: 24; cursor: pointer;",
	cssClasses:	"vink_B",
	htmlId:		"tobj100425",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_B",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100425.eatOnUp==true ){
        text100425.eatOnUp=false;
        return;
    }
    if(!VarQuestion_100387.contains('B'))VarQuestion_100387.add('B'); else VarQuestion_100387.sub('B'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ if( text100425.eatOnUp==true ){
        text100425.eatOnUp=false;
        return;
    }
    runJS100427();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_B',actItem:function(){ if( text100425.eatOnUp==true ){
        text100425.eatOnUp=false;
        return;
    }
    if(VarQuestion_100387.contains('B'))image100429.changeContents( "images/Checkbox_checked.png" ); else image100429.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[177,281,705,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":380,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image100429.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100429Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 37px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 284px; width: 38px; height: 37px; z-index: 25; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj100429",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_100387.contains('B'))VarQuestion_100387.add('B'); else VarQuestion_100387.sub('B'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_B',actItem:function(){ runJS100431();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_B',actItem:function(){ if(VarQuestion_100387.contains('B'))image100429.changeContents( "images/Checkbox_checked.png" ); else image100429.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[129,284,38,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":384,"width":51,"height":50}}
};
text100433.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 705px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 695px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Wat is de naam van de instelling waar u werkt?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 177px; top: 328px; width: 705px; height: 68px; z-index: 26; cursor: pointer;",
	cssClasses:	"vink_C",
	htmlId:		"tobj100433",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_C",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100433.eatOnUp==true ){
        text100433.eatOnUp=false;
        return;
    }
    if(!VarQuestion_100387.contains('C'))VarQuestion_100387.add('C'); else VarQuestion_100387.sub('C'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ if( text100433.eatOnUp==true ){
        text100433.eatOnUp=false;
        return;
    }
    runJS100435();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_C',actItem:function(){ if( text100433.eatOnUp==true ){
        text100433.eatOnUp=false;
        return;
    }
    if(VarQuestion_100387.contains('C'))image100437.changeContents( "images/Checkbox_checked.png" ); else image100437.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[177,328,705,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":444,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image100437.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100437Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 37px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 331px; width: 38px; height: 37px; z-index: 27; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj100437",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_100387.contains('C'))VarQuestion_100387.add('C'); else VarQuestion_100387.sub('C'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_C',actItem:function(){ runJS100439();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_C',actItem:function(){ if(VarQuestion_100387.contains('C'))image100437.changeContents( "images/Checkbox_checked.png" ); else image100437.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[129,331,38,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":448,"width":51,"height":50}}
};
text100441.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 705px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 695px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family: &quot;pt sans&quot;, sans-serif; color: rgb(0, 40, 87);\">Wat is de geboortedatum van meneer Visser?&nbsp;</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 177px; top: 374px; width: 705px; height: 68px; z-index: 28; cursor: pointer;",
	cssClasses:	"vink_D",
	htmlId:		"tobj100441",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_D",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100441.eatOnUp==true ){
        text100441.eatOnUp=false;
        return;
    }
    if(!VarQuestion_100387.contains('D'))VarQuestion_100387.add('D'); else VarQuestion_100387.sub('D'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_D',actItem:function(){ if( text100441.eatOnUp==true ){
        text100441.eatOnUp=false;
        return;
    }
    runJS100443();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_D',actItem:function(){ if( text100441.eatOnUp==true ){
        text100441.eatOnUp=false;
        return;
    }
    if(VarQuestion_100387.contains('D'))image100445.changeContents( "images/Checkbox_checked.png" ); else image100445.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[177,374,705,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":507,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image100445.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100445Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 37px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 377px; width: 38px; height: 37px; z-index: 29; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj100445",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_100387.contains('D'))VarQuestion_100387.add('D'); else VarQuestion_100387.sub('D'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_D',actItem:function(){ runJS100447();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_D',actItem:function(){ if(VarQuestion_100387.contains('D'))image100445.changeContents( "images/Checkbox_checked.png" ); else image100445.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[129,377,38,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":511,"width":51,"height":50}}
};
text100449.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 705px; height: 60px; background-color: rgb(214, 239, 240);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 695px; height: 60px;\"><table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\">\n	<tbody>\n		<tr valign=\"top\">\n			<td style=\"padding: 0px; width: 954px; vertical-align: middle; height: 50px; border-width: 0px; border-style: solid;\"><span style=\"font-size:12pt; font-family:pt sans; color:rgb(0, 40, 87)\">Wat is het relatienummer van meneer Visser?</span></td>\n		</tr>\n	</tbody>\n</table></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 177px; top: 421px; width: 705px; height: 68px; z-index: 30; cursor: pointer;",
	cssClasses:	"vink_E",
	htmlId:		"tobj100449",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vink_E",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if( text100449.eatOnUp==true ){
        text100449.eatOnUp=false;
        return;
    }
    if(!VarQuestion_100387.contains('E'))VarQuestion_100387.add('E'); else VarQuestion_100387.sub('E'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_E',actItem:function(){ if( text100449.eatOnUp==true ){
        text100449.eatOnUp=false;
        return;
    }
    runJS100451();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_E',actItem:function(){ if( text100449.eatOnUp==true ){
        text100449.eatOnUp=false;
        return;
    }
    if(VarQuestion_100387.contains('E'))image100453.changeContents( "images/Checkbox_checked.png" ); else image100453.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[177,421,705,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":240,"y":570,"width":954,"height":50},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image100453.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100453Img\" src=\"images/Checkbox_unchecked.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 37px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 424px; width: 38px; height: 37px; z-index: 31; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj100453",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Checkbox_unchecked",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ if(!VarQuestion_100387.contains('E'))VarQuestion_100387.add('E'); else VarQuestion_100387.sub('E'); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChangeColor_E',actItem:function(){ runJS100455();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkChange_Check_E',actItem:function(){ if(VarQuestion_100387.contains('E'))image100453.changeContents( "images/Checkbox_checked.png" ); else image100453.changeContents( "images/Checkbox_unchecked.png" ); 
    if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[129,424,38,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":574,"width":51,"height":50}}
};
og100457.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100457",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image100458.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100458Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 871px; top: 245px; width: 22px; height: 22px; z-index: 32;",
	cssClasses:	"",
	htmlId:		"tobj100458",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-1"
	},
	objData:	{"a":[0,256,0,[871,245,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":332,"width":30,"height":30}}
};
image100459.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100459Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 871px; top: 292px; width: 22px; height: 22px; z-index: 33;",
	cssClasses:	"",
	htmlId:		"tobj100459",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-2"
	},
	objData:	{"a":[0,256,0,[871,292,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":395,"width":30,"height":30}}
};
image100460.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100460Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 871px; top: 338px; width: 22px; height: 22px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj100460",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-3"
	},
	objData:	{"a":[0,256,0,[871,338,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":458,"width":30,"height":30}}
};
image100461.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100461Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 871px; top: 385px; width: 22px; height: 22px; z-index: 35;",
	cssClasses:	"",
	htmlId:		"tobj100461",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-4"
	},
	objData:	{"a":[0,256,0,[871,385,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":521,"width":30,"height":30}}
};
image100462.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100462Img\" src=\"images/dragdrop-correct-dark.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 871px; top: 431px; width: 22px; height: 22px; z-index: 36;",
	cssClasses:	"",
	htmlId:		"tobj100462",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dragdrop-correct-dark-5"
	},
	objData:	{"a":[0,256,0,[871,431,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1179,"y":584,"width":30,"height":30}}
};
textbutton100463.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 72 29\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36 14.5)\" style=\"\">\n	<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100380_11275\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"29\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11275&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36 14.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 469px; top: 478px; width: 72px; height: 29px; z-index: 37; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100463",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button check",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp',actItem:function(){ {og100410.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowNext',actItem:function(){ textbutton99475.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowDisable',actItem:function(){ shape100472.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ VarC2.add('_02'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowFBpopup',actItem:function(){ og100473.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowCorrectFB',actItem:function(){ if(VarQuestion_100387.contains('A')&&VarQuestion_100387.contains('B')&&VarQuestion_100387.contains('D')&&VarQuestion_100387.contains('E'))og100483.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShowWrongFB',actItem:function(){ if(!VarQuestion_100387.contains('A')||!VarQuestion_100387.contains('B')||!VarQuestion_100387.contains('D')||!VarQuestion_100387.contains('E'))og100486.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHideCheck',actItem:function(){ textbutton100463.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33056,0,[469,478,72,29]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":647,"width":97,"height":39},"imgDataNormal":"images/desktop_shape99581.png","imgDataOver":"images/desktop_shape99581_over.png","imgDataDown":"images/desktop_shape99581.png","imgDataDisabled":"images/desktop_shape99581_disabled.png","svgDataNormal":"<g transform=\"translate(36 14.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11275\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"29\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11275&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 14.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36 14.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11277\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"29\" xlink:href=\"images/Button_check_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11277&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 14.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36 14.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11279\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"29\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11279&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 14.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36 14.5)\" style=\"\">\n\t<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11281\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"72\" height=\"29\" xlink:href=\"images/Button_check_groot_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 72 0 L 72 29 L 0 29 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11281&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36, -14.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36 14.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape100472.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 815 380\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(407.5 190)\" style=\"\">\n	<path d=\"M 0 0 L 815 0 L 815 380 L 0 380 L 0 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-407.5, -190) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(407.5 190)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 99px; top: 95px; width: 815px; height: 380px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100472",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Disable pane"
	},
	objData:	{"a":[0,0,0,[98.99999999999994,95.00000000000011,815,380]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":128,"width":1103,"height":514},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99594.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og100473.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100473",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape100474.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 1009 510\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(504.5 255)\" style=\"\">\n	<path d=\"M 0 0 L 1009 0 L 1009 510 L 0 510 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-504.5, -255) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(504.5 255)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -5.68434e-14px; top: 58px; width: 1009px; height: 510px; z-index: 39; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100474",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-5.684341886080802e-14,58.000000000000114,1009,510]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape100475.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 544 372\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(272 186)\" style=\"\">\n	<path d=\"M 4.43 0 L 539.57 0 A 4.43 4.43 0 0 1 544 4.43 L 544 367.57 A 4.43 4.43 0 0 1 539.57 372 L 4.43 372 A 4.43 4.43 0 0 1 0 367.57 L 0 4.43 A 4.43 4.43 0 0 1 4.43 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-272, -186) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(272 186)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 233px; top: 127px; width: 544px; height: 372px; z-index: 40; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100475",
	bInsAnc:	0,
	cwObj:		{
		"name":	"White bg"
	},
	objData:	{"a":[0,0,0,[232.99999999999994,127.00000000000006,544,372]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99639.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image100476.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj100476Img\" src=\"images/Kruisje6176.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 16px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 738px; top: 146px; width: 16px; height: 16px; z-index: 41;",
	cssClasses:	"",
	htmlId:		"tobj100476",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Kruisje"
	},
	objData:	{"a":[0,256,0,[738,146,16,16]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":999,"y":198,"width":22,"height":22}}
};
shape100477.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 54 47\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(27 23.5)\" style=\"\">\n	<path d=\"M 0 0 L 54 0 L 54 47 L 0 47 L 0 0 Z\" style=\"stroke: rgb(126, 187, 194); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -23.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27 23.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 719px; top: 131px; width: 54px; height: 47px; z-index: 42; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100477",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Click area",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og100473.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og100486.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og100483.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[719,131,54,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":974,"y":178,"width":73,"height":63},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99688.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100481.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 75 30\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(37.5 15)\" style=\"\">\n	<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_100380_11283\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"75\" height=\"30\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11283&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(37.5 15)\">\n		<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-35.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 468px; top: 414px; width: 75px; height: 30px; z-index: 47; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj100481",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Btn verder",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_cases_case_2_multiple_choice_vraag.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[468,414,75,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":634,"y":560,"width":101,"height":40},"imgDataNormal":"images/desktop_shape99675.png","imgDataOver":"images/desktop_shape99675_over.png","imgDataDown":"images/desktop_shape99675.png","imgDataDisabled":"images/desktop_shape99675_disabled.png","svgDataNormal":"<g transform=\"translate(37.5 15)\" style=\"\">\n\t<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11283\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"75\" height=\"30\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11283&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37.5 15)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-35.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(37.5 15)\" style=\"\">\n\t<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11285\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"75\" height=\"30\" xlink:href=\"images/Button_verder_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11285&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37.5 15)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-35.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(37.5 15)\" style=\"\">\n\t<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11287\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"75\" height=\"30\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11287&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37.5 15)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-35.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(37.5 15)\" style=\"\">\n\t<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_100380_11289\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"75\" height=\"30\" xlink:href=\"images/Button_verder.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 75 0 L 75 30 L 0 30 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_100380_11289&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-37.5, -15) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(37.5 15)\">\n\t\t<text font-family=\"Arial\" font-size=\"14.666666300000001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-35.5\" y=\"4.62\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og100483.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100483",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text100484.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 349px; min-height: 142px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 349px; min-height: 142px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Als iemand voor een ander belt en zelf niet is meeverzekerd op de polis, vraag je naar de postcode, het huisnummer en de geboortedatum van de verzekerde. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">​</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Ook vraag je de voorletter en achternaam van degene die belt. Deze naam noteer je in het notitieveld in Mikado. Vraag nooit naar het BSN nummer om iemand te identificeren.</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(0, 40, 87);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 248px; width: 349px; height: 142px; z-index: 43;",
	cssClasses:	"body-txt",
	htmlId:		"tobj100484",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[332,248,349,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":336,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100485.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 216px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 216px; min-height: 75px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Klopt!</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 398px; top: 185px; width: 216px; height: 75px; z-index: 44;",
	cssClasses:	"popup-title",
	htmlId:		"tobj100485",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[398,185,216,75]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":251,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og100486.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og100486",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text100487.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 349px; min-height: 142px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 349px; min-height: 142px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Als iemand voor een ander belt en zelf niet is meeverzekerd op de polis, vraag je naar de postcode, het huisnummer en de geboortedatum van de verzekerde. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">​</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;titillium web&quot;, sans-serif; color: rgb(0, 40, 87);\">Ook vraag je de voorletter en achternaam van degene die belt. Deze naam noteer je in het notitieveld in Mikado. Vraag nooit naar het BSN nummer om iemand te identificeren.</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(0, 40, 87);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 248px; width: 349px; height: 142px; z-index: 45;",
	cssClasses:	"body-txt",
	htmlId:		"tobj100487",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[332,248,349,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":336,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text100488.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 216px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 216px; min-height: 75px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Niet helemaal!</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 398px; top: 185px; width: 216px; height: 75px; z-index: 46;",
	cssClasses:	"popup-title",
	htmlId:		"tobj100488",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[398,185,216,75]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":251,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	23
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/zk_online_RGB.png","images/Button_check_groot.png","images/Button_check_groot_hover.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/dragdrop-correct-dark.png","images/Checkbox_unchecked.png","images/Checkbox_checked.png","images/Button_verder.png","images/Button_verder_hover.png","images/Kruisje6176.png","images/Button_menu_groot.png","images/Button_sluit_groot.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
