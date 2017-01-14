$(document).ready(function() {
	//从当前域名获取id  kind
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
	var kind2 = kind;
	if(kind === 'sd') {
		kind2 = 'gd'
	}
//获取后台数据的接口
	var shareActivityUrl = "https://edian.guoanshequ.wang/index.php?com=com_appService&method=appSev&app_com=appshare&task=share&id=" + param + "&kind=" + kind2
	$.ajax({
		type: "get",
		url: shareActivityUrl,
		async: true,
		success: function(data) {

			console.log(data)
			var shareActivity = JSON.parse(data)
			if(shareActivity.code === "1") {
				console.log('<<<找不到数据啊activity')
				$('body').css('visibility', 'show')
				$('#noShopPage p').html(shareActivity.message)

				$('#noShopPage').show()
				return

			}

			$('#errPage').hide()
			$('#noShopPage').hide()

			$('.shareA_pg img').attr('src', shareActivity.data.detail_image)
			$('.shareA_pg h3').text(shareActivity.data.title)
			$('.shareA_pg span').html('活动时间：' + shareActivity.data.date_start + '至' + shareActivity.data.date_end)
			$('.shareA_pg p').text(shareActivity.data.content)
			$('body').css('visibility', 'show')

		},
		error: function() {
			$('body').css('visibility', 'show')
			$('#errPage').show()

		}
	});
})