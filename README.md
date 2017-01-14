
# schemes-universalLink-share_IOS-android-WeChat-chunleiDemo
schemes-universalLink-share_IOS/android/WeChat-chunleiDemo

---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The mobile terminal share page start APP people vomiting pit, personal summary, I hope you take some small pits. The program provides the current popular H5 page on the market to start the APP way.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The code for the startup APP is located in the ShareAPP.js file. If not too clear, welcome to communicate with me, my mailbox chunlei201536@outlook.com.

```
//	ios9以下以及安卓的启动方式为  schemes
	var $ios9_lev =  IOS_schemes; //app程序协议，可对应调取打开相应app  
	var $android_url = Android_schemes;
//	启动微信商城
	var $wx_url = wxsc_url;
//	ios9以上通过universal_link启动app，主要配置组要ios程序猿完成
/*
注意：
    和Web端的同学一开始怎么也搞不定点击按钮跳转，找了好久终于发现为了提高手机端Web页面的点击响应速度，我们的Web端默认是使用touch事件来代替click的，但是在Universal Links的跳转中必须使用click。 
    另外，页面初始页和要跳转的页的域名必须是不同的，否则这个跳转事件也不会调起对应的App！（曾经本人陷入此坑不能自拔，哎！说多了都是泪）另外，在进行Universal Links的调试时，建议先删除App，然后重新编译，运行。
*/
	var $universal_link = universal_link;
if(/android/i.test(navigator.userAgent)) {
		//android端  
		if(navigator.userAgent.match(/MicroMessenger/i) != 'MicroMessenger') {
			// 安卓非微信端
		} else {
			//  安卓微信端
		}
	} else if(/ipad|iphone/i.test(navigator.userAgent)) {
        //	ios端
		if(navigator.userAgent.match(/MicroMessenger/i) != 'MicroMessenger') {
        //	ios非微信端
			//判断ios版本
			var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			ver = parseInt(ver[1], 10);
			if(ver < 9) {
				//	ios版本小于9时  
			} else {
				// ios版本大于9时
			}
		} else {
			// ios微信端 	
		}
	} else {
		//pc端访问
	}
```


原文来至:https://github.com/chunlei36/schemes-universalLink-share_IOS-android-WeChat-chunleiDemo.git
