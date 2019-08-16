(function (win, designW = 750) { // 设计稿默认为 750px,根据实际设计稿大小对应设置
	var doc = win.document;
	var docEle = doc.documentElement;
	var ratio = designW / 100;
	var or = "orientationchange" in win ? "orientationchange" : "resize";
	//创建viewport	
	_createViewport();
	// 设置rem
	_refreshRem();
	/**
	 * 创建viewport
	 */
	function _createViewport() {
		var metaEl = doc.createElement('meta');
		metaEl.setAttribute('name', 'viewport');
		metaEl.setAttribute('content', 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
		if (docEle.firstElementChild) {
			docEle.firstElementChild.appendChild(metaEl);
		}
	}
	/**
	 * 动态更新rem
	 */
	function _refreshRem() {
		var clientW = docEle.clientWidth || 320;
		//设置最大和最小宽度取值
		if (clientW > designW) {
			// clientW = designW
		} else if (clientW < 320) {
			clientW = 320;
		}
		docEle.style.fontSize = clientW / ratio + "px";
		console.log('clientW:',clientW,'fontSize:' + docEle.style.fontSize);
	};
})(window);