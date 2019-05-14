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
shape80599.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 35\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 17.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 35 L 0 35 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -17.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 17.5)\">\n		<text font-family=\"Verdana\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"3.7\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 9.59233e-14px; width: 785px; height: 35px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80599",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,9.592326932761353e-14,785,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":61},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80868.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image80597.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj80597Img\" src=\"images/zk_online_RGB.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 77px; height: 25px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 11px; top: 18px; width: 77px; height: 25px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj80597",
	bInsAnc:	0,
	cwObj:		{
		"name":	"zk_logo"
	},
	objData:	{"a":[0,288,0,[11,18,77,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":18,"width":134,"height":43}}
};
shape77710.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 787 398\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(393.5 199)\" style=\"\">\n	<path d=\"M 0 0 L 786 0 L 786 397 L 0 397 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-393, -198.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(393.5 199)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.81628466687023\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 77.5px; width: 787px; height: 398px; z-index: 6; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj77710",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.5000000000000568,77.50000000000009,787,398]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80854.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton100174.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 86 33\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(43 16.5)\" style=\"\">\n	<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_11851\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11851&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(43 16.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 691px; top: 10px; width: 86px; height: 33px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33056,0,[691,10.00000000000001,86,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape100164.png","imgDataOver":"images/desktop_shape100164.png","imgDataDown":"images/desktop_shape100164.png","imgDataDisabled":"images/desktop_shape100164_disabled.png","svgDataNormal":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11851\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11851&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11853\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11853&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11855\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11855&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(43 16.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11857\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"33\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 33 L 0 33 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11857&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -16.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 16.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-17.06666624\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-5.38\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text77990.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 232px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 222px; min-height: 18px;\"><p leglh=\"1.276\" style=\"margin-left:0px;text-indent:0px;line-height:1.276;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:20pt; font-family:\'Titillium Web\'; color:#0068bd; \"><strong>Klantinformatie &amp; privacy</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 277px; top: 15px; width: 232px; height: 28px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj77990",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[277,15,232,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":15,"width":403,"height":48},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape77769.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 701 331\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(350.5 165.5)\" style=\"\">\n	<path d=\"M 3.3 0 L 696.7 0 A 3.3 3.3 0 0 1 700 3.3 L 700 326.7 A 3.3 3.3 0 0 1 696.7 330 L 3.3 330 A 3.3 3.3 0 0 1 0 326.7 L 0 3.3 A 3.3 3.3 0 0 1 3.3 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-350, -165) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(350.5 165.5) matrix(-1 0 0 1 0 0)  matrix(1 0 0 -1 0 0)\">\n		<text font-family=\"Titillium Web\" font-size=\"12.818285393828573\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(177,224,226); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#B1E0E2\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 40.5px; top: 151.5px; width: 701px; height: 331px; z-index: 9; transform: scaleY(-1) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:ScaleY(-1) ScaleX(-1); -webkit-transform:ScaleY(-1) ScaleX(-1); -o-transform:ScaleY(-1) ScaleX(-1); -ms-transform:ScaleY(-1) ScaleX(-1); filter:flipv fliph; -ms-filter:flipv fliph",
	cssClasses:	"",
	htmlId:		"tobj77769",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[40.49999999999994,151.50000000000009,701,331]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":72,"y":152,"width":1219,"height":575},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape77769.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og99432.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99432",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99435.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99435",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99436.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99436",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
og99437.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99437",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99316.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 540 5\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(270 2.5)\" style=\"\">\n	<path d=\"M 0 0 L 536 1\" style=\"stroke: rgb(253, 229, 209); stroke-width: 4; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(253, 229, 209); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-268, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(270 9)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"15.044775743283584\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.74\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 122px; top: 439px; width: 540px; height: 5px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Line"
	},
	objData:	{"a":[0,32,0,[122,439.00000000000006,540,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":215,"y":441,"width":937,"height":5},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99316.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99295.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99295Img\" src=\"images/Menu_koffie.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 24px; height: 33px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 198px; top: 411px; width: 24px; height: 33px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj99295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_koffie"
	},
	objData:	{"a":[0,288,0,[198,411,24,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":411,"width":42,"height":57}}
};
image99294.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99294Img\" src=\"images/Menu_boterham.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 32px; height: 32px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 376px; top: 413px; width: 32px; height: 32px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj99294",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_boterham"
	},
	objData:	{"a":[0,288,0,[376,413,32,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":655,"y":413,"width":55,"height":56}}
};
image99293.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99293Img\" src=\"images/Menu_fris.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 29px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 556px; top: 415px; width: 25px; height: 29px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj99293",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_fris"
	},
	objData:	{"a":[0,288,0,[556,415,25,29]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":968,"y":415,"width":44,"height":50}}
};
og99337.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99337",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99347.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 86 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(43 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_11859\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11859&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(43 12.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 79px; top: 559px; width: 86px; height: 25px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[79,559,86,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":138,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11859\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11859&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11861\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11861&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11863\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11863&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11865\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11865&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image78015.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj78015Img\" src=\"images/Group%201732.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 60px; height: 60px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 363px; top: 100px; width: 60px; height: 60px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj78015",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Clock 09:16"
	},
	objData:	{"a":[0,256,0,[363,100,60,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
image99302.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99302Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 103px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 71px; top: 415px; width: 103px; height: 30px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj99302",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[71,415,103,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":123,"y":415,"width":179,"height":53}}
};
text99317.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Goedemorgen! </span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Meriam belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 342px; top: 219px; width: 102px; height: 36px; z-index: 17;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Meriam Belt"
	},
	objData:	{"a":[0,0,0,[342,219,102,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99377.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99377",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image82441.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj82441Img\" src=\"images/menu1.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 88px; top: 381px; width: 68px; height: 68px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj82441",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu1"
	},
	objData:	{"a":[0,288,0,[88,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":381,"width":118,"height":118}}
};
text78989.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Meriam</strong></span><span style=\" font-size:12pt; font-family:\'Titillium Web\'; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 90px; top: 512px; width: 64px; height: 20px; z-index: 19;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj78989",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 1"
	},
	objData:	{"a":[0,32,0,[90,512,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":157,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99338.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99338",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99352.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 86 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(43 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_11867\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11867&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(43 12.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 259px; top: 559px; width: 86px; height: 25px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[259,559,86,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":450,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11867\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11867&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11869\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11869&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11871\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11871&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11873\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11873&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99333.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99333Img\" src=\"images/Group%201803.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 60px; height: 60px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 363px; top: 100px; width: 60px; height: 60px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj99333",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Clock: 10:56"
	},
	objData:	{"a":[0,256,0,[363,100,60,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
image99304.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99304Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 103px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 250px; top: 415px; width: 103px; height: 30px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj99304",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[250,415,103,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":415,"width":179,"height":53}}
};
text99321.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span><b><span style=\"background-color: transparent; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:14pt;\">10:56&nbsp;uur</span></b></span></p>\n\n<p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, sans-serif; font-size:14pt; background-color: transparent;\">Edwin belt...</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 342px; top: 219px; width: 102px; height: 36px; z-index: 23;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99321",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Edwin Belt"
	},
	objData:	{"a":[0,0,0,[342,219,102,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99344.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99344",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99280.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99280Img\" src=\"images/menu2.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 267px; top: 381px; width: 68px; height: 68px; z-index: 24;",
	cssClasses:	"",
	htmlId:		"tobj99280",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu2"
	},
	objData:	{"a":[0,256,0,[267,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118}}
};
text99291.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Edwin</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 269px; top: 513px; width: 64px; height: 20px; z-index: 25;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99291",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 2"
	},
	objData:	{"a":[0,0,0,[269,513,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":468,"y":513,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99346.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99346",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99345.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 34 A 34 34 0 1 1 68 34 A 34 34 0 1 1 0 34 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-34, -34) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 267px; top: 381px; width: 68px; height: 68px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[267,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99340.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99340Img\" src=\"images/menu2.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 267px; top: 381px; width: 68px; height: 68px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj99340",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu2"
	},
	objData:	{"a":[0,288,0,[267,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":464,"y":381,"width":118,"height":118}}
};
text99339.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Edwin</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 269px; top: 513px; width: 64px; height: 20px; z-index: 28;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 2"
	},
	objData:	{"a":[0,32,0,[269,513,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":468,"y":513,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99363.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99363",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton99364.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 86 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(43 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_11875\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11875&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(43 12.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 437px; top: 559px; width: 86px; height: 25px; z-index: 29; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[437,559,86,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":761,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11875\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11875&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11877\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11877&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11879\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11879&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11881\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11881&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99308.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99308Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 103px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 429px; top: 415px; width: 103px; height: 30px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj99308",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[429,415,103,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":747,"y":415,"width":179,"height":53}}
};
image99358.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99358Img\" src=\"images/Menu%20clock%201318.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 60px; height: 60px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 363px; top: 100px; width: 60px; height: 60px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj99358",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu clock 1318"
	},
	objData:	{"a":[0,256,0,[363,100,60,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
text99325.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">13:18 uur</span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Marja belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 342px; top: 219px; width: 102px; height: 36px; z-index: 32;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99325",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Marja Belt"
	},
	objData:	{"a":[0,0,0,[342,219,102,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99357.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99357",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
text99292.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Marja</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 448px; top: 511px; width: 64px; height: 20px; z-index: 33;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99292",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 3"
	},
	objData:	{"a":[0,0,0,[448,511,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":511,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image99285.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99285Img\" src=\"images/menu3.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 445px; top: 381px; width: 68px; height: 68px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj99285",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu3"
	},
	objData:	{"a":[0,256,0,[445,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118}}
};
og99378.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99378",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99384.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 34 A 34 34 0 1 1 68 34 A 34 34 0 1 1 0 34 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-34, -34) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 445px; top: 381px; width: 68px; height: 68px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99384",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[445,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99379.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Marja</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 448px; top: 511px; width: 64px; height: 20px; z-index: 36;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99379",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 3"
	},
	objData:	{"a":[0,32,0,[448,511,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":511,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image99380.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99380Img\" src=\"images/menu3.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 445px; top: 381px; width: 68px; height: 68px; z-index: 37;",
	cssClasses:	"",
	htmlId:		"tobj99380",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu3"
	},
	objData:	{"a":[0,288,0,[445,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":381,"width":118,"height":118}}
};
og99376.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99376",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image99312.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99312Img\" src=\"images/Menu_bellen.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 103px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 607px; top: 415px; width: 103px; height: 30px; z-index: 38;",
	cssClasses:	"",
	htmlId:		"tobj99312",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu_bellen"
	},
	objData:	{"a":[0,256,0,[607,415,103,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1057,"y":415,"width":179,"height":53}}
};
image99371.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99371Img\" src=\"images/Menu%20clock%201631.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 60px; height: 60px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 363px; top: 100px; width: 60px; height: 60px; z-index: 39;",
	cssClasses:	"",
	htmlId:		"tobj99371",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu clock 1631"
	},
	objData:	{"a":[0,256,0,[363,100,60,60]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":100,"width":104,"height":104}}
};
textbutton99369.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 86 25\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(43 12.5)\" style=\"\">\n	<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_11883\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11883&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(43 12.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 615px; top: 559px; width: 86px; height: 25px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33024,0,[615,559,86,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1071,"y":559,"width":149,"height":43},"imgDataNormal":"images/desktop_shape99347.png","imgDataOver":"images/desktop_shape99347_over.png","imgDataDown":"images/desktop_shape99347.png","imgDataDisabled":"images/desktop_shape99347_disabled.png","svgDataNormal":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11883\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11883&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11885\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11885&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11887\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11887&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(43 12.5)\" style=\"\">\n\t<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11889\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"86\" height=\"25\" xlink:href=\"images/Group%201711b.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 86 0 L 86 25 L 0 25 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11889&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-43, -12.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(43 12.5)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text99329.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 36px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 36px;\"><p align=\"center\" leglh=\"1.107\" style=\"margin-left:0px;text-indent:0px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">16:31&nbsp;uur</span></strong></p>\n\n<p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:14pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 40, 87);\">Zeger belt...</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 342px; top: 219px; width: 102px; height: 36px; z-index: 41;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99329",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Zeger Belt"
	},
	objData:	{"a":[0,0,0,[342,219,102,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":595,"y":219,"width":177,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99388.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99388",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image78257.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj78257Img\" src=\"images/menu4.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 624px; top: 380px; width: 68px; height: 68px; z-index: 42;",
	cssClasses:	"",
	htmlId:		"tobj78257",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu4"
	},
	objData:	{"a":[0,256,0,[624,380,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":380,"width":118,"height":118}}
};
text79055.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \"><strong>Zeger</strong></span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 626px; top: 512px; width: 64px; height: 20px; z-index: 43;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj79055",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 4"
	},
	objData:	{"a":[0,0,0,[626,512,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1089,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99389.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99389",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape99395.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 68 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(34 34)\" style=\"\">\n	<path d=\"M 0 34 A 34 34 0 1 1 68 34 A 34 34 0 1 1 0 34 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-34, -34) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(34 34)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 624px; top: 381px; width: 68px; height: 68px; z-index: 44; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99395",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ellipse"
	},
	objData:	{"a":[0,32,0,[624,381,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":381,"width":118,"height":118},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99345.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99390.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99390Img\" src=\"images/menu4.png\" style=\"opacity:0.5;filter:alpha(opacity=50); position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 68px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 624px; top: 380px; width: 68px; height: 68px; z-index: 45;",
	cssClasses:	"",
	htmlId:		"tobj99390",
	bInsAnc:	0,
	cwObj:		{
		"name":	"menu4"
	},
	objData:	{"a":[0,288,0,[624,380,68,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1086,"y":380,"width":118,"height":118}}
};
text99391.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 64px; min-height: 20px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 64px; min-height: 20px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Titillium Web\'; color:#002857; \">Zeger</span><span style=\" font-size:12pt; font-family:\'Arial\', sans-serif; color:#010101;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 626px; top: 512px; width: 64px; height: 20px; z-index: 46;",
	cssClasses:	"menu-case-title",
	htmlId:		"tobj99391",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Case title 4"
	},
	objData:	{"a":[0,32,0,[626,512,64,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1089,"y":512,"width":111,"height":34},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og99198.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og99198",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
shape99194.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 785 397\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(392.5 198.5)\" style=\"\">\n	<path d=\"M 0 0 L 785 0 L 785 397 L 0 397 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-392.5, -198.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(392.5 198.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -5.68434e-14px; top: 78px; width: 785px; height: 397px; z-index: 47; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99194",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Overlay"
	},
	objData:	{"a":[0,0,0,[-5.684341886080802e-14,78.00000000000009,785,397]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99194.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
shape99193.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 423 290\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(211.5 145)\" style=\"\">\n	<path d=\"M 3.45 0 L 419.55 0 A 3.45 3.45 0 0 1 423 3.45 L 423 286.55 A 3.45 3.45 0 0 1 419.55 290 L 3.45 290 A 3.45 3.45 0 0 1 0 286.55 L 0 3.45 A 3.45 3.45 0 0 1 3.45 0 Z\" style=\"stroke: rgb(0, 120, 228); stroke-width: 0; stroke-dasharray: 2, 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(243, 121, 3); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-211.5, -145) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(211.5 145)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"14.933332960000001\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.7\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 181px; top: 172px; width: 423px; height: 290px; z-index: 48; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj99193",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Orange bg"
	},
	objData:	{"a":[0,0,0,[180.99999999999997,172.00000000000006,423,290]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":172,"width":736,"height":504},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape99193.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image99199.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99199Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 220px; top: 477px; width: 44px; height: 44px; z-index: 49;",
	cssClasses:	"",
	htmlId:		"tobj99199",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[220,477,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":383,"y":477,"width":76,"height":76}}
};
image99201.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99201Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 513px; top: 218px; width: 33px; height: 33px; z-index: 50;",
	cssClasses:	"",
	htmlId:		"tobj99201",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[513,218,33,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":892,"y":218,"width":58,"height":58}}
};
image99205.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99205Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 298px; top: 331px; width: 25px; height: 25px; z-index: 51;",
	cssClasses:	"",
	htmlId:		"tobj99205",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[298,331,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":519,"y":331,"width":44,"height":44}}
};
image99209.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99209Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 436px; top: 512px; width: 25px; height: 25px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj99209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[436,512,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":758,"y":512,"width":44,"height":44}}
};
image99213.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99213Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 228px; top: 232px; width: 33px; height: 33px; z-index: 53;",
	cssClasses:	"",
	htmlId:		"tobj99213",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[228,232,33,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":396,"y":232,"width":58,"height":58}}
};
image99217.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99217Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 516px; top: 573px; width: 35px; height: 35px; z-index: 54;",
	cssClasses:	"",
	htmlId:		"tobj99217",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[516,573,35,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":898,"y":573,"width":61,"height":61}}
};
image99221.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99221Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 304px; top: 585px; width: 25px; height: 25px; z-index: 55;",
	cssClasses:	"",
	htmlId:		"tobj99221",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[304,585,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":529,"y":585,"width":44,"height":44}}
};
image99233.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99233Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 385px; top: 417px; width: 25px; height: 25px; z-index: 56;",
	cssClasses:	"",
	htmlId:		"tobj99233",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[385,417,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":670,"y":417,"width":44,"height":44}}
};
image99237.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99237Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 242px; top: 386px; width: 22px; height: 22px; z-index: 57;",
	cssClasses:	"",
	htmlId:		"tobj99237",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[242,386,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":386,"width":38,"height":38}}
};
image99239.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99239Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 16px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 309px; top: 474px; width: 16px; height: 16px; z-index: 58;",
	cssClasses:	"",
	htmlId:		"tobj99239",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[309,474,16,16]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":474,"width":28,"height":28}}
};
image99243.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99243Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 476px; top: 463px; width: 22px; height: 22px; z-index: 59;",
	cssClasses:	"",
	htmlId:		"tobj99243",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[476,463,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":829,"y":463,"width":38,"height":38}}
};
image99247.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99247Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 482px; top: 295px; width: 22px; height: 22px; z-index: 60;",
	cssClasses:	"",
	htmlId:		"tobj99247",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[482,295,22,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":838,"y":295,"width":38,"height":38}}
};
image99251.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99251Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 14px; height: 14px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 303px; top: 245px; width: 14px; height: 14px; z-index: 61;",
	cssClasses:	"",
	htmlId:		"tobj99251",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[303,245,14,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":528,"y":245,"width":24,"height":24}}
};
image99255.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99255Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 214px; top: 606px; width: 13px; height: 13px; z-index: 62;",
	cssClasses:	"",
	htmlId:		"tobj99255",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[214,606,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":373,"y":606,"width":23,"height":23}}
};
image99275.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99275Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 10px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 293px; top: 517px; width: 10px; height: 10px; z-index: 63;",
	cssClasses:	"",
	htmlId:		"tobj99275",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[293,517,10,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":510,"y":517,"width":18,"height":18}}
};
image99271.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99271Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 209px; top: 312px; width: 13px; height: 13px; z-index: 64;",
	cssClasses:	"",
	htmlId:		"tobj99271",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[209,312,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":364,"y":312,"width":23,"height":23}}
};
image99259.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99259Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 552px; top: 529px; width: 13px; height: 13px; z-index: 65;",
	cssClasses:	"",
	htmlId:		"tobj99259",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[552,529,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":961,"y":529,"width":23,"height":23}}
};
image99267.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99267Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 556px; top: 316px; width: 13px; height: 13px; z-index: 66;",
	cssClasses:	"",
	htmlId:		"tobj99267",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[556,316,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":968,"y":316,"width":23,"height":23}}
};
image99263.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99263Img\" src=\"images/Path%20447.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 13px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 455px; top: 613px; width: 13px; height: 13px; z-index: 67;",
	cssClasses:	"",
	htmlId:		"tobj99263",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 447"
	},
	objData:	{"a":[0,256,0,[455,613,13,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":792,"y":613,"width":23,"height":23}}
};
image99229.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99229Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 545px; top: 402px; width: 25px; height: 25px; z-index: 68;",
	cssClasses:	"",
	htmlId:		"tobj99229",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[545,402,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":949,"y":402,"width":44,"height":44}}
};
image99225.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj99225Img\" src=\"images/Path%20488.png\" style=\"opacity:0.15;filter:alpha(opacity=15); position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 408px; top: 232px; width: 25px; height: 25px; z-index: 69;",
	cssClasses:	"",
	htmlId:		"tobj99225",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Path 488"
	},
	objData:	{"a":[0,256,0,[408,232,25,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":710,"y":232,"width":44,"height":44}}
};
textbutton100188.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 63 28\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(31.5 14)\" style=\"\">\n	<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_77699_11891\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"63\" height=\"28\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11891&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(31.5 14)\">\n		<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-29.5\" y=\"3.7\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 363px; top: 573px; width: 63px; height: 28px; z-index: 72; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33088,0,[363,573,63,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":632,"y":573,"width":109,"height":48},"imgDataNormal":"images/desktop_shape100188.png","imgDataOver":"images/desktop_shape100188_over.png","imgDataDown":"images/desktop_shape100188.png","imgDataDisabled":"images/desktop_shape100188_disabled.png","svgDataNormal":"<g transform=\"translate(31.5 14)\" style=\"\">\n\t<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11891\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"63\" height=\"28\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11891&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31.5 14)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.5\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(31.5 14)\" style=\"\">\n\t<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11893\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"63\" height=\"28\" xlink:href=\"images/Btn_start_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11893&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31.5 14)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.5\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(31.5 14)\" style=\"\">\n\t<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11895\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"63\" height=\"28\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11895&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31.5 14)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-29.5\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(31.5 14)\" style=\"\">\n\t<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_77699_11897\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"63\" height=\"28\" xlink:href=\"images/Btn_start.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 63 0 L 63 28 L 0 28 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_77699_11897&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-31.5, -14) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(31.5 14)\">\n\t\t<text font-family=\"Arial\" font-size=\"11.733333040000002\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-29.5\" y=\"3.7\" fill=\"#333333\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text82851.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 271px; min-height: 110px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 271px; min-height: 110px;\"><p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Als klantadviseur werk je de hele dag door met klantinformatie. In elk gesprek dat je voert, speelt informatie en privacy een rol. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">&nbsp;</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Om hiermee te oefenen, doorloop je in deze module een aantal situaties die je kunt tegenkomen tijdens een werkdag. </span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">&nbsp;</span></p>\n\n<p align=\"center\" leglh=\"1.691\" style=\"margin-left:0px;text-indent:0px;line-height:1.620;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:12pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Succes!</span><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 258px; top: 363px; width: 271px; height: 110px; z-index: 70;",
	cssClasses:	"popup-body-white",
	htmlId:		"tobj82851",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Description"
	},
	objData:	{"a":[0,0,0,[258,363,271,110]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":363,"width":472,"height":192},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text82852.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 168px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 168px; min-height: 58px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><strong><span style=\"font-size:28pt; font-family: &quot;Titillium Web&quot;; color: rgb(255, 255, 255);\">Tijd om aan het werk te gaan!</span></strong><span style=\"font-size:12pt; font-family: Arial, sans-serif; color: rgb(255, 255, 255);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 310px; top: 242px; width: 168px; height: 58px; z-index: 71;",
	cssClasses:	"popup-title-white",
	htmlId:		"tobj82852",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,0,0,[310,242,168,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":539,"y":242,"width":293,"height":101},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	23
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/zk_online_RGB.png","images/Group%201732.png","images/Group%201803.png","images/Group%201711b.png","images/Group%201711.png","images/Path%20488.png","images/Path%20447.png","images/menu1.png","images/menu2.png","images/menu3.png","images/menu4.png","images/Menu_koffie.png","images/Menu_boterham.png","images/Menu_fris.png","images/Menu_bellen.png","images/Menu%20clock%201318.png","images/Menu%20clock%201631.png","images/Button_sluit_groot.png","images/Btn_start.png","images/Btn_start_hover.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","",0,0,1];
