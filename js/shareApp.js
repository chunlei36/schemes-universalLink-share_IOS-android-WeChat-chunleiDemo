// allHide()
$(document).ready(function() {
	$('#tz_download').on('touchstart', function() {
		$('#zz_background').slideDown(300)
	})
	$('#zz_background').on('touchstart', function() {
		$('#zz_background').slideUp(300)
	})

	$('#tz_download1_2').on('touchstart', function() {
		$('#zz_background2').slideDown(300)
	})
	$('#zz_background2').on('touchstart', function() {
		$('#zz_background2').slideUp(300)
	})

	$('#errPage').on('touchstart', function() {
		console.log('刷新')
		window.location.href = window.location.href + Math.random()
	})
	var pathName = window.location.search;
	var pathSearchArr = pathName.split('&');
	var kindArr = pathSearchArr[0].split('?');
	var kind = kindArr[kindArr.length - 1];
	pathSearchArr[0] = kind;
	var newUrlArr = [];
	var kind;
	var param;
	for(var i = 0; i < pathSearchArr.length; i++) {
		newUrlArr.push(pathSearchArr[i].split('='));
	};
	for(var i = 0; i < newUrlArr.length; i++) {
		if(newUrlArr[i][0] === 'kind') {
			kind = newUrlArr[i][1]
		}
		if(newUrlArr[i][0] === 'param') {
			param = newUrlArr[i][1]
		}
	};
	console.log('>>>>')
	console.log(pathSearchArr)
	console.log('>>>>')
	console.log('>>>>kind')
	console.log(kind)
	console.log('>>>>param')
	console.log(param)
	var kind2 = kind;

	if(kind === 'sd') {
		kind2 = 'gd'
	}
//	ios9以下以及安卓的启动方式为  schemes
	var $ios9_lev = "guoanshequ://" + kind2 + "$." + param; //app程序协议，可对应调取打开相应app  
	var $android_url = "launcher://com.xxx.app/" + kind2 + "$." + param;
//	启动微信商城
	var $wx_url = "http://wx" + param + "/shared"
//	ios9以上通过universal_link启动app，主要配置组要ios程序猿完成
	var $universal_link = "https://download.html?" + kind2 + "$." + param;
	$('.download_gasq').attr('href', $universal_link)
	if(/android/i.test(navigator.userAgent)) {
		//android端  
		if(navigator.userAgent.match(/MicroMessenger/i) != 'MicroMessenger') {
			// 安卓非微信端
			allHide()
			$('#bowerAPP').show()
			$('#bowerAPP2').show()
			window.location.href = $android_url;
			$('#tz_download2').on('touchstart', function() {
				window.location.href = $android_url;
				t = Date.now();
				setTimeout(function() {
					if(Date.now() - t < 1200) {
						//没有安装app跳转到下载页面
						location.href = 'https://download.com/share.html';
					}
				}, 1000);
				return false;
			})
			$('#tz_download2_2').on('touchstart', function() {
				window.location.href = $android_url;
				t = Date.now();
				setTimeout(function() {
					if(Date.now() - t < 1200) {
						//没有安装app跳转到下载页面
						location.href = 'https://download.com/share.html';
					}
				}, 1000);
				return false;
			})

		} else {
			//  安卓微信端

			if(kind === 'gd') {
				allHide()
				$('#wxShop').show()
				$('#wxShop2').show()

				$('#wxShop_href').attr('href', $wx_url)
				$('#wxShop_href2').attr('href', $wx_url)

			} else {
				allHide()
				$('#hasAPP').show()
				$('#hasAPP2').show()
			}

		}
	} else if(/ipad|iphone/i.test(navigator.userAgent)) {
//		ios端
		if(navigator.userAgent.match(/MicroMessenger/i) != 'MicroMessenger') {
//			ios非微信端
			//判断ios版本
			var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			ver = parseInt(ver[1], 10);
			console.log('ios版本' + ver)
			if(ver < 9) {
				//	        ios版本小于9时  
				allHide()
				$('#bowerAPP').show()
				$('#bowerAPP2').show()

				$('#tz_download2').attr('href', $ios9_lev)
				$('#tz_download2_2').attr('href', $ios9_lev)

				$('#tz_download2').on('touchstart', function() {
					t = Date.now();
					setTimeout(function() {
						if(Date.now() - t < 3200) {
							//没有安装app跳转到下载页面
							location.href = 'https://download.com/share.html';
						}
					}, 3000);
					// return false;

				})
				$('#tz_download2_2').on('touchstart', function() {
					t = Date.now();
					setTimeout(function() {
						if(Date.now() - t < 3200) {
							//没有安装app跳转到下载页面
							location.href = 'https://download.com/share.html';
						}
					}, 3000);
					// return false;
				})
			} else {
				// alert('ios浏览器端，ios版本大于9时')

				allHide()
				$('#ios9All').show()
				$('#ios9All_2').show()

				$('#ios9All_qkk').attr('href', $universal_link)
				$('#ios9All_qkk_2').attr('href', $universal_link)

			}

		} else {
			// ios微信端 	
			if(kind === 'gd') {

				allHide()
				$('#wxShop').show()
				$('#wxShop2').show()
				$('#wxShop_href').attr('href', $wx_url)
				$('#wxShop_href2').attr('href', $wx_url)

			} else {
				allHide()
				$('#hasAPP').show()
				$('#hasAPP2').show()

				//判断ios版本
				var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				ver = parseInt(ver[1], 10);
				console.log('ios版本' + ver)
				if(ver < 9) {
					//用浏览器端打开
					allHide()
					$('#hasAPP').show()
					$('#hasAPP2').show()

				} else {

					//	        ios版本9以上时  

					allHide()
					$('#ios9All').show()
					$('#ios9All_2').show()

					$('#ios9All_qkk').attr('href', $universal_link)
					$('#ios9All_qkk_2').attr('href', $universal_link)
				}
			}

		}
	} else {
		//pc端访问
		//	alert('pc端')
		allHide()
		$('#bowerAPP').show()
		$('#bowerAPP2').show()
		$('#tz_download2').on('click', function() {
			alert('请先下载！')
		})
		$('#tz_download2_2').on('click', function() {
			alert('请先下载！')
		})
	}

	function allHide() {
		$('#hasAPP').hide()
		$('#hasAPP2').hide()
		$('#bowerAPP').hide()
		$('#bowerAPP2').hide()
		$('#noApp').hide()
		$('#wxShop').hide()
		$('#wxShop2').hide()
		$('#ios9All').hide()
		$('#ios9All_2').hide()
	}

});
