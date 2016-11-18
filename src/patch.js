window.onload=function(){
	console.warn("page onload");
	
	var goRootDom = document.createElement("a");
		// goRootDom.styleText = "goroot";
		goRootDom.style.cssText = "position:fixed; right:0; top:0; border:1px solid #09f; color:#09f; font-size:12px; padding:10px; margin:10px; text-decoration:none; background:#fff;";
		goRootDom.innerHTML = "返回主页";
		goRootDom.href = "/";
	
	// console.log( goRootDom );
	
	document.body.appendChild(goRootDom);
	
}